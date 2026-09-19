import { useEffect, useState } from "react";
import { Bookmark, CheckCircle2, Flag, GitCompareArrows, LibraryBig } from "lucide-react";
import type { Bloco } from "../data/tipos";
import { cn } from "../utils/cn";

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-18% 0px -70% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

function useProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return p;
}

/* ---------------- barra móvel superior ---------------- */
export function TopBar() {
  const p = useProgress();
  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/85 backdrop-blur-md lg:hidden">
      <div className="flex items-center justify-between px-5 py-3">
        <a href="#topo" className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-gold text-[#161008]">
            <LibraryBig className="h-4 w-4" strokeWidth={2.4} />
          </span>
          <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] text-paper">
            Abuso de Autoridade
          </span>
        </a>
        <span className="font-mono text-[10px] tracking-[0.16em] text-fade">
          {Math.round(p * 100)}% concluído
        </span>
      </div>
      <div className="h-[3px] w-full bg-ink-3">
        <div
          className="h-full bg-gradient-to-r from-gold to-gold-2 transition-[width] duration-150"
          style={{ width: `${p * 100}%` }}
        />
      </div>
    </div>
  );
}

/* ---------------- trilha lateral desktop ---------------- */
export function Sidebar({ blocos }: { blocos: Bloco[] }) {
  const ids = blocos.flatMap((b) => [b.id, ...b.grupos.map((g) => g.id)]);
  const active = useScrollSpy(ids);
  const p = useProgress();

  return (
    <aside className="sticky top-0 hidden h-screen w-[290px] shrink-0 flex-col border-r border-line bg-ink-2/40 lg:flex">
      <div className="border-b border-line px-6 py-6">
        <a href="#topo" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gold text-[#161008]">
            <LibraryBig className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <div>
            <div className="font-mono text-[9.5px] uppercase tracking-[0.26em] text-gold">
              Penal extravagante
            </div>
            <div className="font-serif text-[17px] font-bold leading-tight text-paper">
              Abuso de Autoridade
            </div>
          </div>
        </a>
      </div>

      <nav className="flex-1 space-y-7 overflow-y-auto px-6 py-6">
        {blocos.map((b) => (
          <div key={b.id}>
            <a
              href={`#${b.id}`}
              className={cn(
                "group flex items-baseline gap-2.5 transition-colors",
                active === b.id ? "text-gold-2" : "text-paper/85 hover:text-gold-2",
              )}
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-faint group-hover:text-gold">
                {b.numero.replace("Bloco ", "B")}
              </span>
              <span className="text-[13px] font-semibold leading-snug">{b.titulo}</span>
            </a>
            <div className="mb-1 mt-1 font-mono text-[9.5px] uppercase tracking-[0.18em] text-faint">
              {b.intervalo}
            </div>
            <ul className="mt-2 space-y-[3px] border-l border-line pl-4">
              {b.grupos.map((g) => (
                <li key={g.id}>
                  <a
                    href={`#${g.id}`}
                    className={cn(
                      "flex items-center gap-2 rounded-r-sm py-[3px] text-[12.5px] transition-all",
                      active === g.id
                        ? "-ml-[17px] border-l-2 border-gold pl-[15px] font-semibold text-gold-2"
                        : "text-fade hover:text-paper",
                    )}
                  >
                    <span className="font-mono text-[10px] text-faint">{g.ref}</span>
                    <span className="truncate">{g.nome}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <a
          href="#comparativo"
          className={cn(
            "flex items-center gap-2.5 rounded-md border border-line px-4 py-3 transition-colors hover:border-gold/40",
            active === "comparativo" ? "border-gold/40 text-gold-2" : "text-fade",
          )}
        >
          <GitCompareArrows className="h-4 w-4" />
          <span className="text-[12.5px] font-semibold">Comparativo · Tortura × Abuso</span>
        </a>

        <a
          href="#checkpoint"
          className={cn(
            "flex items-center gap-2.5 rounded-md border border-line px-4 py-3 transition-colors hover:border-gold/40",
            active === "checkpoint" ? "border-gold/40 text-gold-2" : "text-fade",
          )}
        >
          <Flag className="h-4 w-4" />
          <span className="text-[12.5px] font-semibold">Síntese final · Parte 02</span>
        </a>

        <div className="flex items-center gap-2.5 rounded-md border border-gold/30 bg-gold/5 px-4 py-3 text-gold-2/90">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span className="text-[11.5px] leading-snug">
            Parte 01 concluída — Parte 02 (Lei de Drogas) sob comando
          </span>
        </div>
      </nav>

      <div className="border-t border-line px-6 py-4">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
          <span className="flex items-center gap-1.5">
            <Bookmark className="h-3 w-3 text-gold" /> Leitura
          </span>
          <span>{Math.round(p * 100)}%</span>
        </div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-ink-3">
          <div
            className="h-full rounded-full bg-gradient-to-r from-gold to-gold-2 transition-[width] duration-150"
            style={{ width: `${p * 100}%` }}
          />
        </div>
      </div>
    </aside>
  );
}
