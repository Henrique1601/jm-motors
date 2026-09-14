# 03 - Guia de Skills e Servidores MCP

Este documento instrui o desenvolvedor e o agente de IA sobre como tirar máximo proveito das ferramentas integradas no ambiente de trabalho da JM Motors.

---

## 1. Servidores MCP (Model Context Protocol)

### 1.1. `lovable`
- **Objetivo**: Gestão do ciclo de vida da aplicação conectada ao Lovable.
- **Quando Usar**:
  - Verificar status do projeto Lovable (`get_project`).
  - Analisar diffs remotos antes de pull/push (`get_diff`).
  - Confirmar sincronização e status de deploy na nuvem.
- **Ferramentas Chave**: `get_project`, `deploy_project`, `get_diff`.

### 1.2. `chrome-devtools-mcp`
- **Objetivo**: Auditoria no navegador, testes de responsividade e Core Web Vitals.
- **Quando Usar**:
  - Validar se o botão fixo flutuante de WhatsApp não sobrepõe formulários em telas pequenas.
  - Medir LCP (Largest Contentful Paint) no banner Hero da fachada.
  - Inspecionar erros no console do navegador e chamadas de rede.
- **Ferramentas Chave**: `new_page`, `take_screenshot`, `lighthouse_audit`, `emulate`.

### 1.3. `mcp-server-neon`
- **Objetivo**: Provedor de banco de dados Serverless Postgres.
- **Quando Usar**:
  - Quando o cliente aprovar a evolução do catálogo estático para um inventário em banco de dados real.
  - Para criar tabelas como `motos`, `leads_simulacao` e `propostas_troca`.
- **Ferramentas Chave**: `run_sql`, `create_project`, `describe_table_schema`.

### 1.4. `notion-mcp-server`
- **Objetivo**: Integração sem código para estoques ou CRM simplificado.
- **Quando Usar**:
  - Criar um painel no Notion para o gerente da loja física cadastrar as motos que chegam no estoque sem precisar entrar no editor de código.

---

## 2. Skills do Agente

### 2.1. `obsidian-vault`
- **Quando Usar**: Qualquer atualização, pesquisa ou criação de notas neste Segundo Cérebro (`obsidian-jm-motors/`).
- **Boas Práticas**: Sempre conectar novas ideias ao [[00 - Indice Geral MOC]] usando `[[wikilinks]]`.

### 2.2. `frontend-design`
- **Quando Usar**: Criar novos componentes visuais para o site da JM Motors (ex: carrossel de depoimentos de clientes santistas, badges de garantia, modal com ficha técnica detalhada).
- **Estilo**: Visual esportivo, contrastes pretos e vermelhos, agressividade e clareza.

### 2.3. `modern-web-guidance`
- **Quando Usar**: Ajustar layouts CSS, grid de catálogo, container queries e compatibilidade com Tailwind CSS v4.

### 2.4. `vercel-react-best-practices`
- **Quando Usar**: Revisão de performance de componentes React 19, memoização criteriosa e eliminação de waterfall de requisições.

### 2.5. `google-maps-platform`
- **Quando Usar**: Implementar rota interativa para o endereço "Av. Senador Feijó, 455 - Santos/SP", incluindo estimativa de tempo e link direto para o app do Google Maps e Waze.

### 2.6. `ux-copy` & `brand-voice-enforcement`
- **Quando Usar**: Redigir títulos, subtítulos, banners de promoções de Natal/Black Friday ou textos persuasivos do simulador.

### 2.7. `accessibility-review`
- **Quando Usar**: Validar conformidade WCAG 2.1 AA em botões vermelhos, foco por teclado e labels de inputs.

### 2.8. `caveman-commit`
- **Quando Usar**: Gerar mensagens de commit enxutas e eficientes mantendo o histórico de git impecável.

---

## Notas Relacionadas
- [[00 - Indice Geral MOC]]
- [[02 - Regras de Ouro e Diretrizes Tecnicas]]
- [[06 - Diagnostico Tecnico e Roadmap de Melhorias]]
