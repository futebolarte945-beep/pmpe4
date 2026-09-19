import type { ParteTrilha } from "./tipos";

/** Mapa geral de vetos da Lei 13.869/2019 — dispositivos que nunca vigoraram */
export const vetosSemVigencia = [
  "Art. 11",
  "Art. 14",
  "Art. 17",
  "Art. 26",
  "Art. 34",
  "Art. 35",
  "Art. 5º, III",
  "Art. 22, § 1º, II",
  "Parágrafo do art. 29",
];

/** Vetos derrubados pelo Congresso (promulgação) — VIGORAM e caem em prova */
export const vetosDerrubados = [
  "Art. 3º (ação penal)",
  "Art. 9º (prisão ilegal + § único)",
  "Art. 13, III (prova forçada)",
  "Art. 15, § único (silêncio/patrono)",
  "Art. 16 (identificação)",
  "Art. 20 (entrevista com advogado)",
  "Art. 30 (persecução sem justa causa)",
  "Art. 32 (acesso aos autos)",
  "Art. 38 (antecipação de culpa)",
  "Art. 43 (EOAB, art. 7º-B)",
];

/** As 13 partes da trilha de legislação penal extravagante */
export const trilha: ParteTrilha[] = [
  { n: 1, titulo: "Lei 13.869/2019 — Abuso de Autoridade", status: "disponivel" },
  { n: 2, titulo: "Lei 11.343/2006 — Lei de Drogas", status: "breve" },
  { n: 3, titulo: "Lei 8.072/1990 — Crimes Hediondos", status: "breve" },
  { n: 4, titulo: "Lei 7.210/1984 — Lei de Execução Penal", status: "breve" },
  { n: 5, titulo: "Lei 10.826/2003 — Estatuto do Desarmamento", status: "breve" },
  { n: 6, titulo: "Lei 11.340/2006 — Lei Maria da Penha", status: "breve" },
  { n: 7, titulo: "Lei 9.455/1997 — Lei de Tortura", status: "breve" },
  { n: 8, titulo: "Lei 12.850/2013 — Organização Criminosa", status: "breve" },
  { n: 9, titulo: "Lei 9.613/1998 — Lavagem de Dinheiro", status: "breve" },
  { n: 10, titulo: "Lei 9.296/1996 — Interceptações Telefônicas", status: "breve" },
  { n: 11, titulo: "Lei 9.605/1998 — Crimes Ambientais", status: "breve" },
  { n: 12, titulo: "Lei 7.960/1989 — Prisão Temporária", status: "breve" },
  { n: 13, titulo: "Lei 9.099/1995 — Juizados (aspectos penais)", status: "breve" },
];
