import { ArrowDown, BookOpenCheck, FileWarning, Gavel, Target } from "lucide-react";
import { Reveal } from "./Reveal";

const bancas = ["CEBRASPE", "FGV", "FCC", "VUNESP", "AOCP"];

const stats = [
  { k: "45", v: "artigos no raio-x" },
  { k: "25", v: "crimes em espécie" },
  { k: "05", v: "bancas mapeadas" },
  { k: "06", v: "blocos · parte 01 completa" },
];

export function Hero() {
  return (
    <header className="grid-bg noise relative overflow-clip">
      {/* brilhos */}
      <div className="pointer-events-none absolute -left-40 top-[-20%] h-[560px] w-[560px] rounded-full bg-gold/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[-30%] right-[-10%] h-[520px] w-[520px] rounded-full bg-blood/8 blur-[130px]" />
      {/* número gigante */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 top-16 hidden select-none font-serif text-[22vw] font-black leading-none tracking-tighter text-transparent lg:block"
        style={{ WebkitTextStroke: "1px rgba(236,226,201,0.07)" }}
      >
        13.869
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-16 pt-28 md:pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-24">
        {/* texto */}
        <div>
          <Reveal>
            <div className="flex flex-wrap items-center gap-2">
              <span className="tape-gold inline-flex items-center gap-2 rounded-sm px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#161008]">
                <FileWarning className="h-3.5 w-3.5" /> Manual de guerra
              </span>
              <span className="rounded-sm border border-line-2 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-fade">
                Parte 01 de 13 · Penal extravagante
              </span>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-7 font-serif text-[13.5vw] font-black leading-[0.94] tracking-tight text-paper sm:text-7xl lg:text-[86px]">
              Lei do{" "}
              <em className="not-italic text-gold-2">Abuso</em>
              <br />
              de Autoridade
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="font-mono text-sm tracking-[0.18em] text-gold">LEI Nº 13.869/2019</span>
              <span className="h-4 w-px bg-line-2" />
              <span className="text-sm text-fade">a revogadora da Lei 4.898/65 — artigo por artigo, até o 45</span>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-paper/70">
              Engenharia reversa das questões de prova em material de estudo: para cada artigo,
              <span className="hl"> o que cai</span>,{" "}
              <span className="text-blood-2">a pegadinha que derruba</span>,{" "}
              <span className="text-skyy-2">o exemplo que fixa</span> e{" "}
              <span className="text-viol-2">o macete que gruda</span>. Direcionado às cinco bancas
              que mais cobram a matéria.
            </p>
          </Reveal>

          <Reveal delay={310}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#bloco-1"
                className="group inline-flex items-center gap-2.5 rounded-md bg-gold px-6 py-3.5 font-mono text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#161008] transition-all duration-300 hover:bg-gold-2 hover:shadow-[0_10px_40px_-10px_rgba(226,176,60,0.5)]"
              >
                <BookOpenCheck className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                Iniciar o Bloco 01
              </a>
              <a
                href="#checkpoint"
                className="inline-flex items-center gap-2.5 rounded-md border border-line-2 px-6 py-3.5 font-mono text-[12.5px] uppercase tracking-[0.14em] text-paper/80 transition-colors hover:border-gold/50 hover:text-gold-2"
              >
                Ver rota completa
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={390}>
            <div className="mt-12 grid max-w-lg grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.v} className="bg-ink-2/70 px-4 py-4">
                  <div className="font-serif text-3xl font-bold text-gold-2">{s.k}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* imagem */}
        <Reveal delay={200} className="relative hidden lg:block">
          <div className="float-slow relative ml-auto w-[88%]">
            <div className="absolute -inset-3 rotate-[2.5deg] rounded-md border border-line-2 bg-ink-2" />
            <div className="relative -rotate-[1.2deg] overflow-hidden rounded-md border border-line-2 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.9)]">
              <img
                src="/images/hero-justice.jpg"
                alt="Balança da justiça sobre códigos antigos"
                className="h-[560px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-2">
                    Dossiê 001/2019
                  </div>
                  <div className="mt-1 font-serif text-xl italic text-paper">
                    «O poder é o elemento; o abuso, o crime.»
                  </div>
                </div>
                <Gavel className="h-8 w-8 text-gold/70" />
              </div>
            </div>
            {/* carimbo */}
            <div className="stamp pulse-gold absolute -left-8 top-10 bg-ink/80 text-[13px] font-bold text-blood-2 backdrop-blur-sm">
              Veto derrubado
            </div>
            <div className="absolute -right-6 bottom-16 rotate-3 rounded-md border border-line-2 bg-ink-2/95 px-4 py-3 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-mint" />
                <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper/80">
                  100% focado em questão
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* marquee bancas */}
      <div className="relative border-y border-line bg-ink-2/50 py-4">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="marquee flex shrink-0 items-center gap-14 pr-14">
            {[...bancas, ...bancas, ...bancas, ...bancas].map((b, i) => (
              <span
                key={i}
                className="flex items-center gap-14 font-mono text-sm font-semibold tracking-[0.34em] text-faint"
              >
                {b}
                <span className="h-1.5 w-1.5 rotate-45 bg-gold/50" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
