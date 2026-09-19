import { AlertTriangle, Brain, type LucideIcon, Scale, Target } from "lucide-react";
import { cn } from "../utils/cn";
import { rich } from "./Reveal";
import type { Variante } from "../data/tipos";

const config: Record<
  Variante,
  {
    icon: LucideIcon;
    rotulo: string;
    classe: string;
    chip: string;
    border: string;
    glow: string;
  }
> = {
  cai: {
    icon: Target,
    rotulo: "O que cai na prova",
    classe: "text-mint",
    chip: "border-mint/35 bg-mint/10 text-mint",
    border: "border-mint/25",
    glow: "bg-mint/8",
  },
  pegadinha: {
    icon: AlertTriangle,
    rotulo: "Pegadinha clássica",
    classe: "text-blood-2",
    chip: "border-blood/35 bg-blood/10 text-blood-2",
    border: "border-blood/25",
    glow: "bg-blood/8",
  },
  exemplo: {
    icon: Scale,
    rotulo: "Exemplo prático",
    classe: "text-skyy-2",
    chip: "border-skyy/35 bg-skyy/10 text-skyy-2",
    border: "border-skyy/25",
    glow: "bg-skyy/8",
  },
  macete: {
    icon: Brain,
    rotulo: "Macete do professor",
    classe: "text-viol-2",
    chip: "border-viol/35 bg-viol/10 text-viol-2",
    border: "border-viol/25",
    glow: "bg-viol/8",
  },
};

interface DidacticProps {
  variante: Variante;
  itens?: string[];
  texto?: string;
  compacta?: boolean;
}

export function Didactic({ variante, itens, texto, compacta }: DidacticProps) {
  const c = config[variante];
  const Icon = c.icon;

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl border bg-ink-2/60",
        c.border,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl transition-opacity duration-700 group-hover:opacity-100",
          c.glow,
          compacta ? "opacity-0" : "opacity-60",
        )}
      />
      <div className="relative flex items-center gap-2.5 px-5 pt-4 pb-3">
        <span
          className={cn(
            "flex h-7 w-7 items-center justify-center rounded-md border",
            c.chip,
          )}
        >
          <Icon className="h-3.5 w-3.5" strokeWidth={2.2} />
        </span>
        <h4 className={cn("font-mono text-[11px] uppercase tracking-[0.18em]", c.classe)}>
          {c.rotulo}
        </h4>
        <span className={cn("ml-auto h-px flex-1 max-w-16 bg-current opacity-20", c.classe)} />
      </div>

      <div className="relative flex-1 px-5 pb-5">
        {itens && (
          <ul className="space-y-2.5">
            {itens.map((item, i) => (
              <li key={i} className="flex gap-2.5 text-[13.5px] leading-relaxed text-paper/80">
                <span className={cn("mt-[7px] h-1 w-1 shrink-0 rounded-full bg-current", c.classe)} />
                <span>{rich(item)}</span>
              </li>
            ))}
          </ul>
        )}
        {texto && (
          <p className="font-serif text-[15px] italic leading-relaxed text-paper/90">{rich(texto)}</p>
        )}
      </div>
    </div>
  );
}
