import {
  ArrowRight,
  Ban,
  CheckCircle2,
  Gavel,
  ListOrdered,
  LockKeyhole,
  MessageSquareWarning,
  Trophy,
  Undo2,
} from "lucide-react";
import { trilha, vetosDerrubados, vetosSemVigencia } from "../data/proximos";
import { Reveal } from "./Reveal";
import { cn } from "../utils/cn";

/* ---------- mapa de vetos ---------- */
function MapaVetos() {
  return (
    <Reveal>
      <div className="overflow-hidden rounded-2xl border border-line bg-ink-2/40">
        <div className="grid md:grid-cols-2">
          <div className="border-b border-line p-7 md:border-b-0 md:border-r md:p-9">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md border border-blood/40 bg-blood/10">
                <Ban className="h-4 w-4 text-blood-2" />
              </span>
              <h3 className="font-serif text-xl font-semibold text-paper">
                Vetados — nunca vigoraram
              </h3>
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-fade">
              Se a questão citar qualquer um destes com redação bonita, a alternativa nasceu errada.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {vetosSemVigencia.map((v) => (
                <span
                  key={v}
                  className="rounded-md border border-blood/30 bg-blood/5 px-3 py-1.5 font-mono text-[11px] tracking-wide text-blood-2"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
          <div className="p-7 md:p-9">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md border border-gold/40 bg-gold/10">
                <Undo2 className="h-4 w-4 text-gold-2" />
              </span>
              <h3 className="font-serif text-xl font-semibold text-paper">
                Vetos derrubados — VIGORAM
              </h3>
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-fade">
              Promulgados pelo Congresso Nacional: a banca tenta te convencer de que não existem.
              Erre quem não sabe — não erre você.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {vetosDerrubados.map((v) => (
                <span
                  key={v}
                  className="rounded-md border border-gold/30 bg-gold/5 px-3 py-1.5 font-mono text-[11px] tracking-wide text-gold-2"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 border-t border-line bg-ink-3/50 px-7 py-4 md:px-9">
          <MessageSquareWarning className="h-4 w-4 shrink-0 text-gold" />
          <p className="text-[13px] leading-relaxed text-paper/70">
            <span className="hl">Macete do mapa:</span> veto total = cova («11 · 14 · 17 / 26 /
            34 · 35»); veto derrubado = questão certa («vigoram todos os que têm pena no corpo da
            lei»).
          </p>
        </div>
      </div>
    </Reveal>
  );
}

/* ---------- conclusão da parte ---------- */
function Conclusao() {
  return (
    <Reveal>
      <div className="noise relative overflow-hidden rounded-2xl border border-gold/25 bg-gradient-to-br from-ink-2 via-ink-2 to-gold/10 p-8 md:p-12">
        <Trophy
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 text-gold/[0.06]"
          strokeWidth={1}
        />
        <div className="relative flex items-center gap-3">
          <span className="tape-gold flex h-11 w-11 items-center justify-center rounded-md text-[#161008]">
            <CheckCircle2 className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            Parte 01 · concluída
          </span>
        </div>
        <h2 className="relative mt-6 max-w-3xl font-serif text-4xl font-black leading-[1.05] text-paper md:text-6xl">
          Missão cumprida:
          <br />
          <span className="text-gold-2">a Lei do Abuso de Autoridade é sua.</span>
        </h2>
        <p className="relative mt-6 max-w-2xl text-[15px] leading-relaxed text-paper/75">
          Seis blocos, quarenta e cinco artigos, dezenove grupos de estudo, mapa de vetos e o
          comparativo com a tortura. Você domina a lei mais cobrada da legislação penal
          extravagante nas provas da AOCP, Cebraspe, FGV, FCC e Vunesp — da vacatio de{" "}
          <span className="hl">120 dias</span> à <span className="hl">carteirada do art. 33</span>.
        </p>
        <div className="relative mt-7 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2.5 rounded-md border border-gold/40 bg-gold/10 px-5 py-3 font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-gold-2">
            <ArrowRight className="h-4 w-4" />
            Envie «continua» para liberar a Parte 02 — Lei de Drogas (Lei 11.343/2006)
          </span>
        </div>
      </div>
    </Reveal>
  );
}

/* ---------- trilha 13 partes ---------- */
function Trilha() {
  return (
    <Reveal>
      <div className="rounded-2xl border border-line bg-ink-2/40 p-7 md:p-9">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md border border-gold/40 bg-gold/10 text-gold-2">
              <ListOrdered className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-serif text-2xl font-bold text-paper">A trilha completa</h3>
              <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-faint">
                13 partes · legislação penal extravagante
              </p>
            </div>
          </div>
          <span className="rounded-full border border-mint/40 bg-mint/10 px-4 py-1.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.16em] text-mint">
            Parte 01 · 100% concluída
          </span>
        </div>
        <div className="mt-7 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {trilha.map((p) => (
            <div
              key={p.n}
              className={cn(
                "flex items-center gap-3 rounded-lg border px-4 py-3 transition-colors",
                p.status === "disponivel"
                  ? "border-mint/35 bg-mint/5"
                  : "border-line bg-ink-3/40",
              )}
            >
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-md font-mono text-[11px] font-bold",
                  p.status === "disponivel" ? "bg-mint/15 text-mint" : "bg-ink-2 text-faint",
                )}
              >
                {String(p.n).padStart(2, "0")}
              </span>
              <span
                className={cn(
                  "flex-1 text-[12.5px] leading-snug",
                  p.status === "disponivel" ? "font-semibold text-paper" : "text-fade",
                )}
              >
                {p.titulo}
              </span>
              {p.status === "disponivel" ? (
                <CheckCircle2 className="h-4 w-4 shrink-0 text-mint" />
              ) : (
                <LockKeyhole className="h-3.5 w-3.5 shrink-0 text-faint" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

/* ---------- checkpoint completo ---------- */
export function Checkpoint() {
  return (
    <section id="checkpoint" className="scroll-mt-24 border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl space-y-10 px-6 py-20 md:py-24">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold/60" />
            Síntese tática · Parte 01 encerrada
          </div>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight text-paper md:text-5xl">
            Mapa de vetos <span className="text-gold-2">&</span> a estrada que continua
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-fade">
            Última consolidação antes de fechar o caderno: quais dispositivos morreram no veto
            presidencial e quais ressuscitaram na promulgação — a diferença vale pontos em
            literalidade. Depois, o próximo destino da trilha.
          </p>
        </Reveal>

        <MapaVetos />
        <Conclusao />
        <Trilha />

        <Reveal>
          <footer className="rounded-xl border border-line bg-ink-3/50 px-6 py-6 md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <Gavel className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="max-w-3xl text-[12px] leading-relaxed text-faint">
                  Material didático para fins de estudo. Textos legais conforme compilação oficial
                  (Planalto), com alterações até a Lei nº 14.321/2022. Sempre confira a redação
                  vigente na véspera da sua prova. Parte 01 de 13 — integral (arts. 1º a 45);
                  demais partes liberadas sob comando do aluno.
                </p>
              </div>
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.24em] text-faint">
                Prof. · Penal Extravagante
              </span>
            </div>
          </footer>
        </Reveal>
      </div>
    </section>
  );
}
