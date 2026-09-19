import type { Bloco } from "./tipos";

export const bloco4: Bloco = {
  id: "bloco-4",
  numero: "Bloco 04",
  titulo: "Crimes em espécie — Parte II",
  intervalo: "Arts. 21 ao 33",
  subtitulo: "Do confinamento à cena do crime: custódia, provas e persecução",
  descricao:
    "A faixa mais longa da lei: treze artigos que vão da cela mista à «carteirada». Penas continuam nos dois patamares (1–4 anos e 6 meses–2 anos) — memorize o tipo junto com a moldura, sempre.",
  secoes: [
    { rotulo: "§ 4.1 · Custódia e cena do crime", ate: "arts. 21 a 25" },
    { rotulo: "§ 4.2 · Persecução, segredos e «carteirada»", ate: "arts. 27 a 33" },
  ],
  notaProfessor: {
    titulo: "Correção de rota: onde moram os temas que você citou",
    itens: [
      "**Uso indevido de algemas** — não há tipo próprio na Lei 13.869; a régua é a **Súmula Vinculante 11 (STF)**; o excesso vexatório se abriga no **art. 13, II**.",
      "**Revista íntima vexatória** — disciplina da **Lei de Execução Penal** e de resoluções do CNJ; na LAA, dialoga com o constrangimento vexatório (art. 13, II).",
      "**Técnicas proibidas no interrogatório** — Lei de Tortura (**9.455/97**) + art. 13, III (prova forçada).",
      "**Comunicação com família/advogado** e **não comunicação de prisões** — arts. **12 e 20**, já vistos no Bloco 03.",
      "**Deixar de identificar-se** — **art. 16**, também do Bloco 03.",
      "**Audiência e custódia em 24h** — **CPP, art. 3º-A** (pacote anticrime); a violação dialoga com os arts. 12 e 19.",
      "**Denunciação caluniosa «com abuso»** — **CP, art. 339**; na LAA, a resposta está no art. 30 (persecução sem justa causa).",
      "**Inutilizar provas / descumprir decisão judicial** — **CP, arts. 305 e 330**; não há tipos próprios na Lei 13.869.",
    ],
  },
  grupos: [
    {
      id: "art-21",
      ref: "Art. 21",
      nome: "Cela mista: os limites do confinamento",
      contexto:
        "Garantia mínima de dignidade carcerária — e ponte direta com o ECA no parágrafo único.",
      dispositivo: [
        "Art. 21. Manter presos de ambos os sexos na mesma cela ou espaço de confinamento: Pena - detenção, de 1 (um) a 4 (quatro) anos, e multa.",
        "Parágrafo único. Incorre na mesma pena quem mantém, na mesma cela, criança ou adolescente na companhia de maior de idade ou em ambiente inadequado, observado o disposto na Lei nº 8.069, de 13 de julho de 1990 (Estatuto da Criança e do Adolescente).",
      ],
      notaDispositivo:
        "Duas proibições autônomas: sexos separados (caput) e gerações separadas (§ único) — esta com ancoragem expressa no ECA.",
      pena: "Detenção 1–4 anos + multa",
      bancas: ["VUNESP", "AOCP", "FCC"],
      cai: [
        "Caput: presos de **ambos os sexos na mesma cela OU espaço de confinamento** — a alternativa («ou») amplia o alcance além da cela formal.",
        "Parágrafo único: **criança ou adolescente com maior de idade** na mesma cela, ou em **ambiente inadequado** — remissão expressa ao ECA.",
        "É o que a doutrina chama de crime da **manutenção em local inadequado** — cai junto com a LEP (art. 82) e o ECA.",
        "Sujeito ativo típico: diretor de estabelecimento, escrivão, delegado — quem decide ou mantém a custódia naquelas condições.",
      ],
      pegadinha: [
        "«Basta que estejam na mesma carceragem, em celas distintas» — o tipo exige **mesma cela ou espaço de confinamento**; leitura ampla demais é distrator.",
        "«A separação por sexo admite exceção em calamidade» — a lei não abre brecha no artigo.",
        "Trocar a referência ao **ECA** por «Código Penal» ou «LEP» no parágrafo único.",
      ],
      exemplo: [
        "Presa flagrantada passa a madrugada na mesma cela de três homens «por falta de cela feminina» — carência de vaga não descaracteriza o tipo.",
        "Adolescente apreendido dividindo cela com internos maiores no CDP — parágrafo único, com violação simultânea do ECA.",
      ],
      macete:
        "**«Cela e geração não se misturam»**: homem com homem, mulher com mulher; criança e adolescente, **nunca** com maior — principiologia do ECA trancada dentro do art. 21.",
    },
    {
      id: "art-22",
      ref: "Art. 22",
      nome: "A casa inviolável: domicílio da autoridade",
      contexto:
      "O lar é sagrado até para quem tem distintivo — e o relógio da lei só deixa cumprir mandado das 5h às 21h.",
      dispositivo: [
        "Art. 22. Invadir ou adentrar, clandestina ou astuciosamente, ou à revelia da vontade do ocupante, imóvel alheio ou suas dependências, ou nele permanecer nas mesmas condições, sem determinação judicial ou fora das condições estabelecidas em lei: Pena - detenção, de 1 (um) a 4 (quatro) anos, e multa.",
        "§ 1º Incorre na mesma pena, na forma prevista no caput deste artigo, quem: I - coage alguém, mediante violência ou grave ameaça, a franquear-lhe o acesso a imóvel ou suas dependências; II - (VETADO); III - cumpre mandado de busca e apreensão domiciliar após as 21h (vinte e uma horas) ou antes das 5h (cinco horas).",
        "§ 2º Não haverá crime se o ingresso for para prestar socorro, ou quando houver fundados indícios que indiquem a necessidade do ingresso em razão de situação de flagrante delito ou de desastre.",
      ],
      notaDispositivo:
        "O inciso II do § 1º foi VETADO (integra o mapa de vetos). Os números do horário — 5h e 21h — são os mais trocados de toda a lei junto com os da nota de culpa.",
      pena: "Detenção 1–4 anos + multa",
      bancas: ["CEBRASPE", "FCC", "FGV", "AOCP"],
      cai: [
        "Modos de invasão: **clandestina, astuciosa ou à revelia da vontade** do ocupante — inclusive a **permanência** após ingresso inicialmente lícito.",
        "Sem **determinação judicial** ou **fora das condições legais**: o mandado existe, mas foi cumprido torto.",
        "**§ 1º, III — o patinho de ouro das provas: mandado domiciliar só entre 5h e 21h.**",
        "§ 1º, I: coagir o morador (violência/grave ameaça) a abrir a porta equipara-se à invasão.",
        "§ 2º — causas de atipicidade expressas: **prestar socorro**, **flagrante delito** (fundados indícios) e **desastre**.",
      ],
      pegadinha: [
        "Trocar **21h–5h** por 22h–6h ou 20h–6h — distrator favorito de FCC e Vunesp.",
        "«Bastante violação de domicílio, exige-se violência» — **astúcia** já completa o tipo.",
        "«O § 1º, II, tipifica obrigar exibição de documentos no ingresso» — inciso **VETADO**, nunca vigorou.",
        "«Flagrante exige prévia autorização judicial» — o § 2º legitima o ingresso **sem** determinação.",
      ],
      exemplo: [
        "Equipe cumpre mandado de busca às 23h para aparecer no jornal da noite → § 1º, III — crime mesmo com mandado válido.",
        "Vizinha grita socorro e há fumaça saindo do imóvel: policiais entram sem mandado → § 2º (desastre/socorro), **atípico**.",
      ],
      macete:
        "Regra do **SOL**: **5h abre, 21h fecha** — mandado só à luz do dia. À noite, só três senhas: **S.F.D. — Socorro, Flagrante, Desastre.**",
    },
    {
      id: "art-23",
      ref: "Art. 23",
      nome: "Cenário editado: inovar artificiosamente",
      contexto:
        "Mudar a cena do crime para se proteger, incriminar alguém ou agravar a situação alheia.",
      dispositivo: [
        "Art. 23. Inovar artificiosamente, no curso de diligência, de investigação ou de processo, o estado de lugar, de coisa ou de pessoa, com o fim de eximir-se de responsabilidade ou de responsabilizar criminalmente alguém ou agravar-lhe a responsabilidade: Pena - detenção, de 1 (um) a 4 (quatro) anos, e multa.",
        "Parágrafo único. Incorre na mesma pena quem pratica a conduta com o intuito de: I - eximir-se de responsabilidade civil ou administrativa por excesso praticado no curso de diligência; II - omitir dados ou informações ou divulgar dados ou informações incompletos para desviar o curso da investigação, da diligência ou do processo.",
      ],
      pena: "Detenção 1–4 anos + multa",
      bancas: ["FCC", "CEBRASPE", "FGV"],
      cai: [
        "«**Inovar artificiosamente**»: alterar maquiavelicamente o estado de **lugar, coisa ou pessoa** — no curso de diligência, investigação **ou processo**.",
        "Fins típicos alternativos: **eximir-se**, **responsabilizar alguém** ou **agravar** a responsabilidade de outrem.",
        "PU: versão «funcional» do tipo — eximir-se de responsabilidade **civil/administrativa** por excesso e **vazamento/desvio manipulado** de dados e informações.",
        "Fronteira cobrada: aproxima-se do **favorecimento pessoal (CP, 348)**, mas exige a maquinação do agente valendo-se do poder.",
      ],
      pegadinha: [
        "«Exige resultado efetivo (a condenação do inocente)» — crime **formal**: basta a inovação com o fim típico.",
        "«Aplica-se a particulares que alteram a cena» — o tipo é da **autoridade**; o particular responde por outros delitos (ex.: fraude processual, CP 347).",
        "Omitir a alternativa «**processo**» — banca restringe a «diligência e investigação».",
      ],
      exemplo: [
        "PM planta um revólver na mochila do detido para justificar a prisão por porte — «flagrante forjado», incriminação artificial.",
        "Perito oficial desloca projéteis na cena do confronto para ocultar execução sumária de equipe.",
      ],
      macete:
        "**«Mexeu na cena, entrou no tipo»** — com um dos três fins: **I.R.A.** — isentar-**I** (a si), responsabilizar-**R** (alguém), agravar-**A** (alguém).",
    },
    {
      id: "art-24",
      ref: "Art. 24",
      nome: "O hospital e o óbito maquiado",
      contexto:
        "O tipo mais raro da lei — e justamente por isso o preferido das questões «capa» de prova.",
      dispositivo: [
        "Art. 24. Constranger, sob violência ou grave ameaça, funcionário ou empregado de instituição hospitalar pública ou privada a admitir para tratamento pessoa cujo óbito já tenha ocorrido, com o fim de alterar local ou momento de crime, prejudicando sua apuração: Pena - detenção, de 1 (um) a 4 (quatro) anos, e multa, além da pena correspondente à violência.",
      ],
      notaDispositivo:
        "Crime pensado para o «desova hospitalar» de execuções: transportar o corpo já sem vida para simular morte no socorro médico.",
      pena: "Detenção 1–4 anos + multa (+ violência)",
      bancas: ["FGV", "CEBRASPE"],
      cai: [
        "Meio de execução: **violência ou grave ameaça** contra funcionário de hospital **público ou privado**.",
        "Fim típico duplo: **alterar o local OU o momento** do crime, **prejudicando a apuração**.",
        "A vítima hospitalar já estava **morta** («cujo óbito já tenha ocorrido») — sem esse dado, não há o tipo.",
        "Pena **cumulada** com a da violência empregada — mesma técnica do art. 13.",
      ],
      pegadinha: [
        "«A admissibilidade do corpo por equipe colaborosa afasta o crime» — o constrangimento do funcionário é núcleo; sem **violência/grave ameaça**, outra figura poderá restar.",
        "«Vale apenas hospital público» — o texto inclui **privada**.",
        "«A pena da violência é absorvida» — a lei manda **cumular** («além da pena correspondente à violência»).",
      ],
      exemplo: [
        "Vítima de execução é levada, já sem vida, à UPA sob ameaça armada à equipe, fingindo «baleado chegando vivo» — art. 24 em sua ilustração arquetípica.",
        "Se o hospital aceita o cadáver sem qualquer coação, discute-se outra figura (ex.: favorecimento/fraude) — nunca o art. 24.",
      ],
      macete:
        "**«Morto não interna»**: hospital não é produtora de laudo fake. Sob violência ou grave ameaça? **1 a 4 anos + a pena da violência.**",
    },
    {
      id: "art-25",
      ref: "Art. 25",
      nome: "Prova por meio manifestamente ilícito",
      contexto:
        "Quem produz a prova proibida e quem a usa sabendo — dois verbos, uma mesma moldura.",
      dispositivo: [
        "Art. 25. Proceder à obtenção de prova, em procedimento de investigação ou fiscalização, por meio manifestamente ilícito: Pena - detenção, de 1 (um) a 4 (quatro) anos, e multa.",
        "Parágrafo único. Incorre na mesma pena quem faz uso de prova, em desfavor do investigado ou fiscalizado, com prévio conhecimento de sua ilicitude.",
      ],
      pena: "Detenção 1–4 anos + multa",
      bancas: ["CEBRASPE", "FCC", "FGV"],
      cai: [
        "Caput: **obter** a prova por meio **manifestamente ilícito** — e o alcance vai além da polícia: abrange a **fiscalização** administrativa (fazendária, ambiental, sanitária...).",
        "PU: pune quem **usa** a prova em desfavor do investigado/fiscalizado **com prévio conhecimento da ilicitude** — o juiz e o MP também podem cair aqui.",
        "O reflexo probatório (inadmissão da prova, CPP arts. 157 e seguintes) se soma à responsabilização penal do agente.",
      ],
      pegadinha: [
        "«O 'prévio conhecimento' exige decisão judicial anterior declarando a ilicitude» — **basta o conhecimento da ilicitude**, não pronunciamento formal.",
        "«Aplica-se apenas à investigação penal» — a lei inclui **fiscalização**.",
        "«Ilicitude apurada depois exime o usuário» — se ele **já sabia**, responde pelo PU.",
      ],
      exemplo: [
        "Auditor-fiscal grava clandestinamente a sede da empresa sem autorização e anexa ao auto de infração — caput.",
        "Promotor recebe escuta sabidamente ilegal e a usa como fundamento da denúncia — parágrafo único.",
      ],
      macete:
        "**«Fruto proibido: quem planta, quem colhe sabendo — no cepo os dois».** Obteve ilícito ou usou ciente? **1 a 4 anos** no balcão.",
    },
    {
      id: "art-26",
      ref: "Art. 26",
      nome: "O artigo vetado do bloco",
      contexto: "Nunca vigorou — fechamento do mapa de vetos dos crimes em espécie.",
      dispositivo: ["Art. 26. (VETADO)."],
      cai: [
        "Completando o mapa de vetos totais: **arts. 11, 14, 17, 26, 34 e 35** — seis degraus que não sustentam ninguém.",
      ],
      pegadinha: [
        "«O art. 26 pune o grampo telefônico por objetivo não autorizado» — o dispositivo **não existe**; a interceptação vive na Lei 9.296 (alterada pelo art. 41 desta lei) — Bloco 06.",
      ],
      exemplo: [
        "Enunciado «nos termos do art. 26 da Lei 13.869...» → alternativa eliminada no nascimento.",
      ],
      macete:
        "Recite o dado final: **11, 14, 17, 26, 34, 35** — seis vetos de seis janelas espelhadas (11↔26 par a par na estrutura do projeto).",
    },
    {
      id: "art-27",
      ref: "Art. 27",
      nome: "Instaurar procedimento sem qualquer indício",
      contexto:
        "Investigar «na base do feeling» virou crime — e virou também ADI no STF.",
      dispositivo: [
        "Art. 27. Requisitar instauração ou instaurar procedimento investigatório de infração penal ou administrativa, em desfavor de alguém, à falta de qualquer indício da prática de crime, de ilícito funcional ou de infração administrativa: Pena - detenção, de 6 (seis) meses a 2 (dois) anos, e multa.",
        "Parágrafo único. Não há crime quando se tratar de sindicância ou investigação preliminar sumária, devidamente justificada.",
      ],
      notaDispositivo:
        "Alvo das ADIs 6.234 e 6.240 (sob julgamento no STF, com pedido de suspensão de eficácia discutido): a tese é de cerceamento da independência investigadora. Para a prova objetiva: o texto VIGORA.",
      pena: "Detenção 6 meses–2 anos + multa",
      bancas: ["CEBRASPE", "FGV", "FCC"],
      cai: [
        "A expressão-rainha: «**à falta de qualquer indício**» — a exigência é de **ausência total**, não de robustez probatória.",
        "Dupla via: **requisitar** (MP/ouvidorias) ou **instaurar** (delegado, corregedor) procedimento penal OU administrativo.",
        "PU — salvo-conduto: sindicância ou investigação preliminar sumária **devidamente justificada** não é crime.",
      ],
      pegadinha: [
        "«Indício frágil basta para afastar o crime» — correto, e é exatamente o contrário que a banca afirma: o tipo exige **falta de QUALQUER** indício.",
        "«O artigo pune o simples arquivamento motivado» — ler de novo: é crime instaurar/requisitar **sem indício**, não arquivar com fundamento.",
        "«Foi declarado inconstitucional» — **pendente de julgamento** nas ADIs; até decisão com efeitos, o tipo vigora.",
      ],
      exemplo: [
        "Corregedor instaura PAD contra servidor desafeto do diretor «para apurar conduta» sem um único fato narrado — artigo 27.",
        "Delegado instaura inquérito por notícia anônima sem qualquer elemento verificável — mesma moldura.",
      ],
      macete:
        "**«Investigar sem indício = vestir o investigado com a própria tocaia»** — um fato mínimo salva; **zero** fato condena o instaurador (6 meses a 2 anos).",
    },
    {
      id: "art-28",
      ref: "Art. 28",
      nome: "Vazamento de gravação: o sigilo quebrado",
      contexto:
        "Gravar para provar é dever; divulgar para expor é crime — a era do vazamento seletivo ganhou endereço penal próprio.",
      dispositivo: [
        "Art. 28. Divulgar gravação ou trecho de gravação sem relação com a prova que se pretenda produzir, expondo a intimidade ou a vida privada ou ferindo a honra ou a imagem do investigado ou acusado: Pena - detenção, de 1 (um) a 4 (quatro) anos, e multa.",
      ],
      pena: "Detenção 1–4 anos + multa",
      bancas: ["FCC", "FGV", "CEBRASPE"],
      cai: [
        "É a figura da **violação do sigilo investigatório** que você citou: divulgar gravação/transcrição **sem relação com a prova pretendida**.",
        "Ferimentos alternativos: **intimidade/vida privada** ou **honra/imagem** do investigado/acusado.",
        "Suporte informacional qualquer: interceptação telefônica, escuta ambiental, câmera corporal, vídeo de interrogatório.",
      ],
      pegadinha: [
        "«Prova lícita pode ser divulgada livremente» — a licitude da obtenção **não** autoriza a divulgação fora da finalidade probatória.",
        "Trocar a pena para 6m–2a — a moldura é o patamar **alto (1–4 anos)**.",
        "«Pune o jornalista que publica» — o sujeito típico é o **agente público** detentor do material (a mídia tem regime próprio de liberdade de imprensa).",
      ],
      exemplo: [
        "Na véspera da sabatina, vaza do inquérito áudio do investigado em conversa íntima com a esposa — sem qualquer relevância à acusação: art. 28.",
        "Delegado posta o «melhor momento» da escuta nas redes — mesma resposta, com possível concurso com o art. 13, I.",
      ],
      macete:
        "**«Gravou para provar, não para estrelar»** — divulgação desconectada da prova = **1 a 4 anos**. O sigilo funcional tem dono: o processo.",
    },
    {
      id: "art-29",
      ref: "Art. 29",
      nome: "A informação oficial falsa",
      contexto:
        "Quando o boletim institucional vira arma contra o investigado.",
      dispositivo: [
        "Art. 29. Prestar informação falsa sobre procedimento judicial, policial, fiscal ou administrativo com o fim de prejudicar interesse de investigado: Pena - detenção, de 6 (seis) meses a 2 (dois) anos, e multa. Parágrafo único. (VETADO).",
      ],
      pena: "Detenção 6 meses–2 anos + multa",
      bancas: ["VUNESP", "AOCP"],
      cai: [
        "Rol de searas: **judicial, policial, fiscal ou administrativo** — memorize as quatro (J.P.F.A.).",
        "Elemento finalístico expresso: **prejudicar interesse de investigado** — nota de rodapé do P.B.C. do art. 1º.",
        "Complementa (e não substitui) os crimes contra a fé pública — aqui a chave é a **finalidade prejudicativa** do agente.",
      ],
      pegadinha: [
        "«Abrange informação preliminar de qualquer natureza» — o rol é **taxativo**: judicial/policial/fiscal/administrativa.",
        "«Bastante a falsidade» — sem o **fim de prejudicar**, o tipo não se fecha.",
        "Questão-isca: «O § 1º do art. 29 tipifica...» — parágrafo **VETADO**.",
      ],
      exemplo: [
        "Assessor de imprensa da polícia divulga oficialmente que o investigado «tem ficha criminal extensa» — falso, com o objetivo de pressionar o acordo.",
        "Fiscal planta em consulta interna a informação de que o autuado «é sonegador reincidente».",
      ],
      macete:
        "**J.P.F.A.**: **J**udicial, **P**olicial, **F**iscal, **A**dministrativo — mentiroso oficial e com má intenção custa **6 meses a 2 anos** do distintivo.",
    },
    {
      id: "art-30",
      ref: "Art. 30",
      nome: "Persecução sem justa causa: o núcleo do abuso",
      contexto:
        "O tipo-síntese do punitivismo de Estado — perseguir penal, civil ou administrativamente quem não deve, ou quem se sabe inocente.",
      dispositivo: [
        "Art. 30. Dar início ou proceder à persecução penal, civil ou administrativa sem justa causa fundamentada ou contra pessoa que o agente sabe inocente: Pena - detenção, de 1 (um) a 4 (quatro) anos, e multa.",
      ],
      notaDispositivo:
        "Vigora por promulgação das partes vetadas — e é o tipo que mais concentrou as ADIs 6.234/6.240. Vigente até decisão do STF, e ABSOLUTAMENTE cobrado.",
      pena: "Detenção 1–4 anos + multa",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP"],
      cai: [
        "Duas vias: **sem justa causa fundamentada** OU **contra quem o agente sabe inocente** — alternativas, memorize as duas.",
        "Tríplice espectro persecutório: **penal, civil E administrativo** — não é só denúncia penal.",
        "«Justa causa **fundamentada**»: exige exposição de motivos, não a mera formalidade de assinar a peça.",
        "Reconheça: é a pedra angular polêmica da lei (ADIso sobre «cerceamento» de promotores e juízes); vigente para fins de prova.",
      ],
      pegadinha: [
        "«Restringe-se à persecução penal» — o tipo cobre **civil e administrativa** também.",
        "«Basta o exercício infeliz da acusação» — exige-se **ausência de justa causa fundamentada** ou **ciência da inocência**; erro razoável permanece no art. 1º, § 2º.",
        "«Vigora sem contestação» — tecnicamente sob fogo nas ADIs 6.234/6.240, mas **em vigor**: banca que diz «revogado» mente.",
      ],
      exemplo: [
        "Promotor protocola ação civil pública contra jornalista admitindo em nota interna que «não há elementos» — artigo 30 ao quadrado.",
        "Corregedoria protocoliza PAD ciente de áudio que inocenta o servidor — perseguir o sabido inocente.",
      ],
      macete:
        "**«Martelo sem causa volta no pulso»**: perseguir sem **justa causa fundamentada** ou quem se **sabe inocente** — em qualquer um dos **três frontões (penal, civil, administrativo)** — custa **1 a 4 anos**.",
    },
    {
      id: "art-31",
      ref: "Art. 31",
      nome: "A investigação embrulhada para breu",
      contexto:
        "Procrastinar apuração em prejuízo do investigado — o artigo anti-gaveta.",
      dispositivo: [
        "Art. 31. Estender injustificadamente a investigação, procrastinando-a em prejuízo do investigado ou fiscalizado: Pena - detenção, de 6 (seis) meses a 2 (dois) anos, e multa.",
        "Parágrafo único. Incorre na mesma pena quem, inexistindo prazo para execução ou conclusão de procedimento, o estende de forma imotivada, procrastinando-o em prejuízo do investigado ou do fiscalizado.",
      ],
      pena: "Detenção 6 meses–2 anos + multa",
      bancas: ["FCC", "VUNESP"],
      cai: [
        "Caput: investigação **com prazo** estendida **injustificadamente**, em prejuízo do investigado/fiscalizado.",
        "PU: sem prazo estabelecido, estende de forma **imotivada** — a imotivação é o marcador do crime.",
        "Conexão natural com o art. 37 (vista procrastinatória no colegiado) — confusão proposital da banca: 31 = investigação/fiscalização; 37 = julgamento colegiado.",
      ],
      pegadinha: [
        "«Esperar o resultado de laudos complexos prolonga o inquérito legitimamente» — correto; sem **injustificação/imotivação**, não há crime.",
        "Trocar o objeto: investigação/fiscalização (nunca «execução civil», foi o projeto).",
        "«Exige-se prejuízo material comprovado» — basta o **prejuízo processual do investigado/fiscalizado**.",
      ],
      exemplo: [
        "Inquérito por lesão corporal leve fica 3 anos «buscando testemunha» cuja identificação consta da primeira página.",
        "Fiscalização da Receita «em análise» há quatro exercícios sem documento novo juntado.",
      ],
      macete:
        "**«Gaveta fértil vira cela estreita»**: investigar sem fim de forma injustificada/imotivada custa **6 meses a 2 anos**. E a senha cruzada: **31 estica inquérito; 37 estica colegiado.**",
    },
    {
      id: "art-32",
      ref: "Art. 32",
      nome: "Negar acesso aos autos",
      contexto:
        "A ponte da lei com a Súmula Vinculante 14 do STF — o custódio dos autos não é dono deles.",
      dispositivo: [
        "Art. 32. Negar ao interessado, seu defensor ou advogado acesso aos autos de investigação preliminar, ao termo circunstanciado, ao inquérito ou a qualquer outro procedimento investigatório de infração penal, civil ou administrativa, assim como impedir a obtenção de cópias, ressalvado o acesso a peças relativas a diligências em curso, ou que indiquem a realização de diligências futuras, cujo sigilo seja imprescindível: Pena - detenção, de 6 (seis) meses a 2 (dois) anos, e multa.",
      ],
      notaDispositivo:
        "Vigora por promulgação das partes vetadas. A ressalva é estreita por escolha: só peças de diligências em curso ou futuras com sigilo imprescindível.",
      pena: "Detenção 6 meses–2 anos + multa",
      bancas: ["CEBRASPE", "FCC", "FGV"],
      cai: [
        "Objetos do acesso: investigação preliminar, **TCO**, **inquérito**, procedimento investigatório penal, **civil ou administrativo**.",
        "Dois núcleos: **negar acesso** + **impedir a obtenção de cópias**.",
        "Ressalva literal: peças de **diligências em curso** ou **futuras** com sigilo **imprescindível** — fora disso, acesso é direito.",
        "Caminho obrigatório com a **Súmula Vinculante 14**: defensor já tem direito amplo de exame de autos em procedimento não judicial — a negação injustificada virou crime.",
      ],
      pegadinha: [
        "«Autos de inquérito são naturalmente sigilosos e fechados à defesa» — **ERRADO pós-2019** (e já era errado desde a SV 14).",
        "«Basta carimbar 'sigiloso' no capítulo» — sigilo **imprescindível** de diligência em curso/futura: critério estrito.",
        "«Admite-se apenas petição protocolada ao juiz» — o dever recai sobre quem custodia, **judicial ou não**.",
      ],
      exemplo: [
        "Escrivão nega petição de vista fotográfica de inquérito concluído «porque é regra da delegacia» — artigo 32.",
        "Corregedor nega acesso a PAD arquivado alegando sigilo institucional genérico — idem.",
      ],
      macete:
        "**«Autos não moram debaixo do braço: SV 14 + art. 32»**. Só tranca a gaveta o que for **diligência em curso ou futura imprescindivelmente sigilosa** — o resto atende.",
    },
    {
      id: "art-33",
      ref: "Art. 33",
      nome: "O crime da «carteirada»",
      contexto:
        "O tipo que transformou em delito o «você sabe com quem está falando?».",
      dispositivo: [
        "Art. 33. Exigir informação ou cumprimento de obrigação, inclusive o dever de fazer ou de não fazer, sem expresso amparo legal: Pena - detenção, de 6 (seis) meses a 2 (dois) anos, e multa.",
        "Parágrafo único. Incorre na mesma pena quem se utiliza de cargo ou função pública ou invoca a condição de agente público para se eximir de obrigação legal ou para obter vantagem ou privilégio indevido.",
      ],
      pena: "Detenção 6 meses–2 anos + multa",
      bancas: ["CEBRASPE", "AOCP", "VUNESP", "FCC"],
      cai: [
        "Caput: **exigir** informação/obrigação **sem expresso amparo legal** — «expresso» é a palavra de ordem (poder implícito não basta).",
        "PU — a famosa **carteirada**: usar cargo ou **invocar a condição de agente público** para **eximir-se de obrigação** OU **obter vantagem/privilégio indevido**.",
        "Vantagem ou privilégio: o rol aceita qualquer benefício indevido — não precisa ser patrimonial.",
      ],
      pegadinha: [
        "«O amparo legal pode ser presumido ou analógico» — o texto quer **expresso**.",
        "«Vantagem só se patrimonial» — **privilégio indevido** aí incluído (fila furada, isenção inventada).",
        "«A carteirada exige o exercício efetivo do cargo na cena» — o verbo é **invocar** a condição; ostentar a condição já realiza.",
      ],
      exemplo: [
        "Deputado apresenta a carteira funcional ao guarda para escapar da multa de trânsito — parágrafo único.",
        "Fiscal exige do comerciante «taxa de vistoria» criada por ele mesmo — caput.",
      ],
      macete:
        "**«Sabe com quem está falando? Com o autor dos autos da art. 33»** — exigiu sem **expresso** ou ostentou cargo para se livrar/lucrar? **6 meses a 2 anos** de distintivo apreendido.",
    },
  ],
};
