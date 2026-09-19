export type Variante = "cai" | "pegadinha" | "exemplo" | "macete";

export interface Grupo {
  /** âncora/identificador */
  id: string;
  /** referência legal exibida no chip — ex.: "Art. 9º" ou "Arts. 6º e 7º" */
  ref: string;
  /** nome didático do grupo */
  nome: string;
  /** linha de contexto breve sob o título */
  contexto: string;
  /** parágrafos do dispositivo legal (texto oficial, abreviado quando indicado) */
  dispositivo: string[];
  /** observação editorial sobre o dispositivo (vetos, promulgação, alterações) */
  notaDispositivo?: string;
  /** pena-base / penalidade para o chip */
  pena?: string;
  /** bancas que mais exploram o ponto */
  bancas?: string[];
  /** 🎯 cai na prova */
  cai: string[];
  /** ⚠️ pegadinha clássica */
  pegadinha: string[];
  /** 📌 exemplo prático */
  exemplo: string[];
  /** 🧠 macete do professor */
  macete: string;
}

export interface NotaProfessor {
  titulo: string;
  itens: string[];
}

export interface Bloco {
  id: string;
  numero: string;
  titulo: string;
  intervalo: string;
  subtitulo: string;
  descricao: string;
  secoes?: { rotulo: string; ate: string }[];
  /** correção de rota: temas cobrados junto ao bloco que vivem em outros diplomas */
  notaProfessor?: NotaProfessor;
  grupos: Grupo[];
}

export interface BlocoFuturo {
  numero: string;
  titulo: string;
  intervalo: string;
  temas: string[];
}

export interface ParteTrilha {
  n: number;
  titulo: string;
  status: "disponivel" | "parcial" | "breve";
}
