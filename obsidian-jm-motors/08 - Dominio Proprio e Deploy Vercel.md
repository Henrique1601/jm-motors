# 08 - Domínio Próprio e Deploy na Vercel

Guia prático para o freelancer configurar o deploy em produção e apontar o domínio próprio da JM Motors.

---

## 1. Como Fazer o Deploy na Vercel

O projeto utiliza **TanStack Start + Nitro**. O Nitro detecta automaticamente o ambiente da Vercel (`VERCEL=1`) e gera a pasta `.vercel/output` com suporte nativo a SSR e CDN global.

### Método Recomendado (Via GitHub - 2 cliques):
1. Acesse [vercel.com](https://vercel.com) e faça login com sua conta do GitHub.
2. Clique em **Add New...** > **Project**.
3. Importe o repositório **Henrique1601/jm-motors**.
4. Em **Framework Preset**, deixe como **Other** (ou Vite).
5. Em **Build Command**, o padrão é `npm run build` (o Nitro se encarrega de tudo ao detectar a Vercel).
6. Clique em **Deploy**.
7. Pronto! A Vercel fornecerá uma URL pública gratuita (ex: `jm-motors.vercel.app`) com SSL ativo. A partir deste momento, **todo commit que você der na main gera deploy automático em produção**.

---

## 2. Onde Comprar o Domínio Próprio

Para um negócio local no Brasil (Santos/SP), o domínio ideal é **.com.br** (ex: `jmmotorssantos.com.br` ou `jmmotors.com.br`):

| Provedor | Preço Médio | Recomendação |
| :--- | :--- | :--- |
| **Registro.br** | **R$ 40,00 / ano** | **Recomendado Oficial**. Sem pegadinhas de renovação cara. |
| **Hostinger / GoDaddy** | R$ 9,90 no 1º ano, mas sobe para R$ 89+ na renovação | Não recomendado devido a pegadinhas de renovação. |
| **Cloudflare Registrar** | ~US$ 9/ano (apenas para .com / .net) | Excelente caso o cliente prefira domínio internacional .com. |

> [!TIP]
> **Dica de Ouro para Freelancers**:
> Sempre registre o domínio no CPF ou CNPJ da loja/cliente no **Registro.br** (ou peça para ele criar a conta e te colocar como Contato Técnico). Isso evita problemas de titularidade no futuro e passa extremo profissionalismo.

---

## 3. Como Configurar o Domínio Próprio na Vercel (DNS)

Depois que o domínio estiver registrado no Registro.br e o projeto estiver na Vercel:

### Passo 1: Adicionar o Domínio no Painel da Vercel
1. No painel do seu projeto na Vercel, vá em **Settings** > **Domains**.
2. Digite o domínio: `jmmotorssantos.com.br` e adicione também `www.jmmotorssantos.com.br`.
3. A Vercel exibirá os apontamentos DNS necessários:
   - **Registro A**: Apontando para o IP `76.76.21.21`
   - **Registro CNAME**: Nome `www` apontando para `cname.vercel-dns.com`

### Passo 2: Configurar a Zona de DNS no Registro.br
1. Acesse sua conta no **Registro.br**.
2. Clique no domínio comprado e role até a seção **DNS**.
3. Se estiver usando os servidores DNS do Registro.br (padrão gratuito), clique em **Configurar Endereçamento** (ou **Modificar Zona**):
   - Adicione uma entrada do tipo **A**:
     - Nome: em branco (ou @)
     - Valor: `76.76.21.21`
   - Adicione uma entrada do tipo **CNAME**:
     - Nome: `www`
     - Valor: `cname.vercel-dns.com.`
4. Clique em **Salvar Alterações**.

A propagação costuma demorar entre 15 minutos e 2 horas. A Vercel emitirá o **certificado SSL gratuito (HTTPS)** automaticamente!

---

## 4. Comparativo: Vercel vs Outros Hosts

- **Vercel (Nota 10/10 para este projeto)**:
  - Plano gratuito generoso (sem custos para o freelancer ou cliente inicial).
  - Suporte nativo a SSR no React 19 e TanStack Start.
  - Certificado SSL automático e renovação invisível.
  - Rollback em 1 segundo caso algum commit quebre.
- **Cloudflare Pages**:
  - Excelente e gratuito, mas TanStack Start com SSR em Cloudflare Workers requer compatibilidade de runtime específica.
- **Hospedagens Tradicionais cPanel (Hostgator, Locaweb, UOL Host)**:
  - **Evite totalmente**. Servidores cPanel convencionais são feitos para PHP/WordPress e têm enorme dificuldade para rodar SSR moderno com Node 20+, gerando instabilidades frequentes.

---

## 5. Como Cobrar o Cliente pelo Domínio e Hospedagem

Como freelancer, você pode trabalhar com dois formatos:
1. **Modelo Transparente (Recomendado)**:
   - O cliente paga diretamente o domínio (R$ 40/ano no Registro.br no cartão dele).
   - Você utiliza o plano gratuito da Vercel para hospedar.
   - Você cobra a sua mão de obra de desenvolvimento e uma taxa de setup inicial de domínio/DNS (ex: R$ 150 a R$ 300).
2. **Modelo com Mensalidade de Manutenção**:
   - Você inclui um plano mensal de suporte (ex: R$ 100 a R$ 250/mês) que inclui:
     - Monitoramento de uptime do site.
     - Atualização mensal de motos e banners no catálogo.
     - Renovação anual do domínio inclusa.
     - Relatórios mensais de cliques no WhatsApp.

---

## Notas Relacionadas
- [[00 - Indice Geral MOC]]
- [[01 - Visao Geral do Projeto e Freelancer]]
- [[06 - Diagnostico Tecnico e Roadmap de Melhorias]]
- [[07 - SEO Local Santos e Presenca Digital]]
