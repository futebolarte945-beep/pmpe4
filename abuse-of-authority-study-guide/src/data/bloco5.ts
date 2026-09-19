import type { Bloco } from "./tipos";

export const bloco5: Bloco = {
  id: "bloco-5",
  numero: "Bloco 05",
  titulo: "Crimes em espécie — Parte III",
  intervalo: "Arts. 34 ao 38",
  subtitulo: "O Judiciário sob a própria lei: patrimônio bloqueado, vistas e «antecipação de culpa»",
  descricao:
    "A trincheira final dos crimes em espécie — voltada, sobretudo, aos operadores do processo judicial. Dois vetos totais (34 e 35) e três tipos cujas penas e sujeitos a banca troca sem dó.",
  notaProfessor: {
    titulo: "Correção de rota: os temas citados vivem em outros artigos/diplomas",
    itens: [
      "**Negar acesso ao preso** — é o **art. 20** (entrevista com advogado), Bloco 03.",
      "**Impedir habeas corpus** — é o **art. 19** (pleito engavetado + juiz omisso no § único), Bloco 03.",
      "**Violar prazo da audiência de custódia (24h)** — disciplina do **CPP, art. 3º-A** (pacote anticrime); na LAA, dialoga com os arts. 12 e 19.",
      "**Obter prova ilícita** — é o **art. 25**, acabado de estudar no Bloco 04.",
      "**Descumprir decisão judicial** — **desobediência, CP art. 330**; não há tipo próprio na Lei 13.869.",
      "O Bloco 05 real fala de outra coisa: **indisponibilidade exacerbada de ativos (36), vista procrastinatória no colegiado (37) e antecipação de culpa (38)** — três crimes que atingem, em geral, o próprio Judiciário e os investigadores.",
    ],
  },
  grupos: [
    {
      id: "art-34-35",
      ref: "Arts. 34 e 35",
      nome: "Os dois últimos vetos totais",
      contexto:
        "Fecham o mapa: seis artigos que nunca deixaram o papel do projeto — e vivem pontuando questão errada.",
      dispositivo: ["Art. 34. (VETADO).  ·  Art. 35. (VETADO)."],
      notaDispositivo:
        "Quadro completo dos vetos sem vigência: 11, 14, 17, 26, 34 e 35 (além dos incisos 5º, III; 22, § 1º, II; e o parágrafo do 29).",
      cai: [
        "Memorize o sexteto: **11, 14, 17, 26, 34, 35** — qualquer citação a eles como vigentes elimina a alternativa.",
        "Questões FGV adoram reconstruir o texto do projeto como se lei fosse; a técnica é reconhecer o número morto.",
      ],
      pegadinha: [
        "«O art. 34 reprime a greve de servidores do Judiciário...» — invenção de fabricante de alternativa: o dispositivo **não vigora**.",
        "Confundir com os **vetos derrubados** (3º, 9º, 13 III, 15 PU, 16, 20, 30, 32, 38, 43): esses vigoram; 34 e 35, não.",
      ],
      exemplo: [
        "Prova Cebraspe: «o art. 35 da LAA considera crime...» — julgue **Errado** em um segundo.",
      ],
      macete:
        "**«34–35, a dupla que não assina plantão»** — juntaram-se a 11, 14, 17 e 26 na ala dos vetos. Complete o mapa: **11·14·17 / 26 / 34·35**.",
    },
    {
      id: "art-36",
      ref: "Art. 36",
      nome: "Indisponibilidade exacerbadamente excessiva",
      contexto:
        "O bloqueio judicial que sufoca sem necessidade — decretar demais e não corrigir.",
      dispositivo: [
        "Art. 36. Decretar, em processo judicial, a indisponibilidade de ativos financeiros em quantia que extrapole exacerbadamente o valor estimado para a satisfação da dívida da parte e, ante a demonstração, pela parte, da excessividade da medida, deixar de corrigi-la: Pena - detenção, de 1 (um) a 4 (quatro) anos, e multa.",
      ],
      pena: "Detenção 1–4 anos + multa",
      bancas: ["FGV", "FCC"],
      cai: [
        "Dois fatos somados: **decretar** indisponibilidade que extrapole **exacerbadamente** o valor da dívida **+ deixar de corrigir** após demonstrada a excessividade.",
        "Sede: **processo judicial** — não alcança a atuação administrativa direta do Fisco (outros remédios, não o crime).",
        "Palavra-gatilho do tipo: «**exacerbadamente**» — mero excesso razoável/discutível fica no plano da divergência (art. 1º, § 2º).",
      ],
      pegadinha: [
        "«Basta a indisponibilidade superior ao débito» — exigem-se **dois** comportamentos: o exagero exacerbado **e** a não correção diante da demonstração.",
        "«Aplica-se ao agente fazendário que constitui o crédito» — o tipo está ancorado ao **processo judicial**.",
        "«Puniria qualquer magistrado por bloqueio elevado» — o elemento «exacerbadamente» é a chave hermenêutica que afasta o temor difuso.",
      ],
      exemplo: [
        "Dívida de R$ 120 mil; juiz determina bloqueio de R$ 30 milhões e ignora três petições demonstrando a cifra — art. 36 completo.",
        "Bloqueio de valor módico acima do débito, imediatamente corrigido — atipicidade por ausência de exacerbação.",
      ],
      macete:
        "**«Bloqueou dez para cobrar um e não corrigiu? Artigo 36 bateu à porta»** — exacerbo + omissão de correção = **1 a 4 anos**.",
    },
    {
      id: "art-37",
      ref: "Art. 37",
      nome: "Vista procrastinatória no órgão colegiado",
      contexto:
        "Pedir vista para estudar é direito regimental; pedir vista para engavetar é crime.",
      dispositivo: [
        "Art. 37. Demorar demasiada e injustificadamente no exame de processo de que tenha requerido vista em órgão colegiado, com o intuito de procrastinar seu andamento ou retardar o julgamento: Pena - detenção, de 6 (seis) meses a 2 (dois) anos, e multa.",
      ],
      pena: "Detenção 6 meses–2 anos + multa",
      bancas: ["FCC", "CEBRASPE"],
      cai: [
        "Sede restrita: processo de que se **requereu vista em órgão colegiado** — tribunais, turmas, câmaras.",
        "Elementos cumulativos: **demora demasiada E injustificada** + **intuito de procrastinar/retardar**.",
        "Sujeito ativo natural: desembargadores, ministros, conselheiros — os integrantes do colegiado.",
      ],
      pegadinha: [
        "«Alcança o juiz singular que retém o processo por muito tempo» — o tipo pede **órgão colegiado e pedido de vista**.",
        "«Há prazo fixo em dias para devolver a vista» — a lei não fixou número: fala em **demasiada e injustificadamente**.",
        "«A demora qualificada dispensa o dolo finalístico» — o **intuito de procrastinar/retardar** é indispensável.",
      ],
      exemplo: [
        "Desembargador pede vista em HC de réu preso e o mantém na gaveta por dois anos, sem despacho, para retardar o julgamento da turma.",
        "Ministro devolve a vista em três sessões após estudo intenso de processo complexo — conduta regular, atípica.",
      ],
      macete:
        "**«Pediu vista, deitou em cima: a vista virou cela... metafórica — 6 meses a 2 anos»**. E a senha cruzada: **31 estica inquérito/fiscalização; 37 estica julgamento colegiado.**",
    },
    {
      id: "art-38",
      ref: "Art. 38",
      nome: "Antecipação de culpa: o boletim empolgado",
      contexto:
        "Fechar a Parte dos crimes com o crime da era dos stories — dizer «culpado» antes da hora.",
      dispositivo: [
        "Art. 38. Antecipar o responsável pelas investigações, por meio de comunicação, inclusive rede social, atribuição de culpa, antes de concluídas as apurações e formalizada a acusação: Pena - detenção, de 6 (seis) meses a 2 (dois) anos, e multa.",
      ],
      notaDispositivo:
        "Vigora por promulgação das partes vetadas. Doutrina dominante: informar o fato investigado não basta — o tipo exige a **atribuição de culpa** (juízo de valor conclusivo).",
      pena: "Detenção 6 meses–2 anos + multa",
      bancas: ["CEBRASPE", "FGV", "FCC", "AOCP", "VUNESP"],
      cai: [
        "Sujeito ativo delimitado: o **responsável pelas investigações** (delegado, membro do MP à frente do inquérito, autoridade policial) — não o juiz, que não investiga.",
        "Elemento temporal com **conjunção aditiva**: antes de **concluídas as apurações E formalizada a acusação**.",
        "Meio expresso: qualquer **comunicação, inclusive rede social** — o legislador enxergou os stories antes de todos.",
        "Núcleo: **atribuição de culpa** — taxar alguém de culpado, autor do crime; narrar o fato sob investigação, sob a luz da doutrina, não basta (e encarna tensão com a liberdade de informação pública).",
      ],
      pegadinha: [
        "Trocar «**e**» por «ou» — o tipo marca duas conquistas pendentes: apurações concluídas **e** acusação formalizada.",
        "«Alcança o juiz que comenta o caso no noticiário» — o sujeito é o **responsável pelas investigações**.",
        "«Aplicar-se-ia à imprensa que chama o investigado de culpado» — sujeito típico continua sendo o agente público investigador.",
        "«Vetado e sem vigência» — **vigora**: o veto foi derrubado pelo Congresso.",
      ],
      exemplo: [
        "Delegado posta no Instagram: «Prendemos o culpado pelo latrocínio da Barra; frio e reincidente convicto» — em pleno inquérito, art. 38.",
        "Coletiva do MP relatando: «investigamos suspeita de fraudes no transporte escolar; seguiremos apurações», sem etiquetar autor — sem crime.",
      ],
      macete:
        "**«Antes do E não diga ele»**: enquanto apurações não se concluírem **E** acusação não for formalizada, o boletim não diz «culpado». Descumpriu? **6 meses a 2 anos** — e o post não desaparece.",
    },
  ],
};
