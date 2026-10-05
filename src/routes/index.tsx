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
  Sparkles,
  ArrowRight,
  BatteryCharging,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Catalogo } from "@/components/jm/Catalogo";
import { LojaShowcase } from "@/components/jm/LojaShowcase";
import { Simulador } from "@/components/jm/Simulador";
import { WhatsAppFloat } from "@/components/jm/WhatsAppFloat";
import { whatsappLink, ADDRESS, MAPS_LINK, INSTAGRAM, PHONE_DISPLAY, STORE_NAME } from "@/lib/jm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JM MOTORS ELETRIC BIKE | Motos e Scooters Elétricas na Av. Senador Feijó" },
      {
        name: "description",
        content:
          "JM MOTORS ELETRIC BIKE - Compra, venda, troca e consignação de motos em Santos/SP. Scooters elétricas, fat bikes e seminovas revisadas com parcelamento em até 24x.",
      },
      { property: "og:title", content: "JM MOTORS ELETRIC BIKE | Motos e Scooters Elétricas" },
      {
        property: "og:description",
        content:
          "Loja física em Santos: scooters elétricas, fat bikes aro 20, motos seminovas revisadas, troca, consignação e parcelamento em até 24x no cartão.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/brand/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "JM MOTORS ELETRIC BIKE | Santos - SP" },
      { name: "twitter:image", content: "/brand/og-image.jpg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MotorcycleDealer",
          name: "JM MOTORS ELETRIC BIKE",
          alternateName: "JM Motors Santos",
          logo: "https://jm-motors.lovable.app/brand/logo-badge.png",
          image: [
            "https://jm-motors.lovable.app/brand/logo-badge.png",
            "https://jm-motors.lovable.app/brand/og-image.jpg",
            "https://jm-motors.lovable.app/images/store/fachada-vitrine-principal.jpg",
            "https://jm-motors.lovable.app/images/store/showroom-interno-banner.jpg",
          ],
          telephone: "+5513976007271",
          priceRange: "$$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Senador Feijó, 455",
            addressLocality: "Santos",
            addressRegion: "SP",
            postalCode: "11015-503",
            addressCountry: "BR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -23.9452,
            longitude: -46.3312,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "09:00",
              closes: "13:00",
            },
          ],
          sameAs: ["https://instagram.com/jm.motors_"],
        }),
      },
    ],
  }),
  component: Index,
});

const DIFERENCIAIS = [
  { icon: RefreshCw, title: "Compra, venda e troca", text: "Negocie sua moto usada com a melhor avaliação da Baixada." },
  { icon: Star, title: "Melhor avaliação", text: "Transparência total na troca pelo seu modelo elétrico ou seminovo." },
  { icon: CreditCard, title: "Cartão em até 24x", text: "Parcelamento facilitado e aprovação ágil na hora." },
  { icon: ShieldCheck, title: "Procedência garantida", text: "Revisão rigorosa, laudo e assistência técnica local." },
];

const ELETRICAS = [
  {
    icon: Wallet,
    title: "Economia Absoluta",
    text: "Uma carga completa custa centavos na tomada de casa. Esqueça posto de combustível e IPVA.",
  },
  {
    icon: Leaf,
    title: "100% Sustentável",
    text: "Zero emissão de poluentes e rodagem silenciosa, perfeita para a brisa e as ciclovias da Baixada.",
  },
  {
    icon: Bike,
    title: "Praticidade Total",
    text: "Modelos autopropelidos isentos de CNH e emplacamento conforme a Resolução CONTRAN 996/2023.",
  },
  {
    icon: PlugZap,
    title: "Tomada Convencional",
    text: "Bateria de lítio removível: leve para carregar no apartamento, trabalho ou qualquer tomada 110V/220V.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER NAVEGAÇÃO */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a
            href="#topo"
            className="flex items-center gap-3 font-display tracking-tight transition-transform duration-200 hover:scale-[1.02]"
          >
            <img
              src="/brand/logo-badge.png"
              alt="Logo JM MOTORS ELETRIC BIKE"
              className="size-11 rounded-full border-2 border-primary/70 object-cover shadow-lg shadow-primary/20"
            />
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black uppercase text-foreground">
                JM <span className="text-primary">MOTORS</span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-primary">
                ELETRIC BIKE
              </span>
            </div>
          </a>

          <nav className="hidden gap-7 text-xs font-bold uppercase tracking-wider text-muted-foreground md:flex">
            <a href="#estoque" className="transition-colors hover:text-primary">
              Catálogo & Preços
            </a>
            <a href="#eletricas" className="transition-colors hover:text-primary">
              Por que Elétrica?
            </a>
            <a href="#loja" className="transition-colors hover:text-primary">
              A Loja Física
            </a>
            <a href="#troca" className="transition-colors hover:text-primary">
              Venda / Troca
            </a>
            <a href="#simulador" className="transition-colors hover:text-primary">
              Simulador
            </a>
          </nav>

          <Button asChild className="rounded-none font-bold uppercase tracking-wider shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:scale-95">
            <a
              href={whatsappLink(
                "Olá, JM MOTORS ELETRIC BIKE! Vim pelo site oficial e gostaria de atendimento com um consultor.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </header>

      {/* FAIXA MOTORSPORT ANIMADA */}
      <div className="checker-strip-animated h-2.5 opacity-90 shadow-sm" />

      {/* HERO SECTION */}
      <section id="topo" className="relative overflow-hidden">
        {/* IMAGEM REAL DA FACHADA COM GRADIENTES CINEMATOGRÁFICOS */}
        <img
          src="/images/store/fachada-vitrine-principal.jpg"
          alt="Fachada real da loja JM MOTORS ELETRIC BIKE na Av. Senador Feijó, Santos"
          width={1200}
          height={800}
          className="absolute inset-0 size-full object-cover object-center opacity-25 filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28">
          {/* BADGE DE STATUS AO VIVO */}
          <div className="inline-flex items-center gap-2.5 border border-primary/50 bg-primary/10 px-3.5 py-1.5 backdrop-blur shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-black uppercase tracking-wider text-primary">
              Showroom Aberto • Santos / SP • Baterias Prontas para Test-Drive
            </span>
          </div>

          <h1 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-7xl">
            JM MOTORS
            <span className="block text-primary">ELETRIC BIKE</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            A sua loja especializada em mobilidade elétrica e seminovas de referência na Baixada
            Santista. Bateria de lítio removível, recarga em tomada residencial comum e modelos
            autopropelidos com isenção total de CNH e emplacamento.
          </p>

          {/* TELEMETRIA RÁPIDA / HIGHLIGHTS */}
          <div className="mt-6 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 border border-border bg-card/60 px-3 py-1 text-foreground backdrop-blur">
              <Zap className="size-3.5 text-primary" />
              100% Elétricas & Seminovas
            </span>
            <span className="inline-flex items-center gap-1.5 border border-border bg-card/60 px-3 py-1 text-foreground backdrop-blur">
              <BatteryCharging className="size-3.5 text-primary" />
              Recarga em Tomada Comum
            </span>
            <span className="inline-flex items-center gap-1.5 border border-border bg-card/60 px-3 py-1 text-foreground backdrop-blur">
              <CreditCard className="size-3.5 text-primary" />
              Cartão até 24x
            </span>
          </div>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <Button
              asChild
              size="lg"
              className="rounded-none px-8 font-extrabold uppercase shadow-xl shadow-primary/20 transition-all duration-200 hover:-translate-y-1 hover:shadow-primary/30 active:scale-95"
            >
              <a
                href={whatsappLink(
                  "Olá, JM MOTORS ELETRIC BIKE! Gostaria de consultar os modelos disponíveis e tirar dúvidas sobre valores.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com Vendedor no WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-none border-foreground/30 px-8 font-bold uppercase transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-foreground active:scale-95"
            >
              <a href="#estoque">Ver Catálogo & Preços</a>
            </Button>
          </div>

          {/* DIFERENCIAIS CARDS */}
          <dl className="mt-14 grid max-w-4xl grid-cols-2 gap-4 border-t border-border/80 pt-8 sm:grid-cols-4">
            {DIFERENCIAIS.map((d) => (
              <div
                key={d.title}
                className="group border border-border/70 bg-card/40 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-card/80"
              >
                <d.icon className="size-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                <dt className="mt-3 text-xs font-black uppercase text-foreground">{d.title}</dt>
                <dd className="mt-1 text-xs text-muted-foreground leading-relaxed">{d.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CATÁLOGO DE MODELOS ELÉTRICOS & FOTOS REAIS */}
      <Catalogo />

      {/* VITRINE REAL DA LOJA FÍSICA NA AV. SENADOR FEIJÓ */}
      <LojaShowcase />

      {/* SEÇÃO POR QUE ESCOLHER MOBILIDADE ELÉTRICA */}
      <section id="eletricas" className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 border border-primary/50 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-primary">
                <Sparkles className="size-3.5" />
                Vantagens JM MOTORS ELETRIC BIKE
              </div>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl">
                Mobilidade Inteligente <span className="text-primary">Para o Seu Dia a Dia</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                As scooters e bicicletas elétricas viraram a opção número um na Baixada Santista.
                Trabalhamos com marcas consagradas (SUDU, OUXI, EVEE, TRON) para entregar liberdade,
                economia de verdade e praticidade urbana.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-muted-foreground">
                <span className="border border-border bg-background px-3 py-1">Sem IPVA</span>
                <span className="border border-border bg-background px-3 py-1">Sem Gasolina</span>
                <span className="border border-border bg-background px-3 py-1">Sem Troca de Óleo</span>
                <span className="border border-border bg-background px-3 py-1">Estacione em Qualquer Lugar</span>
              </div>
              <Button
                asChild
                size="lg"
                className="mt-8 rounded-none font-bold uppercase tracking-wider shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <a
                  href={whatsappLink(
                    "Olá, JM MOTORS ELETRIC BIKE! Gostaria de saber mais sobre as vantagens e autonomia das scooters elétricas.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tirar Dúvidas com Especialista
                </a>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {ELETRICAS.map((e) => (
                <div
                  key={e.title}
                  className="group border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/5"
                >
                  <e.icon className="size-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mt-4 text-base font-extrabold uppercase text-foreground">
                    {e.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{e.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO AVALIAÇÃO / VENDA / TROCA */}
      <section id="troca" className="border-y border-primary/40 bg-primary/10 py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <span className="inline-block border border-primary px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Troca & Consignação
          </span>
          <h2 className="mt-4 text-4xl font-black uppercase sm:text-5xl">
            Quer Vender ou Trocar Sua Moto?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Na <strong>JM MOTORS ELETRIC BIKE</strong> você garante a melhor avaliação da Baixada
            Santista. Compramos à vista, pegamos sua seminova como entrada na sua moto elétrica ou
            cuidamos da venda em consignação com total segurança jurídica.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3.5">
            <Button
              asChild
              size="lg"
              className="rounded-none px-8 font-extrabold uppercase shadow-xl shadow-primary/20 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <a
                href={whatsappLink(
                  "Olá, JM MOTORS ELETRIC BIKE! Quero fazer uma avaliação da minha moto usada para venda ou troca. Modelo e ano: ",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Avaliar Minha Moto Agora
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-none border-foreground/30 px-8 font-bold uppercase hover:border-primary hover:text-foreground active:scale-95"
            >
              <a
                href={whatsappLink(
                  "Olá, JM MOTORS ELETRIC BIKE! Gostaria de entender as condições para deixar minha moto em consignação na loja.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Deixar em Consignação
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* SIMULADOR DE FINANCIAMENTO */}
      <Simulador />

      {/* RODAPÉ */}
      <footer className="border-t border-border bg-card py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3.5">
            <img
              src="/brand/logo-badge.png"
              alt="Logo JM MOTORS ELETRIC BIKE"
              className="size-12 rounded-full border-2 border-primary/60 object-cover"
            />
            <div>
              <p className="font-display text-lg font-black uppercase tracking-tight text-foreground">
                JM <span className="text-primary">MOTORS</span> ELETRIC BIKE
              </p>
              <p className="text-xs text-muted-foreground">
                Loja de Referência em Mobilidade Elétrica e Seminovas em Santos / SP
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-1 text-xs text-muted-foreground sm:text-right">
            <p className="font-semibold text-foreground">{ADDRESS}</p>
            <p>WhatsApp: {PHONE_DISPLAY} • Instagram: @jm.motors_</p>
            <p className="text-[11px] opacity-75">
              © {new Date().getFullYear()} JM MOTORS ELETRIC BIKE. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE DE WHATSAPP */}
      <WhatsAppFloat />
    </div>
  );
}
