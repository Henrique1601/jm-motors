# 07 - SEO Local Santos e Presença Digital

Para uma concessionária e loja física de motos em Santos/SP, o SEO Local é a principal fonte de clientes com alta intenção de compra imediata.

---

## 1. Dados Estruturados Schema.org (JSON-LD)

Recomenda-se injetar no `<head>` de `src/routes/index.tsx` o seguinte bloco estruturado:

```json
{
  "@context": "https://schema.org",
  "@type": "MotorcycleDealer",
  "name": "JM Motors Santos",
  "image": "https://jm-motors.lovable.app/fachada-real.jpg",
  "url": "https://jm-motors.lovable.app",
  "telephone": "+5513976007271",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Senador Feijó, 455",
    "addressLocality": "Santos",
    "addressRegion": "SP",
    "postalCode": "11015-503",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.9452,
    "longitude": -46.3312
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "13:00"
    }
  ],
  "sameAs": [
    "https://instagram.com/jm.motors_"
  ]
}
```

---

## 2. Palavras-chave Prioritárias para Santos e Baixada

- "comprar scooter elétrica santos"
- "moto elétrica santos sp"
- "citycoco santos"
- "loja de motos senador feijó santos"
- "motos seminovas santos"
- "avaliação de moto usada na baixada santista"
- "consignação de motos santos"
- "financiamento de moto em santos em 24x"

---

## 3. Checklist de Presença Digital

1. **Google Perfil de Empresa (Google Meu Negócio)**:
   - Cadastrar o mesmo endereço: *Av. Senador Feijó, 455 - Santos, SP*.
   - Inserir o link da landing page no botão de website.
   - Adicionar as fotos reais da fachada e do showroom que já estão no projeto.
2. **Instagram**:
   - Bio contendo o link da landing page ou agregador com o botão para o estoque e o simulador.
3. **Google Maps**:
   - Garantir que a rota traçada aponte exatamente para o cruzamento comercial correto na Av. Senador Feijó.

---

## Notas Relacionadas
- [[00 - Indice Geral MOC]]
- [[01 - Visao Geral do Projeto e Freelancer]]
- [[06 - Diagnostico Tecnico e Roadmap de Melhorias]]
