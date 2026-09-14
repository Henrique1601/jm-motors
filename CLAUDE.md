# CLAUDE.md - JM Motors Santos

Diretrizes de engenharia, regras de negócio e comandos de desenvolvimento para a **JM Motors** (Loja e Concessionária de Motos & Scooters Elétricas na Baixada Santista).

---

## 1. Comandos do Projeto

```bash
# Iniciar servidor de desenvolvimento (Vite + HMR)
npm run dev

# Compilar para produção (Vite + TanStack Start / Nitro)
npm run build

# Pré-visualizar build de produção
npm run preview

# Executar linter (ESLint)
npm run lint

# Formatar código com Prettier
npm run format
```

---

## 2. Contexto da Loja & Domínio de Negócio

- **Razão / Nome Fantasia**: JM Motors (Multimarca)
- **Localização**: Av. Senador Feijó, 455 - Centro, Santos - SP (Ponto de alto fluxo no centro comercial de Santos).
- **Canais Digitais**:
  - WhatsApp de Vendas: +55 (13) 97600-7271 (implementado via `whatsappLink()` em `src/lib/jm.ts`)
  - Instagram: [@jm.motors_](https://instagram.com/jm.motors_)
- **Serviços Oferecidos**:
  - Compra, venda, troca e consignação de motos.
  - "Melhor avaliação da Baixada Santista" para motos usadas na troca.
  - Parcelamento no cartão em até 24x e financiamento bancário facilitado.
- **Linhas de Produtos**:
  - **Motos Elétricas & Scooters**: Modelos Citycoco Fat Tire, Chopper Tron, Evee Cruiser (economia de combustível, tomada comum de 110/220V, mobilidade para a orla e bairros de Santos).
  - **Motos Convencionais & Esportivas**: Seminovas revisadas com procedência garantida (125cc urbanas, 160cc street nakeds, 300cc esportivas).
- **Legislação & Transparência**: Resolução CONTRAN 996/2023 sobre autopropelidos vs ciclomotores (orientar o cliente com clareza sobre necessidade de CNH/ACC e emplacamento).

---

## 3. Arquitetura e Diretrizes de Código

- **Framework**: TanStack Start (SSR híbrido com Vite e Nitro).
- **Roteamento**: Arquivos em `src/routes/` gerenciados por `@tanstack/react-router`.
- **UI Components**: React 19, componentes shadcn/ui em `src/components/ui/`, ícones `lucide-react`.
- **Estilização**: Tailwind CSS v4 em `src/styles.css` com espaço de cores `oklch`:
  - Fundo principal: `--background: oklch(0.145 0 0)` (preto profundo).
  - Cor primária da marca: `--primary: oklch(0.56 0.23 27.5)` (vermelho racing esportivo).
  - Fontes: `Archivo` (display/títulos fortes) e `Barlow` (corpo e leitura).
  - Detalhes visuais: `checker-strip` (faixa quadriculada de automobilismo).
- **TypeScript**: Modo estrito, sem `any`, validações de formulário com Zod e React Hook Form.

---

## 4. Regras Inegociáveis do Projeto

1. **Segurança de Sincronização com o Lovable**:
   - Este repositório está conectado ao Lovable. **JAMAIS** faça `git push --force` nem reescreva histórico com `git rebase` em commits já enviados ao GitHub.
   - Mantenha sempre a branch `main` estável e funcional.
2. **Mobile-First & Conversão para WhatsApp**:
   - Todo fluxo de interesse, simulação de parcela ou avaliação de troca DEVE gerar um link de WhatsApp contextualizado com texto pré-definido.
   - A interface mobile é a prioridade máxima (mais de 80% do tráfego local).
3. **Cores & Tokens**:
   - Nunca utilizar cores hexadecimais aleatórias hardcoded nos componentes; utilize as classes semânticas do Tailwind (`text-primary`, `bg-card`, `border-border`).

---

## 5. Integração de MCPs e Skills

### Servidores MCP
- **`lovable`**: Sincronização de alterações e leitura do status do projeto.
- **`chrome-devtools-mcp`**: Auditoria de Core Web Vitals (LCP das imagens das motos), inspeção de console e emulação mobile.
- **`mcp-server-neon`**: Criação de banco PostgreSQL serverless para expansão futura (tabela dinâmica de estoque, persistência de leads).
- **`notion-mcp-server`**: Integração opcional para o lojista gerenciar o estoque em tabela Notion.

### Skills do Agente
- **`obsidian-vault`**: Gestão e consulta da base de conhecimento em `obsidian-jm-motors/`.
- **`frontend-design`**: Design visual automotivo de alta conversão.
- **`modern-web-guidance`**: Boas práticas de Tailwind CSS v4 e CSS moderno.
- **`vercel-react-best-practices`**: Otimização de renderização e performance React 19.
- **`google-maps-platform`**: Rotas, geolocalização e direções até a loja física na Av. Senador Feijó, 455.
- **`ux-copy` / `brand-voice-enforcement`**: Redação persuasiva focada no público da Baixada Santista.
- **`accessibility-review`**: Validação de contraste e usabilidade WCAG.
- **`caveman-commit`**: Mensagens de commit limpas e objetivas.
