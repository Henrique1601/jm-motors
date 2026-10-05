import { useState } from "react";
import {
  MapPin,
  Clock,
  Navigation,
  MessageCircle,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink, ADDRESS, MAPS_LINK, PHONE_DISPLAY } from "@/lib/jm";

interface FotoLoja {
  id: string;
  src: string;
  titulo: string;
  subtitulo: string;
  tag: string;
}

const FOTOS_LOJA: FotoLoja[] = [
  {
    id: "fachada-principal",
    src: "/images/store/fachada-vitrine-principal.jpg",
    titulo: "Fachada & Vitrine Principal",
    subtitulo: "Letreiro iluminado na Av. Senador Feijó, 455 - Centro de Santos",
    tag: "Fachada Oficial",
  },
  {
    id: "showroom-interno",
    src: "/images/store/showroom-interno-banner.jpg",
    titulo: "Showroom Interno JM MOTORS",
    subtitulo: "Amplo salão com modelos elétricos e seminovas prontas para entrega",
    tag: "Showroom",
  },
  {
    id: "vitrine-fatbikes",
    src: "/images/store/fachada-vitrine-fatbikes.jpg",
    titulo: "Vitrine Linha Fat Bikes Aro 20",
    subtitulo: "Modelos OUXI GT20, V8 Ultra e Pro expostos na vitrine climatizada",
    tag: "Vitrine",
  },
  {
    id: "vitrine-scooters",
    src: "/images/store/fachada-vitrine-scooters.jpg",
    titulo: "Vitrine Scooters Elétricas",
    subtitulo: "Modelos SUDU A2, A3 Plus e Tron com bateria removível",
    tag: "Modelos Urbanos",
  },
  {
    id: "fachada-calcada",
    src: "/images/store/fachada-calcada.jpg",
    titulo: "Acesso Direto pela Calçada",
    subtitulo: "Fácil acesso e espaço para você testar a sua moto na hora",
    tag: "Localização",
  },
];

export function LojaShowcase() {
  const [fotoAtiva, setFotoAtiva] = useState(0);
  const atual = FOTOS_LOJA[fotoAtiva];

  function proximaFoto() {
    setFotoAtiva((prev) => (prev + 1) % FOTOS_LOJA.length);
  }

  function fotoAnterior() {
    setFotoAtiva((prev) => (prev - 1 + FOTOS_LOJA.length) % FOTOS_LOJA.length);
  }

  return (
    <section id="loja" className="border-t border-border bg-background py-20">
      <div className="mx-auto max-w-6xl px-5">
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 border border-primary/50 bg-primary/10 px-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-primary">
                Loja Física em Santos / SP
              </span>
            </div>
            <h2 className="mt-4 text-4xl font-extrabold uppercase tracking-tight text-foreground sm:text-5xl">
              Venha Conhecer <span className="text-primary">Nossa Loja</span>
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Estrutura completa na principal avenida de comércio automotivo de Santos. Showroom
              climatizado, estoque a pronta entrega e atendimento especializado para tirar todas as
              suas dúvidas sobre mobilidade elétrica.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 md:mt-0">
            <span className="inline-flex items-center gap-1.5 border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground">
              <ShieldCheck className="size-3.5 text-primary" />
              Garantia & Procedência
            </span>
            <span className="inline-flex items-center gap-1.5 border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground">
              <Zap className="size-3.5 text-primary" />
              Test-Drive Gratuito
            </span>
          </div>
        </div>

        {/* VITRINE VISUAL INTERATIVA */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-start">
          {/* DISPLAY PRINCIPAL DA FOTO */}
          <div className="lg:col-span-8">
            <div className="group relative aspect-[4/3] w-full overflow-hidden border border-border bg-black shadow-2xl sm:aspect-[16/10]">
              <img
                key={atual.src}
                src={atual.src}
                alt={atual.titulo}
                className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* OVERLAY DE GRADIENTE */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* BADGE SUPERIOR ESQUERDO */}
              <div className="absolute left-4 top-4">
                <span className="border border-primary/40 bg-primary/90 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-primary-foreground shadow">
                  {atual.tag}
                </span>
              </div>

              {/* CONTROLES DE NAVEGAÇÃO ANTERIOR / PRÓXIMO */}
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 opacity-90 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
                <button
                  onClick={fotoAnterior}
                  aria-label="Foto anterior da loja"
                  className="flex size-11 items-center justify-center border border-white/20 bg-black/60 text-white backdrop-blur transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground active:scale-95"
                >
                  <ChevronLeft className="size-6" />
                </button>
                <button
                  onClick={proximaFoto}
                  aria-label="Próxima foto da loja"
                  className="flex size-11 items-center justify-center border border-white/20 bg-black/60 text-white backdrop-blur transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground active:scale-95"
                >
                  <ChevronRight className="size-6" />
                </button>
              </div>

              {/* LEGENDA INFERIOR */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  Fotos Reais da Loja
                </p>
                <h3 className="mt-1 text-xl font-black uppercase text-white sm:text-2xl">
                  {atual.titulo}
                </h3>
                <p className="mt-1 text-xs text-white/80 sm:text-sm">{atual.subtitulo}</p>
              </div>
            </div>

            {/* SELETOR DE MINIATURAS */}
            <div className="mt-3 grid grid-cols-5 gap-2">
              {FOTOS_LOJA.map((foto, idx) => {
                const isSelected = fotoAtiva === idx;
                return (
                  <button
                    key={foto.id}
                    onClick={() => setFotoAtiva(idx)}
                    className={`group relative aspect-[4/3] overflow-hidden border transition-all duration-200 ${
                      isSelected
                        ? "border-primary ring-2 ring-primary ring-offset-2 ring-offset-background scale-[1.02]"
                        : "border-border opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={foto.src}
                      alt={foto.titulo}
                      className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* PAINEL LATERAL INFORMATIVO DA LOJA */}
          <div className="flex flex-col justify-between border border-border bg-card p-6 lg:col-span-4 lg:min-h-[440px]">
            <div>
              <div className="flex items-center gap-2 border-b border-border pb-4">
                <MapPin className="size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-extrabold uppercase text-foreground">JM MOTORS ELETRIC BIKE</h4>
                  <p className="text-xs text-muted-foreground">Santos - SP</p>
                </div>
              </div>

              <div className="mt-5 space-y-4 text-sm">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">
                    Endereço Oficial:
                  </p>
                  <p className="mt-1 font-semibold text-foreground">{ADDRESS}</p>
                  <p className="text-xs text-muted-foreground">
                    Entre as principais vias do Centro de Santos
                  </p>
                </div>

                <div className="border-t border-border/60 pt-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">
                    Horário de Atendimento:
                  </p>
                  <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                    <li className="flex items-center justify-between">
                      <span>Segunda a Sexta:</span>
                      <span className="font-semibold text-foreground">09:00 às 18:00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Sábados:</span>
                      <span className="font-semibold text-foreground">09:00 às 13:00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Domingos e Feriados:</span>
                      <span className="font-semibold text-foreground">Consulte plantão</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-border/60 pt-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">
                    Diferenciais da Loja Física:
                  </p>
                  <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 shrink-0 text-primary" />
                      <span>Modelos montados para você ver e testar</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 shrink-0 text-primary" />
                      <span>Parcelamento em até 24x no cartão</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 shrink-0 text-primary" />
                      <span>Avaliação presencial da sua moto na troca</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 shrink-0 text-primary" />
                      <span>Entrega expressa na Baixada Santista</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2.5 border-t border-border pt-4">
              <Button asChild size="lg" className="w-full rounded-none font-bold uppercase shadow-lg shadow-primary/20">
                <a
                  href={whatsappLink(
                    "Olá, JM MOTORS ELETRIC BIKE! Gostaria de agendar um horário para visitar a loja e fazer um test-drive.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 size-4" />
                  Agendar Test-Drive
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full rounded-none border-foreground/30 font-bold uppercase hover:border-primary"
              >
                <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
                  <Navigation className="mr-2 size-4 text-primary" />
                  Traçar Rota no Waze / Maps
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* MAPA EMBUTIDO E LOCALIZAÇÃO */}
        <div className="mt-8 border border-border bg-card">
          <div className="grid lg:grid-cols-12">
            <div className="flex flex-col justify-center p-6 lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Fácil Acesso
              </span>
              <h3 className="mt-1 text-2xl font-black uppercase text-foreground">
                Como Chegar na Loja
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Localizada na <strong>Av. Senador Feijó, 455</strong>, com fácil acesso a partir de
                São Vicente, Praia Grande, Cubatão e Guarujá.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="size-4 text-primary" />
                <span>Telefone / WhatsApp direto: <strong>{PHONE_DISPLAY}</strong></span>
              </div>
            </div>
            <div className="lg:col-span-7">
              <iframe
                title="Mapa oficial da JM MOTORS ELETRIC BIKE na Av. Senador Feijó, 455, Santos"
                src="https://www.google.com/maps?q=Av.%20Senador%20Feij%C3%B3%2C%20455%2C%20Santos%2C%20SP&output=embed"
                loading="lazy"
                className="h-64 w-full border-t border-border lg:h-72 lg:border-l lg:border-t-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
