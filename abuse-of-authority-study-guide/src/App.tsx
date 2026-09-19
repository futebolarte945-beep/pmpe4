import {
  AlertTriangle,
  ArrowDown,
  Brain,
  Compass,
  MapPinned,
  Scale,
  Target,
} from "lucide-react";
import { ArticleCard } from "./components/ArticleCard";
import { Checkpoint } from "./components/Checkpoint";
import { Comparativo } from "./components/Comparativo";
import { Hero } from "./components/Hero";
import { Sidebar, TopBar } from "./components/Navigation";
import { Reveal, rich } from "./components/Reveal";
import { bloco1 } from "./data/bloco1";
import { bloco2 } from "./data/bloco2";
import { bloco3 } from "./data/bloco3";
import { bloco4 } from "./data/bloco4";
import { bloco5 } from "./data/bloco5";
import { bloco6 } from "./data/bloco6";
import type { Bloco } from "./data/tipos";

const blocos: Bloco[] = [bloco1, bloco2, bloco3, bloco4, bloco5, bloco6];

/* ---------- faixa do método ---------- */
const metodo = [
  {
    icon: Target,
    titulo: "O que cai na prova",
    texto:
      "Os pontos estatisticamente mais cobrados por AOCP, Cebraspe, FGV, FCC e Vunesp — sem enfeite, direto ao que pontua.",
    classe: "text-mint",
  },
  {
    icon: AlertTriangle,
    titulo: "Pegadinha clássica",
    texto:
      "As armadilhas que as bancas repetem há seis anos: palavras trocadas, prazos adulterados e vetos embaralhados.",
    classe: "text-blood-2",
  },
  {
    icon: Scale,
    titulo: "Exemplo prático",
    texto: "Situações de delegacia, audiência e presídio que transformam a lei seca em cena — e a cena em memória.",
    classe: "text-skyy-2",
  },
  {
    icon: Brain,
    titulo: "Macete do professor",
    texto: "Mnemônicos testados em salas de cursinho e mentoria: o que a memória curta esquece, a frase-âncora resgata.",
    classe: "text-viol-2",
  },
];

function Metodo() {
  return (
    <section className="relative border-b border-line bg-ink-2/30">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            <Compass className="h-4 w-4" />
            O método — 4 lentes por artigo
          </div>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metodo.map((m, i) => (
            <Reveal key={m.titulo} delay={i * 80}>
              <div className="h-full rounded-xl border border-line bg-ink-2/60 p-5 transition-colors hover:border-line-2">
                <m.icon className={`h-5 w-5 ${m.classe}`} strokeWidth={2.1} />
                <h3 className="mt-3.5 font-serif text-lg font-bold text-paper">{m.titulo}</h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-fade">{m.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- cabeçalho de bloco ---------- */
function BlocoHeader({ bloco }: { bloco: Bloco }) {
  return (
    <Reveal>
      <div className="relative mb-10 overflow-hidden rounded-2xl border border-line bg-ink-2/50 p-7 md:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-4 -bottom-8 select-none font-serif text-[150px] font-black leading-none text-paper/[0.03] md:text-[200px]"
        >
          {bloco.numero.replace("Bloco 0", "")}
        </div>
        <div className="relative flex flex-wrap items-center gap-3">
          <span className="rounded-sm bg-gold px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#161008]">
            {bloco.numero}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-fade">
            {bloco.intervalo}
          </span>
        </div>
        <h2 className="relative mt-5 max-w-3xl font-serif text-3xl font-black leading-tight text-paper md:text-[44px]">
          {bloco.titulo}
        </h2>
        <p className="relative mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold-2">
          {bloco.subtitulo}
        </p>
        <p className="relative mt-4 max-w-2xl text-[15px] leading-relaxed text-paper/70">
          {bloco.descricao}
        </p>
        {bloco.secoes && (
          <div className="relative mt-5 flex flex-wrap gap-2">
            {bloco.secoes.map((s) => (
              <span
                key={s.rotulo}
                className="rounded-md border border-line-2 px-3 py-1.5 font-mono text-[10.5px] tracking-wide text-fade"
              >
                {s.rotulo} <span className="text-gold-2">· {s.ate}</span>
              </span>
            ))}
          </div>
        )}
        {bloco.notaProfessor && (
          <div className="relative mt-6 rounded-xl border border-gold/25 bg-gold/[0.06] p-5 md:p-6">
            <div className="flex items-center gap-2.5">
              <MapPinned className="h-4 w-4 shrink-0 text-gold" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-gold-2">
                {bloco.notaProfessor.titulo}
              </span>
            </div>
            <ul className="mt-4 grid gap-2.5 md:grid-cols-2">
              {bloco.notaProfessor.itens.map((item) => (
                <li key={item} className="flex gap-2.5 text-[13px] leading-relaxed text-paper/75">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold" />
                  <span>{rich(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Reveal>
  );
}

/* ---------- divisor entre blocos ---------- */
function Divisor({ texto }: { texto: string }) {
  return (
    <div className="my-16 flex items-center gap-5 md:my-20">
      <span className="h-px flex-1 bg-line" />
      <span className="flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.3em] text-faint">
        {texto} <ArrowDown className="h-3.5 w-3.5 text-gold" />
      </span>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

/* ---------- app ---------- */
export default function App() {
  return (
    <div id="topo" className="min-h-screen bg-ink text-paper">
      <TopBar />
      <Hero />
      <Metodo />

      <div className="flex">
        <Sidebar blocos={blocos} />

        <main className="min-w-0 flex-1">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            {blocos.map((bloco, bi) => (
              <div key={bloco.id}>
                {bi > 0 && (
                  <Divisor texto={`Fim do ${blocos[bi - 1].numero} · respire fundo`} />
                )}
                <section id={bloco.id} className="scroll-mt-24">
                  <BlocoHeader bloco={bloco} />
                  <div className="space-y-8">
                    {bloco.grupos.map((g, gi) => (
                      <ArticleCard key={g.id} grupo={g} index={gi} />
                    ))}
                  </div>
                </section>

                {/* consolidação de penas ao fim do Bloco 03 */}
                {bloco.id === "bloco-3" && (
                  <Reveal className="mt-10">
                    <div className="rounded-xl border border-gold/25 bg-gold/5 px-6 py-5 text-[13.5px] leading-relaxed text-paper/75 md:px-8">
                      {rich(
                        "**Consolidação do Bloco 03:** pena alta (1–4 anos) mora nos arts. **9, 10, 13, 15 e 19**; pena baixa (6 meses–2 anos) nos arts. **12, 16, 18 e 20**; e o caçula **15-A** desce mais: **3 meses a 1 ano**. Ordenou de cabeça? Então pode avançar para a faixa da custódia e da persecução.",
                      )}
                    </div>
                  </Reveal>
                )}

                {/* mapa definitivo de penas ao fim do Bloco 06 */}
                {bloco.id === "bloco-6" && (
                  <Reveal className="mt-12">
                    <div className="rounded-2xl border border-gold/30 bg-gradient-to-br from-ink-2 to-gold/10 p-6 md:p-8">
                      <h3 className="font-serif text-2xl font-bold text-paper">
                        Mapa definitivo de penas da lei inteira
                      </h3>
                      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-lg border border-line bg-ink-2/60 p-4">
                          <div className="font-serif text-2xl font-bold text-gold-2">1–4 anos</div>
                          <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                            13 tipos
                          </div>
                          <p className="mt-2 text-[12px] leading-relaxed text-fade">
                            Arts. 9, 10, 13, 15, 19, 21, 22, 23, 24, 25, 28, 30 e 36.
                          </p>
                        </div>
                        <div className="rounded-lg border border-line bg-ink-2/60 p-4">
                          <div className="font-serif text-2xl font-bold text-skyy-2">6m–2 anos</div>
                          <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                            11 tipos
                          </div>
                          <p className="mt-2 text-[12px] leading-relaxed text-fade">
                            Arts. 12, 16, 18, 20, 27, 29, 31, 32, 33, 37 e 38.
                          </p>
                        </div>
                        <div className="rounded-lg border border-line bg-ink-2/60 p-4">
                          <div className="font-serif text-2xl font-bold text-viol-2">3m–1 ano</div>
                          <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                            os caçulas
                          </div>
                          <p className="mt-2 text-[12px] leading-relaxed text-fade">
                            Art. 15-A (violência institucional) e art. 7º-B do EOAB (via art. 43).
                          </p>
                        </div>
                        <div className="rounded-lg border border-line bg-ink-2/60 p-4">
                          <div className="font-serif text-2xl font-bold text-blood-2">2–4 anos</div>
                          <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                            a reclusão
                          </div>
                          <p className="mt-2 text-[12px] leading-relaxed text-fade">
                            Interceptação indevida — Lei 9.296/96, art. 10 (alterado pelo art. 41).
                          </p>
                        </div>
                      </div>
                      <p className="mt-5 text-[13px] leading-relaxed text-paper/70">
                        {rich(
                          "**Macete de fechamento:** a festa é da **detenção**; a reclusão é convidada única que chegou pela Lei da Interceptação. Somou tudo? **25 tipos penais** no ecossistema do abuso.",
                        )}
                      </p>
                    </div>
                  </Reveal>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>

      <Comparativo />
      <Checkpoint />
    </div>
  );
}
