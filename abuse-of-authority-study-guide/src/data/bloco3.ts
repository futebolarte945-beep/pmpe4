import type { Bloco } from "./tipos";

export const bloco3: Bloco = {
  id: "bloco-3",
  numero: "Bloco 03",
  titulo: "Crimes em espécie — Parte I",
  intervalo: "Arts. 9º ao 20º",
  subtitulo: "Ataques à liberdade de ir e vir · dignidade e garantias do preso",
  descricao:
    "O coração penal da lei: dez tipos que giram em torno da prisão, do interrogatório e da custódia. As penas oscilam entre dois patamares — 6 meses a 2 anos ou 1 a 4 anos — e é exatamente aí que as bancas plantam as armadilhas.",
  secoes: [
    { rotulo: "§ 3.1 · A liberdade atacada", ate: "arts. 9º, 10 e 12" },
    { rotulo: "§ 3.2 · Dignidade e garantias do custodiado", ate: "arts. 13 a 20" },
  ],
  grupos: [
    {
      id: "art-9",
      ref: "Art. 9º",
      nome: "Prisão ilegal por decreto + o juiz omisso",
      contexto:
        "O tipo-símbolo da lei: privar a liberdade fora das hipóteses legais — e, no parágrafo único, o magistrado que não age quando deveria.",
      dispositivo: [
        "Art. 9º Decretar medida de privação da liberdade em manifesta desconformidade com as hipóteses legais: Pena - detenção, de 1 (um) a 4 (quatro) anos, e multa.",
        "Parágrafo único. Incorre na mesma pena a autoridade judiciária que, dentro de prazo razoável, deixar de: I - relaxar a prisão manifestamente ilegal; II - substituir a prisão preventiva por medida cautelar diversa ou de conceder liberdade provisória, quando manifestamente cabível; III - deferir liminar ou ordem de habeas corpus, quando manifestamente cabível.",
      ],
      notaDispositivo:
        "Texto vigente por promulgação das partes vetadas. Palavra-chave da lei inteira: «MANIFESTA» — desconformidade escancarada, não simples discordância jurídica (conexão direta com o art. 1º, § 2º).",
      pena: "Detenção 1–4 anos + multa",
      bancas: ["CEBRASPE", "FCC", "FGV"],
      cai: [
        "Caput: decretação de medida de privação de liberdade em **manifesta desconformidade** com as hipóteses legais — «manifesta» é requisito do tipo; erro razoável de julgamento não basta.",
        "Parágrafo único: crime de **omissão própria da autoridade JUDICIÁRIA**, em prazo razoável, em três hipóteses: **relaxar prisão manifestamente ilegal**, **substituir preventiva / conceder LP manifestamente cabível** e **deferir liminar ou HC manifestamente cabível**.",
        "Pena **1 a 4 anos + multa** — o patamar mais comum da lei (6 tipos dividem essa moldura neste bloco).",
        "Doutrina e provas: o caput alcança a autoridade que **decreta** a medida; o delegado, via de regra, não decreta medida cautelar de privação — ponto de discussão que a FGV adora aprofundar.",
      ],
      pegadinha: [
        "Suprimir o «**manifesta**»: «decretar medida de privação da liberdade em desconformidade com as hipóteses legais» — **ERRADO**; a lei exige a desconformidade manifesta.",
        "Atribuir o parágrafo único a **delegado ou promotor** — o sujeito é a autoridade **judiciária**.",
        "Trocar «substituir a preventiva por cautelar diversa» por «revogar a preventiva» ou «anular a prisão» — os verbos do tipo são taxativos.",
        "«Prazo de 24 horas para o juiz decidir» — o tipo fala em **prazo razoável**; o número redondo é isca.",
      ],
      exemplo: [
        "**Caput:** juiz decreta preventiva de réu primário, acusado de furto simples de R$ 300, com nenhum fundamento concreto — preventiva manifestamente descabida, com finalidade de prejudicar o investigado.",
        "**Parágrafo único:** tribunal mantém custodiado, por meses, preso cuja prisão já foi reconhecida como ilegal em sessão, sem relaxá-la — omissão no inciso I.",
      ],
      macete:
        "O juiz omisso responde pelo triplo **«R.S.L.»**: **R**elaxar, **S**ubstituir (ou LP), **L**iminar/HC. E a senha do artigo inteiro: **«manifesta ou nada feito»** — sem manifesta desconformidade, o tipo não se fecha.",
    },
    {
      id: "art-10",
      ref: "Art. 10",
      nome: "Condução coercitiva descabida",
      contexto:
        "Nasceu do debate sobre conduções espetaculosas na Operação Lava Jato — e da liminar do STF que restringiu o instituto.",
      dispositivo: [
        "Art. 10. Decretar a condução coercitiva de testemunha ou investigado manifestamente descabida ou sem prévia intimação de comparecimento ao juízo: Pena - detenção, de 1 (um) a 4 (quatro) anos, e multa.",
      ],
      pena: "Detenção 1–4 anos + multa",
      bancas: ["FCC", "CEBRASPE", "AOCP"],
      cai: [
        "Duas alternativas típicas: condução **manifestamente descabida** OU condução **sem prévia intimação** de comparecimento.",
        "Sujeito passivo: **testemunha ou investigado** — memorize o par.",
        "Contexto jurisprudencial cobrado junto: STF (HC 127.373, liminar/2018) condicionou a condução do investigado à **prévia intimação e não comparecimento** — a lei criminalizou o excesso.",
        "Pena: **1 a 4 anos + multa** (patamar alto).",
      ],
      pegadinha: [
        "«A lei vedou toda condução coercitiva» — **ERRADO**: ela criminaliza apenas a descabida ou a sem prévia intimação.",
        "Trocar «testemunha ou investigado» por «réu condenado» ou «qualquer cidadão» — o rol do sujeito passivo é fechado.",
        "«A intimação pode ser presumida pela fama da operação» — a exigência é de **prévia intimação** formal de comparecimento.",
      ],
      exemplo: [
        "Juiz determina a condução coercitiva de investigado que **jamais foi intimado** a depor, com escolta e algemas diante de câmeras previamente avisadas → art. 10, segunda modalidade.",
        "Testemunha intimada duas vezes e ausente sem justificativa → condução regular; **não há crime** (falta o elemento típico).",
      ],
      macete:
        "**«Conduzir sem intimar é conduzir-se ao banco dos réus»**. Antes do camburão: a) está intimado? b) a condução é cabível? Duas perguntas que salvam a autoridade — e aquestão de prova.",
    },
    {
      id: "art-11-14-17",
      ref: "Arts. 11, 14 e 17",
      nome: "Os artigos vetados do bloco",
      contexto:
        "Nunca vigoraram — mas ganham vida nas alternativas erradas. Reconhecê-los é pontuação garantida.",
      dispositivo: [
        "Art. 11. (VETADO).  ·  Art. 14. (VETADO).  ·  Art. 17. (VETADO).",
      ],
      notaDispositivo:
        "Regra de sobrevivência: artigo marcado como (VETADO) jamais integrou a lei. Outros vetos foram derrubados pelo Congresso (promulgação) — esses três não. Veja o mapa completo de vetos ao fim deste bloco.",
      cai: [
        "Saber **quais artigos não vigoram** elimina distratores: no bloco dos crimes contra a liberdade, são os arts. **11, 14 e 17**.",
        "Banca recicla texto de projeto como se vigente: se a alternativa citar esses números com dispositivo bonito, está errada.",
      ],
      pegadinha: [
        "«O art. 11 da Lei 13.869/2019 dispõe que...» — qualquer enunciado assim nasce morto: o artigo **não vigora**.",
        "Confundir veto «total» com veto «derrubado»: arts. 3º, 9º, 13 (III), 15 (§ único), 16, 20, 30, 32, 38 e 43 vigoram por **promulgação** — 11, 14 e 17, não.",
      ],
      exemplo: [
        "Prova estilo Cebraspe: «segundo o art. 11 da Lei do Abuso de Autoridade, configura crime...» → item **errado** pelo simples fato da inexistência do dispositivo.",
      ],
      macete:
        "**«11, 14, 17 — a escada quebrada do abuso»**: de três em três, três degraus que não sustentam ninguém. No mapa geral, lembre também de **26, 34 e 35** (vetos totais).",
    },
    {
      id: "art-12",
      ref: "Art. 12",
      nome: "A prisão que precisa ser comunicada",
      contexto:
        "Cinco deveres de comunicação e soltura em um único artigo — o mais denso em números deste bloco.",
      dispositivo: [
        "Art. 12. Deixar injustificadamente de comunicar prisão em flagrante à autoridade judiciária no prazo legal: Pena - detenção, de 6 (seis) meses a 2 (dois) anos, e multa.",
        "Parágrafo único. Incorre na mesma pena quem: I - deixa de comunicar, imediatamente, a execução de prisão temporária ou preventiva à autoridade judiciária que a decretou; II - deixa de comunicar, imediatamente, a prisão de qualquer pessoa e o local onde se encontra à sua família ou à pessoa por ela indicada; III - deixa de entregar ao preso, no prazo de 24 (vinte e quatro) horas, a nota de culpa, assinada pela autoridade, com o motivo da prisão e os nomes do condutor e das testemunhas; IV - prolonga a execução de pena privativa de liberdade, de prisão temporária, de prisão preventiva, de medida de segurança ou de internação, deixando, sem motivo justo e excepcionalíssimo, de executar o alvará de soltura imediatamente após recebido ou de promover a soltura do preso quando esgotado o prazo judicial ou legal.",
      ],
      notaDispositivo:
        "Conexões obrigatórias: o «prazo legal» do caput é o das 24 horas do art. 306 do CPP; os incisos I e II foram reforçados pela Lei 14.245/2021 (Lei Mariana Ferrer); o inciso IV conversa com a LEP e com a Lei da Prisão Temporária.",
      pena: "Detenção 6 meses–2 anos + multa",
      bancas: ["VUNESP", "AOCP", "FCC"],
      cai: [
        "Caput: **não comunicar** o flagrante ao juiz **no prazo legal** (24h — CPP, art. 306) e de forma injustificada.",
        "**PU, I:** execução de preventiva/temporária deve ser comunicada **IMEDIATAMENTE** ao juiz que decretou.",
        "**PU, II:** comunicar a prisão e o local à **família ou pessoa indicada** — imediatamente (direito do preso, art. 5º, LXIII, CF).",
        "**PU, III:** **nota de culpa em 24 horas**, assinada pela autoridade, com motivo da prisão + nomes do **condutor e das testemunhas** (o conteúdo da nota é cobrado palavra por palavra).",
        "**PU, IV:** o crime do **carcereiro relutante**: prolongar execução/internação, não executar **alvará de soltura imediatamente** ou não soltar ao fim do prazo — salvo motivo justo e **excepcionalíssimo**.",
        "Pena **6 meses a 2 anos + multa** — patamar baixo; memorizar o contraste com o art. 9º (1–4 anos).",
      ],
      pegadinha: [
        "Nota de culpa: trocam **24 horas** por 48 ou 72 — e suprimem «assinada pela autoridade».",
        "«Alvará executado em prazo razoável» — **ERRADO**: a lei exige execução **IMEDIATA** após o recebimento.",
        "«Motivo plausível permite segurar o preso após o fim do prazo» — o texto pede motivo justo **e excepcionalíssimo**.",
        "Atribuir o caput a qualquer agente: a comunicação do flagrante é dever da **autoridade policial**; já o inciso IV fala com a autoridade **responsável pela custódia** (diretor do estabelecimento).",
        "Trocar «família ou pessoa por ela indicada» por «apenas o cônjuge» — distrator Vunesp.",
      ],
      exemplo: [
        "**PU, IV em cena:** diretor de presídio recebe alvará às 10h e mantém o custodiado até o dia seguinte «porque o plantão está curto» — conduta típica; a escala de pessoal não é motivo excepcionalíssimo.",
        "**PU, II:** policiais prendem em flagrante às 22h e só deixam o preso avisar a família após o interrogatório da tarde seguinte — conduta típica (a comunicação exigida é imediata).",
      ],
      macete:
        "**«P.N.A.» na ordem da prisão**: **P**rendeu, comunica (juiz e família, sem demora) · **N**ota de culpa em **24h** (assinada, com motivo + nomes) · **A**lvará caiu? Solta **JÁ**. Caput do artigo = 24 horas; tudo o mais grita «imediatamente».",
    },
    {
      id: "art-13",
      ref: "Art. 13",
      nome: "Expor e constranger o custodiado",
      contexto:
        "O tipo que matou a «coletiva de imprensa com preso algemado» — e que conversa de perto com a Lei de Tortura.",
      dispositivo: [
        "Art. 13. Constranger o preso ou o detento, mediante violência, grave ameaça ou redução de sua capacidade de resistência, a: I - exibir-se ou ter seu corpo ou parte dele exibido à curiosidade pública; II - submeter-se a situação vexatória ou a constrangimento não autorizado em lei; III - produzir prova contra si mesmo ou contra terceiro:",
        "Pena - detenção, de 1 (um) a 4 (quatro) anos, e multa, sem prejuízo da pena cominada à violência.",
      ],
      notaDispositivo:
        "O inciso III vigora por promulgação de trecho vetado. A cláusula «sem prejuízo da pena cominada à violência» legitima concurso MATERIAL (soma de penas) — cobrança certa.",
      pena: "Detenção 1–4 anos + multa",
      bancas: ["CEBRASPE", "FGV", "AOCP"],
      cai: [
        "Meio de execução obrigatório: **violência, grave ameaça ou redução da capacidade de resistência** (drogas, privação de sono, humilhação prolongada...).",
        "Três fins alternativos: **exibir o corpo à curiosidade pública** (I), **situação vexatória não autorizada em lei** (II), **produzir prova contra si ou terceiro** (III) — autoflagelação forçada.",
        "«Sem prejuízo da pena cominada à violência» → **concurso material de crimes**: abuso + lesão/violência somam penas.",
        "Tema quente: divulgação de fotos/vídeos de custodiados por perfis institucionais pode enquadrar no inciso I — discussão destacada pela doutrina e pelo CNJ.",
        "Cuidado com a fronteira: se houver grave sofrimento + finalidade da tortura, prevalece a **Lei 9.455/97** (conflito aparente de normas).",
      ],
      pegadinha: [
        "«A imprensa que filma o preso comete o crime» — o sujeito é o **agente público** que constrange/expõe; a atuação espontânea da mídia, por si, não basta.",
        "«A pena da violência é absorvida» — **ERRADO**: a cláusula final manda cumular.",
        "«Exigem resultado físico» — crime **formal**; basta o constrangimento aos fins típicos.",
        "Trocar «redução de sua capacidade de resistência» por «grave sofrimento físico» — tecnologia típica distinta da tortura.",
      ],
      exemplo: [
        "Delegado exibe detento algemado em entrevista coletiva, chamando-o de «monstro» antes de qualquer condenação → inciso I (exposição à curiosidade pública).",
        "Preso mantido acordado por 40 horas até «confessar» → redução da capacidade de resistência para produzir prova contra si (III) — e possível tortura em concurso.",
      ],
      macete:
        "Preso **não é troféu, não é capacho e não é fonte de prova** — **E.V.P.**: **E**xposição pública, **V**exame, **P**rova forçada. E grave a cláusula: «a violência **soma**» (concurso material).",
    },
    {
      id: "art-15",
      ref: "Art. 15",
      nome: "Sigilo profissional, silêncio e advogado presente",
      contexto:
        "Escudo triplo no interrogatório: quem tem sigilo não depõe sob ameaça; quem cala não é pressionado; quem pede patrono espera por ele.",
      dispositivo: [
        "Art. 15. Constranger a depor, sob ameaça de prisão, pessoa que, em razão de função, ministério, ofício ou profissão, deva guardar segredo ou resguardar sigilo: Pena - detenção, de 1 (um) a 4 (quatro) anos, e multa.",
        "Parágrafo único. Incorre na mesma pena quem prossegue com o interrogatório: I - de pessoa que tenha decidido exercer o direito ao silêncio; ou II - de pessoa que tenha optado por ser assistida por advogado ou defensor público, sem a presença de seu patrono.",
      ],
      notaDispositivo:
        "O parágrafo único é o destino das provas pós-2019: protege expressamente o **nemo tenetur se detegere** (art. 5º, LXIII, CF) e a assistência material por defensor.",
      pena: "Detenção 1–4 anos + multa",
      bancas: ["CEBRASPE", "FCC", "FGV"],
      cai: [
        "Caput: constranger a depor **sob ameaça de prisão** quem deve guardar **segredo/sigilo** por função, ministério, ofício ou profissão (advogados, médicos, sacerdotes, jornalistas quanto à fonte...).",
        "**PU, I:** prosseguir o interrogatório após o exercício do **direito ao silêncio** — mesmo sem ameaça, a continuação pressionante é típica.",
        "**PU, II:** prosseguir o interrogatório de quem optou por advogado/defensor **sem a presença do patrono**.",
        "Conexão com a Lei 8.906/94: violar prerrogativas do advogado também virou crime pelo art. 43 desta lei (art. 7º-B do EOAB) — ler os dois juntos.",
      ],
      pegadinha: [
        "«Pode insistir nas perguntas após o silêncio, desde que sem ameaça» — **ERRADO**: o tipo pune o simples prosseguimento.",
        "«Interrogatório sem advogado só anula a prova» — além da nulidade, é **crime** (PU, II).",
        "«Ameaça de multa ou de constrangimento basta para o caput» — o elemento típico é a ameaça **de prisão**.",
        "«Testemunha sigilosa pode ser presa por recusar depoimento» — a recusa fundamentada é direito; ameaçá-la de prisão configura o caput.",
      ],
      exemplo: [
        "Policial ameaça prender **advogado** que se recusa a revelar a localização de provas do cliente → caput (sigilo profissional).",
        "Interrogado diz: «só falo na presença do meu defensor»; o inquérito continua com perguntas e gravação → PU, II.",
      ],
      macete:
        "Interrogatório para **nos três S**: **S**igilo profissional ameaçado, **S**ilêncio exercido, **S**olicitado o advogado (sem patrono, ninguém pergunta mais nada). «Parou para pensar? Parou de perguntar.»",
    },
    {
      id: "art-15a",
      ref: "Art. 15-A",
      nome: "Violência institucional (Lei 14.321/2022)",
      contexto:
        "O tipo mais novo da lei — resposta direta ao caso Mariana Ferrer e probável astro das provas de 2026.",
      dispositivo: [
        "Art. 15-A. Submeter a vítima de infração penal ou a testemunha de crimes violentos a procedimentos desnecessários, repetitivos ou invasivos, que a leve a reviver, sem estrita necessidade: I - a situação de violência; ou II - outras situações potencialmente geradoras de sofrimento ou estigmatização: Pena - detenção, de 3 (três) meses a 1 (um) ano, e multa.",
        "§ 1º Se o agente público permitir que terceiro intimide a vítima de crimes violentos, gerando indevida revitimização, aplica-se a pena aumentada de 2/3 (dois terços).",
        "§ 2º Se o agente público intimidar a vítima de crimes violentos, gerando indevida revitimização, aplica-se a pena em dobro.",
      ],
      notaDispositivo:
        "Incluído pela Lei 14.321/2022. É a única figura da lei batizada expressamente de «violência institucional» — banca cobra esse rótulo no enunciado.",
      pena: "Detenção 3 meses–1 ano + multa",
      bancas: ["CEBRASPE", "FCC", "FGV", "AOCP", "VUNESP"],
      cai: [
        "Sujeitos passivos: **vítima de infração penal** ou **testemunha de crimes violentos** — o rol NÃO alcança o investigado/réu.",
        "Procedimentos **desnecessários, repetitivos ou invasivos** que façam reviver, **sem estrita necessidade**, a violência ou situações geradoras de sofrimento/estigmatização.",
        "**Menor pena da lei: 3 meses a 1 ano** + multa — números trocados exaustivamente com «1 a 4 anos».",
        "**§ 1º → permitir que TERCEIRO intimide = aumento de 2/3. § 2º → o PRÓPRIO agente intimidar = pena em DOBRO.** A troca 2/3 ↔ dobro é a pegadinha nº 1 do tipo.",
        "Perspectiva de gênero: o tipo protege sobretudo vítimas de crimes sexuais e violentos contra a **revitimização processual**.",
      ],
      pegadinha: [
        "Inverter § 1º e § 2º — memorize: **terceiro, dois terços; ele mesmo, dobro**.",
        "«Aplica-se a vítimas e testemunhas de qualquer crime» — o texto fala em **crimes violentos** no inciso da testemunha; cuidado com generalizações.",
        "«Pena de 6 meses a 2 anos» — é **3 meses a 1 ano**.",
        "«Advogado que humilha a vítima responde pelo art. 15-A» — o sujeito ativo é **agente público**; o advogado agressor enseja o § 1º (se o agente permitir) e sanções próprias.",
      ],
      exemplo: [
        "Em audiência, o magistrado permite que a defesa repita, por horas e sem pertinência, perguntas constrangedoras sobre a roupa e a vida sexual da vítima de estupro → caput + § 1º (permitiu a intimidação por terceiro).",
        "Delegado diz à vítima que «vai se arrepender se sustentar a queixa» → § 2º, pena em dobro.",
      ],
      macete:
        "Proteção **«3 a 1»**: pena de **3** meses a **1** ano cobrindo vítima e testemunha. Aumentos: **«Terceiro = 2/3; Eu mesmo = 2x»** — quem deixa, paga dois terços; quem faz, paga em dobro.",
    },
    {
      id: "art-16",
      ref: "Art. 16",
      nome: "A identificação obrigatória do agente",
      contexto:
        "Ninguém é preso ou interrogado por fantasmas: autoridade se apresenta, pelo nome verdadeiro.",
      dispositivo: [
        "Art. 16. Deixar de identificar-se ou identificar-se falsamente ao preso por ocasião de sua captura ou quando deva fazê-lo durante sua detenção ou prisão: Pena - detenção, de 6 (seis) meses a 2 (dois) anos, e multa.",
        "Parágrafo único. Incorre na mesma pena quem, como responsável por interrogatório em sede de procedimento investigatório de infração penal, deixa de identificar-se ao preso ou atribui a si mesmo falsa identidade, cargo ou função.",
      ],
      pena: "Detenção 6 meses–2 anos + multa",
      bancas: ["VUNESP", "AOCP"],
      cai: [
        "Duas condutas-núcleo: **omitir** a identificação ou **falsificá-la** — na captura e durante toda a custódia.",
        "Parágrafo único: específico para o **responsável por interrogatório em procedimento investigatório penal** — falsa identidade, cargo ou função.",
        "Conexão com o devido processo e com o art. 15: identificar-se é garantia que antecede qualquer colheita de declarações.",
      ],
      pegadinha: [
        "«A exigência vale apenas para policial uniformizado» — **ERRADO**: alcança toda autoridade envolvida na custódia e, no PU, o interrogador.",
        "«Operações disfarçadas configuram crime em qualquer hipótese» — **ERRADO** como regra: infiltração e ações planejadas têm regime próprio; o tipo mira a omissão injustificada perante o custodiado.",
        "Pena: **6 meses a 2 anos** — não a de 1 a 4.",
      ],
      exemplo: [
        "Agentes à paisana detêm suspeito na rua, recusam identificação e um se apresenta como «agente federal» sem sê-lo → caput + parágrafo único.",
        "Antes do interrogatório, o escrivão se apresenta por nome e cargo verdadeiros — conduta regular, atípica.",
      ],
      macete:
        "**«Quem captura se apresenta»**: distintivo à mostra, nome verdadeiro na boca — na rua, na cela e à mesa do interrogatório. Escondeu ou inventou identidade? **6 meses a 2 anos** esperando.",
    },
    {
      id: "art-18",
      ref: "Art. 18",
      nome: "Interrogatório no repouso noturno",
      contexto:
        "À noite, o preso descansa — a menos que tenha sido capturado em flagrante ou queira falar, devidamente assistido.",
      dispositivo: [
        "Art. 18. Submeter o preso a interrogatório policial durante o período de repouso noturno, salvo se capturado em flagrante delito ou se ele, devidamente assistido, consentir em prestar declarações: Pena - detenção, de 6 (seis) meses a 2 (dois) anos, e multa.",
      ],
      notaDispositivo:
        "O texto vigente fala em interrogatório POLICIAL e reconhece DUAS exceções fechadas (flagrante; consentimento com assistência). A «necessidade inadiável» que circula por aí era texto de projeto — não vigora.",
      pena: "Detenção 6 meses–2 anos + multa",
      bancas: ["FCC", "VUNESP", "CEBRASPE"],
      cai: [
        "Tipo: submeter o preso a **interrogatório policial** durante o **repouso noturno**.",
        "Exceções taxativas: **(a) captura em flagrante delito**; **(b) consentimento do preso, devidamente assistido** por defensor.",
        "Pena **6 meses a 2 anos + multa** (patamar baixo da custódia: arts. 12, 16, 18 e 20 dividem essa moldura).",
        "Reflexo probatório: depoimento noturno fora das exceções tende à nulidade e alimenta o crime — tese recorrente em discursivas.",
      ],
      pegadinha: [
        "Acrescentar uma terceira exceção («por necessidade inadiável») — **não consta** do texto final.",
        "Aplicar a regra a **audiência judicial** — o tipo diz **interrogatório policial**; a seara judicial tem disciplina própria.",
        "«O consentimento do preso basta» — **só vale se devidamente assistido** por advogado/defensor.",
      ],
      exemplo: [
        "Delegado interroga custodiado às 2h30, sem flagrante e sem defensor, «para aproveitar o cansaço» → artigo 18 em sua forma mais pura.",
        "Preso em flagrante às 23h é ouvido ainda na madrugada → exceção legal, sem crime.",
      ],
      macete:
        "**«De noite o preso dorme»** — só acorda em duas cenas: **FLAGRANTE** ou **FALOU porque quis (e com advogado)**. Nem uma vírgula a mais.",
    },
    {
      id: "art-19",
      ref: "Art. 19",
      nome: "O pleito engavetado (e o juiz que fingiu não ver)",
      contexto:
        "A petição do preso tem ticket garantido ao juiz — quem segura o papel paga com detenção.",
      dispositivo: [
        "Art. 19. Impedir ou retardar, injustificadamente, o envio de pleito de preso à autoridade judiciária competente para a apreciação da legalidade de sua prisão ou das circunstâncias de sua custódia: Pena - detenção, de 1 (um) a 4 (quatro) anos, e multa.",
        "Parágrafo único. Incorre na mesma pena o magistrado que, ciente do impedimento ou da demora, deixa de tomar as providências tendentes a saná-lo ou, não sendo competente para decidir sobre a prisão, deixa de enviar o pedido à autoridade judiciária que o seja.",
      ],
      notaDispositivo:
        "Único crime deste bloco cometido também exclusivamente por MAGISTRADO no parágrafo único — junta-se ao art. 9º, § único, no «punitivismo ao próprio Judiciário».",
      pena: "Detenção 1–4 anos + multa",
      bancas: ["FCC", "FGV"],
      cai: [
        "Caput: **impedir ou retardar injustificadamente** o envio de pleito do preso ao juízo — tipicamente cometido por carcereiros, diretores, escrivães ou policiais.",
        "Objeto jurídico: o **habeas corpus efetivo** — o pleito entre **legalidade da prisão** e **circunstâncias da custódia** deve circular.",
        "PU: o **magistrado omisso** que, ciente, não sana a demora ou não remete ao competente — mesma pena.",
        "Pena patamar alto: **1 a 4 anos + multa**.",
      ],
      pegadinha: [
        "«Só servidor carcerário responde» — **ERRADO**: o parágrafo único criminaliza o juiz omisso.",
        "«O pleito precisa ter fundamento jurídico para ser encaminhado» — o dever de envio independe do **juízo de mérito**; a apreciação é do juiz, não do carcereiro.",
        "Trocar «impedir ou retardar» por «decretar medida de privação» — confunde com o art. 9º.",
      ],
      exemplo: [
        "Escrivão recebe impetração de HC pelo interfone da carceragem e a engaveta «até o delegado voltar de férias» → caput.",
        "Juiz de outra comarca recebe cópia do pleito e, embora incompetente, nada remete ao juízo do processo → parágrafo único.",
      ],
      macete:
        "**«Gaveta vira cela»**: pleito de preso não dorme em escrivaninha — encaminhou rápido ou virou art. 19 (**1 a 4 anos**). E o juiz que assiste a demora de camarote também entra no tipo.",
    },
    {
      id: "art-20",
      ref: "Art. 20",
      nome: "Entrevista pessoal e reservada com o advogado",
      contexto:
        "O preso tem direito a falar a sós com seu defensor — e, com ressalvas, a tê-lo ao lado na audiência.",
      dispositivo: [
        "Art. 20. Impedir, sem justa causa, a entrevista pessoal e reservada do preso com seu advogado: Pena - detenção, de 6 (seis) meses a 2 (dois) anos, e multa.",
        "Parágrafo único. Incorre na mesma pena quem impede o preso, o réu solto ou o investigado de entrevistar-se pessoal e reservadamente com seu advogado ou defensor, por prazo razoável, antes de audiência judicial, e de sentar-se ao seu lado e com ele comunicar-se durante a audiência, salvo no curso de interrogatório ou no caso de audiência realizada por videoconferência.",
      ],
      notaDispositivo:
        "Leitura obrigatória conjunta: art. 7º, III, IV e V, da Lei 8.906/94 (EOAB) — cujas violações o art. 43 desta lei transformou em crime (detenção de 3 meses a 1 ano).",
      pena: "Detenção 6 meses–2 anos + multa",
      bancas: ["CEBRASPE", "VUNESP", "FCC"],
      cai: [
        "Caput: impedir, **sem justa causa**, a **entrevista pessoal e reservada** do preso com o advogado — presencialidade e sigilo são o núcleo.",
        "PU estende a proteção ao **réu solto e ao investigado**: entrevista reservada por **prazo razoável antes da audiência** + sentar-se ao lado do patrono e comunicar-se com ele durante a sessão.",
        "Exceções expressas do PU: **curso de interrogatório** e **audiência por videoconferência**.",
        "«Justa causa» existe mas é estreita: motivos concretos de segurança (risco de fuga, destruição de prova), nunca comodidade administrativa.",
      ],
      pegadinha: [
        "«O defensor sempre pode sentar ao lado do réu, inclusive no interrogatório» — **ERRADO**: o próprio parágrafo único excetua o curso do interrogatório e a videoconferência.",
        "«A entrevista pode ser monitorada com vidro e interfone como regra» — a regra é **pessoal e reservada**; restrições exigem justa causa concreta.",
        "«Aplica-se só a preso preventivo» — o PU alcança **preso, réu solto e investigado**.",
        "Pena **6 meses a 2 anos** — banca troca por 1 a 4 (essa é do art. 19, o vizinho de garantia).",
      ],
      exemplo: [
        "Diretor do presídio nega sala reservada ao advogado na véspera da audiência de custódia, «por rotina interna» → caput.",
        "Na audiência, o magistrado impede o advogado de se sentar ao lado do réu durante o depoimento das testemunhas, sem motivo → PU (fora das exceções).",
      ],
      macete:
        "**«Advogado e cliente falam a sós; na audiência, lado a lado — MENOS no interrogatório e no Zoom»**. Repita as duas exceções em voz alta até a véspera da prova.",
    },
  ],
};
