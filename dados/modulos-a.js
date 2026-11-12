/* Mãe Presente — conteúdo dos módulos 1 a 5.
   Tipos de tela: abre, txt, fluxo, linha, compara, num, tabela, check, cartoes, escolha, quiz, ordena, monta, timer, faca, erro, resumo */
MP.MODULOS.push(
/* ===================== 1. ROTINA ENCAIXADA ===================== */
{ id: "rotina-encaixada", n: "Rotina Encaixada", tag: "Módulo 1", img: "mod-01-rotina-encaixada.webp", d: "O mapa do dia que encaixa a casa nos horários das crianças.", licoes: [
  { t: "Por que a rotina comum quebra com filho", min: 6, telas: [
    { k: "abre", p: "Você não falhou na rotina. A rotina é que foi feita pra uma casa sem criança." },
    { k: "txt", h: "A rotina de revista", p: ["A maioria das rotinas de casa parte de uma ideia: você vai ter **uma hora inteira livre** pra limpar. Com criança em casa, essa hora quase nunca existe.", "O que existe são **pedaços de tempo**: 10 minutos enquanto eles tomam café, 15 enquanto veem um desenho, 10 depois do banho. A Rotina Encaixada trabalha com esses pedaços."] },
    { k: "compara", h: "A diferença na prática", a: ["Rotina comum", ["Pede 1 hora seguida", "Para na primeira interrupção", "Depende só de você", "Um dia perdido bagunça a semana"]], b: ["Rotina Encaixada", ["Usa blocos de 10 a 15 minutos", "Cada tarefa pode ser pausada", "As crianças participam", "Tem plano B pro dia difícil"]] },
    { k: "num", h: "O método em três números", itens: [["10 a 15 min", "é o tamanho de cada tarefa"], ["4", "blocos no dia: manhã, almoço, tarde e noite"], ["1", "tarefa por bloco já mantém a casa andando"]] },
    { k: "escolha", h: "Qual dessas é mais a sua cara?", p: "Toque numa opção pra ver o que muda pra você.", ops: [
      ["Começo mil coisas e não termino nenhuma", "O problema não é preguiça: é tarefa grande demais pro tamanho do seu intervalo. Você vai aprender a cortar tudo em pedaços de 10 minutos."],
      ["Deixo tudo pro fim de semana", "A faxina de sábado rouba justamente o tempo com eles. Vamos espalhar esse trabalho em blocos pequenos durante a semana."],
      ["Faço tudo à noite, morta de cansada", "A noite vai ficar só com a “zerada” de 10 minutos. O resto entra em horários em que você ainda tem energia."]] },
    { k: "quiz", q: "O que mais faz uma rotina comum quebrar numa casa com criança?", ops: ["Falta de força de vontade", "Tarefas longas que não aguentam interrupção", "Casa pequena demais"], c: 1, exp: "Tarefa longa precisa de tempo seguido, e é isso que falta. Tarefa curta cabe nos intervalos que você já tem." },
    { k: "faca", itens: ["Repare hoje em **3 momentos** em que as crianças ficam ocupadas por uns 10 minutos.", "Anote esses momentos, pode ser no bloco de notas do celular.", "Não mude nada ainda. Hoje é só observar."] },
    { k: "erro", e: "Querer mudar a casa inteira no primeiro dia.", c: "Comece observando. A rotina que dura é a que nasce do seu dia de verdade, não de um dia ideal." },
    { k: "resumo", itens: ["Com criança, o tempo vem em pedaços de 10 a 15 minutos.", "Tarefa curta e pausável cabe nesses pedaços.", "Uma tarefa por bloco do dia já mantém a casa andando."] }
  ] },
  { t: "Os horários naturais das crianças", min: 7, telas: [
    { k: "abre", p: "Seu filho já tem uma rotina, mesmo que ninguém tenha escrito. É nela que a casa vai se encaixar." },
    { k: "txt", h: "As âncoras do dia", p: ["Toda criança tem momentos que se repetem quase todo dia: acordar, café, escola, soneca, lanche, banho, jantar, cama. A gente chama esses momentos de **âncoras**.", "Em volta de cada âncora existe um intervalo em que a criança está **ocupada, alimentada ou calma**. Esses são os seus encaixes."] },
    { k: "linha", h: "Um dia comum com uma criança de 3 anos", leg: 1, itens: [["7h00", "Acorda e toma café", "c"], ["7h15", "**Você:** cozinha pronta enquanto ela come", "m"], ["9h30", "Brinca sozinha depois do lanche", "c"], ["12h30", "Almoço", "c"], ["13h00", "**Você:** louça e bancada, ela leva o prato", "m"], ["13h30", "Soneca", "c"], ["13h40", "**Você:** uma tarefa de 15 min e descanso", "m"], ["18h30", "Banho", "c"], ["19h00", "**Você:** sala zerada antes do jantar", "m"]] },
    { k: "tabela", h: "Cada âncora, um tipo de tarefa", itens: [["Café da manhã", "Cozinha: pia, bancada, lixo"], ["Soneca ou escola", "O que pede concentração ou produto de limpeza"], ["Desenho ou brincadeira", "Dobrar roupa, tirar pó, varrer perto dela"], ["Depois do banho", "Sala e brinquedos, com ela ajudando"]] },
    { k: "check", h: "Quais âncoras existem na sua casa?", p: "Marque as que acontecem quase todo dia.", itens: ["Café da manhã sentado", "Soneca", "Escola ou creche", "Um desenho ou programa favorito", "Lanche da tarde", "Banho no mesmo horário", "Jantar", "Hora de dormir parecida todo dia"] },
    { k: "quiz", q: "A soneca chegou. Qual tarefa combina mais com ela?", ops: ["Guardar os brinquedos", "Limpar o banheiro com produto", "Dobrar a roupa na sala"], c: 1, exp: "Produto de limpeza pede criança longe. Brinquedos e roupa podem esperar um momento em que ela esteja por perto, ajudando." },
    { k: "faca", itens: ["Escolha **2 âncoras** que você marcou.", "Pra cada uma, pense em uma tarefa de 10 minutos que cabe ali.", "Teste hoje com uma delas."] },
    { k: "erro", e: "Usar toda soneca pra trabalhar na casa.", c: "Uma tarefa e pronto. O resto da soneca também é seu descanso. Mãe descansada rende mais no bloco seguinte." },
    { k: "resumo", itens: ["Âncoras são os momentos que se repetem no dia da criança.", "Em volta de cada âncora existe um encaixe pra uma tarefa curta.", "Criança longe: produtos e concentração. Criança perto: tarefas que ela pode ver e ajudar."] }
  ] },
  { t: "Os 4 blocos do dia", min: 7, telas: [
    { k: "abre", p: "Manhã, almoço, tarde e noite. Cada bloco tem um jeito, e cada um pede um tipo de tarefa." },
    { k: "txt", h: "Por que 4 blocos", p: ["Em vez de uma lista enorme, o seu dia tem só **4 espaços**. Se cada um receber uma tarefa curta, a casa se mantém sem faxinão.", "E se um bloco falhar, você não perdeu o dia: ainda tem os outros três."] },
    { k: "cartoes", h: "O que combina com cada bloco", itens: [["☀️ Manhã", "**Cozinha.** Pia vazia e bancada limpa enquanto eles tomam café. Começar o dia com a cozinha em ordem muda tudo."], ["🍽️ Almoço", "**Louça na hora.** Lavar logo depois de comer leva metade do tempo de lavar louça seca. Eles levam os pratos."], ["🌤️ Tarde", "**O cômodo do dia.** Um cômodo diferente por dia: banheiro, quartos, chão, roupa."], ["🌙 Noite", "**A zerada.** Dez minutos pra devolver a sala ao lugar, com todo mundo ajudando. Nada de faxina à noite."]] },
    { k: "tabela", h: "A regra de ouro", p: "Se o dia estiver apertado, a ordem de importância é esta:", itens: [["1º", "Pia vazia"], ["2º", "Zerada da noite"], ["3º", "O cômodo do dia"], ["4º", "O resto"]] },
    { k: "monta", h: "Monte o seu dia", p: "Toque no horário em que cada tarefa cabe melhor na sua casa. Depois, mande pro Meu Dia.", itens: [["Pia vazia e bancada limpa", 10], ["Louça logo depois de comer", 15], ["Uma máquina de roupa", 10], ["Brinquedos no cesto com música", 10], ["Sala zerada", 10]] },
    { k: "quiz", q: "Qual destas tarefas NÃO combina com o bloco da noite?", ops: ["Zerar a sala em 10 minutos", "Lavar o banheiro inteiro", "Separar a roupa de amanhã"], c: 1, exp: "À noite a energia está no fim. Fica só o que é curto e deixa a manhã mais leve." },
    { k: "faca", itens: ["Abra o **Meu Dia** e veja se cada bloco tem uma tarefa.", "Tire o que não cabe. Mude de bloco o que está no horário errado.", "Faça hoje a tarefa do bloco em que você está agora."] },
    { k: "erro", e: "Encher um bloco com 4 ou 5 tarefas “pra adiantar”.", c: "Bloco cheio vira lista que não termina, e lista que não termina desanima. Uma tarefa feita vale mais que cinco planejadas." },
    { k: "resumo", itens: ["O dia tem 4 blocos, e cada um recebe uma tarefa curta.", "Manhã é cozinha, almoço é louça, tarde é o cômodo do dia, noite é a zerada.", "Se um bloco falhar, ainda restam os outros."] }
  ] },
  { t: "Montando a sua semana", min: 8, telas: [
    { k: "abre", p: "A casa inteira limpa no mesmo dia não existe. A casa inteira cuidada ao longo da semana, sim." },
    { k: "txt", h: "Dois tipos de tarefa", p: ["**As de todo dia:** pia, louça e zerada da noite. São elas que seguram a casa.", "**As da semana:** banheiro, quartos, chão, roupa, geladeira. Cada uma tem o seu dia, no bloco da tarde. Assim nenhuma acumula e nenhum dia pesa."] },
    { k: "tabela", h: "Um exemplo de semana", p: "O cômodo do dia, sempre com 15 minutos:", itens: [["Segunda", "Banheiro: pia, vaso e espelho"], ["Terça", "Roupa: uma máquina e dobrar junto"], ["Quarta", "Quartos: cama e chão livre"], ["Quinta", "Chão da sala e da cozinha"], ["Sexta", "Geladeira e lista de compras"], ["Sábado", "Brinquedos: rodízio e cestos"], ["Domingo", "Preparar a semana: roupas e mochilas"]] },
    { k: "escolha", h: "E na sua casa?", ops: [["Trabalho fora o dia todo", "Seus blocos são as pontas do dia: antes de sair, quando chega, jantar e hora de dormir. O cômodo do dia vai pro sábado e domingo, em duas tarefas de 20 minutos. No Meu Dia existe um modelo pronto pra isso."], ["Tenho bebê pequeno", "Corte o cômodo do dia pra 10 minutos e aceite que alguns dias ele não vai acontecer. Com bebê, a meta é pia, uma máquina e a zerada."], ["Minha casa é grande", "Divida os cômodos: banheiro social na segunda, suíte na quinta. Nunca junte dois cômodos no mesmo bloco."], ["Somos muitos em casa", "Cada pessoa cuida de uma parte do cômodo do dia. Até o pequeno de 3 anos leva a roupa pro cesto."]] },
    { k: "num", h: "Quanto tempo dá isso por dia?", itens: [["10 + 15 + 15 + 10", "minutos, um bloco de cada vez"], ["50 min", "espalhados pelo dia inteiro"], ["0", "faxinão no fim de semana"]] },
    { k: "check", h: "Confira a sua semana", p: "Marque o que já está certo no seu Meu Dia.", itens: ["Tenho uma tarefa de cozinha de manhã", "A louça do almoço tem hora", "Cada dia da semana tem um cômodo", "A zerada da noite está todos os dias", "Nenhum bloco tem mais de duas tarefas"] },
    { k: "faca", itens: ["Abra o **Meu Dia** e toque em “Usar um modelo pronto”, se ainda não usou.", "Troque os cômodos de dia até a semana fazer sentido pra você.", "Mostre a semana pra quem mora com você."] },
    { k: "erro", e: "Copiar a semana de outra pessoa sem ajustar.", c: "O dia em que você chega mais cansada não pode ser o dia do banheiro. Encaixe as tarefas pesadas nos seus dias leves." },
    { k: "resumo", itens: ["Pia, louça e zerada são de todo dia.", "Cada dia da semana cuida de um cômodo, em 15 minutos.", "A semana boa é a que cabe na sua vida, não a mais completa."] }
  ] },
  { t: "Quando o dia desanda: o Plano B", min: 6, telas: [
    { k: "abre", p: "Criança doente, noite mal dormida, dia de chuva. O dia que desanda faz parte da rotina, e tem plano pra ele." },
    { k: "txt", h: "O dia difícil não é fracasso", p: ["Em casa com criança, dia difícil não é exceção. Ele vem toda semana. O que quebra a rotina não é o dia ruim: é **desistir de tudo** por causa dele.", "O Plano B é uma versão mínima do dia. Três coisas pequenas, e o resto espera."] },
    { k: "fluxo", h: "O Plano B em 3 passos", itens: [["Pia vazia", "Ou, no mínimo, a louça empilhada de molho. Dez minutos."], ["Lixo pra fora e mesa livre", "Cinco minutos. A casa já parece outra."], ["Um abraço demorado em cada filho", "Dois minutos. No dia difícil, eles também precisam."]] },
    { k: "compara", h: "Dois jeitos de viver o dia ruim", a: ["Sem plano", ["“Hoje não deu, larguei tudo”", "Amanhã a casa está pior", "Vem a culpa", "A rotina inteira parece perdida"]], b: ["Com o Plano B", ["“Hoje é dia de essencial”", "Amanhã você recomeça de onde parou", "Você decidiu, não falhou", "A rotina continua de pé"]] },
    { k: "timer", h: "Desafio dos 2 minutos", p: "Aperte começar e recolha tudo que estiver fora do lugar no cômodo em que você está. Só 2 minutos. Repare quanto muda.", seg: 120 },
    { k: "quiz", q: "Ontem foi dia de Plano B. O que fazer hoje?", ops: ["Fazer tudo em dobro pra compensar", "Seguir o dia normal de hoje", "Deixar pra recomeçar na segunda"], c: 1, exp: "Nada de compensar. O que ficou de ontem volta na próxima semana, no dia dele. Compensar é o caminho mais curto pra desanimar." },
    { k: "faca", itens: ["Na tela **Hoje**, encontre o botão “Meu dia desandou”.", "Decore os 3 passos do Plano B.", "Conte pra alguém de casa que esse plano existe."] },
    { k: "erro", e: "Usar o Plano B todos os dias.", c: "Ele é pro dia difícil. Se todo dia está difícil, a rotina está grande demais: volte ao Meu Dia e tire tarefas." },
    { k: "resumo", itens: ["O dia difícil faz parte. Tenha um plano pra ele.", "Plano B: pia, lixo e mesa, e um abraço em cada filho.", "No dia seguinte, siga normal. Sem compensar."] }
  ] }
] },

/* ===================== 2. FAXINA COM CRIANÇA POR PERTO ===================== */
{ id: "faxina-crianca", n: "Faxina com Criança por Perto", tag: "Módulo 2", img: "mod-02-faxina-crianca-perto.webp", d: "Tarefas curtas que aguentam interrupção.", licoes: [
  { t: "Tarefas que aguentam interrupção", min: 6, telas: [
    { k: "abre", p: "“Mãe!” Você vai ser chamada no meio da tarefa. A solução é escolher tarefas que sobrevivem a isso." },
    { k: "txt", h: "Pausável ou de uma vez só", p: ["Algumas tarefas podem parar no meio sem prejuízo: dobrar roupa, guardar louça, tirar pó. São as **pausáveis**.", "Outras, se você para no meio, dão mais trabalho: chão molhado, produto agindo, comida no fogo. São as **de uma vez só**.", "Com criança acordada e por perto, fique nas pausáveis. As outras esperam a soneca, a escola ou outro adulto em casa."] },
    { k: "cartoes", h: "Pausável ou de uma vez só?", itens: [["Dobrar roupa", "**Pausável.** Cada peça dobrada já é trabalho feito."], ["Passar pano no chão", "**De uma vez só.** Chão molhado e criança correndo não combinam."], ["Guardar a louça seca", "**Pausável.** Pode parar em qualquer prato."], ["Limpar o box com produto", "**De uma vez só.** Produto agindo pede atenção e criança longe."], ["Tirar o pó", "**Pausável.** Um móvel de cada vez."], ["Fritura no fogão", "**De uma vez só.** Óleo quente nunca fica sozinho."]] },
    { k: "compara", h: "Onde cada uma entra", a: ["Com eles longe", ["Banheiro com produto", "Chão molhado", "Fogão com óleo ou panela de pressão", "Ferro de passar"]], b: ["Com eles perto", ["Dobrar e guardar roupa", "Louça e bancada", "Tirar pó e organizar", "Varrer e recolher"]] },
    { k: "quiz", q: "Seu filho está acordado e brincando na sala. Qual tarefa encaixar agora?", ops: ["Lavar o banheiro", "Dobrar a roupa na sala", "Passar roupa"], c: 1, exp: "Dobrar roupa é pausável, não usa produto e ainda deixa você perto dele." },
    { k: "faca", itens: ["Olhe as tarefas do seu **Meu Dia**.", "Marque mentalmente: quais são pausáveis e quais são de uma vez só?", "Confira se as de uma vez só estão em horários com criança longe."] },
    { k: "erro", e: "Insistir em terminar “só mais um pouquinho” com a criança chamando.", c: "Em tarefa pausável, pare na hora. Atender em 1 minuto é mais rápido do que lidar com 10 minutos de choro." },
    { k: "resumo", itens: ["Tarefa pausável pode parar no meio sem prejuízo.", "Com criança por perto, só pausáveis.", "Produto, chão molhado, fogo e ferro esperam a criança estar longe."] }
  ] },
  { t: "O bloco de 10 minutos", min: 7, telas: [
    { k: "abre", p: "Dez minutos parecem pouco. Feitos do jeito certo, rendem mais que meia hora interrompida." },
    { k: "fluxo", h: "Como fazer um bloco render", itens: [["Escolha UMA tarefa", "Antes de começar, diga em voz alta: “agora é a pia”."], ["Separe o que precisa", "Pano, esponja, cesto. Ir buscar no meio quebra o ritmo."], ["Ligue o cronômetro", "Dez minutos. O relógio te protege de emendar em outra coisa."], ["Faça só aquilo", "Viu outra bagunça? Ela tem o bloco dela."], ["Tocou, parou", "Mesmo que falte um pouco. Parar é o que faz você querer voltar amanhã."]] },
    { k: "num", h: "O que cabe em 10 minutos", itens: [["1 pia", "de louça lavada"], ["1 máquina", "de roupa estendida ou dobrada"], ["1 cômodo", "com o chão recolhido e varrido"]] },
    { k: "ordena", h: "Coloque o bloco na ordem certa", itens: ["Escolher uma tarefa só", "Separar o material", "Ligar o cronômetro", "Fazer só aquela tarefa", "Parar quando tocar"], exp: "O cronômetro vem depois de separar o material, pra nenhum minuto ser gasto procurando pano." },
    { k: "timer", h: "Teste agora: 2 minutos de bancada", p: "Escolha uma superfície perto de você (mesa, bancada, rack). Dois minutos pra deixar ela livre. Valendo!", seg: 120 },
    { k: "txt", h: "E a criança, enquanto isso?", p: ["Dê a ela uma **missão do mesmo tamanho**: “enquanto a mamãe lava a louça, você guarda os carrinhos no cesto”.", "Criança com missão interrompe menos. E quando interrompe, é pra mostrar que terminou."], dica: "Use a mesma música toda vez. Com o tempo, a música vira o sinal: tocou, é hora da missão." },
    { k: "faca", itens: ["Escolha uma tarefa do bloco em que você está agora.", "Use a ferramenta **Casa pronta em 15 minutos** ou o cronômetro do celular.", "Quando tocar, pare e repare no resultado."] },
    { k: "erro", e: "Usar os 10 minutos pra “dar uma geral” em tudo.", c: "Geral não tem fim e não dá sensação de pronto. Uma tarefa só, do começo ao fim, dá." },
    { k: "resumo", itens: ["Um bloco tem uma tarefa só.", "Material separado e cronômetro ligado.", "Tocou, parou. A criança ganha uma missão do mesmo tamanho."] }
  ] },
  { t: "Com eles do lado ou com eles longe?", min: 7, telas: [
    { k: "abre", p: "Algumas tarefas ficam até melhores com criança junto. Outras só com ela bem longe. Saber separar evita susto." },
    { k: "tabela", h: "Enquanto você faz, a criança faz", p: "Ideias pra cada tarefa virar um momento junto:", itens: [["Você dobra a roupa", "Ela separa as meias por par"], ["Você lava a louça", "Ela seca os potes de plástico"], ["Você varre", "Ela segura a pá ou varre com a vassourinha"], ["Você arruma a cama", "Ela coloca os travesseiros"], ["Você guarda as compras", "Ela guarda o que é leve e fica embaixo"], ["Você tira o pó", "Ela passa um paninho seco nos móveis baixos"]] },
    { k: "compara", h: "A linha da segurança", a: ["Sempre longe das crianças", ["Água sanitária, desinfetante, removedor", "Balde com água (mesmo raso)", "Ferro e fogão ligados", "Facas, vidro e escadas"]], b: ["Pode ser junto", ["Pano úmido só com água", "Vassoura e pá", "Roupas, toalhas e almofadas", "Potes de plástico e talheres sem ponta"]] },
    { k: "txt", h: "Três cuidados que não têm exceção", p: ["**Nunca misture produtos de limpeza.** Água sanitária com vinagre, álcool ou amoníaco solta gás que faz mal.", "**Balde com água nunca fica sozinho** perto de criança pequena, nem por um minuto.", "**Produtos ficam no alto e na embalagem original**, nunca em garrafa de refrigerante ou pote de comida."] },
    { k: "check", h: "Confira a sua casa", itens: ["Os produtos de limpeza estão fora do alcance", "Nenhum produto está em garrafa de bebida", "O balde é esvaziado assim que termino", "O ferro esfria num lugar alto", "Os cabos de panela ficam virados pra dentro do fogão"] },
    { k: "quiz", q: "Você vai limpar o box com desinfetante. Onde fica a criança?", ops: ["No banheiro, olhando", "Em outro cômodo, com outro adulto, ou dormindo", "Ajudando com um paninho"], c: 1, exp: "Produto forte e chão molhado pedem distância. Essa tarefa fica pra soneca, pra escola ou pra quando houver outro adulto." },
    { k: "faca", itens: ["Escolha uma tarefa de hoje e convide a criança com uma missão da tabela.", "Confira onde estão guardados os produtos de limpeza.", "Se algum estiver ao alcance, suba agora."] },
    { k: "erro", e: "Deixar a criança “brincar” com o borrifador de produto.", c: "Dê a ela um borrifador só com água, de outra cor. Ela participa e você fica tranquila." },
    { k: "resumo", itens: ["Muitas tarefas viram momento junto, com uma missão do tamanho da criança.", "Produto, balde, fogo, ferro e faca: sempre longe.", "Nunca misture produtos de limpeza."] }
  ] },
  { t: "Pausar sem perder o fio", min: 6, telas: [
    { k: "abre", p: "Ser interrompida é certo. Perder a tarefa inteira por causa disso, não precisa." },
    { k: "txt", h: "O ponto de parada", p: ["Quando te chamarem, gaste 5 segundos pra chegar num **ponto de parada**: termine o prato que está na mão, feche a torneira, encoste a vassoura.", "Depois deixe uma **marca**: o pano em cima da bancada, a vassoura na porta do cômodo. Quando voltar, você sabe onde estava sem pensar."] },
    { k: "fluxo", h: "Chamaram. E agora?", itens: [["Chegue num ponto de parada", "Cinco segundos: termine o gesto, não a tarefa."], ["Deixe a marca", "Pano, vassoura ou cesto no lugar onde parou."], ["Atenda de verdade", "Abaixe, olhe, resolva. Um minuto inteiro vale mais que cinco pela metade."], ["Volte pra marca", "Retome dali. Se o tempo acabou, a tarefa volta no próximo bloco."]] },
    { k: "escolha", h: "O que fazer quando...", ops: [["...chamam a cada 2 minutos", "Pare e encha o “tanque” primeiro: 5 minutos de atenção total, no chão, brincando. Criança com o tanque cheio aguenta 10 minutos sozinha."], ["...a tarefa não pode parar (fogão ligado)", "Leve a criança com você pra um lugar seguro e à vista: cadeirão, cercadinho ou tapete na porta da cozinha, com potes pra brincar."], ["...o bloco acabou e ficou pela metade", "Tudo bem. Deixe a marca e siga o dia. Metade feita já é metade a menos amanhã."]] },
    { k: "compara", h: "A diferença está no jeito de parar", a: ["Parar de qualquer jeito", ["Torneira aberta, pano molhado no chão", "Volta sem saber onde estava", "Recomeça do zero", "Irritação com a criança"]], b: ["Parar com ponto e marca", ["Tudo seguro em 5 segundos", "A marca mostra onde continuar", "Retoma do ponto exato", "Atende a criança sem raiva"]] },
    { k: "faca", itens: ["Escolha a sua marca: pano, vassoura ou cesto.", "Na próxima interrupção, chegue no ponto de parada e deixe a marca.", "Depois de atender, volte e repare como foi fácil retomar."] },
    { k: "erro", e: "Responder “já vou” dez vezes sem ir.", c: "A criança aprende que precisa insistir mais alto. Ir uma vez, de verdade, encerra a interrupção." },
    { k: "resumo", itens: ["Antes de atender, chegue num ponto de parada.", "Deixe uma marca pra saber onde voltar.", "Atenção inteira por 1 minuto evita 10 interrupções."] }
  ] }
] },

/* ===================== 3. BRINQUEDOS NO LUGAR ===================== */
{ id: "brinquedos", n: "Brinquedos no Lugar", tag: "Módulo 3", img: "mod-03-brinquedos-no-lugar.webp", d: "Um sistema que até o pequeno consegue manter.", licoes: [
  { t: "Menos à vista, mais brincadeira", min: 6, telas: [
    { k: "abre", p: "O problema quase nunca é falta de organização. É brinquedo demais ao alcance, ao mesmo tempo." },
    { k: "txt", h: "Por que tanto brinquedo vira bagunça", p: ["Quando tudo está disponível, a criança tira tudo pra achar o que quer. Ela brinca um pouco com cada coisa e não se aprofunda em nenhuma.", "Com **menos opções à vista**, ela escolhe mais rápido, brinca por mais tempo e guardar deixa de ser uma tarefa impossível, pra ela e pra você."] },
    { k: "num", h: "Uma medida simples", itens: [["1 cesto", "por tipo de brinquedo"], ["4 a 6", "cestos à vista por criança"], ["O resto", "guardado, esperando a vez no rodízio"]] },
    { k: "compara", h: "O mesmo quarto, dois jeitos", a: ["Tudo à vista", ["A criança vira a caixa inteira", "Guardar leva meia hora", "Peças se perdem e quebram", "“Não tenho nada pra brincar”"]], b: ["Poucos, escolhidos", ["Ela pega o que quer sem derrubar", "Guardar leva 5 minutos", "Cada coisa tem lugar", "Brinquedo guardado volta como novidade"]] },
    { k: "check", h: "Raio-x dos brinquedos", p: "Marque o que acontece na sua casa.", itens: ["Existe uma caixa grande onde vai tudo misturado", "Há brinquedos quebrados ou sem peças guardados", "Tem brinquedo que ninguém toca há meses", "A criança espalha tudo pra achar um só", "Guardar depende sempre de mim"] },
    { k: "faca", itens: ["Pegue um saco e tire **só os quebrados e os incompletos**.", "Separe numa caixa os que já são de idade menor, pra doar.", "Não organize nada ainda. Hoje é só diminuir."] },
    { k: "erro", e: "Jogar fora os brinquedos escondido, de uma vez.", c: "Tire primeiro o que está quebrado. Pro resto, chame a criança: “quais vão descansar na caixa e quais ficam?”. Ela aceita melhor o que ajudou a decidir." },
    { k: "resumo", itens: ["Brinquedo demais à vista gera bagunça e pouca brincadeira.", "De 4 a 6 cestos por criança é suficiente.", "O primeiro passo é tirar os quebrados e os incompletos."] }
  ] },
  { t: "O rodízio de brinquedos", min: 7, telas: [
    { k: "abre", p: "Brinquedo que some por duas semanas volta com gosto de presente novo. De graça." },
    { k: "fluxo", h: "Como montar o rodízio", itens: [["Junte tudo num lugar só", "Sala ou quarto. Ver o total já ensina muito."], ["Separe por tipo", "Carrinhos, bonecos, montar, desenhar, livros, faz de conta."], ["Divida em 3 grupos parecidos", "Cada grupo com um pouco de cada tipo."], ["Um grupo fica, dois descansam", "Os que descansam vão pra caixas fechadas, no alto do armário."], ["Troque a cada 2 semanas", "Guarda um grupo, desce outro. Leva 10 minutos."]] },
    { k: "tabela", h: "O que nunca entra no rodízio", itens: [["O queridinho", "Aquele boneco ou paninho de dormir fica sempre disponível."], ["Livros", "Deixe uns 5 à vista e troque junto, mas nunca fique sem."], ["Material de desenhar", "Papel e giz ficam sempre ao alcance, num cesto próprio."]] },
    { k: "ordena", h: "Coloque o rodízio em ordem", itens: ["Juntar todos os brinquedos", "Separar por tipo", "Dividir em 3 grupos", "Guardar 2 grupos em caixas fechadas", "Trocar a cada 2 semanas"] },
    { k: "escolha", h: "Dúvidas comuns", ops: [["E se ele pedir um brinquedo que está guardado?", "Pode pegar, trocando por outro: “esse desce, qual sobe?”. A quantidade à vista continua a mesma."], ["Tenho dois filhos de idades diferentes", "Faça o rodízio de cada um separado e deixe um cesto de brinquedos “de todos” fixo na sala."], ["Não tenho armário alto", "Use uma caixa com tampa embaixo da cama ou um saco de pano fechado. O importante é sair da vista."]] },
    { k: "faca", itens: ["Separe 30 minutos no sábado (pode ser a tarefa “Brinquedos” do Meu Dia).", "Monte os 3 grupos com a criança ajudando a escolher o primeiro.", "Anote num papel na caixa a data da próxima troca."] },
    { k: "erro", e: "Fazer grupos por tipo: uma caixa só de carrinhos, outra só de bonecas.", c: "Cada grupo precisa ter um pouco de tudo. Assim, toda quinzena ela tem com o que montar, imaginar e desenhar." },
    { k: "resumo", itens: ["Três grupos: um fica, dois descansam.", "Troca a cada duas semanas, em 10 minutos.", "O queridinho, os livros e o material de desenho ficam sempre."] }
  ] },
  { t: "Cestos que a criança entende", min: 6, telas: [
    { k: "abre", p: "A criança só guarda sozinha quando o lugar de cada coisa é óbvio pra ela, não só pra você." },
    { k: "txt", h: "Três regras do cesto", p: ["**Na altura dela.** Se precisa de você pra alcançar, você é quem vai guardar.", "**Sem tampa.** Tampa é um passo a mais, e criança pequena desiste no primeiro obstáculo.", "**Um tipo por cesto.** “Carrinhos aqui, bonecos ali” é uma regra que uma criança de 2 anos já entende."] },
    { k: "cartoes", h: "Onde guardar cada coisa", itens: [["Peças de montar", "**Cesto baixo e largo**, pra ver as peças sem virar tudo no chão."], ["Carrinhos e bonecos", "**Cesto médio**, um pra cada tipo."], ["Papel, giz e massinha", "**Caixa com divisória** em cima de uma mesa baixa."], ["Livros", "**Em pé, com a capa pra frente**, numa prateleira baixa ou num cesto estreito."], ["Quebra-cabeças e jogos", "**Cada um num saquinho** com fecho, dentro de um cesto só deles."], ["Fantasias e panos", "**Gancho baixo na parede** ou cesto alto."]] },
    { k: "txt", h: "A etiqueta que funciona", p: ["Criança que não lê precisa de **desenho ou foto**. Tire uma foto dos brinquedos que moram no cesto, imprima ou desenhe, e cole na frente.", "Pra quem já está aprendendo a ler, coloque o desenho e a palavra juntos. Vira até treino de leitura."], dica: "Não precisa comprar cesto. Caixa de sapato encapada, bacia e caixote de feira funcionam igual." },
    { k: "quiz", q: "Qual cesto uma criança de 3 anos consegue usar sozinha?", ops: ["Caixa com tampa no alto do armário", "Cesto aberto no chão com o desenho de carrinhos", "Gaveta funda com tudo misturado"], c: 1, exp: "Aberto, baixo, um tipo só e com desenho: ela olha e sabe o que mora ali." },
    { k: "faca", itens: ["Escolha **um** tipo de brinquedo e dê a ele um cesto só dele.", "Faça a etiqueta com a criança: desenho ou foto.", "Mostre: “os carrinhos moram aqui”. Peça pra ela guardar um."] },
    { k: "erro", e: "Criar categorias demais.", c: "Dez cestos diferentes confundem. Comece com 4: montar, faz de conta, desenhar e livros. Se sobrar bagunça, aí sim divida mais." },
    { k: "resumo", itens: ["Cesto baixo, aberto e com um tipo só.", "Etiqueta com desenho ou foto.", "Comece com poucas categorias."] }
  ] },
  { t: "O ritual de guardar em 5 minutos", min: 7, telas: [
    { k: "abre", p: "Guardar não precisa ser bronca. Pode ser a parte do dia que tem música." },
    { k: "fluxo", h: "O ritual", itens: [["Sempre na mesma hora", "Antes do banho ou antes do jantar. O horário fixo evita a discussão."], ["Avise 5 minutos antes", "“Daqui a pouco é hora de guardar.” Criança lida melhor com o que já sabia."], ["Solte a música", "A mesma, sempre. Tocou, todo mundo guarda até acabar."], ["Um tipo por vez", "“Primeiro os carrinhos!” É mais fácil que “guarda tudo”."], ["Comemore", "Bate aqui, abraço, “olha como ficou!”. É o que faz ela querer repetir."]] },
    { k: "timer", h: "Teste com a música: 5 minutos", p: "Chame a criança, escolha uma música animada e aperte começar. Vocês guardam juntos até o tempo acabar.", seg: 300 },
    { k: "compara", h: "O que dizer", a: ["Em vez de", ["“Arruma essa bagunça!”", "“Se não guardar, eu jogo fora”", "“Você nunca guarda nada”"]], b: ["Experimente", ["“Hora da música de guardar!”", "“Os carrinhos primeiro. Onde eles moram?”", "“Você guardou todos os blocos sozinho!”"]] },
    { k: "escolha", h: "E se...", ops: [["...ele não quiser guardar", "Guarde junto, sem sermão, narrando: “eu guardo os blocos, você os carrinhos”. Nas primeiras semanas você faz a maior parte. O hábito vem da repetição, não da cobrança."], ["...ele tiver montado algo e não quiser desmontar", "Crie o “cantinho das obras”: uma bandeja ou prateleira onde a construção pode dormir até amanhã."], ["...for um dia difícil", "Use a versão mínima: tudo num cesto só, em 1 minuto. Amanhã cada coisa volta pro seu lugar."]] },
    { k: "quiz", q: "Qual frase ajuda mais na hora de guardar?", ops: ["“Guarda tudo agora!”", "“Primeiro os carrinhos. Onde eles moram?”", "“Só vai jantar quando guardar”"], c: 1, exp: "Uma tarefa pequena e clara de cada vez. “Tudo” é grande demais pra uma criança saber por onde começar." },
    { k: "faca", itens: ["Escolha a música de guardar da sua casa.", "Defina o horário: antes do banho ou antes do jantar.", "Faça hoje, junto, e comemore no final."] },
    { k: "erro", e: "Guardar tudo sozinha depois que eles dormem.", c: "Dá menos trabalho hoje e mais trabalho pelos próximos anos. Cinco minutos juntos ensinam um hábito pra vida." },
    { k: "resumo", itens: ["Mesma hora, mesma música, todo dia.", "Um tipo de brinquedo por vez.", "Comemorar é parte do ritual."] }
  ] }
] },

/* ===================== 4. TAREFAS POR IDADE ===================== */
{ id: "tarefas-idade", n: "Tarefas por Idade", tag: "Módulo 4", img: "mod-04-tarefas-por-idade.webp", d: "O que cada filho pode fazer, de 2 a 12 anos.", licoes: [
  { t: "O que cada idade consegue", min: 7, telas: [
    { k: "abre", p: "Criança pequena quer ajudar. O segredo é dar uma tarefa do tamanho dela, antes que essa vontade passe." },
    { k: "txt", h: "Tarefa não é castigo", p: ["Ajudar em casa faz a criança se sentir **capaz e parte da família**. O objetivo não é a tarefa ficar perfeita, e sim ela participar.", "Vai ficar torto. A cama vai ficar amassada, a meia no par errado. Tudo bem: é assim que se aprende."] },
    { k: "cartoes", h: "Por faixa de idade", itens: [["2 a 3 anos", "**Levar e guardar.** Brinquedo no cesto, roupa suja no cesto, prato de plástico na pia, papel no lixo."], ["4 a 5 anos", "**Arrumar e separar.** Arrumar a cama do jeito dele, pôr talheres na mesa, separar meias, regar planta."], ["6 a 8 anos", "**Cuidar do que é seu.** Mochila, cama todo dia, dobrar a própria roupa, pôr e tirar a mesa."], ["9 a 12 anos", "**Cuidar da casa.** Louça do lanche, lixo, pano no chão, lanche simples, ajudar o irmão menor."]] },
    { k: "compara", h: "Segurança em qualquer idade", a: ["Só com adulto", ["Faca e fogão", "Ferro de passar", "Produtos de limpeza", "Escada e janelas"]], b: ["Pode sozinha (conforme a idade)", ["Pano seco ou com água", "Vassoura e pá", "Roupas e brinquedos", "Mesa, cama e mochila"]] },
    { k: "num", h: "Quantas tarefas por criança?", itens: [["2 a 3", "tarefas fixas é o ideal pra começar"], ["Todo dia", "vale mais que uma tarefa grande por semana"], ["2 semanas", "é o tempo pra uma tarefa virar costume"]] },
    { k: "quiz", q: "Qual tarefa combina com uma criança de 4 anos?", ops: ["Lavar a louça de vidro", "Separar as meias por par", "Passar pano com desinfetante"], c: 1, exp: "Separar meias é seguro, tem começo e fim, e ainda treina atenção. Vidro e produto ficam com o adulto." },
    { k: "faca", itens: ["Abra a aba **Crianças** e toque no nome de um filho.", "Na parte de Tarefas, escolha 2 ou 3 da idade dele.", "Conte pra ele, com animação, quais são as tarefas dele agora."] },
    { k: "erro", e: "Refazer a tarefa na frente da criança.", c: "Se a cama ficou torta, deixe. Se precisar mesmo ajeitar, faça depois, sem ela ver. Refazer na frente ensina que não valeu a pena tentar." },
    { k: "resumo", itens: ["Cada idade tem tarefas que cabem nela.", "Comece com 2 ou 3 tarefas fixas, todos os dias.", "Participar importa mais que ficar perfeito."] }
  ] },
  { t: "Ensinar uma tarefa em 4 passos", min: 6, telas: [
    { k: "abre", p: "“Eu já falei mil vezes!” Falar não ensina. Mostrar, fazer junto e soltar aos poucos, sim." },
    { k: "fluxo", h: "Os 4 passos", itens: [["Eu faço, você olha", "Faça devagar, contando o que está fazendo: “puxo o lençol, depois o cobertor”."], ["A gente faz junto", "Cada um de um lado da cama. Ela copia os seus movimentos."], ["Você faz, eu olho", "Fique por perto, sem pegar na mão. Ajude só se ela pedir."], ["Você faz sozinha", "Saia do cômodo. Depois olhe e comente o que ela fez."]] },
    { k: "txt", h: "Cada passo leva alguns dias", p: ["Não é pra fazer os 4 passos na mesma tarde. Fique em cada um por **dois ou três dias**, até a criança mostrar que está segura.", "Uma tarefa ensinada assim leva duas semanas. Parece muito, mas é uma vez só: depois ela é dela pra sempre."] },
    { k: "ordena", h: "Qual é a ordem?", itens: ["Eu faço, você olha", "A gente faz junto", "Você faz, eu olho", "Você faz sozinha"] },
    { k: "escolha", h: "E se ela errar?", ops: [["Fez pela metade", "Aponte o que falta com uma pergunta: “o que mais a cama precisa?”. Deixe ela descobrir."], ["Fez de qualquer jeito", "Volte um passo, sem bronca: “amanhã a gente faz junto de novo”. Só isso."], ["Disse que não consegue", "Divida a tarefa: “hoje você só põe o travesseiro”. Tarefa menor, sucesso garantido."]] },
    { k: "faca", itens: ["Escolha **uma** tarefa da lista do seu filho.", "Hoje faça só o passo 1: você faz, ele olha.", "Repita amanhã antes de passar pro passo 2."] },
    { k: "erro", e: "Pular direto pro “faz sozinho” e reclamar do resultado.", c: "Sem os passos do meio, a criança não sabe o que você espera. Voltar um passo é mais rápido do que brigar todo dia." },
    { k: "resumo", itens: ["Eu faço, fazemos juntos, você faz comigo olhando, você faz sozinha.", "Dois ou três dias em cada passo.", "Errou? Volte um passo, sem bronca."] }
  ] },
  { t: "Elogio no lugar de cobrança", min: 6, telas: [
    { k: "abre", p: "A criança repete o que recebe atenção. Se a atenção vem quando ela faz, ela faz de novo." },
    { k: "txt", h: "O elogio que funciona", p: ["“Muito bem!” é bom, mas é vago. O elogio que ensina **descreve o que a criança fez**: “você guardou todos os carrinhos no cesto sem eu pedir”.", "Assim ela entende exatamente o que deu certo e sabe repetir."] },
    { k: "compara", h: "Troque a frase", a: ["Em vez de", ["“Você é um anjo”", "“Nossa, que milagre!”", "“Até que enfim arrumou”", "“Viu como não custa nada?”"]], b: ["Experimente", ["“Você pôs a mesa inteira sozinho”", "“Eu vi que você guardou sem eu pedir”", "“Sua cama está arrumada. Obrigada!”", "“Sua ajuda me deu tempo de brincar com você”"]] },
    { k: "cartoes", h: "Quando elogiar", itens: [["No começo", "**Sempre.** Cada vez que ela fizer a tarefa, nas primeiras semanas."], ["Depois de um mês", "**De vez em quando**, de surpresa. O hábito já se sustenta."], ["Quando tentou e não conseguiu", "**Elogie a tentativa**: “você tentou dobrar sozinha, isso é difícil mesmo”."], ["Na frente dos outros", "**Vale em dobro.** Conte pro pai ou pra avó, com ela ouvindo."]] },
    { k: "quiz", q: "Qual destes elogios ensina mais?", ops: ["“Parabéns, lindo!”", "“Você colocou todos os talheres no lugar certo”", "“Que menino bonzinho”"], c: 1, exp: "Ele descreve o que foi feito. A criança sabe exatamente o que repetir amanhã." },
    { k: "faca", itens: ["Hoje, pegue seu filho **fazendo algo certo**.", "Descreva o que viu, olhando nos olhos.", "À noite, conte pra outra pessoa da casa, com ele ouvindo."] },
    { k: "erro", e: "Elogiar e emendar uma crítica: “ficou bom, mas...”.", c: "A criança só guarda o “mas”. Elogie hoje. A correção fica pra amanhã, no passo “a gente faz junto”." },
    { k: "resumo", itens: ["Descreva o que a criança fez, em vez de só dizer “muito bem”.", "No começo, elogie todas as vezes.", "Nada de “mas” depois do elogio."] }
  ] },
  { t: "Quadro de estrelas sem virar chantagem", min: 6, telas: [
    { k: "abre", p: "O quadro de estrelas é um jeito de a criança ver o próprio esforço. Não é uma moeda de troca." },
    { k: "txt", h: "Como o quadro ajuda", p: ["Criança pequena não enxerga “a semana”. A estrela torna o esforço **visível**: ela olha o quadro e vê tudo o que já fez.", "Aqui no aplicativo, o quadro fica na aba **Crianças**. Deixe a criança tocar na estrela: é o momento de orgulho dela."] },
    { k: "compara", h: "As regras do quadro", a: ["Evite", ["Tirar estrela por mau comportamento", "Prometer brinquedo ou doce", "Mais de 5 tarefas no quadro", "Comparar o quadro dos irmãos"]], b: ["Faça", ["Estrela ganha fica ganha", "Combinar tempo junto ou uma escolha especial", "Começar com 2 ou 3 tarefas", "Cada criança com a sua meta"]] },
    { k: "tabela", h: "Ideias de combinado da semana", itens: [["Escolher", "o filme de sábado ou a sobremesa de domingo"], ["Passeio", "ir à pracinha, andar de bicicleta com você"], ["Tempo extra", "15 minutos a mais de história antes de dormir"], ["Fazer junto", "uma receita, um bolo, um acampamento na sala"]] },
    { k: "escolha", h: "Situações do dia a dia", ops: [["Ela não bateu a meta", "Sem drama e sem sermão. “Faltaram 2 estrelas. Semana que vem a gente tenta de novo.” Considere se a meta não está alta."], ["Ela só faz se tiver estrela", "No começo é normal. Depois de um mês, tire uma tarefa do quadro e mantenha o elogio. Aos poucos, o quadro deixa de ser necessário."], ["O irmão menor também quer", "Dê um quadro pra ele com uma única tarefa bem simples. Participar é o que conta."]] },
    { k: "faca", itens: ["Na aba **Crianças**, abra o quadro de estrelas do seu filho.", "Defina a meta e o combinado da semana junto com ele.", "Hoje, deixe ele tocar na primeira estrela."] },
    { k: "erro", e: "Usar a estrela como ameaça: “assim você perde a estrela”.", c: "A estrela é pelo que foi feito. Mau comportamento se resolve de outro jeito, separado do quadro." },
    { k: "resumo", itens: ["A estrela mostra o esforço. Ela não se tira.", "O combinado é tempo junto, não presente.", "Poucas tarefas e uma meta que dá pra alcançar."] }
  ] },
  { t: "Quando a criança não quer", min: 6, telas: [
    { k: "abre", p: "Vai ter dia de “não quero”. Com adulto também é assim. O que muda é como você responde." },
    { k: "cartoes", h: "Quatro jeitos que funcionam", itens: [["Duas escolhas", "“Você quer guardar os carrinhos ou os blocos?” Ela escolhe **como**, não **se**."], ["Virar jogo", "“Será que você guarda tudo antes de eu contar até 20?” Desafio anima mais que ordem."], ["Fazer junto hoje", "“Hoje a mamãe ajuda.” Um dia de ajuda não desfaz o hábito."], ["Quando... então", "“Quando os brinquedos estiverem no cesto, então a gente lê a história.” Sem ameaça, só a ordem das coisas."]] },
    { k: "compara", h: "Duas respostas pro “não quero”", a: ["O que piora", ["Gritar ou repetir dez vezes", "Ameaçar o que você não vai cumprir", "Fazer por ela, reclamando", "Comparar com o irmão"]], b: ["O que ajuda", ["Falar uma vez, abaixada, olhando nos olhos", "Dar duas escolhas", "Esperar um minuto em silêncio", "Fazer junto e elogiar o que ela fez"]] },
    { k: "txt", h: "Olhe o que está por trás", p: ["Muitas vezes o “não quero” é **fome, sono ou vontade de atenção**. Criança cansada às 19h não vai guardar brinquedo com alegria.", "Se a recusa aparece sempre no mesmo horário, mude a tarefa de horário em vez de brigar com ela."] },
    { k: "quiz", q: "Seu filho de 5 anos se recusa a arrumar a cama. O que tentar primeiro?", ops: ["“Então fica sem desenho hoje”", "“Você quer pôr o travesseiro ou esticar o cobertor?”", "Arrumar você mesma, reclamando"], c: 1, exp: "Duas escolhas dão a ele um pouco de controle, e a tarefa acontece do mesmo jeito." },
    { k: "faca", itens: ["Escolha um dos quatro jeitos pra testar hoje.", "Use na primeira recusa do dia.", "Repare: em que horário as recusas mais acontecem?"] },
    { k: "erro", e: "Desistir da tarefa depois de uma semana difícil.", c: "Semana ruim acontece. Diminua a tarefa (só o travesseiro), mas mantenha o hábito vivo." },
    { k: "resumo", itens: ["Dê duas escolhas ou transforme em jogo.", "Recusa no mesmo horário pede mudança de horário.", "No dia difícil, faça junto. O hábito continua."] }
  ] }
] },

/* ===================== 5. COZINHA DE MÃE ===================== */
{ id: "cozinha-mae", n: "Cozinha de Mãe", tag: "Módulo 5", img: "mod-05-cozinha-de-mae.webp", d: "Cardápio da semana que as crianças comem.", licoes: [
  { t: "O cardápio da semana em 20 minutos", min: 7, telas: [
    { k: "abre", p: "O que cansa não é cozinhar. É decidir, todo santo dia, o que vai ter pra comer." },
    { k: "txt", h: "Decidir uma vez só", p: ["Pensar no almoço às 11h30, com fome e criança pedindo colo, é a pior hora pra decidir. O cardápio da semana tira essa decisão do seu dia.", "Vinte minutos no domingo ou na sexta resolvem a semana inteira, e a lista de compras sai pronta."] },
    { k: "fluxo", h: "O passo a passo", itens: [["Veja o que já tem", "Geladeira, congelador e armário. O que vence primeiro entra no começo da semana."], ["Escolha 3 bases", "Por exemplo: frango, carne moída e ovos. Cada base rende duas refeições."], ["Encaixe nos dias", "Dia corrido recebe comida rápida ou sobra planejada. Dia calmo recebe a receita que demora."], ["Repita o acompanhamento", "Arroz, feijão e uma salada ou legume. Não precisa inventar todo dia."], ["Gere a lista de compras", "Só o que falta. Aqui no aplicativo, é um toque."]] },
    { k: "tabela", h: "Um exemplo de semana", itens: [["Segunda", "Frango desfiado com arroz e cenoura"], ["Terça", "Macarrão com carne moída"], ["Quarta", "Torta de frango (com o desfiado de segunda)"], ["Quinta", "Omelete de forno com legumes"], ["Sexta", "Escondidinho (com a carne moída de terça)"], ["Sábado", "Sopa de legumes com macarrão"], ["Domingo", "Carne de panela, que rende pra segunda"]] },
    { k: "num", h: "O que você ganha", itens: [["1 vez", "por semana pensando em comida"], ["1 ida", "ao mercado, com lista"], ["Menos sobra", "indo pro lixo no fim da semana"]] },
    { k: "faca", itens: ["Abra **Mais › Cardápio da semana**.", "Preencha só os próximos 3 dias, ou toque em “Sugerir uma semana pra mim”.", "Toque em “Gerar a lista de compras”."] },
    { k: "erro", e: "Montar um cardápio de restaurante, com sete pratos diferentes e trabalhosos.", c: "Cardápio bom é o que você consegue cumprir numa terça-feira cansada. Repita pratos e use sobras de propósito." },
    { k: "resumo", itens: ["Decida a semana inteira de uma vez, em 20 minutos.", "Três bases rendem seis refeições.", "O dia mais corrido recebe a comida mais fácil."] }
  ] },
  { t: "Preparos-base que viram 3 refeições", min: 7, telas: [
    { k: "abre", p: "Cozinhar uma vez e comer três. Sem parecer que é a mesma comida." },
    { k: "txt", h: "O que é um preparo-base", p: ["É uma comida simples, feita em quantidade, que **muda de cara** durante a semana. Você cozinha a base num dia calmo e só monta nos dias corridos.", "As melhores bases são as que aceitam molho, forno e recheio."] },
    { k: "cartoes", h: "Quatro bases e o que elas viram", itens: [["Frango desfiado", "**1.** Com arroz e legumes. **2.** Torta de liquidificador. **3.** Sanduíche ou recheio de panqueca."], ["Carne moída refogada", "**1.** Com macarrão. **2.** Escondidinho com purê. **3.** Recheio de panqueca ou pastel de forno."], ["Feijão cozido", "**1.** Feijão do dia a dia. **2.** Caldinho batido. **3.** Baião de dois ou feijão tropeiro."], ["Legumes assados", "**1.** Acompanhamento. **2.** Dentro da omelete de forno. **3.** Batidos na sopa."]] },
    { k: "tabela", h: "Como guardar com segurança", itens: [["Esfriou, guardou", "Não deixe comida pronta mais de 2 horas fora da geladeira."], ["Na geladeira", "Em pote tampado, por até 3 dias."], ["No congelador", "Em porções pequenas, com nome e data. Feijão, carne moída e frango desfiado congelam muito bem."], ["Pra descongelar", "Na geladeira, de um dia pro outro, ou direto na panela. Nunca em cima da pia."], ["Descongelou", "Não volte a congelar cru. Esquentou, é pra comer."]] },
    { k: "quiz", q: "Sobrou frango desfiado de segunda-feira. Até quando usar, guardado na geladeira?", ops: ["Até quinta, no máximo", "Até o outro domingo", "Só no mesmo dia"], c: 0, exp: "Bem tampado, na geladeira, por até 3 dias. Se não for usar nesse prazo, congele no mesmo dia em que cozinhou." },
    { k: "check", h: "Seu kit de preparo-base", p: "O que você já tem em casa?", itens: ["Potes com tampa que vão ao congelador", "Etiqueta ou fita crepe e caneta", "Panela de pressão ou panela grande", "Espaço livre no congelador"] },
    { k: "faca", itens: ["Escolha **uma** base pra fazer esta semana.", "Veja a receita em **Mais › Receitas** (procure por “preparo-base”).", "Divida em 3 porções: uma pra hoje, uma pra geladeira e uma pro congelador."] },
    { k: "erro", e: "Fazer cinco bases no mesmo domingo e passar o dia na cozinha.", c: "Uma ou duas bases por semana bastam. O objetivo é sobrar tempo, não trocar a faxina de sábado pela cozinha de domingo." },
    { k: "resumo", itens: ["Uma base bem feita vira três refeições diferentes.", "Geladeira por até 3 dias. Congelador pro que passar disso.", "Uma ou duas bases por semana já mudam a rotina."] }
  ] },
  { t: "Criança que come pouco: o que ajuda", min: 7, telas: [
    { k: "abre", p: "A hora da comida não precisa ser uma batalha. Seu papel e o papel da criança são diferentes." },
    { k: "txt", h: "Cada um com a sua parte", p: ["**Você decide** o que vai pra mesa, a que horas e onde. **A criança decide** se come e quanto come daquilo.", "Quando o adulto tenta decidir também a quantidade, com pressão, chantagem ou distração, a refeição vira disputa. E disputa tira a fome de qualquer um."] },
    { k: "compara", h: "Na mesa", a: ["O que atrapalha", ["“Só mais três colheradas”", "Trocar o prato por outra comida", "Televisão ou celular pra distrair", "Sobremesa como prêmio"]], b: ["O que ajuda", ["Porção pequena, com direito a repetir", "A mesma comida da família", "Comer junto, sem tela", "Sempre um alimento que ela aceita no prato"]] },
    { k: "cartoes", h: "Ideias que costumam funcionar", itens: [["Deixe ela ajudar", "Lavar o tomate, mexer a massa, escolher o legume. Criança prova com mais vontade o que ajudou a fazer."], ["Ofereça de novo", "Um alimento novo pode precisar aparecer **muitas vezes** até ser aceito. Sem insistir: só deixe no prato."], ["Sirva separado", "Muitas crianças preferem arroz, feijão e legume lado a lado, sem misturar."], ["Lanche com hora", "Beliscar o tempo todo tira a fome do almoço. Combine os horários do lanche."]] },
    { k: "escolha", h: "E quando...", ops: [["...ela não quer nem provar", "Não force. Deixe uma porção bem pequena no canto do prato e siga a refeição. Ver, cheirar e conviver com o alimento já é um passo."], ["...ela só quer a mesma comida", "Mantenha essa comida no prato, junto com uma pequena porção de outra. O conhecido dá segurança pra arriscar o novo."], ["...ela comeu quase nada no almoço", "Guarde o prato. Se ela pedir comida depois, ofereça o mesmo almoço, sem bronca. A próxima refeição vem no horário normal."]] },
    { k: "txt", h: "Um aviso importante", p: ["Estas são ideias de rotina, não orientação de saúde. Se a alimentação, o peso ou o crescimento do seu filho preocupam você, converse com o pediatra ou com um nutricionista."] },
    { k: "faca", itens: ["Hoje, sirva uma porção **bem pequena** e deixe ela pedir mais.", "Coloque no prato um alimento que ela já aceita.", "Desligue a televisão e sente pra comer junto."] },
    { k: "erro", e: "Fazer uma comida diferente só pra criança, todos os dias.", c: "Você vira cozinheira de dois cardápios e ela nunca treina o paladar. Adapte o tempero e o corte, mas mantenha a comida da família." },
    { k: "resumo", itens: ["Você decide o que, quando e onde. Ela decide quanto.", "Sem pressão, sem tela e sem prêmio.", "Dúvidas sobre saúde são com o pediatra."] }
  ] },
  { t: "Lanches e lancheira sem sofrimento", min: 6, telas: [
    { k: "abre", p: "Lancheira não precisa ser obra de arte. Precisa de uma fórmula que você monta de olho fechado." },
    { k: "num", h: "A fórmula da lancheira", itens: [["1", "lanche que sustenta: pão, bolo simples, tapioca, cuscuz"], ["1", "fruta fácil de comer"], ["1", "bebida: água sempre"]] },
    { k: "tabela", h: "Ideias pra cada parte", itens: [["Lanche que sustenta", "Sanduíche de queijo, pão com frango desfiado, bolo de cenoura, panqueca de banana, pão de queijo, cuscuz"], ["Fruta", "Banana, maçã em fatias, mexerica, uva cortada, melancia em cubos"], ["Bebida", "Água. Suco natural ou leite, de vez em quando"]] },
    { k: "txt", h: "Monte na véspera", p: ["Deixe a lancheira pronta à noite, na geladeira. De manhã é só pegar.", "Aqui no aplicativo, a aba **Crianças** tem a **lancheira da semana** de cada filho, com um toque pra mandar tudo pra lista de compras."], dica: "A partir dos 6 anos, a criança pode montar a própria lancheira seguindo a fórmula. Você só confere." },
    { k: "compara", h: "Segurança na lancheira", a: ["Atenção", ["Uva, tomatinho e salsicha inteiros (pra menores de 5 anos)", "Pipoca e castanhas pra crianças pequenas", "Frios e maionese fora da geladeira por horas", "Alimentos que a escola proíbe por alergia de colegas"]], b: ["Mais seguro", ["Uva e tomatinho cortados no comprimento", "Frutas macias em pedaços", "Lancheira térmica com gelo reciclável", "Potes que a criança consegue abrir sozinha"]] },
    { k: "quiz", q: "Qual lancheira segue a fórmula?", ops: ["Salgadinho, biscoito recheado e refrigerante", "Sanduíche de queijo, banana e água", "Três frutas e um suco de caixinha"], c: 1, exp: "Um lanche que sustenta, uma fruta e água. Simples de montar e de repetir." },
    { k: "faca", itens: ["Abra **Crianças**, toque no seu filho e veja a aba Lancheira.", "Troque as ideias até a semana ficar boa pra vocês.", "Hoje à noite, deixe a lancheira de amanhã pronta."] },
    { k: "erro", e: "Mandar muita coisa “pra garantir”.", c: "Lancheira lotada volta cheia. Porção pequena, três itens, e a criança come melhor." },
    { k: "resumo", itens: ["Um lanche que sustenta, uma fruta e água.", "Montar na véspera salva a manhã.", "Corte os alimentos redondos e respeite as regras da escola."] }
  ] },
  { t: "A cozinha em ordem enquanto você cozinha", min: 6, telas: [
    { k: "abre", p: "Terminar de cozinhar com a pia já vazia. Parece mágica, mas é só ordem." },
    { k: "fluxo", h: "A sequência que deixa a pia vazia", itens: [["Comece com a pia vazia", "Dois minutos pra guardar a louça seca e liberar espaço."], ["Lixo ao lado", "Uma tigela ou saco na bancada pra cascas. Nada de pingar até a lixeira."], ["Lave enquanto espera", "A água ferve, o arroz cozinha, o forno assa. Cada espera lava três peças."], ["Sirva e encha de água", "Panela vazia recebe água e uma gota de detergente na hora. Solta sozinha."], ["Todo mundo leva o prato", "Cada um raspa o seu e põe na pia. Até quem tem 3 anos."]] },
    { k: "ordena", h: "Coloque na ordem", itens: ["Esvaziar a pia antes de começar", "Deixar o lixo ao lado da bancada", "Lavar o que der durante as esperas", "Encher as panelas de água ao servir", "Cada um leva o próprio prato"] },
    { k: "num", h: "Louça na hora ou louça depois", itens: [["Na hora", "a sujeira ainda está mole e sai fácil"], ["Depois", "a comida seca e pede esfregar"], ["De molho", "é o meio-termo pro dia difícil"]] },
    { k: "txt", h: "Menos panela, menos louça", p: ["Receitas de **uma panela só** e de **assadeira** dão metade da louça. No banco de receitas, procure a etiqueta “Uma panela só”.", "E forrar a assadeira com papel-alumínio ou papel-manteiga poupa dez minutos de esfregação."] },
    { k: "timer", h: "Desafio: pia vazia em 5 minutos", p: "Aperte começar e lave o que estiver na pia agora. Quanto você consegue em 5 minutos?", seg: 300 },
    { k: "faca", itens: ["No próximo preparo, comece esvaziando a pia.", "Lave pelo menos 3 peças enquanto a comida cozinha.", "Peça pra cada pessoa levar o próprio prato."] },
    { k: "erro", e: "Deixar toda a louça pra depois do jantar, quando a energia já acabou.", c: "Divida: a louça do preparo se lava durante o preparo. Depois de comer, sobram só pratos e talheres." },
    { k: "resumo", itens: ["Pia vazia antes de começar.", "Lave durante as esperas e encha as panelas de água ao servir.", "Cada um leva o seu prato."] }
  ] }
] },

/* ===================== 6 a 10 (conteúdo na próxima etapa) ===================== */
{ id: "roupa-em-dia", n: "Roupa em Dia", tag: "Módulo 6", img: "mod-06-roupa-em-dia.webp", d: "Lavanderia de família sem montanha no sofá." },
{ id: "rotina-noite", n: "Rotina da Noite", tag: "Módulo 7", img: "mod-07-rotina-da-noite.webp", d: "Banho, jantar e cama com a casa pronta pro dia seguinte." },
{ id: "casa-15", n: "Casa Pronta em 15 Minutos", tag: "Módulo 8", img: "mod-08-casa-pronta-15min.webp", d: "Pra quando bate o sufoco e chega visita." },
{ id: "sem-sobrecarga", n: "Mãe Sem Sobrecarga", tag: "Módulo 9", img: "mod-09-mae-sem-sobrecarga.webp", d: "Como dividir a carga mental com quem mora com você." },
{ id: "tempo-qualidade", n: "Tempo de Qualidade", tag: "Módulo 10", img: "mod-10-tempo-de-qualidade.webp", d: "Momentos curtos com os filhos que cabem no dia." },

/* ===================== BÔNUS ===================== */
{ id: "b-receitas", tipo: "bonus", n: "Receitas e Assistente com IA", tag: "Bônus 1", img: "bonus-01-assistente-ia.webp", d: "Banco de receitas e pedido pronto pro ChatGPT.", link: "mais/receitas" },
{ id: "b-lancheira", tipo: "bonus", n: "Cardápio de Lancheira", tag: "Bônus 2", img: "bonus-02-cardapio-lancheira.webp", d: "A lancheira da semana de cada filho.", link: "criancas" },
{ id: "b-brincar", tipo: "bonus", n: "50 Brincadeiras de 15 Minutos", tag: "Bônus 3", img: "bonus-03-50-brincadeiras.webp", d: "Por idade, tempo e lugar.", link: "mais/brincar" },
{ id: "b-caseiros", tipo: "bonus", n: "Produtos Caseiros pra Casa com Criança", tag: "Bônus 4", img: "bonus-04-produtos-caseiros.webp", d: "Receitas simples de limpeza, com segurança." },

/* ===================== PRESENTES ===================== */
{ id: "p-agenda", tipo: "presente", e: "📅", n: "Agenda Semanal da Mãe", d: "Sua semana inteira, bloco por bloco.", link: "meu-dia" },
{ id: "p-compras", tipo: "presente", e: "🛒", n: "Lista de Compras da Família", d: "Por categoria, com o que falta e o que já foi.", link: "mais/compras" },
{ id: "p-cartoes", tipo: "presente", e: "🌞", n: "Cartões de Rotina Ilustrados", d: "Manhã e noite, pra criança seguir sozinha.", link: "criancas" },
{ id: "p-mochila", tipo: "presente", e: "🎒", n: "Checklist da Mochila e da Lancheira", d: "Tudo pronto na véspera.", link: "mais/mochila" }
);
