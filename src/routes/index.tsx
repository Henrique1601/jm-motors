import { createFileRoute } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
  Instagram,
  Leaf,
  Wallet,
  Bike,
  PlugZap,
  ShieldCheck,
  RefreshCw,
  CreditCard,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Catalogo } from "@/components/jm/Catalogo";
import { Simulador } from "@/components/jm/Simulador";
import { WhatsAppFloat } from "@/components/jm/WhatsAppFloat";
import { whatsappLink, ADDRESS, MAPS_LINK, INSTAGRAM, PHONE_DISPLAY } from "@/lib/jm";

import fachada from "@/assets/fachada.jpg.asset.json";
import showroomInterior from "@/assets/showroom-interior.jpg.asset.json";
import showroomMotos from "@/assets/showroom-motos.jpg.asset.json";
import showroomEletricas from "@/assets/showroom-eletricas.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JM Motors Santos | Motos e Scooters Elétricas na Av. Senador Feijó" },
      {
        name: "description",
        content:
          "Compra, venda, troca e consignação de motos em Santos/SP. Motos seminovas revisadas e scooters elétricas. Cartão em até 24x e a melhor avaliação da Baixada.",
      },
      { property: "og:title", content: "JM Motors Santos | Motos e Scooters Elétricas" },
      {
        property: "og:description",
        content:
          "Loja multimarca em Santos: motos seminovas revisadas, scooters elétricas, troca, consignação e parcelamento em até 24x.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const DIFERENCIAIS = [
  { icon: RefreshCw, title: "Compra, venda e troca", text: "Negocie sua moto usada na hora." },
  { icon: Star, title: "Melhor avaliação", text: "A melhor avaliação da Baixada Santista." },
  { icon: CreditCard, title: "Cartão em até 24x", text: "Financiamento facilitado e aprovado rápido." },
  { icon: ShieldCheck, title: "Procedência garantida", text: "Motos revisadas e com histórico limpo." },
];

const ELETRICAS = [
  {
    icon: Wallet,
    title: "Economia real",
    text: "Uma carga completa custa alguns centavos. Esqueça a fila do posto e o preço da gasolina.",
  },
  {
    icon: Leaf,
    title: "Zero poluição",
    text: "Sem emissão de gases e praticamente silenciosa — ideal para o dia a dia em Santos.",
  },
  {
    icon: Bike,
    title: "Prática na cidade",
    text: "Leve, fácil de estacionar e perfeita para trajetos curtos entre bairros e orla.",
  },
  {
    icon: PlugZap,
    title: "Manutenção mínima",
    text: "Sem óleo, sem embreagem, sem corrente. Carrega em tomada comum de casa.",
  },
];

const GALERIA = [
  { src: fachada.url, alt: "Fachada da JM Motors na Av. Senador Feijó, 455, em Santos" },
  { src: showroomEletricas.url, alt: "Scooters elétricas expostas no showroom da JM Motors" },
  { src: showroomMotos.url, alt: "Motos seminovas alinhadas na loja da JM Motors" },
  { src: showroomInterior.url, alt: "Interior da loja JM Motors com motos elétricas e esportivas" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#topo" className="font-display text-xl font-extrabold uppercase tracking-tight">
            JM <span className="text-primary">Motors</span>
          </a>
          <nav className="hidden gap-7 text-sm font-semibold uppercase tracking-wide text-muted-foreground md:flex">
            <a href="#estoque" className="hover:text-foreground">Estoque</a>
            <a href="#eletricas" className="hover:text-foreground">Elétricas</a>
            <a href="#troca" className="hover:text-foreground">Venda / Troca</a>
            <a href="#simulador" className="hover:text-foreground">Simulador</a>
            <a href="#loja" className="hover:text-foreground">Loja</a>
          </nav>
          <Button asChild className="rounded-none font-bold uppercase">
            <a
              href={whatsappLink("Olá, JM Motors! Vim pelo site e quero falar com um vendedor.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </Button>
        </div>
      </header>

      <div className="checker-strip h-2 opacity-80" />

      {/* HERO */}
      <section id="topo" className="relative overflow-hidden">
        <img
          src={fachada.url}
          alt="Loja JM Motors em Santos, na esquina da Av. Senador Feijó"
          width={886}
          height={544}
          className="absolute inset-0 size-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <span className="inline-block border border-primary px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Multimarca • Santos / SP
          </span>
          <h1 className="mt-6 max-w-3xl text-5xl font-extrabold uppercase leading-[0.95] sm:text-7xl">
            Sua próxima moto
            <span className="block text-primary">está aqui</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Motos seminovas revisadas com procedência e as melhores elétricas da cidade. Compra,
            venda, troca e consignação com negociação justa — no coração do centro de Santos.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-none px-8 font-bold uppercase">
              <a
                href={whatsappLink("Olá, JM Motors! Quero falar com um vendedor sobre as motos disponíveis.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-none border-foreground/30 px-8 font-bold uppercase"
            >
              <a href="#estoque">Ver estoque</a>
            </Button>
          </div>
          <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
            {DIFERENCIAIS.map((d) => (
              <div key={d.title}>
                <d.icon className="size-6 text-primary" />
                <dt className="mt-3 text-sm font-bold uppercase">{d.title}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{d.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Catalogo />

      {/* ELÉTRICAS */}
      <section id="eletricas" className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">
                Motinhas elétricas
              </p>
              <h2 className="mt-3 text-4xl font-extrabold uppercase sm:text-5xl">
                Rode mais gastando menos
              </h2>
              <p className="mt-4 text-muted-foreground">
                As elétricas viraram a forma mais inteligente de se mover por Santos. Trabalhamos
                com modelos estilo Citycoco, Chopper, Tron e Evee — prontos para o dia a dia.
              </p>
              <Button asChild size="lg" className="mt-8 rounded-none font-bold uppercase">
                <a
                  href={whatsappLink("Olá, JM Motors! Quero conhecer as motinhas elétricas disponíveis.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quero uma elétrica
                </a>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {ELETRICAS.map((e) => (
                <div key={e.title} className="border border-border bg-background p-6">
                  <e.icon className="size-7 text-primary" />
                  <h3 className="mt-4 text-lg font-bold uppercase">{e.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{e.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">A loja</p>
          <h2 className="mt-3 text-4xl font-extrabold uppercase sm:text-5xl">
            Venha nos visitar
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {GALERIA.map((g, i) => (
              <img
                key={g.src}
                src={g.src}
                alt={g.alt}
                loading="lazy"
                width={886}
                height={560}
                className={
                  "w-full border border-border object-cover " +
                  (i === 0 ? "h-72 sm:col-span-2 sm:h-96" : "h-64")
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* TROCA */}
      <section id="troca" className="border-y border-primary/40 bg-primary/10 py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-4xl font-extrabold uppercase sm:text-5xl">
            Quer vender ou trocar sua moto?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Fazemos a melhor avaliação da Baixada Santista. Compramos, aceitamos na troca e também
            trabalhamos com consignação — você deixa a moto na loja e a gente cuida da venda.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-none px-8 font-bold uppercase">
              <a
                href={whatsappLink(
                  "Olá, JM Motors! Quero avaliar minha moto para venda ou troca. Modelo/ano: ",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Avaliar minha moto
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-none border-foreground/30 px-8 font-bold uppercase"
            >
              <a
                href={whatsappLink("Olá, JM Motors! Quero deixar minha moto em consignação.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consignação
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Simulador />

      {/* LOCALIZAÇÃO */}
      <section id="loja" className="border-t border-border py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Onde estamos</p>
            <h2 className="mt-3 text-4xl font-extrabold uppercase sm:text-5xl">JM Motors Santos</h2>
            <ul className="mt-8 space-y-5 text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-primary" />
                <a
                  href={whatsappLink("Olá, JM Motors!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex gap-3">
                <Instagram className="mt-0.5 size-5 shrink-0 text-primary" />
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  @jm.motors_
                </a>
              </li>
            </ul>
            <Button asChild size="lg" className="mt-8 rounded-none font-bold uppercase">
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
                Como chegar
              </a>
            </Button>
          </div>
          <div className="border border-border">
            <iframe
              title="Mapa da JM Motors na Av. Senador Feijó, 455, Santos"
              src="https://www.google.com/maps?q=Av.%20Senador%20Feij%C3%B3%2C%20455%2C%20Santos%2C%20SP&output=embed"
              loading="lazy"
              className="h-80 w-full lg:h-[420px]"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-base font-extrabold uppercase text-foreground">
            JM <span className="text-primary">Motors</span> — Multimarca
          </p>
          <p>{ADDRESS}</p>
        </div>
      </footer>

      <WhatsAppFloat />
    </div>
  );
}
