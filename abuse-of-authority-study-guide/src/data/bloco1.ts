import type { Bloco } from "./tipos";

export const bloco1: Bloco = {
  id: "bloco-1",
  numero: "Bloco 01",
  titulo: "Disposições gerais & sujeitos",
  intervalo: "Arts. 1º ao 3º",
  subtitulo: "O alicerce: conceito, dolo específico, sujeito ativo e ação penal",
  descricao:
    "Três artigos que respondem 60% das questões objetivas sobre a lei. Quem domina o conceito, a finalidade específica e o sujeito ativo já elimina metade das alternativas erradas.",
  grupos: [
    {
      id: "art-1",
      ref: "Art. 1º",
      nome: "O conceito e a finalidade específica (a alma do crime)",
      contexto:
        "Define o que é abuso de autoridade e instala o elemento subjetivo especial que separa o crime de uma mera irregularidade funcional.",
      dispositivo: [
        "Art. 1º Esta Lei define os crimes de abuso de autoridade, cometidos por agente público, servidor ou não, que, no exercício de suas funções ou a pretexto de exercê-las, abuse do poder que lhe tenha sido atribuído.",
        "§ 1º As condutas descritas nesta Lei constituem crime de abuso de autoridade quando praticadas pelo agente com a finalidade específica de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou, ainda, por mero capricho ou satisfação pessoal.",
        "§ 2º A divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso de autoridade.",
      ],
      notaDispositivo:
        "A finalidade específica do § 1º é restritiva: sem ela, a conduta é atípica para esta lei (podendo restar outro crime, contravenção ou ilícito administrativo).",
      bancas: ["CEBRASPE", "FGV", "FCC"],
      cai: [
        "**Elemento subjetivo especial** (dolo específico) é a alma do tipo: a conduta só é abuso de autoridade se praticada com a finalidade de **prejudicar outrem**, **beneficiar a si ou terceiro** ou por **mero capricho/satisfação pessoal**.",
        "O abuso pode ocorrer **no exercício das funções** ou **a pretexto de exercê-las** — as duas modalidades caem em prova, e banca adora suprimir a segunda.",
        "**Não existe abuso de autoridade culposo** e não há responsabilidade objetiva: exige-se dolo + especial fim de agir.",
        "§ 2º como cláusula de **segurança jurídica para magistrados, membros do MP e delegados**: divergência na interpretação da lei ou na valoração de provas nunca será abuso (dialoga com a Lei 13.655/2018, que blindou CNJ e CNMP na mesma linha).",
        "Questão discursiva/recorrente: a finalidade específica funciona como **elemento normativo do tipo** — deve ser provada, não presumida.",
      ],
      pegadinha: [
        "Cebraspe clássico: «basta o exercício abusivo do poder, ainda que sem finalidade específica» — **ERRADO**. O mero excesso ou desvio de poder, sem uma das três finalidades, não completa o tipo.",
        "Trocar «beneficiar a si mesmo **ou a terceiro**» por «beneficiar exclusivamente a si mesmo» — o altruísmo interesseiro (favorecer amigo, partido, corporação) também configura.",
        "FGV/FCC: «admite-se a modalidade culposa» ou «prescreve a lei a responsabilidade objetiva» — **NUNCA**.",
        "Afirmar que a divergência hermenêutica configura abuso «quando grotesca» — a lei não faz essa ressalva; a discussão fica no plano do **dolo**, não num quarto inciso imaginário.",
      ],
      exemplo: [
        "**Típico:** delegado decreta a preventiva de um desafeto político sem nenhum elemento concreto, dias antes da eleição, «para ele aprender» — há finalidade de prejudicar + capricho.",
        "**Atípico (§ 2º):** juiz nega liminar por entender ausente o fumus boni iuris, ainda que a turma recursal pensasse diferente — divergência de interpretação não é abuso.",
        "**Outro crime, não abuso:** servidor humilha contribuinte no guichê por pura grosseria, sem usar poder funcional nem finalidade típica — pode ser injúria/ilícito funcional, não abuso de autoridade.",
      ],
      macete:
        "Grave as três finalidades com **P.B.C.**: **P**rejudicar outrem, **B**eneficiar (a si ou a terceiro), **C**apricho pessoal. E decore a frase de prova: «no P.B.C. não entra divergência» — divergência de interpretação NUNCA configura (art. 1º, § 2º).",
    },
    {
      id: "art-2",
      ref: "Art. 2º",
      nome: "Sujeito ativo: quem pode praticar o crime",
      contexto:
        "O rol mais amplo possível de agentes: qualquer Poder, qualquer ente, qualquer vínculo — inclusive transitório e gratuito.",
      dispositivo: [
        "Art. 2º É sujeito ativo do crime de abuso de autoridade qualquer agente público, servidor ou não, da administração direta, indireta ou fundacional de qualquer dos Poderes da União, dos Estados, do Distrito Federal, dos Municípios e de Território, compreendendo, mas não se limitando a: I - servidores públicos e militares ou pessoas a eles equiparadas; II - membros do Poder Legislativo; III - membros do Poder Executivo; IV - membros do Poder Judiciário; V - membros do Ministério Público; VI - membros dos tribunais ou conselhos de contas.",
        "Parágrafo único. Reputa-se agente público, para os efeitos desta Lei, todo aquele que exerce, ainda que transitoriamente ou sem remuneração, por eleição, nomeação, designação, contratação ou qualquer outra forma de investidura ou vínculo, mandato, cargo, emprego ou função em órgão ou entidade abrangidos pelo caput deste artigo.",
      ],
      notaDispositivo:
        "«Compreendendo, mas não se limitando a» = rol de incisos meramente EXEMPLIFICATIVO. O parágrafo único tem redação inspirada na Lei 8.429/92 (Lei de Improbidade).",
      bancas: ["CEBRASPE", "AOCP", "VUNESP"],
      cai: [
        "Sujeito ativo: **qualquer agente público**, da administração direta, indireta ou **fundacional**, de qualquer Poder e de qualquer ente federativo (inclusive Território, que a lei menciona expressamente).",
        "O parágrafo único é o preferido das bancas: exerce a função **ainda que transitoriamente ou sem remuneração** — alcança mesários, jurados, servidores cedidos, convocados e contratados por prazo.",
        "**Membros de Poder** (deputados, senadores, ministros de Estado, juízes, desembargadores, promotores, conselheiros de tribunais de contas) podem ser sujeitos ativos — foi justamente para alcançá-los que a lei nasceu.",
        "O sujeito passivo pode ser **qualquer pessoa**, natural ou jurídica — inclusive outro agente público.",
        "É **crime próprio**: o particular, em regra, não pratica abuso de autoridade; doutrina majoritária rejeita até a coautoria de particular por ausência de elemento subjetivo típico (ponto sofisticado que a FGV explora em discursivas).",
      ],
      pegadinha: [
        "«Somente servidor público efetivo e estável pode ser sujeito ativo» — **ERRADO**: basta qualquer forma de investidura, mesmo transitória e gratuita.",
        "«Militar não se submete à lei» — **ERRADO**: o inciso I inclui expressamente militares e equiparados (Bombeiros e PMs, conforme a esfera de atuação).",
        "Trocar o conceito pelo art. 327 do Código Penal — a lei do abuso é **mais ampla**: fala em «qualquer outra forma de investidura ou vínculo».",
        "«A lei exige que o agente atue estritamente dentro do horário de expediente» — sem fundamento: a modalidade «a pretexto de exercê-las» (art. 1º) cobre atuações fora do expediente usando o cargo como instrumento.",
      ],
      exemplo: [
        "**Mesário eleitoral** que, por capricho, impede um cidadão de votar e o expõe a humilhação: função pública transitória e não remunerada → sujeito ativo.",
        "**Conselheiro de TCE** que usa o cargo para intimidar prefeito adversário: inciso VI → sujeito ativo.",
        "**Particular** (lobista) que atormenta desafeto usando telefone e influência próprios: não é agente público, não comete abuso de autoridade (pode responder por outros crimes).",
      ],
      macete:
        "Parágrafo único = **«T.G.E.N.D.C.»**: exerce a função de forma **T**ransitória, **G**ratuita, por **E**leição, **N**omeação, **D**esignação ou **C**ontratação. Frase-âncora: «um pé no Poder bastou» — exerceu função pública, ainda que por um dia e de graça, já é sujeito ativo.",
    },
    {
      id: "art-3",
      ref: "Art. 3º",
      nome: "Ação penal: pública incondicionada e privada subsidiária",
      contexto:
        "A regra processual de ouro — e uma sobrevivente: o texto vigora porque o Congresso derrubou o veto presidencial.",
      dispositivo: [
        "Art. 3º Os crimes previstos nesta Lei são de ação penal pública incondicionada.",
        "§ 1º Será admitida ação privada se a ação penal pública não for intentada no prazo legal, cabendo ao Ministério Público aditar a queixa, repudiá-la e oferecer denúncia substitutiva, intervir em todos os termos do processo, fornecer elementos de prova, interpor recurso e, a todo tempo, no caso de negligência do querelante, retomar a ação como parte principal.",
        "§ 2º A ação privada subsidiária será exercida no prazo de 6 (seis) meses, contado da data em que se esgotar o prazo para oferecimento da denúncia.",
      ],
      notaDispositivo:
        "O art. 3º original foi integralmente VETADO, mas as partes vetadas foram promulgadas pelo Congresso Nacional — o texto vigora normalmente (atenção a materiais desatualizados que ainda o marcam como revogado).",
      bancas: ["FCC", "VUNESP", "AOCP"],
      cai: [
        "**Todos** os crimes da lei são de **ação penal pública incondicionada** — sem exceção condicionante (não há «representação» na Lei 13.869/2019).",
        "Exceção mesmo: **ação privada subsidiária**, se o MP não oferecer a denúncia no prazo legal — reproduz a lógica dos arts. 5º, LIX, e 318/319 do CPP.",
        "Na subsidiária, o MP conserva superpoderes: **aditar, repudiar, denunciar, intervir, fornecer prova, recorrer e retomar** a ação como parte principal.",
        "**Prazo da subsidiária: 6 meses**, contado do esgotamento do prazo para a denúncia — número mais cobrado do bloco.",
        "Se a vítima tem mais de 21 anos e não é incapaz, a regra é da **privada subsidiária**; não se fala em representação nesta lei.",
      ],
      pegadinha: [
        "«Ação penal privada» (lisa) ou «pública condicionada à representação» — **ERRADO**: a regra é pública incondicionada; a privada é subsidiária.",
        "Trocar os **6 meses** por 20 dias ou 5 anos — distrator clássico de Vunesp.",
        "«O art. 3º foi vetado e não vigora» — **ERRADO**: embora vetado, foi promulgado pelo Congresso. Questão armadilha recorrente desde 2020.",
        "«Na ação privada subsidiária o Ministério Público se afasta do processo» — **ERRADO**: ele pode intervir em todos os termos e até retomar a titularidade.",
      ],
      exemplo: [
        "Vítima de prisão espetaculosa noticia o fato ao MP; o promotor deixa escoar o prazo da denúncia sem manifestação → o ofendido oferece **queixa subsidiária em 6 meses**; no curso do processo, o MP adere e reassume como parte principal.",
        "Situação de prova: «o MP ofereceu a denúncia tempestivamente» → **não cabe** ação privada; a subsidiária exige a inércia no prazo legal.",
      ],
      macete:
        "Ação penal no abuso: **«o Estado denuncia sempre; se dormir, a vítima acorda em 6 meses»**. Incondicionada por princípio, subsidiária por exceção, MP com poderes totais até o fim.",
    },
  ],
};
