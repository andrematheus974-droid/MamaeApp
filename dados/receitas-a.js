/* Mãe Presente — banco de receitas, parte 1 (50 receitas)
   R(nome, categoria, minutos, porções, dificuldade 1-3, etiquetas, ingredientes principais, ingredientes, preparo, dica) */
(function () {
const R = (n, cat, t, p, d, tags, base, ing, prep, dica) => MP.RECEITAS.push({ n, cat, t, p, d, tags, base, ing, prep, dica });

/* ---------- ARROZ E FEIJÃO ---------- */
R("Arroz soltinho de todo dia", "Arroz e feijão", 25, 6, 1, ["base"], ["arroz"],
  ["2 xícaras de arroz", "4 xícaras de água fervente", "2 dentes de alho picados", "1 colher (sopa) de óleo", "1 colher (chá) de sal"],
  ["Refogue o alho no óleo até perfumar, sem deixar escurecer.", "Junte o arroz e mexa por 1 minuto.", "Coloque a água fervente e o sal. Quando voltar a ferver, abaixe o fogo e tampe deixando uma fresta.", "Cozinhe por uns 15 minutos, até a água secar. Desligue, tampe de vez e espere 5 minutos antes de soltar com um garfo."],
  "Faça o dobro e guarde metade na geladeira: vira arroz de forno ou bolinho de arroz em outro dia.");
R("Feijão de panela de pressão", "Arroz e feijão", 50, 10, 1, ["base", "congela"], ["feijão"],
  ["2 xícaras de feijão (deixado de molho por 8 horas)", "6 xícaras de água", "2 folhas de louro", "3 dentes de alho amassados", "1/2 cebola picada", "1 colher (sopa) de óleo", "Sal a gosto"],
  ["Escorra a água do molho. Coloque o feijão na pressão com a água nova e o louro.", "Depois que pegar pressão, cozinhe por 25 minutos em fogo baixo. Espere a pressão sair sozinha.", "Numa frigideira, refogue a cebola e o alho no óleo. Junte duas conchas de feijão e amasse.", "Devolva tudo pra panela, acerte o sal e ferva por 10 minutos, até o caldo engrossar."],
  "Congele em potes de uma refeição. Dura semanas e salva o dia corrido.");
R("Arroz com cenoura", "Arroz e feijão", 25, 6, 1, ["rapida", "panela"], ["arroz", "cenoura"],
  ["2 xícaras de arroz", "1 cenoura grande ralada", "4 xícaras de água fervente", "2 dentes de alho", "1 colher (sopa) de óleo", "Sal a gosto"],
  ["Refogue o alho no óleo e junte a cenoura ralada. Mexa por 2 minutos.", "Acrescente o arroz, misture e coloque a água e o sal.", "Cozinhe em fogo baixo, com a panela semitampada, até secar."],
  "A cenoura ralada fina quase some no arroz. Boa pra criança que separa os legumes.");
R("Arroz com brócolis", "Arroz e feijão", 25, 6, 1, ["rapida", "panela"], ["arroz", "brócolis"],
  ["2 xícaras de arroz", "1 maço pequeno de brócolis picado miúdo (talos também)", "4 xícaras de água fervente", "3 dentes de alho", "1 colher (sopa) de óleo", "Sal a gosto"],
  ["Refogue o alho no óleo. Junte os talos picados e mexa por 2 minutos.", "Acrescente o arroz, a água e o sal.", "Quando a água estiver quase secando, espalhe as flores do brócolis por cima, tampe e termine de cozinhar."],
  "Colocar as flores só no final deixa o brócolis verdinho e macio.");
R("Arroz de forno com frango", "Arroz e feijão", 30, 6, 1, ["ajuda"], ["arroz", "frango", "queijo", "molho de tomate"],
  ["4 xícaras de arroz já cozido", "2 xícaras de frango desfiado", "1 xícara de molho de tomate", "1 lata de milho escorrido (opcional)", "1 xícara de queijo ralado ou em fatias", "Sal a gosto"],
  ["Misture o arroz, o frango, o molho e o milho. Prove o sal.", "Passe pra uma assadeira untada e cubra com o queijo.", "Leve ao forno a 200 °C por uns 20 minutos, até o queijo derreter e dourar."],
  "Receita perfeita pra sobra de arroz e de frango. A criança pode misturar e espalhar o queijo.");
R("Baião de dois simples", "Arroz e feijão", 35, 6, 2, ["panela"], ["arroz", "feijão", "linguiça", "queijo"],
  ["2 xícaras de feijão cozido com um pouco do caldo", "1 e 1/2 xícara de arroz", "1 linguiça calabresa em cubinhos", "1 cebola picada", "2 dentes de alho", "3 xícaras de água quente", "1 xícara de queijo coalho ou muçarela em cubos", "Cheiro-verde a gosto"],
  ["Frite a linguiça na própria gordura. Junte a cebola e o alho.", "Acrescente o arroz e mexa. Coloque o feijão com o caldo e a água quente.", "Cozinhe em fogo baixo até o arroz ficar macio e úmido. Acerte o sal.", "Desligue, misture o queijo e o cheiro-verde e tampe por 5 minutos."],
  "Use o feijão que já está pronto na geladeira. Fica uma refeição completa numa panela só.");
R("Caldinho de feijão", "Arroz e feijão", 15, 4, 1, ["rapida"], ["feijão"],
  ["3 xícaras de feijão cozido com caldo", "1 xícara de água", "1 dente de alho", "1 colher (sopa) de óleo", "Sal e cheiro-verde a gosto"],
  ["Bata o feijão com a água no liquidificador.", "Refogue o alho no óleo, junte o feijão batido e ferva por 5 minutos, mexendo.", "Acerte o sal e sirva com cheiro-verde."],
  "Pra criança pequena, sirva com arroz bem cozido ou pedacinhos de pão.");
R("Feijão tropeiro rápido", "Arroz e feijão", 25, 6, 2, ["rapida"], ["feijão", "ovos", "linguiça", "couve"],
  ["3 xícaras de feijão cozido e escorrido", "1 linguiça calabresa picada", "3 ovos", "1 cebola picada", "2 dentes de alho", "4 folhas de couve em tiras finas", "1 xícara de farinha de mandioca", "Sal a gosto"],
  ["Frite a linguiça. Junte a cebola e o alho.", "Empurre tudo pro lado, quebre os ovos e mexa até cozinhar.", "Acrescente o feijão escorrido e a couve. Mexa por 2 minutos.", "Desligue e misture a farinha aos poucos, até ficar soltinho."],
  "Bom jeito de dar cara nova ao feijão do terceiro dia.");

/* ---------- FRANGO ---------- */
R("Frango desfiado na pressão", "Frango", 30, 8, 1, ["base", "congela"], ["frango"],
  ["1 kg de peito de frango", "1 cebola cortada em quatro", "2 dentes de alho", "1 folha de louro", "1 colher (chá) de sal", "Água até cobrir"],
  ["Coloque tudo na panela de pressão.", "Depois que pegar pressão, cozinhe por 15 minutos. Espere a pressão sair.", "Escorra (guarde o caldo!), tampe a panela com o frango ainda quente e chacoalhe com força por 30 segundos: ele desfia sozinho."],
  "Divida em 3 porções: uma pra hoje, uma pra geladeira (até 3 dias) e uma pro congelador. O caldo vira sopa ou arroz.");
R("Sobrecoxa assada com batata", "Frango", 60, 5, 1, ["panela", "ajuda"], ["frango", "batata"],
  ["6 sobrecoxas de frango", "4 batatas em pedaços grandes", "1 cebola em gomos", "4 dentes de alho amassados", "Suco de 1 limão", "2 colheres (sopa) de óleo", "1 colher (chá) de sal", "Páprica ou colorau (opcional)"],
  ["Misture o frango com alho, limão, sal e páprica. Se der tempo, deixe 20 minutos.", "Espalhe as batatas e a cebola numa assadeira, regue com o óleo e uma pitada de sal.", "Coloque o frango por cima, com a pele pra cima.", "Asse a 200 °C por uns 50 minutos, até dourar e a carne soltar do osso."],
  "Tudo numa assadeira só. Forre com papel-alumínio pra não ter que esfregar depois.");
R("Iscas de frango aceboladas", "Frango", 20, 4, 1, ["rapida"], ["frango"],
  ["500 g de peito de frango em tiras", "2 cebolas em rodelas", "2 dentes de alho", "Suco de 1/2 limão", "1 colher (sopa) de óleo", "Sal a gosto"],
  ["Tempere o frango com alho, limão e sal.", "Aqueça bem a frigideira com o óleo e doure o frango aos poucos, sem amontoar.", "Junte a cebola, mexa por 3 minutos e sirva."],
  "Frigideira bem quente e pouco frango de cada vez: assim ele doura em vez de cozinhar na água.");
R("Strogonoff de frango", "Frango", 30, 5, 1, ["rapida"], ["frango", "creme de leite", "molho de tomate"],
  ["600 g de peito de frango em cubos", "1 cebola picada", "2 dentes de alho", "3 colheres (sopa) de molho de tomate", "1 colher (sopa) de mostarda (opcional)", "1 caixinha de creme de leite", "1 colher (sopa) de óleo", "Sal a gosto"],
  ["Doure o frango no óleo. Junte a cebola e o alho.", "Acrescente o molho de tomate, a mostarda e 1/2 xícara de água. Cozinhe por 10 minutos.", "Desligue o fogo, misture o creme de leite e acerte o sal."],
  "Sirva com arroz e batata palha. É daquelas receitas que quase toda criança aceita.");
R("Frango ensopado com legumes", "Frango", 40, 5, 1, ["panela", "congela"], ["frango", "batata", "cenoura"],
  ["6 pedaços de frango (coxa e sobrecoxa)", "2 batatas em cubos", "2 cenouras em rodelas", "1 tomate picado", "1 cebola picada", "2 dentes de alho", "2 xícaras de água quente", "1 colher (sopa) de óleo", "Sal e cheiro-verde a gosto"],
  ["Doure o frango no óleo. Junte a cebola, o alho e o tomate.", "Acrescente a cenoura, a água e o sal. Tampe e cozinhe por 15 minutos.", "Junte a batata e cozinhe por mais 15 minutos, até tudo ficar macio.", "Finalize com cheiro-verde."],
  "O caldo fica ótimo por cima do arroz. Pra bebês maiores, amasse os legumes com o garfo.");
R("Nuggets caseiros de forno", "Frango", 35, 4, 2, ["ajuda", "lancheira", "congela"], ["frango", "ovos"],
  ["500 g de peito de frango moído ou bem picado", "1 cenoura pequena ralada fina", "1 ovo", "3 colheres (sopa) de aveia ou farinha de rosca", "1/2 colher (chá) de sal", "Farinha de rosca ou fubá pra empanar"],
  ["Misture o frango, a cenoura, o ovo, a aveia e o sal até dar liga.", "Modele bolinhas achatadas com as mãos úmidas e passe na farinha de rosca.", "Coloque numa assadeira untada e asse a 200 °C por 20 a 25 minutos, virando na metade."],
  "Criança adora modelar. Congele crus, em camadas separadas por plástico, e asse direto do congelador.");
R("Escondidinho de frango", "Frango", 45, 6, 2, ["congela"], ["frango", "batata", "queijo", "leite"],
  ["3 xícaras de frango desfiado", "1 kg de batata", "1/2 xícara de leite", "1 colher (sopa) de manteiga", "1 xícara de molho de tomate", "1 xícara de queijo ralado", "Sal a gosto"],
  ["Cozinhe as batatas até ficarem bem macias. Amasse com o leite, a manteiga e sal.", "Misture o frango com o molho de tomate.", "Numa assadeira, coloque o frango e cubra com o purê e o queijo.", "Asse a 200 °C por 20 minutos, até dourar."],
  "Use o frango desfiado que já está pronto. Dá pra trocar a batata por mandioca.");
R("Torta de frango de liquidificador", "Frango", 50, 8, 1, ["ajuda", "lancheira"], ["frango", "ovos", "leite", "farinha de trigo"],
  ["3 ovos", "1 e 1/2 xícara de leite", "1/2 xícara de óleo", "2 xícaras de farinha de trigo", "1 colher (sopa) de fermento em pó", "1 colher (chá) de sal", "3 xícaras de frango desfiado temperado", "1 tomate picado e milho a gosto"],
  ["Bata os ovos, o leite, o óleo e o sal no liquidificador. Junte a farinha aos poucos e, por último, o fermento.", "Despeje metade da massa numa assadeira untada.", "Espalhe o recheio de frango, tomate e milho e cubra com o resto da massa.", "Asse a 180 °C por 35 a 40 minutos, até dourar."],
  "Fica boa quente ou fria. Um pedaço na lancheira do dia seguinte resolve o lanche.");
R("Fricassê rápido de frango", "Frango", 35, 6, 1, [], ["frango", "creme de leite", "milho", "queijo"],
  ["3 xícaras de frango desfiado", "1 lata de milho (com metade da água)", "1 caixinha de creme de leite", "2 colheres (sopa) de requeijão", "1 xícara de queijo ralado", "Batata palha pra cobrir", "Sal a gosto"],
  ["Bata o milho, o creme de leite e o requeijão no liquidificador.", "Misture com o frango, acerte o sal e passe pra uma assadeira.", "Cubra com o queijo e leve ao forno a 200 °C por 15 minutos.", "Coloque a batata palha só na hora de servir."],
  "Mais uma saída pro frango desfiado da semana.");

/* ---------- CARNE ---------- */
R("Carne moída refogada", "Carne", 20, 6, 1, ["base", "rapida", "congela"], ["carne moída"],
  ["1 kg de carne moída", "1 cebola picada", "3 dentes de alho", "2 tomates picados", "1 colher (sopa) de óleo", "1 colher (chá) de sal", "Cheiro-verde a gosto"],
  ["Aqueça bem a panela com o óleo. Coloque a carne e deixe dourar sem mexer muito no começo.", "Solte os grumos com a colher. Junte a cebola e o alho.", "Acrescente o tomate e o sal. Cozinhe por 5 minutos e finalize com cheiro-verde."],
  "Preparo-base campeão: vira molho de macarrão, escondidinho e recheio de panqueca. Congele em porções.");
R("Almôndegas ao molho", "Carne", 40, 5, 2, ["ajuda", "congela"], ["carne moída", "ovos", "molho de tomate"],
  ["500 g de carne moída", "1 ovo", "3 colheres (sopa) de farinha de rosca ou aveia", "1/2 cebola ralada", "1/2 colher (chá) de sal", "2 xícaras de molho de tomate", "1/2 xícara de água"],
  ["Misture a carne, o ovo, a farinha, a cebola e o sal. Modele bolinhas.", "Ferva o molho com a água numa panela larga.", "Coloque as almôndegas cruas no molho, tampe e cozinhe por 20 minutos em fogo baixo, virando uma vez."],
  "Cozinhar direto no molho dispensa a fritura e a louça. As crianças fazem as bolinhas.");
R("Picadinho de carne com legumes", "Carne", 40, 5, 1, ["panela", "congela"], ["carne bovina", "batata", "cenoura"],
  ["500 g de carne em cubinhos (patinho, coxão mole ou acém)", "2 batatas em cubinhos", "1 cenoura em cubinhos", "1 cebola picada", "2 dentes de alho", "1 tomate picado", "1 e 1/2 xícara de água quente", "1 colher (sopa) de óleo", "Sal a gosto"],
  ["Doure a carne no óleo. Junte a cebola, o alho e o tomate.", "Acrescente a cenoura, a água e o sal. Cozinhe tampado por 15 minutos.", "Junte a batata e cozinhe mais 15 minutos, até tudo ficar macio e o caldo engrossar."],
  "Corte tudo pequeno: cozinha mais rápido e a criança come sem precisar de faca.");
R("Carne de panela na pressão", "Carne", 60, 6, 1, ["congela"], ["carne bovina", "batata"],
  ["1 kg de acém, músculo ou paleta em pedaços grandes", "1 cebola picada", "3 dentes de alho", "2 tomates picados", "2 xícaras de água quente", "3 batatas em pedaços", "1 colher (sopa) de óleo", "Sal e louro a gosto"],
  ["Doure bem a carne no óleo, na própria panela de pressão. Junte a cebola, o alho e o tomate.", "Acrescente a água, o sal e o louro. Cozinhe por 35 minutos depois de pegar pressão.", "Espere a pressão sair, abra, junte as batatas e cozinhe sem pressão por 15 minutos."],
  "Sobrou? Desfie e use em sanduíche, com arroz ou no escondidinho.");
R("Bife acebolado", "Carne", 15, 4, 1, ["rapida"], ["carne bovina"],
  ["4 bifes finos (alcatra, coxão mole ou contrafilé)", "2 cebolas em rodelas", "2 dentes de alho amassados", "1 colher (sopa) de óleo", "Sal a gosto"],
  ["Tempere os bifes com alho e sal só na hora de fritar.", "Frigideira bem quente com o óleo: frite 2 bifes por vez, uns 2 minutos de cada lado.", "Na mesma frigideira, doure a cebola com uma pitada de sal e coloque por cima dos bifes."],
  "Bife fino e frigideira muito quente: fica macio e pronto em minutos.");
R("Escondidinho de carne moída", "Carne", 45, 6, 2, ["congela"], ["carne moída", "batata", "queijo", "leite"],
  ["3 xícaras de carne moída refogada", "1 kg de batata", "1/2 xícara de leite", "1 colher (sopa) de manteiga", "1 xícara de queijo ralado", "Sal a gosto"],
  ["Cozinhe e amasse as batatas com o leite, a manteiga e sal.", "Espalhe a carne numa assadeira, cubra com o purê e o queijo.", "Asse a 200 °C por 20 minutos, até dourar."],
  "Monte em potes pequenos que vão ao forno e congele: cada um é um jantar pronto.");
R("Panqueca de carne", "Carne", 40, 6, 2, ["ajuda"], ["carne moída", "ovos", "leite", "farinha de trigo", "molho de tomate"],
  ["1 e 1/2 xícara de leite", "2 ovos", "1 xícara de farinha de trigo", "1 pitada de sal", "2 xícaras de carne moída refogada", "1 xícara de molho de tomate", "Queijo ralado a gosto"],
  ["Bata o leite, os ovos, a farinha e o sal no liquidificador.", "Em frigideira antiaderente untada, faça discos finos, dourando dos dois lados.", "Recheie com a carne, enrole e arrume numa assadeira.", "Cubra com o molho e o queijo e leve ao forno por 10 minutos."],
  "A massa aceita meia cenoura ou um punhado de espinafre batido junto: muda a cor e ninguém reclama.");
R("Hambúrguer caseiro", "Carne", 20, 4, 1, ["rapida", "ajuda", "congela"], ["carne moída", "pão"],
  ["500 g de carne moída (com um pouco de gordura)", "1/2 colher (chá) de sal", "4 pães de hambúrguer", "Queijo, alface e tomate a gosto"],
  ["Divida a carne em 4 partes e modele discos da largura do pão, sem apertar demais.", "Salgue só por fora, na hora de ir pra frigideira.", "Frigideira bem quente, 3 minutos de cada lado. Coloque o queijo no final e tampe por 30 segundos.", "Monte no pão com alface e tomate."],
  "Só carne e sal. Congele os discos crus separados por plástico.");

/* ---------- PORCO ---------- */
R("Bisteca de porco na frigideira", "Porco", 20, 4, 1, ["rapida"], ["porco", "limão"],
  ["4 bistecas de porco", "3 dentes de alho amassados", "Suco de 1 limão", "1 colher (sopa) de óleo", "Sal a gosto"],
  ["Tempere as bistecas com alho, limão e sal por 10 minutos.", "Frite em frigideira quente por uns 4 minutos de cada lado, até dourar e ficar bem passada por dentro.", "Deixe descansar 2 minutos antes de servir."],
  "Carne de porco deve ser servida sempre bem passada, sem partes rosadas.");
R("Lombo assado com batata", "Porco", 80, 8, 2, ["panela"], ["porco", "batata", "limão"],
  ["1 kg de lombo de porco", "4 dentes de alho amassados", "Suco de 2 limões", "1 colher (chá) de sal", "5 batatas em pedaços", "2 colheres (sopa) de óleo"],
  ["Fure o lombo com a faca e tempere com alho, limão e sal. Se puder, deixe na geladeira por algumas horas.", "Coloque numa assadeira com as batatas em volta, regadas com o óleo.", "Cubra com papel-alumínio e asse a 200 °C por 50 minutos.", "Tire o papel e asse mais 20 minutos, pra dourar."],
  "As fatias que sobrarem viram sanduíche ou entram no arroz de forno.");
R("Linguiça com legumes na assadeira", "Porco", 45, 5, 1, ["panela", "ajuda"], ["linguiça", "batata", "cenoura", "abobrinha"],
  ["6 linguiças toscana ou de frango", "3 batatas em pedaços", "2 cenouras em rodelas grossas", "1 abobrinha em meias-luas", "1 cebola em gomos", "2 colheres (sopa) de óleo", "Sal a gosto"],
  ["Espalhe os legumes na assadeira, regue com o óleo, tempere com sal e misture.", "Fure as linguiças com um garfo e coloque por cima.", "Asse a 200 °C por 35 a 40 minutos, virando as linguiças na metade."],
  "Zero panela pra lavar. A criança pode misturar os legumes com o óleo usando as mãos limpas.");
R("Costelinha na pressão com mandioca", "Porco", 60, 6, 2, [], ["porco", "mandioca"],
  ["1 kg de costelinha de porco em pedaços", "500 g de mandioca descascada em pedaços", "1 cebola picada", "3 dentes de alho", "Suco de 1 limão", "2 xícaras de água quente", "1 colher (sopa) de óleo", "Sal e cheiro-verde a gosto"],
  ["Tempere a costelinha com alho, limão e sal.", "Doure no óleo, na panela de pressão. Junte a cebola.", "Acrescente a água e cozinhe por 20 minutos depois de pegar pressão.", "Abra, junte a mandioca e cozinhe mais 10 minutos na pressão, até ficar macia."],
  "A mandioca absorve o caldo e fica uma delícia. Confira se não ficou nenhum ossinho solto no prato das crianças.");
R("Arroz com linguiça", "Porco", 30, 6, 1, ["panela"], ["arroz", "linguiça"],
  ["2 xícaras de arroz", "2 linguiças calabresa ou toscana em rodelas", "1 cebola picada", "2 dentes de alho", "1 tomate picado", "4 xícaras de água quente", "Cheiro-verde a gosto"],
  ["Frite a linguiça na própria gordura. Junte a cebola, o alho e o tomate.", "Acrescente o arroz e mexa. Coloque a água e prove o sal (a linguiça já é salgada).", "Cozinhe em fogo baixo até secar. Finalize com cheiro-verde."],
  "Refeição de uma panela só. Uma salada de tomate ao lado fecha o prato.");

/* ---------- OVOS ---------- */
R("Omelete de forno com legumes", "Ovos", 30, 4, 1, ["ajuda", "lancheira"], ["ovos", "queijo"],
  ["6 ovos", "1 xícara de legumes picados (cenoura ralada, abobrinha, tomate, o que tiver)", "1/2 xícara de queijo ralado", "2 colheres (sopa) de leite", "1/2 colher (chá) de sal"],
  ["Bata os ovos com o leite e o sal.", "Misture os legumes e o queijo.", "Despeje numa assadeira pequena untada e asse a 180 °C por 20 a 25 minutos, até firmar."],
  "Corte em quadrados: serve no jantar e na lancheira do dia seguinte.");
R("Ovos mexidos cremosos", "Ovos", 8, 2, 1, ["rapida"], ["ovos"],
  ["4 ovos", "1 colher (sopa) de manteiga", "1 colher (sopa) de leite", "Sal a gosto"],
  ["Bata os ovos com o leite e uma pitada de sal.", "Derreta a manteiga em fogo baixo, coloque os ovos e mexa devagar com uma espátula.", "Desligue quando ainda estiverem úmidos: eles terminam de cozinhar no calor da frigideira."],
  "Fogo baixo é o segredo. Pra crianças pequenas, deixe cozinhar até firmar bem.");
R("Ovo cozido no ponto", "Ovos", 15, 4, 1, ["rapida", "lancheira"], ["ovos"],
  ["4 ovos", "Água até cobrir"],
  ["Coloque os ovos na panela com água fria.", "Quando ferver, conte 10 minutos pra gema firme.", "Passe pra água fria por 2 minutos: a casca sai fácil."],
  "Cozinhe vários de uma vez. Na geladeira, com casca, duram alguns dias e resolvem lanche e salada.");
R("Cuscuz com ovo", "Ovos", 15, 3, 1, ["rapida"], ["ovos", "fubá"],
  ["1 e 1/2 xícara de flocão de milho", "3/4 de xícara de água", "1/2 colher (chá) de sal", "3 ovos", "1 colher (sopa) de manteiga"],
  ["Misture o flocão com a água e o sal. Deixe hidratar por 5 minutos.", "Cozinhe na cuscuzeira por uns 8 minutos (ou num escorredor de metal sobre panela com água fervendo, tampado).", "Faça os ovos mexidos ou fritos na manteiga e sirva por cima."],
  "Café da manhã, lanche ou jantar leve. Um pouco de queijo por cima agrada às crianças.");
R("Farofa de ovo", "Ovos", 12, 4, 1, ["rapida"], ["ovos"],
  ["3 ovos", "1 cebola pequena picada", "1 e 1/2 xícara de farinha de mandioca ou de milho", "2 colheres (sopa) de manteiga", "Sal e cheiro-verde a gosto"],
  ["Refogue a cebola na manteiga.", "Quebre os ovos, mexa até cozinhar em pedaços.", "Junte a farinha aos poucos, mexendo, até ficar soltinha. Acerte o sal."],
  "Acompanha arroz e feijão quando não tem carne em casa.");

/* ---------- LEGUMES ---------- */
R("Purê de batata", "Legumes", 30, 6, 1, [], ["batata", "leite"],
  ["1 kg de batata descascada em pedaços", "1/2 xícara de leite morno", "2 colheres (sopa) de manteiga", "Sal a gosto"],
  ["Cozinhe a batata em água com sal até desmanchar no garfo.", "Escorra bem e amasse ainda quente.", "Misture a manteiga e o leite aos poucos, até ficar cremoso."],
  "Metade batata, metade cenoura ou abóbora: muda a cor e aumenta os legumes do prato.");
R("Legumes assados", "Legumes", 40, 6, 1, ["base", "ajuda"], ["batata", "cenoura", "abobrinha"],
  ["2 batatas", "2 cenouras", "1 abobrinha", "1 cebola", "2 colheres (sopa) de óleo ou azeite", "Sal e orégano a gosto"],
  ["Corte tudo em pedaços do mesmo tamanho.", "Espalhe numa assadeira grande, sem amontoar. Regue com o óleo, tempere e misture.", "Asse a 200 °C por 30 a 35 minutos, mexendo na metade."],
  "Assadeira cheia demais cozinha no vapor e não doura. Use duas se precisar.");
R("Abobrinha refogada", "Legumes", 10, 4, 1, ["rapida"], ["abobrinha"],
  ["2 abobrinhas em meias-luas", "2 dentes de alho", "1 colher (sopa) de óleo", "Sal a gosto"],
  ["Refogue o alho no óleo.", "Junte a abobrinha e o sal. Mexa em fogo alto por 4 a 5 minutos.", "Desligue quando estiver macia, mas ainda firme."],
  "Um ovo mexido junto no final transforma em refeição rápida.");
R("Couve refogada", "Legumes", 8, 4, 1, ["rapida"], ["couve"],
  ["1 maço de couve em tiras bem finas", "3 dentes de alho", "1 colher (sopa) de óleo", "Sal a gosto"],
  ["Refogue o alho no óleo até começar a dourar.", "Junte a couve e o sal. Mexa por 1 a 2 minutos, só até murchar.", "Sirva na hora."],
  "Enrole as folhas como um charuto pra cortar fino. Picada bem miúda, some no feijão.");
R("Bolinho de legumes de forno", "Legumes", 35, 4, 2, ["ajuda", "lancheira"], ["cenoura", "abobrinha", "ovos", "queijo"],
  ["1 cenoura ralada", "1 abobrinha ralada e espremida", "2 ovos", "1/2 xícara de queijo ralado", "4 colheres (sopa) de aveia ou farinha de trigo", "1/2 colher (chá) de sal"],
  ["Esprema bem a abobrinha num pano pra tirar a água.", "Misture todos os ingredientes.", "Coloque colheradas numa assadeira untada, achatando um pouco.", "Asse a 200 °C por 20 a 25 minutos, virando na metade."],
  "Bom pra criança que recusa legume no prato. Vai bem na lancheira.");
R("Salada de batata com cenoura", "Legumes", 30, 6, 1, [], ["batata", "cenoura", "ovos"],
  ["4 batatas em cubos", "2 cenouras em cubos", "2 ovos cozidos picados", "2 colheres (sopa) de azeite ou maionese", "Suco de 1/2 limão", "Sal e cheiro-verde a gosto"],
  ["Cozinhe a batata e a cenoura em água com sal até ficarem macias, sem desmanchar.", "Escorra e deixe esfriar.", "Misture com os ovos, o azeite, o limão e o cheiro-verde."],
  "Se levar maionese, mantenha sempre na geladeira e não deixe horas na mesa.");

/* ---------- MASSAS ---------- */
R("Macarrão ao molho de tomate caseiro", "Massas", 25, 5, 1, ["rapida"], ["macarrão", "tomate"],
  ["500 g de macarrão", "6 tomates bem maduros picados (ou 1 lata de tomate pelado)", "1 cebola picada", "3 dentes de alho", "2 colheres (sopa) de óleo ou azeite", "1 pitada de açúcar", "Sal a gosto"],
  ["Refogue a cebola e o alho no óleo. Junte os tomates, o sal e o açúcar.", "Cozinhe tampado por 15 minutos, amassando os tomates. Se quiser liso, bata no liquidificador.", "Cozinhe o macarrão em bastante água com sal, escorra e misture ao molho."],
  "Faça o dobro do molho e congele. Uma cenoura ralada cozida junto deixa o molho menos ácido.");
R("Macarrão com carne moída", "Massas", 25, 6, 1, ["rapida"], ["macarrão", "carne moída", "molho de tomate"],
  ["500 g de macarrão", "2 xícaras de carne moída refogada", "2 xícaras de molho de tomate", "Queijo ralado a gosto"],
  ["Aqueça a carne com o molho e deixe ferver por 5 minutos.", "Cozinhe o macarrão em água com sal e escorra.", "Misture tudo e sirva com queijo ralado."],
  "Com a carne moída da semana pronta, o jantar sai em 15 minutos.");
R("Macarrão de uma panela só com frango", "Massas", 25, 5, 1, ["panela", "rapida"], ["macarrão", "frango", "molho de tomate"],
  ["300 g de macarrão curto (parafuso ou penne)", "2 xícaras de frango desfiado ou em cubinhos", "1 cebola picada", "2 dentes de alho", "1 xícara de molho de tomate", "3 xícaras de água quente", "1 colher (sopa) de óleo", "Sal a gosto"],
  ["Refogue a cebola e o alho no óleo. Se o frango estiver cru, doure agora.", "Junte o molho, a água, o sal e o macarrão cru.", "Cozinhe em fogo médio, mexendo de vez em quando, por uns 12 minutos, até o macarrão ficar macio e o molho encorpar. Se usar frango já desfiado, junte no final."],
  "Só uma panela pra lavar. Se secar antes do macarrão cozinhar, junte mais um pouco de água quente.");
R("Macarrão com brócolis e alho", "Massas", 20, 4, 1, ["rapida"], ["macarrão", "brócolis"],
  ["400 g de macarrão", "1 maço de brócolis em flores pequenas", "5 dentes de alho fatiados", "4 colheres (sopa) de azeite ou óleo", "Sal e queijo ralado a gosto"],
  ["Cozinhe o macarrão em água com sal. Nos últimos 4 minutos, junte o brócolis na mesma panela.", "Escorra, guardando 1/2 xícara da água.", "Doure o alho no azeite, junte o macarrão com o brócolis e um pouco da água do cozimento. Misture e sirva com queijo."],
  "Macarrão e legume cozidos na mesma água: uma panela a menos.");

/* ---------- SOPAS E CALDOS ---------- */
R("Sopa de legumes com macarrão", "Sopas e caldos", 35, 6, 1, ["panela", "congela"], ["batata", "cenoura", "macarrão"],
  ["2 batatas em cubos", "2 cenouras em cubos", "1 chuchu ou abobrinha em cubos", "1 cebola picada", "2 dentes de alho", "1,5 litro de água ou caldo do cozimento do frango", "1 xícara de macarrão pequeno", "1 colher (sopa) de óleo", "Sal e cheiro-verde a gosto"],
  ["Refogue a cebola e o alho no óleo. Junte os legumes e mexa por 2 minutos.", "Acrescente a água e o sal. Cozinhe por 15 minutos.", "Junte o macarrão e cozinhe até ficar macio. Finalize com cheiro-verde."],
  "Um punhado de frango desfiado ou carne moída transforma em refeição completa.");
R("Canja de galinha", "Sopas e caldos", 40, 6, 1, ["panela", "congela"], ["frango", "arroz", "cenoura"],
  ["2 peitos de frango", "1/2 xícara de arroz", "2 cenouras em cubinhos", "1 batata em cubinhos", "1 cebola picada", "2 dentes de alho", "2 litros de água", "Sal e cheiro-verde a gosto"],
  ["Cozinhe o frango na água com a cebola, o alho e o sal por 20 minutos. Retire e desfie.", "No mesmo caldo, coloque o arroz, a cenoura e a batata. Cozinhe por 15 minutos.", "Volte o frango pra panela, acerte o sal e finalize com cheiro-verde."],
  "Comida de colo. Boa pros dias de criança resfriada ou de mãe cansada.");
R("Creme de abóbora", "Sopas e caldos", 30, 5, 1, ["congela"], ["abóbora"],
  ["500 g de abóbora descascada em cubos", "1 batata em cubos", "1 cebola picada", "2 dentes de alho", "3 xícaras de água", "1 colher (sopa) de óleo ou manteiga", "Sal a gosto"],
  ["Refogue a cebola e o alho. Junte a abóbora, a batata, a água e o sal.", "Cozinhe por 20 minutos, até tudo ficar bem macio.", "Bata no liquidificador com cuidado (líquido quente: tampe e segure com um pano) e volte à panela pra aquecer."],
  "Sirva com torradas ou queijo em cubinhos por cima. Um fio de creme de leite deixa mais suave.");

/* ---------- LANCHES ---------- */
R("Panqueca de banana e aveia", "Lanches", 15, 2, 1, ["rapida", "lancheira", "ajuda"], ["banana", "ovos", "aveia"],
  ["2 bananas maduras", "2 ovos", "4 colheres (sopa) de aveia", "1 pitada de canela (opcional)"],
  ["Amasse as bananas com um garfo.", "Misture os ovos, a aveia e a canela.", "Em frigideira antiaderente levemente untada, faça panquecas pequenas em fogo baixo, 2 minutos de cada lado."],
  "Sem açúcar e com três ingredientes. A criança amassa a banana e mistura tudo.");
R("Bolo de cenoura simples", "Lanches", 55, 12, 1, ["lancheira", "ajuda"], ["cenoura", "ovos", "farinha de trigo"],
  ["3 cenouras médias picadas", "3 ovos", "3/4 de xícara de óleo", "1 e 1/2 xícara de açúcar", "2 xícaras de farinha de trigo", "1 colher (sopa) de fermento em pó"],
  ["Bata a cenoura, os ovos e o óleo no liquidificador até ficar liso.", "Numa tigela, misture com o açúcar e a farinha. Por último, o fermento.", "Asse em forma untada, a 180 °C, por uns 40 minutos. Faça o teste do palito."],
  "Sem cobertura, vai bem na lancheira. Corte em quadrados e congele os que sobrarem.");
R("Crepioca de queijo", "Lanches", 8, 1, 1, ["rapida", "lancheira"], ["ovos", "tapioca", "queijo"],
  ["1 ovo", "2 colheres (sopa) de goma de tapioca", "1 colher (sopa) de água", "1 pitada de sal", "Queijo a gosto"],
  ["Misture o ovo, a tapioca, a água e o sal com um garfo.", "Despeje numa frigideira antiaderente quente e espalhe.", "Quando firmar, vire, coloque o queijo, dobre ao meio e espere derreter."],
  "Fica pronta em 5 minutos. Recheio de frango desfiado também funciona.");
R("Bolinho de arroz de forno", "Lanches", 30, 4, 1, ["lancheira", "ajuda"], ["arroz", "ovos", "queijo"],
  ["2 xícaras de arroz cozido (de ontem)", "1 ovo", "1/2 xícara de queijo ralado", "2 colheres (sopa) de farinha de trigo", "Cheiro-verde e sal a gosto"],
  ["Misture tudo até dar liga.", "Modele bolinhas com as mãos úmidas e arrume numa assadeira untada.", "Asse a 200 °C por 20 minutos, virando na metade, até dourar."],
  "Sobra de arroz vira lanche. Sem fritura e sem sujeira no fogão.");
R("Sanduíche de frango desfiado", "Lanches", 10, 4, 1, ["rapida", "lancheira"], ["pão", "frango", "requeijão", "cenoura"],
  ["1 e 1/2 xícara de frango desfiado", "2 colheres (sopa) de requeijão", "1/2 cenoura ralada fina", "8 fatias de pão de forma", "Sal a gosto"],
  ["Misture o frango, o requeijão e a cenoura. Acerte o sal.", "Recheie os pães.", "Se quiser, doure na frigideira ou na sanduicheira."],
  "A pasta dura até 3 dias na geladeira, bem tampada. Monte o sanduíche só na hora.");
R("Biscoito de aveia e banana", "Lanches", 25, 4, 1, ["lancheira", "ajuda"], ["banana", "aveia"],
  ["2 bananas bem maduras", "1 e 1/2 xícara de aveia em flocos", "Uva-passa ou gotas de chocolate (opcional)"],
  ["Amasse as bananas e misture com a aveia.", "Faça bolinhas, achate e arrume numa assadeira untada.", "Asse a 180 °C por 15 a 18 minutos, até dourar por baixo."],
  "Dois ingredientes. Ótima primeira receita pra criança fazer quase sozinha (o forno é com você).");
R("Vitamina de banana", "Lanches", 5, 2, 1, ["rapida", "ajuda"], ["banana", "leite", "aveia"],
  ["2 bananas maduras", "2 copos de leite gelado", "2 colheres (sopa) de aveia"],
  ["Bata tudo no liquidificador até ficar cremoso.", "Sirva na hora."],
  "Banana bem madura dispensa açúcar. Congelar a banana em rodelas deixa a vitamina mais cremosa.");
})();
