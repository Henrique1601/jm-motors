# 02 - Regras de Ouro e Diretrizes Técnicas

Estas regras são **inegociáveis** para qualquer contribuição no código da JM Motors. Elas garantem a integridade da conexão com o editor do Lovable, estabilidade de produção e máxima velocidade de carregamento.

---

## 1. Regra de Ouro: Lovable Sync Safety

> [!CAUTION]
> O projeto está conectado ativamente ao [Lovable](https://lovable.dev).
> **NUNCA** faça:
> - `git push --force`
> - `git rebase` em commits que já foram enviados para o repositório remoto
> - Reescrever o histórico da branch `main`
>
> Violações destas práticas quebram a sincronização de branches no Lovable e podem resultar na perda do histórico de prompts e alterações do cliente no editor visual.

---

## 2. Padrões de Código e Stack

- **Framework**: TanStack Start (`@tanstack/react-start` e `@tanstack/react-router`).
- **React 19**: Utilize os recursos do React 19 sem quebrar hidratação SSR.
- **TypeScript Estrito**:
  - Proibido uso de `any`. Crie interfaces explícitas para modelos de motos, taxas de parcelamento e parâmetros de WhatsApp.
- **Tailwind CSS v4 & Paleta OKLCH**:
  - Todo estilo deve respeitar o design system definido em `src/styles.css`.
  - As cores devem ser aplicadas através de variáveis semânticas:
    - Fundo: `bg-background` (oklch 0.145)
    - Cards: `bg-card` (oklch 0.19)
    - Destaque/Primária: `text-primary`, `bg-primary` (Vermelho Racing oklch 0.56)
    - Bordas: `border-border`
  - Fontes:
    - `font-display` (`Archivo`) para títulos esportivos e numerais de destaque.
    - `font-sans` (`Barlow`) para descrições, especificações e textos corridos.

---

## 3. Diretrizes de UX & Conversão

1. **Mobile-First Inflexível**:
   - O comportamento nos dispositivos móveis determina o sucesso do projeto. Todos os testes visuais devem começar em 375px e 414px.
2. **Mensagens Dinâmicas de WhatsApp**:
   - Todo botão de CTA deve utilizar `whatsappLink(message)` de `src/lib/jm.ts`.
   - A mensagem deve conter:
     - Nome da moto ou seção clicada.
     - Dados do simulador (se acionado pelo simulador).
     - Nome do cliente (se preenchido no input).
3. **Acessibilidade e Usabilidade**:
   - Elementos interativos devem ter área mínima de toque de 44x44px.
   - Atributos `alt` detalhados em todas as imagens de motos e fotos reais da loja.

---

## 4. MCPs e Skills Aplicados às Regras

- Use a skill **`vercel-react-best-practices`** antes de adicionar qualquer lógica pesada de renderização.
- Use a skill **`modern-web-guidance`** para garantir sintaxe compatível com Tailwind CSS v4.
- Use o MCP **`chrome-devtools-mcp`** para auditar a pontuação de Core Web Vitals após qualquer mudança visual relevante.

---

## Notas Relacionadas
- [[00 - Indice Geral MOC]]
- [[03 - Guia de Skills e Servidores MCP]]
- [[06 - Diagnostico Tecnico e Roadmap de Melhorias]]
