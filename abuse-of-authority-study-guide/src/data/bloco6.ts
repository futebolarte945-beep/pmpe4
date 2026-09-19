import type { Bloco } from "./tipos";

export const bloco6: Bloco = {
  id: "bloco-6",
  numero: "Bloco 06",
  titulo: "Procedimento & disposições finais",
  intervalo: "Arts. 39 ao 45",
  subtitulo: "A lei aplicando-se às leis vizinhas — e despedindo-se da Lei 4.898/65",
  descricao:
    "Aqui a lei sai do próprio corpo e opera quatro alterações externas (prisão temporária, interceptação, ECA e advocacia), revoga a matriarca do abuso e marca o nascimento no calendário: 120 dias de vacatio legis.",
  notaProfessor: {
    titulo: "Correção de rota da sua pauta (de novo, porque cai muito)",
    itens: [
      "**Lei 9.099/1995** — o art. 39 manda **APLICÁ-LA «no que couber»**; a vedação absoluta de transação/sursis processual é **tese doutrinária**, não texto legal. Guarde: dispositivo primeiro, controvérsia depois.",
      "**Competência** — a lei **não** regula foro próprio: segue o **CPP** e as regras constitucionais de **prerrogativa de função** (sujeitos do art. 2º frequentemente têm foro).",
      "**Ação penal** — já fixada no **art. 3º** (pública incondicionada, privada subsidiária em 6 meses): revista aqui só para consolidar.",
      "**Aplicação subsidiária do Código Penal** — opera pela regra do **art. 12 do CP** (lei especial), embora não nominada na LAA; o art. 39 nomeia expressamente CPP e Lei 9.099.",
    ],
  },
  grupos: [
    {
      id: "art-39",
      ref: "Art. 39",
      nome: "Procedimento: CPP e Lei 9.099 no que couber",
      contexto:
        "Um único artigo de remissão subsidiária que encerra uma das discussões mais úteis de discursiva.",
      dispositivo: [
        "Art. 39. Aplicam-se ao processo e ao julgamento dos delitos previstos nesta Lei, no que couber, as disposições do Decreto-Lei nº 3.689, de 3 de outubro de 1941 (Código de Processo Penal), e da Lei nº 9.099, de 26 de setembro de 1995.",
      ],
      pena: "Regra de remissão",
      bancas: ["FCC", "CEBRASPE", "FGV"],
      cai: [
        "Dois diplomas subsidiários **expressos**: **CPP** e **Lei 9.099/95**, «no que couber».",
        "A expressão «**no que couber**» é a cereja funcional da questão: cobertura residual, sempre cedendo ao texto especial.",
        "Discussão que move doutrina e oral de tribunal: a moldura máxima de **4 anos** abre espaço ao debate sobre **composição civil, transação penal e suspensão condicional do processo** — a literatura se divide, a lei **não proíbe expressamente**.",
        "Conexão de competência: sem regra própria, CPP + foro por prerrogativa de função resolvem o foro.",
      ],
      pegadinha: [
        "«A lei veda expressamente a aplicação da Lei 9.099» — **ERRADO**: o dispositivo ordena o contrário («no que couber»).",
        "«Aplicação concorrente do CP no mesmo artigo» — a remissão expressa é ao CPP e à 9.099; a lei penal especial remete ao CP pelo art. 12 do próprio CP.",
        "«Transação penal obrigatória para todos os tipos» — tese sem lastro no texto.",
      ],
      exemplo: [
        "Discussão recorrente em turmas: caberá suspensão condicional do processo em crime de abuso de pena mínima de 6 meses? Resposta de prova objetiva: o texto admite a remissão; o acordo prático, variável por tribunal — memorize a regra e a controvérsia, marque o dispositivo.",
      ],
      macete:
        "**«CPP + 9.099 no que couber: o que sobrar, vai de código e juizado»**. Lei especial primeiro, remissão literal depois — e controvérsia apenas na discursiva.",
    },
    {
      id: "art-40",
      ref: "Art. 40",
      nome: "Prisão temporária: mandado com data de validade (Lei 7.960/89)",
      contexto:
        "A lei do abuso colore a Lei da Prisão Temporária: todo mandado nasce com o dia da libertação impresso.",
      dispositivo: [
        "Art. 40. O art. 2º da Lei nº 7.960, de 21 de dezembro de 1989, passa a vigorar com a seguinte redação: (…) § 4º-A O mandado de prisão conterá necessariamente o período de duração da prisão temporária estabelecido no caput deste artigo, bem como o dia em que o preso deverá ser libertado. (…) § 7º Decorrido o prazo contido no mandado de prisão, a autoridade responsável pela custódia deverá, independentemente de nova ordem da autoridade judicial, pôr imediatamente o preso em liberdade, salvo se já tiver sido comunicada da prorrogação da prisão temporária ou da decretação da prisão preventiva. § 8º Inclui-se o dia do cumprimento do mandado de prisão no cômputo do prazo de prisão temporária.",
      ],
      notaDispositivo:
        "Três adições à Lei 7.960/89: (a) mandado com período e data da soltura; (b) soltura de ofício pelo custódio; (c) contagem incluindo o dia do cumprimento.",
      pena: "Alteração externa — Lei 7.960/89",
      bancas: ["FCC", "VUNESP", "AOCP"],
      cai: [
        "Mandado de temporária **deve** conter o período de duração e **o dia da libertação** — requisito formal novo.",
        "**Soltura de ofício**: decorrido o prazo, a autoridade da custódia solta **independentemente de nova ordem**, salvo comunicação prévia de prorrogação ou de preventiva.",
        "Contagem do prazo: **inclui-se o dia do cumprimento** do mandado.",
        "Contexto: base de 5 dias / 30 dias (impróprios) permanece da própria Lei 7.960 — e a omissão do custódio dialoga com o **art. 12, PU, IV**, desta lei.",
      ],
      pegadinha: [
        "«A soltura após o prazo precisa de novo alvará judicial» — **ERRADO**: a regra do § 7º ordena a libertação imediata de ofício.",
        "«O dia do cumprimento não conta» — o § 8º ordena a **inclusão**.",
        "«Mandado sem período é válido se justificado depois» — o § 4º-A impõe conteúdo **necessário**: período + dia da soltura.",
      ],
      exemplo: [
        "Mandado de 5 dias cumprido no dia 10: o § 8º inclui o dia 10 na contagem; findo o prazo sem prorrogação, a direção do presídio solta sem esperar novo ofício.",
        "Custódio retém o preso «aguardando o juiz despachar» após o dia marcado no próprio mandado — somam-se art. 40 (7.960) e art. 12, PU, IV (LAA).",
      ],
      macete:
        "**«Temporária nasce sabendo o dia de morrer»**: mandado = período + data da soltura; passou da data sem comunicar nada? **Soltou de ofício**. E o dia do cumprimento **entra** na conta.",
    },
    {
      id: "art-41",
      ref: "Art. 41",
      nome: "Interceptação: o juiz dentro do crime (Lei 9.296/96)",
      contexto:
        "A única reclusão do pacote — e o novo sujeito do delito de grampear: a própria autoridade judicial.",
      dispositivo: [
        "Art. 41. O art. 10 da Lei nº 9.296, de 24 de julho de 1996, passa a vigorar com a seguinte redação: «Art. 10. Constitui crime realizar interceptação de comunicações telefônicas, de informática ou telemática, promover escuta ambiental ou quebrar segredo da Justiça, sem autorização judicial ou com objetivos não autorizados em lei: Pena - reclusão, de 2 (dois) a 4 (quatro) anos, e multa. Parágrafo único. Incorre na mesma pena a autoridade judicial que determina a execução de conduta prevista no caput deste artigo com objetivo não autorizado em lei.» (NR)",
      ],
      notaDispositivo:
        "A novidade da Lei 13.869 não é o caput (já existia) — é o parágrafo único, que criminaliza a determinação judicial desvirtuada.",
      pena: "RECLUSÃO 2–4 anos + multa",
      bancas: ["FCC", "CEBRASPE", "FGV"],
      cai: [
        "Quatro condutas: **interceptação** (telefônica/informática/telemática), **escuta ambiental** e **quebra de segredo da Justiça** sem autorização ou com objetivo não autorizado.",
        "Parágrafo único: a **autoridade judicial** que **determina** a conduta com objetivo não autorizado em lei — o juiz passa a figurar no polo ativo do tipo.",
        "Pena de **reclusão 2–4 anos** — a única modalidade de reclusão do ecossistema do abuso; perfeita para a pegadinha «toda a lei é de detenção».",
      ],
      pegadinha: [
        "«A interceptação por decisão judicial está sempre blindada» — o PU criminaliza a determinação **com objetivo não autorizado em lei**.",
        "Trocar o regime: **reclusão**, não detenção — e com números próprios (2–4).",
        "«Escuta ambiental é mera contravenção» — está no rol expresso do art. 10 da Lei 9.296.",
      ],
      exemplo: [
        "Magistrado determina escuta do escritório de advocacia da defesa com objetivo de descobrir estratégia — parágrafo único.",
        "Policial grava ambientalmente a cela onde o preso conversa com advogado, sem autorização — caput com violação do art. 7º (EOAB).",
      ],
      macete:
        "**«O grampo tem dois polos: quem executa sem autorização e quem determina com má intenção»** — os dois em **reclusão 2 a 4**. É a exceção reclusiva da festa da detenção.",
    },
    {
      id: "art-42",
      ref: "Art. 42",
      nome: "A simetria mirim: perda de cargo no ECA",
      contexto:
        "O ECA ganha regra gêmea do art. 4º: perder cargo só quando a reincidência aparece.",
      dispositivo: [
        "Art. 42. A Lei nº 8.069, de 13 de julho de 1990 (Estatuto da Criança e do Adolescente), passa a vigorar acrescida do seguinte art. 227-A: «Art. 227-A Os efeitos da condenação prevista no inciso I do caput do art. 92 do Decreto-Lei nº 2.848, de 7 de dezembro de 1940 (Código Penal), para os crimes previstos nesta Lei, praticados por servidores públicos com abuso de autoridade, são condicionados à ocorrência de reincidência. Parágrafo único. A perda do cargo, do mandato ou da função, nesse caso, independerá da pena aplicada na reincidência.»",
      ],
      pena: "Alteração externa — ECA, art. 227-A",
      bancas: ["FCC", "FGV"],
      cai: [
        "Para crimes do **ECA** com abuso de autoridade, a perda do cargo (efeito do CP, art. 92, I) ficou **condicionada à reincidência** — espelho do art. 4º, parágrafo único, da LAA.",
        "PU: na reincidência, a perda do cargo **independerá da pena aplicada** — outra redação cobrada palavra por palavra.",
        "Tema de conexão sistemática pura: leitura conjunta CP (art. 92) + ECA (227-A) + LAA (art. 4º).",
      ],
      pegadinha: [
        "«Bastante a primeira condenação por crime do ECA com abuso» — a regra nova condiciona à **reincidência**.",
        "«A perda fica atrelada a pena mínima de dois anos» — o PU desvincula da **pena aplicada na reincidência**.",
        "«O art. 227-A foi veto» — texto promulgado e vigente no Estatuto.",
      ],
      exemplo: [
        "Servidor condenado em 2024 por crime do ECA praticado com abuso não perde o cargo; reincidente em 2026, perde — ainda que a pena da nova sentença seja leve.",
      ],
      macete:
        "**«Primeira abuso no ECA não derruba a cadeira; a segunda derruba, custe a pena que custar»** — simetria com o **R.M. (reincidência + motivação)** do art. 4º.",
    },
    {
      id: "art-43",
      ref: "Art. 43",
      nome: "Prerrogativo do advogado virou crime (Lei 8.906/94)",
      contexto:
        "O Estatuto da Advocacia ganhou um artigo penal próprio — o art. 7º-B, joia das provas da OAB e das policiais.",
      dispositivo: [
        "Art. 43. A Lei nº 8.906, de 4 de julho de 1994, passa a vigorar acrescida do seguinte art. 7º-B: «Art. 7º-B Constitui crime violar direito ou prerrogativa de advogado previstos nos incisos II, III, IV e V do caput do art. 7º desta Lei: Pena - detenção, de 3 (três) meses a 1 (um) ano, e multa.»",
      ],
      notaDispositivo:
        "Vigora por promulgação das partes vetadas. Leitura obrigatória conjunta: art. 7º, II–V, EOAB — recebimento/ingresso em repartições, inviolabilidade do escritório e de arquivos/dados, sigilo da correspondência e comunicação com clientes, a par da entrevista do art. 20.",
      pena: "Detenção 3 meses–1 ano + multa",
      bancas: ["CEBRASPE", "FCC", "FGV", "AOCP"],
      cai: [
        "Novo crime criado **fora da LAA**, mas pela LAA: violar as prerrogativas do **art. 7º, II a V, da Lei 8.906/94**.",
        "Pena: **3 meses a 1 ano** + multa — mesma moldura «caçula» do art. 15-A; banca troca as duas sem cerimônia.",
        "Sujeito ativo: qualquer agente público (e leitura extensiva debatida quanto a particulares — para prova, memorize a sede institucional do tipo).",
      ],
      pegadinha: [
        "«Todas as prerrogativas do art. 7º estão criminalizadas» — apenas as dos incisos **II, III, IV e V**.",
        "Pena trocada por 1 a 4 anos ou 6 meses a 2 anos — é **3 meses a 1 ano**.",
        "«Foi vetado e não vigora» — **vigora** por promulgação; pegadinha da mesma fábrica do art. 3º.",
      ],
      exemplo: [
        "Policial apreende notebook de advogado fora de flagrante para «aprofundar investigação» em desprezo à inviolabilidade (art. 7º, II e III, EOAB) — art. 7º-B.",
        "Presídio monitora a ligação do custodiado com o patrono em rotina — articule art. 7º-B com o art. 20 da LAA.",
      ],
      macete:
        "**«II a V do 7º são muralha com alarme: violou, responde crime»** — detenção de **3 meses a 1 ano**. Decore o nicho junto do 15-A e mate duas pegadinhas de pena numa só investida.",
    },
    {
      id: "art-44-45",
      ref: "Arts. 44 e 45",
      nome: "O funeral da Lei 4.898/65 e o nascimento aos 120 dias",
      contexto:
        "A revogação da matriarca do abuso e a régua temporal que as bancas cobram desde 2019.",
      dispositivo: [
        "Art. 44. Revogam-se a Lei nº 4.898, de 9 de dezembro de 1965, e o § 2º do art. 150 e o art. 350, ambos do Decreto-Lei nº 2.848, de 7 de dezembro de 1940 (Código Penal).",
        "Art. 45. Esta Lei entra em vigor após decorridos 120 (cento e vinte) dias de sua publicação oficial.",
      ],
      notaDispositivo:
        "Publicada em 5.9.2019 (edição extra-A, retificada em 18.9.2019): a vacatio de 120 dias faz a lei vigorar desde 3 de janeiro de 2020 — dica de cronologia constante.",
      pena: "Vigência: 120 dias",
      bancas: ["FCC", "VUNESP", "AOCP", "CEBRASPE"],
      cai: [
        "Revogações taxativas: **Lei 4.898/65 inteira** + **§ 2º do art. 150** e **art. 350 do Código Penal**.",
        "A Lei 4.898/65 — mãe do abuso de autoridade — governou 54 anos; a lei nova a sucedeu com tipos muito mais detalhados.",
        "Vigência: **120 dias de vacatio legis** — o número favorito de literalidade junto do «24h da nota de culpa».",
        "Fatos anteriores à vigência: disciplina da lei do tempo (art. 5º, XL, CF) — material para questões integradoras.",
      ],
      pegadinha: [
        "«Vigência imediata» ou «90 dias» — o texto diz **120 dias**.",
        "«A Lei 4.898/65 foi parcialmente mantida» — revogação **integral**, com nome e data no art. 44.",
        "«Os revogados do CP são os arts. 33 e 320» — os números certos: **§ 2º do art. 150** e **art. 350**.",
      ],
      exemplo: [
        "Abuso praticado em 2018, julgado em 2021: aplica-se a lei em vigor no tempo do fato (4.898/65, se mais benéfica/adequada à conduta) — soma com o princípio da legalidade.",
        "Questão direta clássica: «a Lei 13.869 passou a vigorar 120 dias após» — marque sem pestanejar **CERTO**.",
      ],
      macete:
        "**«4.898 foi sepultada; a filha nasceu 120 dias depois»** — e no epitáfio do CP ficaram escritos **150, § 2º, e 350**. Memorize esse trio e as questões de vigência são suas.",
    },
  ],
};
