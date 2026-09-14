import { useState } from "react";
import { Zap, Gauge, BatteryCharging, Cog } from "lucide-react";
import { whatsappLink } from "@/lib/jm";
import { Button } from "@/components/ui/button";

import citycoco from "@/assets/citycoco.jpg.asset.json";
import chopper from "@/assets/chopper.jpg.asset.json";
import eletricaChopper from "@/assets/eletrica-chopper.jpg.asset.json";
import scooter from "@/assets/scooter.jpg.asset.json";
import esportiva from "@/assets/esportiva.jpg.asset.json";
import naked from "@/assets/naked.jpg.asset.json";

type Categoria = "eletricas" | "urbanas" | "convencionais";

type Moto = {
  nome: string;
  img: string;
  categoria: Categoria;
  specs: string[];
  destaque: string;
};

const MOTOS: Moto[] = [
  {
    nome: "Citycoco Fat Tire",
    img: citycoco.url,
    categoria: "eletricas",
    specs: ["2000W", "Até 60 km/h", "Autonomia 60 km", "Sem CNH*"],
    destaque: "Elétrica",
  },
  {
    nome: "Chopper Elétrica Tron",
    img: chopper.url,
    categoria: "eletricas",
    specs: ["1500W", "Até 50 km/h", "Bateria removível", "Freio a disco"],
    destaque: "Elétrica",
  },
  {
    nome: "Evee Cruiser Black",
    img: eletricaChopper.url,
    categoria: "eletricas",
    specs: ["3000W", "Até 70 km/h", "Autonomia 80 km", "Banco duplo"],
    destaque: "Elétrica",
  },
  {
    nome: "Scooter Urbana 125",
    img: scooter.url,
    categoria: "urbanas",
    specs: ["125cc", "Automática", "Baixo consumo", "Revisada"],
    destaque: "Seminova",
  },
  {
    nome: "Street Naked 160",
    img: naked.url,
    categoria: "convencionais",
    specs: ["160cc", "Injeção eletrônica", "Freio CBS", "Procedência OK"],
    destaque: "Seminova",
  },
  {
    nome: "Esportiva 300R",
    img: esportiva.url,
    categoria: "convencionais",
    specs: ["300cc", "ABS", "Bi-cilíndrica", "Revisada"],
    destaque: "Seminova",
  },
];

const TABS: { id: Categoria; label: string }[] = [
  { id: "eletricas", label: "Motos Elétricas" },
  { id: "urbanas", label: "Scooters & Urbanas" },
  { id: "convencionais", label: "Esportivas & Convencionais" },
];

export function Catalogo() {
  const [ativa, setAtiva] = useState<Categoria>("eletricas");
  const lista = MOTOS.filter((m) => m.categoria === ativa);

  return (
    <section id="estoque" className="border-t border-border bg-background py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Vitrine</p>
        <h2 className="mt-3 text-4xl font-extrabold uppercase text-foreground sm:text-5xl">
          Nosso estoque
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Modelos que passam pela loja com frequência. O estoque gira rápido — chame no WhatsApp
          para ver as unidades disponíveis hoje.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setAtiva(t.id)}
              className={
                "border px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors " +
                (ativa === t.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:text-foreground")
              }
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((m) => (
            <article
              key={m.nome}
              className="group overflow-hidden border border-border bg-card transition-colors hover:border-primary"
            >
              <div className="relative">
                <img
                  src={m.img}
                  alt={m.nome}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-52 w-full object-cover"
                />
                <span className="absolute left-3 top-3 bg-primary px-2.5 py-1 text-xs font-bold uppercase text-primary-foreground">
                  {m.destaque}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold uppercase text-foreground">{m.nome}</h3>
                <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  {m.specs.map((s, i) => (
                    <li key={s} className="flex items-center gap-1.5">
                      {i === 0 ? (
                        <Zap className="size-3.5 text-primary" />
                      ) : i === 1 ? (
                        <Gauge className="size-3.5 text-primary" />
                      ) : i === 2 ? (
                        <BatteryCharging className="size-3.5 text-primary" />
                      ) : (
                        <Cog className="size-3.5 text-primary" />
                      )}
                      {s}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-5 w-full rounded-none font-semibold uppercase">
                  <a
                    href={whatsappLink(
                      `Olá, JM Motors! Tenho interesse na ${m.nome}. Ainda está disponível?`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tenho interesse
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          *Modelos elétricos com potência e velocidade que exigem habilitação e emplacamento seguem
          a legislação vigente. Consulte a loja.
        </p>
      </div>
    </section>
  );
}
