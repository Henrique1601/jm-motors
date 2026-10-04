import { useState } from "react";
import {
  Zap,
  Gauge,
  BatteryCharging,
  ShieldCheck,
  CheckCircle2,
  FileText,
  MessageCircle,
} from "lucide-react";
import { whatsappLink } from "@/lib/jm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  MODELOS_ELETRICOS,
  type ModeloEletrico,
  type CategoriaEletrica,
} from "@/data/catalog";

import scooterSeminova from "@/assets/scooter.jpg.asset.json";
import esportivaSeminova from "@/assets/esportiva.jpg.asset.json";
import nakedSeminova from "@/assets/naked.jpg.asset.json";

type CategoriaFiltro = CategoriaEletrica | "seminovas";

interface MotoConvencional {
  id: string;
  nome: string;
  subtitulo: string;
  precoEstimado: string;
  img: string;
  specs: string[];
  destaque: string;
}

const MOTOS_CONVENCIONAIS: MotoConvencional[] = [
  {
    id: "scooter-125",
    nome: "Scooter Urbana 125cc",
    subtitulo: "Praticidade e economia para o trânsito diário",
    precoEstimado: "Consulte estoque",
    img: scooterSeminova.url,
    specs: ["125cc", "Automática", "Baixo consumo", "Revisada com procedência"],
    destaque: "Seminova",
  },
  {
    id: "naked-160",
    nome: "Street Naked 160cc",
    subtitulo: "Excelente resposta urbana e liquidez garantida",
    precoEstimado: "Consulte estoque",
    img: nakedSeminova.url,
    specs: ["160cc", "Injeção eletrônica", "Freio CBS", "Laudo cautelar 100%"],
    destaque: "Seminova",
  },
  {
    id: "esportiva-300",
    nome: "Esportiva 300R",
    subtitulo: "Design marcante, torque e alta estabilidade",
    precoEstimado: "Consulte estoque",
    img: esportivaSeminova.url,
    specs: ["300cc", "Freios ABS", "Bi-cilíndrica", "Revisão preventiva OK"],
    destaque: "Seminova",
  },
];

const TABS: { id: CategoriaFiltro; label: string; count?: number }[] = [
  { id: "todos", label: "Todas Elétricas", count: MODELOS_ELETRICOS.length },
  { id: "scooters", label: "Scooters Urbanas" },
  { id: "fat-bikes", label: "Fat Bikes Aro 20" },
  { id: "custom", label: "Chopper & Custom" },
  { id: "patinetes", label: "Patinetes" },
  { id: "seminovas", label: "Motos Convencionais" },
];

function formatBRL(valor: number): string {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function Catalogo() {
  const [abaAtiva, setAbaAtiva] = useState<CategoriaFiltro>("todos");
  const [modeloSelecionado, setModeloSelecionado] = useState<ModeloEletrico | null>(null);
  const [abaModal, setAbaModal] = useState<"fotos" | "folheto">("fotos");
  const [fotoAtiva, setFotoAtiva] = useState<number>(0);

  const eletricasFiltradas =
    abaAtiva === "seminovas"
      ? []
      : abaAtiva === "todos"
        ? MODELOS_ELETRICOS
        : MODELOS_ELETRICOS.filter((m) => m.categoria === abaAtiva);

  function abrirModal(modelo: ModeloEletrico) {
    setModeloSelecionado(modelo);
    setAbaModal(modelo.fotosReais && modelo.fotosReais.length > 0 ? "fotos" : "folheto");
    setFotoAtiva(0);
  }

  return (
    <section id="estoque" className="border-t border-border bg-background py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-block border border-primary/60 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Catálogo Oficial JM Motors
            </span>
            <h2 className="mt-3 text-4xl font-extrabold uppercase tracking-tight text-foreground sm:text-5xl">
              Modelos & Estoque
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Conheça as melhores opções de mobilidade elétrica e seminovas de Santos. Bateria
              removível, recarga em tomada comum residencial e modelos autopropelidos isentos de CNH.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Atualizado com tabela oficial da loja
            </span>
          </div>
        </div>

        {/* ABAS DE CATEGORIA */}
        <div className="mt-8 flex flex-wrap gap-2">
          {TABS.map((tab) => {
            const isAtiva = abaAtiva === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setAbaAtiva(tab.id)}
                className={`border px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all sm:text-sm ${
                  isAtiva
                    ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {tab.label}
                {tab.count !== undefined && (
                  <span className="ml-2 rounded bg-black/30 px-1.5 py-0.5 text-xs">
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* LISTAGEM DE ELÉTRICAS */}
        {abaAtiva !== "seminovas" && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {eletricasFiltradas.map((modelo) => (
              <article
                key={modelo.id}
                className="group flex flex-col justify-between overflow-hidden border border-border bg-card transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/5"
              >
                <div>
                  {/* IMAGEM E BADGES */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                    <img
                      src={modelo.imagemCover}
                      alt={modelo.nome}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />

                    {/* BADGES SUPERIORES */}
                    <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                      {modelo.destaqueBadge && (
                        <span className="bg-primary px-2.5 py-1 text-xs font-extrabold uppercase tracking-wide text-primary-foreground shadow">
                          {modelo.destaqueBadge}
                        </span>
                      )}
                      <span className="border border-white/20 bg-black/70 px-2 py-0.5 text-[11px] font-semibold uppercase text-white backdrop-blur">
                        {modelo.categoriaLabel}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 rounded bg-black/80 px-2.5 py-1 text-xs font-bold text-primary backdrop-blur">
                      {modelo.velocidadeMax}
                    </div>
                  </div>

                  {/* CORPO DO CARD */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-extrabold uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">
                          {modelo.nome}
                        </h3>
                        <p className="mt-1 text-xs text-muted-foreground">{modelo.subtitulo}</p>
                      </div>
                    </div>

                    {/* PREÇO */}
                    <div className="mt-4 rounded border border-border/80 bg-background/50 p-3">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">
                          À vista na loja
                        </span>
                        <span className="text-2xl font-black text-primary">
                          {formatBRL(modelo.preco)}
                        </span>
                      </div>
                      <p className="mt-1 text-[11px] text-muted-foreground">
                        Ou parcelado no cartão em até 24x
                      </p>
                    </div>

                    {/* SPECS RÁPIDAS */}
                    <ul className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                      <li className="flex items-center gap-1.5">
                        <Zap className="size-3.5 shrink-0 text-primary" />
                        <span>{modelo.potencia}</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <BatteryCharging className="size-3.5 shrink-0 text-primary" />
                        <span className="truncate">{modelo.bateria.split("(")[0]}</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Gauge className="size-3.5 shrink-0 text-primary" />
                        <span>{modelo.autonomia}</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <ShieldCheck className="size-3.5 shrink-0 text-primary" />
                        <span>Sem CNH*</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* BOTÕES DE AÇÃO */}
                <div className="p-5 pt-0 space-y-2">
                  <Button
                    asChild
                    className="w-full rounded-none font-bold uppercase tracking-wide"
                  >
                    <a
                      href={whatsappLink(
                        `Olá, JM Motors! Gostei do modelo ${modelo.nome} de ${formatBRL(modelo.preco)} que vi no site. Ainda está disponível na loja?`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 size-4" />
                      Tenho interesse
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => abrirModal(modelo)}
                    className="w-full rounded-none border-border font-semibold uppercase text-xs hover:border-primary hover:text-foreground"
                  >
                    <FileText className="mr-2 size-3.5" />
                    {modelo.fotosReais && modelo.fotosReais.length > 0
                      ? `Fotos Reais (${modelo.fotosReais.length}) & Ficha`
                      : "Ficha & Folheto Oficial"}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* LISTAGEM DE CONVENCIONAIS SEMINOVAS */}
        {abaAtiva === "seminovas" && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MOTOS_CONVENCIONAIS.map((moto) => (
              <article
                key={moto.id}
                className="group flex flex-col justify-between overflow-hidden border border-border bg-card transition-colors hover:border-primary"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                    <img
                      src={moto.img}
                      alt={moto.nome}
                      loading="lazy"
                      className="size-full object-cover"
                    />
                    <span className="absolute left-3 top-3 bg-primary px-2.5 py-1 text-xs font-bold uppercase text-primary-foreground">
                      {moto.destaque}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold uppercase text-foreground">{moto.nome}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{moto.subtitulo}</p>
                    <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                      {moto.specs.map((s) => (
                        <li key={s} className="flex items-center gap-2">
                          <CheckCircle2 className="size-3.5 text-primary" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Button asChild className="w-full rounded-none font-semibold uppercase">
                    <a
                      href={whatsappLink(
                        `Olá, JM Motors! Gostaria de consultar o estoque atual de motos convencionais (${moto.nome}).`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 size-4" />
                      Consultar no WhatsApp
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* AVISO LEGAL E LEGISLAÇÃO CONTRAN */}
        <div className="mt-10 rounded border border-border/80 bg-card/60 p-5 text-xs text-muted-foreground">
          <p className="font-semibold uppercase tracking-wider text-foreground">
            ⚡ Legislação e Resolução CONTRAN nº 996/2023:
          </p>
          <p className="mt-1 leading-relaxed">
            *Equipamentos de mobilidade individual autopropelidos (com velocidade máxima de fabricação
            de até 32 km/h) são isentos de emplacamento e dispensa de CNH/ACC, respeitadas as normas
            de circulação em ciclovias e vias locais. Modelos de maior potência e velocidade seguem a
            regulamentação vigente. Nossa equipe na Av. Senador Feijó, 455 esclarece todos os detalhes
            com total transparência!
          </p>
        </div>
      </div>

      {/* MODAL COM FICHA E FOLHETO OFICIAL */}
      <Dialog
        open={!!modeloSelecionado}
        onOpenChange={(aberto) => !aberto && setModeloSelecionado(null)}
      >
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto border-border bg-card p-6 text-foreground">
          {modeloSelecionado && (
            <div>
              <DialogHeader>
                <div className="flex items-center gap-2">
                  <span className="bg-primary px-2 py-0.5 text-xs font-bold uppercase text-primary-foreground">
                    {modeloSelecionado.marca}
                  </span>
                  <span className="text-xs uppercase text-muted-foreground">
                    {modeloSelecionado.categoriaLabel}
                  </span>
                </div>
                <DialogTitle className="mt-2 text-2xl font-extrabold uppercase">
                  {modeloSelecionado.nome}
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground">
                  {modeloSelecionado.subtitulo}
                </DialogDescription>
              </DialogHeader>

              {/* SELEÇÃO ENTRE FOTOS REAIS E FOLHETO OFICIAL */}
              {modeloSelecionado.fotosReais && modeloSelecionado.fotosReais.length > 0 && (
                <div className="mt-4 flex gap-2 border-b border-border pb-3">
                  <button
                    onClick={() => setAbaModal("fotos")}
                    className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                      abaModal === "fotos"
                        ? "border-b-2 border-primary text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Fotos Reais na Loja ({modeloSelecionado.fotosReais.length})
                  </button>
                  <button
                    onClick={() => setAbaModal("folheto")}
                    className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                      abaModal === "folheto"
                        ? "border-b-2 border-primary text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Folheto Técnico do Catálogo
                  </button>
                </div>
              )}

              {/* VISUALIZAÇÃO DE FOTOS REAIS */}
              {abaModal === "fotos" &&
              modeloSelecionado.fotosReais &&
              modeloSelecionado.fotosReais.length > 0 ? (
                <div className="mt-3 space-y-3">
                  <div className="relative overflow-hidden rounded border border-border bg-black">
                    <img
                      src={modeloSelecionado.fotosReais[fotoAtiva]}
                      alt={`${modeloSelecionado.nome} foto ${fotoAtiva + 1}`}
                      className="mx-auto max-h-[380px] w-full object-contain"
                    />
                    <span className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-0.5 text-xs font-bold text-white backdrop-blur">
                      Foto {fotoAtiva + 1} de {modeloSelecionado.fotosReais.length}
                    </span>
                  </div>

                  {/* CARROSSEL DE MINIATURAS */}
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {modeloSelecionado.fotosReais.map((foto, idx) => (
                      <button
                        key={foto}
                        onClick={() => setFotoAtiva(idx)}
                        className={`size-16 shrink-0 overflow-hidden rounded border-2 transition-all ${
                          fotoAtiva === idx ? "border-primary scale-105" : "border-border opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={foto}
                          alt={`Miniatura ${idx + 1}`}
                          className="size-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* IMAGEM DO FOLHETO DO CATÁLOGO OFICIAL */
                <div className="mt-4 overflow-hidden rounded border border-border bg-black">
                  <img
                    src={modeloSelecionado.imagemFlyer}
                    alt={`Folheto oficial da loja: ${modeloSelecionado.nome}`}
                    className="mx-auto max-h-96 w-auto object-contain"
                  />
                </div>
              )}

              {/* TABELA DE ESPECIFICAÇÕES */}
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded border border-border bg-background p-3 text-center">
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    Motor
                  </p>
                  <p className="mt-1 font-bold text-foreground">{modeloSelecionado.potencia}</p>
                </div>
                <div className="rounded border border-border bg-background p-3 text-center">
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    Velocidade
                  </p>
                  <p className="mt-1 font-bold text-primary">
                    {modeloSelecionado.velocidadeMax}
                  </p>
                </div>
                <div className="rounded border border-border bg-background p-3 text-center">
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    Autonomia
                  </p>
                  <p className="mt-1 font-bold text-foreground">{modeloSelecionado.autonomia}</p>
                </div>
                <div className="rounded border border-border bg-background p-3 text-center">
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    Capacidade
                  </p>
                  <p className="mt-1 font-bold text-foreground">{modeloSelecionado.capacidade}</p>
                </div>
              </div>

              {/* DIFERENCIAIS */}
              <div className="mt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Destaques e Recursos do Modelo:
                </h4>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  {modeloSelecionado.diferenciais.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* PREÇO E CTA WHATSAPP */}
              <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded border border-primary/40 bg-primary/10 p-4 sm:flex-row">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Valor à vista
                  </p>
                  <p className="text-3xl font-black text-primary">
                    {formatBRL(modeloSelecionado.preco)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Parcelamento no cartão em até 24x
                  </p>
                </div>
                <Button asChild size="lg" className="rounded-none font-bold uppercase">
                  <a
                    href={whatsappLink(
                      `Olá, JM Motors! Gostaria de mais informações sobre o modelo ${modeloSelecionado.nome} (R$ ${formatBRL(modeloSelecionado.preco)}) e consultar cores disponíveis na loja.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 size-4" />
                    Chamar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
