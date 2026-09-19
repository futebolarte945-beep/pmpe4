import { Flame, GitCompareArrows, ShieldQuestion, Brain } from "lucide-react";
import { maceteComparativo, quadro } from "../data/comparativo";
import { Reveal, rich } from "./Reveal";

export function Comparativo() {
  return (
    <section id="comparativo" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-line bg-ink-2/50 p-7 md:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-8 select-none font-serif text-[130px] font-black leading-none text-paper/[0.03]"
            >
              ×
            </div>
            <div className="relative flex flex-wrap items-center gap-3">
              <span className="tape inline-flex items-center gap-2 rounded-sm px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#f3e2c8]">
                <GitCompareArrows className="h-3.5 w-3.5" />
                Fechamento da Parte 01
              </span>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-fade">
                Quadro comparativo final
              </span>
            </div>
            <h2 className="relative mt-5 max-w-3xl font-serif text-3xl font-black leading-tight text-paper md:text-[44px]">
              Abuso de Autoridade <span className="text-gold-2">×</span>{" "}
              <em className="not-italic text-blood-2">Tortura</em>
            </h2>
            <p className="relative mt-4 max-w-2xl text-[15px] leading-relaxed text-paper/70">
              A disputa preferida das cinco bancas: quando o agente usa o poder com finalidade
              torta, a linha que separa os dois crimes decide a questão — sujeito, dolo, sofrimento
              e o carimbo de hediondo.
            </p>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-line">
            {/* cabeçalho das colunas */}
            <div className="grid grid-cols-[1fr] bg-ink-3/60 md:grid-cols-[0.9fr_1.05fr_1.05fr]">
              <div className="hidden items-center gap-2 border-b border-line px-5 py-4 font-mono text-[10.5px] uppercase tracking-[0.22em] text-faint md:flex">
                Critério
              </div>
              <div className="flex items-center gap-2.5 border-b border-gold/30 bg-gold/5 px-5 py-4 md:border-l md:border-line">
                <ShieldQuestion className="h-4 w-4 shrink-0 text-gold-2" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-2">
                    Abuso de Autoridade
                  </div>
                  <div className="text-[11px] text-fade">Lei 13.869/2019</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 border-b border-blood/30 bg-blood/5 px-5 py-4 md:border-l md:border-line">
                <Flame className="h-4 w-4 shrink-0 text-blood-2" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-blood-2">
                    Tortura
                  </div>
                  <div className="text-[11px] text-fade">Lei 9.455/1997</div>
                </div>
              </div>
            </div>

            {quadro.map((l, i) => (
              <div
                key={l.criterio}
                className={`grid grid-cols-1 md:grid-cols-[0.9fr_1.05fr_1.05fr] ${
                  i % 2 === 0 ? "bg-ink-2/40" : "bg-ink-2/20"
                }`}
              >
                <div className="border-b border-line/70 px-5 pt-4 pb-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gold md:border-b-0 md:py-4">
                  {l.criterio}
                </div>
                <div className="border-b border-line/70 px-5 py-2 text-[13px] leading-relaxed text-paper/80 md:border-l md:border-b-0 md:border-line/70 md:py-4">
                  {l.abuso}
                </div>
                <div className="px-5 py-2 pb-4 text-[13px] leading-relaxed text-paper/80 md:border-l md:border-line/70 md:py-4 md:pb-2">
                  {l.tortura}
                </div>
              </div>
            ))}

            <div className="flex items-start gap-3 border-t border-line bg-gold/5 px-5 py-4 md:px-6">
              <Brain className="mt-0.5 h-4 w-4 shrink-0 text-gold-2" />
              <p className="text-[13.5px] leading-relaxed text-paper/80">
                <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] text-gold-2">
                  Macete do professor —{" "}
                </span>
                {rich(maceteComparativo)}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
