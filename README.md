# Espaço Arqui+ | Arq. Letícia Cavalcanti

Site institucional e landing page de conversão (Mobile-First) desenvolvido para o escritório **Espaço Arqui+ Arquitetura e Construção Ltda.** (`@espacoarquimais_`), liderado pela **Arq. Letícia Cavalcanti (CAU A250964-4)**.

> *“Sonhar, projetar, realizar!”* — Arquitetura · Interiores · Construção

---

## ✨ Estrutura do Projeto

- `index.html` — Estrutura semântica completa (Header fixo, Hero com moldura em arco arquitetônico, Diferenciais, Serviços, Portfólio filtrável por categoria, Metodologia em 4 etapas, Sobre a Arquiteta, Carrossel de Depoimentos, FAQ interativo, Formulário inteligente para WhatsApp e Barra fixa Mobile).
- `styles.css` — Identidade visual arquitetônica em tons de **Bronze Arquitetônico / Terracota (`#8C5A3C`)**, **Travertino (`#FAF7F2`)**, **Areia Dourada (`#C8B296`)** e **Carvão Quente (`#241A14`)**, com responsividade Mobile-First.
- `script.js` — Configuração centralizada no objeto `CONFIG` no topo do arquivo (atualiza textos, número de WhatsApp, links do Instagram, portfólio de projetos e depoimentos automaticamente).
- `assets/` — Pasta destinada às fotos oficiais da arquiteta e dos projetos (`hero-arquitetura.jpg`, `leticia-sobre.jpg`, etc.).

---

## 🛠️ Como Personalizar Dados, WhatsApp e Fotos

Abra o arquivo `script.js` e edite o bloco `CONFIG` logo nas primeiras linhas:

```js
const CONFIG = {
  nome: "Espaço Arqui+",
  razaoSocial: "Espaço Arqui+ Arquitetura e Construção Ltda.",
  arquiteta: "Arq. Letícia Cavalcanti",
  cau: "CAU A250964-4",
  especialidade: "Arquitetura, Interiores & Construção",
  cidade: "Pernambuco",
  whatsapp: "5581999999999", // Substitua pelo número oficial com 55 + DDD
  instagramUsuario: "@espacoarquimais_",
  instagramUrl: "https://www.instagram.com/espacoarquimais_/",
  ...
};
```

### Adicionando Fotos Oficiais
1. Salve a foto principal na pasta `assets/` com o nome `hero-arquitetura.jpg`.
2. Salve a foto da arquiteta Letícia Cavalcanti na pasta `assets/` com o nome `leticia-sobre.jpg`.
3. Enquanto essas fotos locais não forem adicionadas na pasta `assets/`, o site exibe automaticamente imagens arquitetônicas de alta resolução (`fotoHeroFallback` e `fotoSobreFallback`).
