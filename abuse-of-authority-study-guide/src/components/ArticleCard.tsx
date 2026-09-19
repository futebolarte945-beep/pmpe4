import { BookMarked, Landmark } from "lucide-react";
import type { Grupo } from "../data/tipos";
import { Didactic } from "./Didactic";
import { Reveal } from "./Reveal";

export function ArticleCard({ grupo, index }: { grupo: Grupo; index: number }) {
  return (
    <article id={grupo.id} className="scroll-mt-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-line bg-ink-2/40">
          {/* cabeçalho do grupo */}
          <div className="relative border-b border-line/80 px-6 py-6 md:px-9 md:py-8">
            <div
              aria-hidden
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none font-serif text-[120px] font-black leading-none text-paper/[0.035] md:text-[180px]"
            >
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="relative flex flex-wrap items-center gap-2.5">
              <span className="rounded-md border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-gold-2">
                {grupo.ref}
              </span>
              {grupo.pena && (
                <span className="rounded-md border border-line-2 bg-ink-3 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-fade">
                  {grupo.pena}
                </span>
              )}
              {grupo.bancas?.map((b) => (
                <span
                  key={b}
                  className="hidden rounded-full border border-line-2/80 px-2.5 py-[3px] font-mono text-[10px] tracking-[0.14em] text-faint sm:inline-block"
                >
                  {b}
                </span>
              ))}
            </div>
            <h3 className="relative mt-4 max-w-2xl font-serif text-2xl font-semibold leading-tight text-paper md:text-[32px]">
              {grupo.nome}
            </h3>
            <p className="relative mt-2.5 max-w-2xl text-sm leading-relaxed text-fade md:text-[15px]">
              {grupo.contexto}
            </p>
          </div>

          {/* dispositivo legal */}
          <div className="px-6 pt-7 md:px-9">
            <div className="relative">
              <div className="paper-box noise relative rounded-lg p-6 pl-8 md:p-8 md:pl-10">
                <span className="absolute left-3.5 top-0 h-full w-px bg-blood/50 md:left-5" />
                <span className="absolute left-[22px] top-0 h-full w-px bg-blood/20 md:left-7" />
                <div className="mb-4 flex items-center gap-2">
                  <BookMarked className="h-3.5 w-3.5 text-blood" />
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#6b3a2e]">
                    Dispositivo legal · texto compilado Planalto
                  </span>
                </div>
                <div className="paper-lines">
                  {grupo.dispositivo.map((p, i) => (
                    <p
                      key={i}
                      className="mb-3 font-serif text-[15px] leading-[1.72rem] text-[#2b2415] last:mb-0 md:text-[16px]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
              {grupo.notaDispositivo && (
                <div className="mt-3 flex items-start gap-2.5 rounded-lg border border-gold/20 bg-gold/5 px-4 py-3">
                  <Landmark className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <p className="text-[13px] leading-relaxed text-paper/70">
                    {grupo.notaDispositivo}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* quadrante didático */}
          <div className="grid gap-4 px-6 py-7 md:grid-cols-2 md:px-9 md:py-8">
            <Didactic variante="cai" itens={grupo.cai} />
            <Didactic variante="pegadinha" itens={grupo.pegadinha} />
            <Didactic variante="exemplo" itens={grupo.exemplo} />
            <Didactic variante="macete" texto={grupo.macete} />
          </div>
        </div>
      </Reveal>
    </article>
  );
}
