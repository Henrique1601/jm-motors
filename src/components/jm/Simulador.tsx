import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { whatsappLink } from "@/lib/jm";

const PARCELAS = [6, 12, 18, 24];

function brl(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function Simulador() {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState(12000);
  const [entrada, setEntrada] = useState(2000);
  const [parcelas, setParcelas] = useState(12);

  const financiado = Math.max(valor - entrada, 0);
  const parcela = financiado / parcelas;

  return (
    <section id="simulador" className="border-t border-border bg-card py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">
            Parcelamento
          </p>
          <h2 className="mt-3 text-4xl font-extrabold uppercase text-foreground sm:text-5xl">
            Simule sua parcela
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cartão de crédito em até 24x e financiamento facilitado. A simulação abaixo é uma
            estimativa sem juros para você ter uma referência — as condições finais são fechadas na
            loja, com aprovação na hora.
          </p>
          <div className="mt-8 space-y-5">
            <div>
              <Label htmlFor="nome">Seu nome</Label>
              <Input
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Como podemos te chamar?"
                className="mt-2 rounded-none"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="valor">Valor da moto: {brl(valor)}</Label>
                <input
                  id="valor"
                  type="range"
                  min={3000}
                  max={60000}
                  step={500}
                  value={valor}
                  onChange={(e) => setValor(Number(e.target.value))}
                  className="mt-3 w-full accent-[var(--primary)]"
                />
              </div>
              <div>
                <Label htmlFor="entrada">Entrada: {brl(entrada)}</Label>
                <input
                  id="entrada"
                  type="range"
                  min={0}
                  max={valor}
                  step={500}
                  value={Math.min(entrada, valor)}
                  onChange={(e) => setEntrada(Number(e.target.value))}
                  className="mt-3 w-full accent-[var(--primary)]"
                />
              </div>
            </div>
            <div>
              <Label>Parcelas</Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {PARCELAS.map((p) => (
                  <button
                    key={p}
                    onClick={() => setParcelas(p)}
                    className={
                      "border px-4 py-2 text-sm font-semibold transition-colors " +
                      (parcelas === p
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground hover:text-foreground")
                    }
                  >
                    {p}x
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center border border-primary/40 bg-background p-8">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            Parcela estimada
          </p>
          <p className="mt-2 font-display text-5xl font-extrabold text-primary">{brl(parcela)}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {parcelas}x • financiando {brl(financiado)}
          </p>
          <div className="mt-6 space-y-2 border-t border-border pt-6 text-sm text-muted-foreground">
            <p>Valor da moto: {brl(valor)}</p>
            <p>Entrada: {brl(Math.min(entrada, valor))}</p>
          </div>
          <Button asChild size="lg" className="mt-8 rounded-none font-bold uppercase">
            <a
              href={whatsappLink(
                `Olá, JM Motors! ${nome ? `Meu nome é ${nome}. ` : ""}Simulei uma moto de ${brl(valor)} com entrada de ${brl(Math.min(entrada, valor))} em ${parcelas}x (≈ ${brl(parcela)} por mês). Podem me passar as condições?`,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar simulação no WhatsApp
            </a>
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">
            Estimativa sem juros, apenas para referência. Sujeito a análise de crédito.
          </p>
        </div>
      </div>
    </section>
  );
}
