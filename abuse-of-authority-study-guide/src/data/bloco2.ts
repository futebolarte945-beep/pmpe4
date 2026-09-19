import type { Bloco } from "./tipos";

export const bloco2: Bloco = {
  id: "bloco-2",
  numero: "Bloco 02",
  titulo: "Efeitos da condenação & sanções",
  intervalo: "Arts. 4º ao 8º",
  subtitulo: "O que a sentença produz — e o que ela NÃO produz automaticamente",
  descricao:
    "O bloco mais cobrado em provas de carreiras policiais e jurídicas. As bancas exploram sem piedade a diferença entre efeito automático e efeito condicionado à reincidência.",
  grupos: [
    {
      id: "art-4",
      ref: "Art. 4º",
      nome: "Efeitos da condenação: indenizar, inabilitar, perder o cargo",
      contexto:
        "Três efeitos com regimes diferentes — e um parágrafo único que virou o queridinho das bancas em 2020–2026.",
      dispositivo: [
        "Art. 4º São efeitos da condenação: I - tornar certa a obrigação de indenizar o dano causado pelo crime, devendo o juiz, a requerimento do ofendido, fixar na sentença o valor mínimo para reparação dos danos causados pela infração, considerando os prejuízos por ele sofridos; II - a inabilitação para o exercício de cargo, mandato ou função pública, pelo período de 1 (um) a 5 (cinco) anos; III - a perda do cargo, do mandato ou da função pública.",
        "Parágrafo único. Os efeitos previstos nos incisos II e III do caput deste artigo são condicionados à ocorrência de reincidência em crime de abuso de autoridade e não são automáticos, devendo ser declarados motivadamente na sentença.",
      ],
      notaDispositivo:
        "Note a precisão cirúrgica: só a indenização (inciso I) decorre automaticamente da condenação. Os efeitos II e III exigem REINCIDÊNCIA em crime de abuso de autoridade (reincidência específica) + declaração motivada na sentença.",
      pena: "Inabilitação: 1 a 5 anos",
      bancas: ["CEBRASPE", "FCC", "FGV"],
      cai: [
        "Efeito I — **indenização automática**: a condenação torna certa a obrigação de reparar o dano; o juiz fixa o **valor mínimo**, mas só **a requerimento do ofendido** (não age de ofício).",
        "Efeito II — **inabilitação de 1 a 5 anos** para cargo, mandato ou função pública: memorize os números, são trocados com frequência.",
        "Efeito III — **perda** do cargo, mandato ou função pública.",
        "**Parágrafo único = o ponto da prova**: efeitos II e III são **condicionados à reincidência em crime de abuso de autoridade**, **não são automáticos** e devem ser **declarados motivadamente na sentença**.",
        "Reincidência aqui é **específica**: nova condenação por abuso de autoridade — não basta qualquer outro crime.",
      ],
      pegadinha: [
        "«Todos os efeitos da condenação são automáticos» — **ERRADO**: apenas o de indenizar; II e III exigem reincidência + motivação.",
        "«Basta reincidência em crime doloso qualquer» — **ERRADO**: reincidir em **crime de abuso de autoridade**.",
        "Trocar **1 a 5 anos** por «6 meses a 3 anos» (números de projetos anteriores e de materiais velhos) — clássico FCC/Vunesp.",
        "«O juiz fixa o valor mínimo da indenização de ofício» — **ERRADO**: somente a requerimento do ofendido.",
        "«Obstar o registro da condenação em certidão impede os efeitos» — a lei não conhece esse bloqueio; cuidado com extrapolações.",
      ],
      exemplo: [
        "Policial condenado por abuso em 2022; em 2025, nova condenação por abuso (art. 13, exposição de preso) → nessa segunda sentença o juiz **pode**, motivadamente, decretar a **inabilitação** e a **perda do cargo**.",
        "Primeira condenação (réu primário): o juiz fixa valor mínimo indenizatório a pedido da vítima, mas **não pode** decretar a perda do cargo — falta a reincidência exigida pelo parágrafo único.",
      ],
      macete:
        "Regime dos efeitos: **I é automático; II e III são «R.M.» — Reincidência + Motivação**. E os números: **«1–5 para inabilitar»** (como uma mão aberta: 1 a 5 dedos).",
    },
    {
      id: "art-5",
      ref: "Art. 5º",
      nome: "Penas restritivas de direitos: as substitutivas do abuso",
      contexto:
        "Rol próprio e curtíssimo de substitutivas — e um inciso vetado que as bancas usam como isca.",
      dispositivo: [
        "Art. 5º As penas restritivas de direitos substitutivas das privativas de liberdade previstas nesta Lei são: I - prestação de serviços à comunidade ou a entidades públicas; II - suspensão do exercício do cargo, da função ou do mandato, pelo prazo de 1 (um) a 6 (seis) meses, com a perda dos vencimentos e das vantagens; III - (VETADO).",
        "Parágrafo único. As penas restritivas de direitos podem ser aplicadas autônoma ou cumulativamente.",
      ],
      notaDispositivo:
        "São apenas DUAS substitutivas (o inciso III foi vetado e nunca vigorou). A aplicação da substituição continua subordinada aos requisitos gerais do art. 55 do Código Penal.",
      pena: "Suspensão: 1 a 6 meses",
      bancas: ["FCC", "VUNESP", "AOCP"],
      cai: [
        "Só há **duas** restritivas de direitos substitutivas: **prestação de serviços à comunidade** (ou a entidades públicas) e **suspensão do exercício do cargo/função/mandato por 1 a 6 meses com perda de vencimentos e vantagens**.",
        "Parágrafo único: podem ser aplicadas **autônoma ou cumulativamente** — redação direta que cai em «certo ou errado».",
        "A suspensão funcional **sempre** vem acompanhada da perda dos vencimentos e das vantagens — não existe suspensão remunerada como pena.",
        "Ponto de conexão: a suspensão do art. 5º (penal) não se confunde com a suspensão disciplinar administrativa — esferas independentes (art. 6º).",
      ],
      pegadinha: [
        "«São penas substitutivas: multa, limitação de fim de semana e prestação pecuniária» — **ERRADO**: essas são do Código Penal; aqui o rol é próprio (PSC + suspensão).",
        "Trocar o prazo: **«1 a 6 meses»** por «15 a 180 dias» (era texto de projeto) ou por «1 a 2 meses».",
        "«A aplicação é necessariamente cumulativa» ou «necessariamente isolada» — **ERRADO**: autônoma OU cumulativa.",
        "Afirmar que o inciso III (prestação pecuniária) vigora — foi **vetado**; questão isca muito usada desde 2020.",
      ],
      exemplo: [
        "Agente condenado a 1 ano (art. 12, não comunicar flagrante), primário, com MP favorável: juiz substitui por **suspensão do cargo por 4 meses sem vencimentos + prestação de serviços à comunidade** — aplicação cumulativa lícita.",
        "Independentemente da pena, a corregedoria instaura PAD no mesmo período — processos paralelos e independentes (art. 6º).",
      ],
      macete:
        "Restritiva do abuso é dupla — **«SERVE e SAI»**: **SERVE** à comunidade e **SAI** do cargo por **1–6 meses** (sem um tostão de salário). E pode vir sozinha ou de mãos dadas (autônoma ou cumulativa).",
    },
    {
      id: "art-6-7",
      ref: "Arts. 6º e 7º",
      nome: "Das sanções civis e administrativas: a tríplice independência",
      contexto:
        "Penal, civil e administrativo caminham juntos, mas um não decide pelo outro — regra geral da tríplice responsabilização.",
      dispositivo: [
        "Art. 6º As penas previstas nesta Lei serão aplicadas independentemente das sanções de natureza civil ou administrativa cabíveis. Parágrafo único. As notícias de crimes previstos nesta Lei que descreverem falta funcional serão informadas à autoridade competente com vistas à apuração.",
        "Art. 7º As responsabilidades civil e administrativa são independentes da criminal, não se podendo mais questionar sobre a existência ou a autoria do fato quando essas questões tenham sido decididas no juízo criminal.",
      ],
      notaDispositivo:
        "É a reprodução da lógica do art. 935 do Código Civil: condenação penal faz coisa julgada quanto à existência do fato e à autoria — mas nem toda sentença penal irradia (veja o art. 8º).",
      bancas: ["CEBRASPE", "FGV"],
      cai: [
        "**Independência das três esferas**: penal, civil e administrativa — a condenação em uma não condiciona o resultado nas outras.",
        "A exceção do art. 7º: decididas no **juízo criminal** a **existência do fato** e a **autoria**, não se pode mais questioná-las no cível nem no administrativo (efeito vinculante da condenação penal).",
        "Parágrafo único do art. 6º — dever de **informar à autoridade competente** as notícias de crime que descreverem **falta funcional**, para apuração disciplinar.",
        "Cai em discursivas: a independência é **relativa** — relativa porque a condenação penal irradia; absoluta quanto aos elementos que o processo criminal não decidiu.",
      ],
      pegadinha: [
        "«Absolvido no penal, está automaticamente absolvido no administrativo» — **ERRADO** em regra; só há coisa julgada tríplice nas hipóteses do art. 8º (excludentes de ilicitude).",
        "«A condenação penal nada vale no processo civil» — **ERRADO**: existência do fato e autoria decididas no criminal tornam-se inquestionáveis.",
        "«Mesmo sem falta funcional, o juízo deve remeter cópia ao órgão disciplinar» — o dever legal é restrito às notícias que **descreverem falta funcional**.",
        "Cebraspe adora: «respondem-se subsidiariamente as responsabilidades civil e administrativa» — **ERRADO**, são **independentes**.",
      ],
      exemplo: [
        "Servidor condenado criminalmente por abuso (art. 30) ainda responde, em paralelo, à **ação civil de reparação** e ao **PAD** — três processos independentes tocando ao mesmo tempo.",
        "Na ação civil, o réu tenta negar que praticou o fato já reconhecido na sentença penal → **vedado**: existência e autoria já decididas no criminal (art. 7º).",
      ],
      macete:
        "**Três irmãos, três casas**: Penal, Civil e PAD moram separados (independência); mas quando a sentença penal define **fato e autor**, os dois irmãos engolem a decisão calados (art. 7º).",
    },
    {
      id: "art-8",
      ref: "Art. 8º",
      nome: "Coisa julgada tríplice: a sentença que limpa tudo",
      contexto:
        "Único ponto da lei em que aparecem as excludentes «estrito cumprimento de dever legal» e «exercício regular de direito» — memorize as quatro hipóteses.",
      dispositivo: [
        "Art. 8º Faz coisa julgada em âmbito cível, assim como no administrativo-disciplinar, a sentença penal que reconhecer ter sido o ato praticado em estado de necessidade, em legítima defesa, em estrito cumprimento de dever legal ou no exercício regular de direito.",
      ],
      notaDispositivo:
        "A regra espelha o art. 65, parágrafo único, do CPP. Absolvições por outras causas (ex.: insuficiência probatória, art. 386, VII, CPP) NÃO irradiam efeitos no cível/administrativo.",
      bancas: ["FCC", "CEBRASPE", "VUNESP"],
      cai: [
        "Sentença penal que reconhece **excludente de ilicitude** faz **coisa julgada no cível E no administrativo-disciplinar** — as quatro: **estado de necessidade, legítima defesa, estrito cumprimento de dever legal, exercício regular de direito**.",
        "Lógica: se o ato era totalmente lícito, não sobra ilícito civil nem disciplinar para apurar.",
        "**Estrito cumprimento de dever legal**: agir DENTRO do dever é atípico/lícito; agir ALÉM do estrito dever (excesso) é que pode configurar abuso — leitura sistemática com o art. 1º que as bancas exploram.",
        "Contraponto cobrado: absolvição por **falta de provas** não vincula as outras esferas.",
      ],
      pegadinha: [
        "«Faz coisa julgada apenas no cível» — **ERRADO**: cível **e** administrativo-disciplinar.",
        "«Qualquer sentença absolutória irradia coisa julgada» — **ERRADO**: só a que reconhece excludente de ilicitude.",
        "«Agir no estrito cumprimento de dever legal é abuso de autoridade atenuado» — **ERRADO**: é conduta lícita; o excesso do dever, sim, pode ser abuso.",
        "Incluir «imputabilidade» ou «coação moral» no rol — o artigo trata de **excludentes de ilicitude**, não de culpabilidade.",
      ],
      exemplo: [
        "PM absolvido no júri por chamar cobertura e agir em **estrito cumprimento de dever legal** durante um mandado → a corregedoria **não pode** demiti-lo pelo mesmo fato (coisa julgada tríplice).",
        "Servidor absolvido por **insuficiência de provas** → o PAD segue normalmente: sem excludente reconhecida, não há coisa julgada.",
      ],
      macete:
        "Quatro excludentes que «limpam a ficha inteira» — **N.L.E.R.**: **N**ecessidade, **L**egítima defesa, **E**strito dever **l**egal (encaixa como «E»), **R**egular exercício de direito. Reconheceu no penal? **Apagou no cível e no PAD.**",
    },
  ],
};
