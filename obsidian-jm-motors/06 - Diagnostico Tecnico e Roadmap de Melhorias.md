# 06 - Diagnóstico Técnico e Roadmap de Melhorias

Este relatório reúne o diagnóstico completo de código realizado no repositório [Henrique1601/jm-motors](https://github.com/Henrique1601/jm-motors.git), detalhando os pontos fortes, gaps identificados e um plano de evolução para o freelancer propor ao cliente.

---

## 1. Diagnóstico do Código Atual

### Pontos Fortes:
- **Arquitetura Moderna**: Uso do TanStack Start com SSR, Vite e Nitro, proporcionando renderização inicial ultra-rápida.
- **Componentização Sólida**: Separação precisa em `src/components/jm/` (`Catalogo.tsx`, `Simulador.tsx`, `WhatsAppFloat.tsx`).
- **Design Coerente**: Estética dark motorsport consistente com a fachada física da loja (preto, vermelho racing e branco).
- **Links Parametrizados**: Boa personalização das mensagens de WhatsApp.

### Gaps Técnicos Identificados:
1. **SEO e Idioma Base em `__root.tsx`**:
   - Tag `<html lang="en">` deve ser `<html lang="pt-BR">`.
   - As meta tags padrão do root ainda continham `"Lovable App"` e `"Lovable Generated Project"`.
2. **Dependência Exclusiva de Assets do Lovable Cloud**:
   - Os arquivos `src/assets/*.asset.json` apontam para `/__l5e/assets-v1/...`. Se o projeto for executado em servidor independente fora do proxy do Lovable, essas URLs precisam de fallback ou armazenamento em `public/images/`.
3. **Simulador com Cálculo Linear**:
   - O simulador calcula `(valor - entrada) / parcelas`. No mercado automotivo, parcelamento no cartão em 24x ou financiamento possui taxa de juros (da operadora ou banco). Deve haver avisos visuais claros de que é uma simulação estimada sem acréscimos operacionais.
4. **Falta de Formulário com Captura de Dados Prévia na Troca**:
   - O botão "Avaliar minha moto" vai direto para o WhatsApp. Criar um pequeno formulário modal (Marca, Modelo, Ano, Km e se aceita entrada) antes do redirecionamento aumenta a taxa de qualificação do lead.
5. **Falta de Dados Estruturados (Schema.org)**:
   - Não há script JSON-LD de `MotorcycleDealer` para o Google identificar o endereço, telefone e horário de funcionamento em Santos.

---

## 2. Roadmap de Implementação

### Prioridade Alta (Imediato - Correções Técnicas)
- [x] Atualizar `AGENTS.md` e criar `CLAUDE.md` com persona e regras da JM Motors.
- [x] Criar e organizar o Segundo Cérebro do projeto em `obsidian-jm-motors/`.
- [ ] Ajustar idioma em `src/routes/__root.tsx` para `pt-BR` e atualizar metadados padrão.
- [ ] Incluir dados estruturados Schema.org JSON-LD para SEO Local em Santos.

### Prioridade Média (Evolução da Landing Page)
- [ ] Adicionar modal com ficha técnica detalhada para cada moto do catálogo.
- [ ] Adicionar cálculo com taxa de juros estimada configurável no Simulador.
- [ ] Adicionar formulário de avaliação rápida com envio automático das fotos e dados da moto usada via WhatsApp.

### Prioridade Baixa (Oportunidades de Upsell Comercial)
- [ ] **Módulo de Estoque Dinâmico**: Integrar com banco de dados PostgreSQL via Neon MCP ou painel Notion MCP para a loja atualizar estoque sem tocar no código.
- [ ] **Painel Administrativo de Leads**: Guardar histórico de todas as simulações e contatos recebidos para remarketing.
- [ ] **Google Analytics 4 & Meta Pixel**: Implementar eventos de conversão disparados a cada clique no WhatsApp.

---

## Notas Relacionadas
- [[00 - Indice Geral MOC]]
- [[02 - Regras de Ouro e Diretrizes Tecnicas]]
- [[07 - SEO Local Santos e Presenca Digital]]
