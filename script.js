/**
 * ============================================================================
 * CONFIGURAÇÃO CENTRAL DO SITE - ESPAÇO ARQUI+ (ARQ. LETÍCIA CAVALCANTI)
 * ============================================================================
 * Altere qualquer informação abaixo e o site será atualizado automaticamente.
 */
const CONFIG = {
  nome: "Espaço Arqui+",
  razaoSocial: "Espaço Arqui+ Arquitetura e Construção Ltda.",
  arquiteta: "Arq. Letícia Cavalcanti",
  cau: "CAU A250964-4",
  especialidade: "Arquitetura, Interiores & Construção",
  cidade: "Pernambuco",
  whatsapp: "5581999999999", // Coloque aqui o número oficial com DDI (55) + DDD (ex: 5581999999999)
  instagramUsuario: "@espacoarquimais_",
  instagramUrl: "https://www.instagram.com/espacoarquimais_/",
  endereco: "Pernambuco · Projetos Presenciais e Online",
  horarioAtendimento: "Segunda a Sexta · Atendimento com hora marcada",
  corPrincipal: "#8C5A3C", // Bronze Arquitetônico / Terracota (combinado com Areia e Travertino)
  fotoHero: "assets/hero-arquitetura.jpg",
  fotoHeroFallback: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  fotoSobre: "assets/leticia-sobre.jpg",
  fotoSobreFallback: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
  mensagemPadraoWhatsApp: "Olá, Letícia! Vim pelo site do Espaço Arqui+ e gostaria de solicitar um orçamento de projeto.",

  /**
   * PORTFÓLIO / PROJETOS EM DESTAQUE
   * Para adicionar ou trocar fotos dos projetos, salve as imagens na pasta assets/
   * e altere o campo "imagem" abaixo.
   */
  projetos: [
    {
      categoria: "Arquitetura",
      titulo: "Residência Contemporânea",
      detalhe: "Projeto Arquitetônico Completo · Fachada & Lazer",
      descricao: "Volumetria limpa com brises amadeirados, iluminação cênica, integração total com área gourmet e conforto térmico.",
      imagem: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80"
    },
    {
      categoria: "Interiores",
      titulo: "Living & Sala de Jantar Integrados",
      detalhe: "Design de Interiores · Marcenaria & Iluminação",
      descricao: "Paleta acolhedora em tons neutros, painéis ripados sob medida e projeto luminotécnico pensado para receber com elegância.",
      imagem: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80"
    },
    {
      categoria: "Interiores",
      titulo: "Cozinha Gourmet & Ilha Central",
      detalhe: "Interiores Residencial · Funcionalidade",
      descricao: "Bancadas em quartzo, marcenaria inteligente com máximo aproveitamento de espaço e integração fluida com a sala.",
      imagem: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80"
    },
    {
      categoria: "Construção & Reforma",
      titulo: "Reforma Completa de Apartamento",
      detalhe: "Projeto Executivo + Gestão de Obra",
      descricao: "Transformação completa desde a entrega da construtora: revestimentos, forro, iluminação, bancadas e acompanhamento técnico.",
      imagem: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=80"
    },
    {
      categoria: "Interiores",
      titulo: "Suíte Master Aconchegante",
      detalhe: "Design de Interiores · Conforto & Refúgio",
      descricao: "Cabeceira estofada, iluminação indireta quente, penteadeira/home office integrado e closet planejado sob medida.",
      imagem: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80"
    },
    {
      categoria: "Construção & Reforma",
      titulo: "Espaço Comercial & Clínica",
      detalhe: "Arquitetura Comercial · Identidade Visual",
      descricao: "Recepção e salas de atendimento planejadas para transmitir sofisticação, acolhimento e valorizar a experiência do cliente.",
      imagem: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80"
    }
  ],

  /**
   * LISTA DINÂMICA DE DEPOIMENTOS DE CLIENTES
   */
  depoimentos: [
    {
      nome: "Cliente M. A.",
      iniciais: "M.A.",
      servico: "Projeto de Interiores e Reforma de Apartamento",
      texto: "A Letícia captou exatamente o que a nossa família sonhava! Quando vimos o 3D ficamos encantados, e o projeto executivo detalhado fez toda a diferença na obra. Cada cantinho ficou funcional e lindo!"
    },
    {
      nome: "Cliente R. C.",
      iniciais: "R.C.",
      servico: "Projeto Arquitetônico Residencial",
      texto: "Contratar o Espaço Arqui+ foi o melhor investimento da nossa construção. Além de uma fachada moderna e planta super bem aproveitada, tivemos segurança técnica do início ao fim. Recomendamos de olhos fechados!"
    },
    {
      nome: "Cliente F. L.",
      iniciais: "F.L.",
      servico: "Arquitetura Comercial",
      texto: "Queríamos que o nosso espaço transmitisse credibilidade e acolhimento logo na entrada. A Arq. Letícia Cavalcanti superou todas as expectativas no projeto de iluminação e marcenaria. Todos os clientes elogiam!"
    },
    {
      nome: "Cliente G. S.",
      iniciais: "G.S.",
      servico: "Reforma e Acompanhamento de Obra",
      texto: "Não tínhamos tempo para acompanhar a reforma e o suporte do Espaço Arqui+ nos deu total tranquilidade. Cumpriram o planejamento, evitaram desperdícios de material e entregaram tudo impecável."
    }
  ]
};

(function () {
  // 1. Aplica cor personalizada se configurada
  if (CONFIG.corPrincipal && /^#[0-9a-fA-F]{6}$/.test(CONFIG.corPrincipal)) {
    document.documentElement.style.setProperty("--accent", CONFIG.corPrincipal);
  }

  // 2. Formata telefone para exibição
  function formatarTelefone(digitos) {
    const d = (digitos || "").replace(/\D/g, "");
    if (!d || /99999999$/.test(d)) return "Solicitar pelo WhatsApp";
    if (d.length === 13) return `(${d.slice(2, 4)}) ${d.slice(4, 9)}-${d.slice(9)}`;
    if (d.length === 12) return `(${d.slice(2, 4)}) ${d.slice(4, 8)}-${d.slice(8)}`;
    if (d.length === 11) return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
    return digitos;
  }

  function gerarLinkWhatsApp(mensagemCustomizada) {
    const digitos = (CONFIG.whatsapp || "").replace(/\D/g, "");
    const texto = mensagemCustomizada || CONFIG.mensagemPadraoWhatsApp;
    if (!digitos) {
      return CONFIG.instagramUrl || "#contato";
    }
    return `https://wa.me/${digitos}?text=${encodeURIComponent(texto)}`;
  }

  function extrairLetrasIniciais(nomeStr, iniciaisCustom) {
    if (iniciaisCustom) return iniciaisCustom;
    const partes = (nomeStr || "C")
      .replace(/^Cliente\s+/i, "")
      .split(/[\s.]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p.charAt(0).toUpperCase());
    return partes.join(".") + ".";
  }

  // 3. Atualiza elementos com data-attributes
  document.querySelectorAll("[data-nome]").forEach((el) => {
    el.textContent = CONFIG.nome;
  });

  document.querySelectorAll("[data-razao]").forEach((el) => {
    el.textContent = CONFIG.razaoSocial || CONFIG.nome;
  });

  document.querySelectorAll("[data-arquiteta]").forEach((el) => {
    el.textContent = CONFIG.arquiteta;
  });

  document.querySelectorAll("[data-especialidade]").forEach((el) => {
    el.textContent = CONFIG.especialidade;
  });

  document.querySelectorAll("[data-cidade]").forEach((el) => {
    el.textContent = CONFIG.cidade;
  });

  document.querySelectorAll("[data-cau]").forEach((el) => {
    if (CONFIG.cau) {
      el.textContent = CONFIG.cau;
      el.style.display = "";
    } else {
      el.style.display = "none";
    }
  });

  document.querySelectorAll("[data-endereco]").forEach((el) => {
    el.textContent = CONFIG.endereco;
  });

  document.querySelectorAll("[data-horario]").forEach((el) => {
    el.textContent = CONFIG.horarioAtendimento;
  });

  // Fotos com fallback inteligente caso a imagem local ainda não tenha sido adicionada em assets/
  const imgHero = document.getElementById("imgHero");
  if (imgHero) {
    imgHero.onerror = function () {
      if (CONFIG.fotoHeroFallback && imgHero.src !== CONFIG.fotoHeroFallback) {
        imgHero.src = CONFIG.fotoHeroFallback;
      }
    };
    if (CONFIG.fotoHero) imgHero.src = CONFIG.fotoHero;
  }

  const imgSobre = document.getElementById("imgSobre");
  if (imgSobre) {
    imgSobre.onerror = function () {
      if (CONFIG.fotoSobreFallback && imgSobre.src !== CONFIG.fotoSobreFallback) {
        imgSobre.src = CONFIG.fotoSobreFallback;
      }
    };
    if (CONFIG.fotoSobre) imgSobre.src = CONFIG.fotoSobre;
  }

  // Links de WhatsApp
  function atualizarLinksWa() {
    const linkWaPadrao = gerarLinkWhatsApp();
    document.querySelectorAll("[data-wa]").forEach((el) => {
      const assunto = el.getAttribute("data-wa-assunto");
      if (assunto) {
        el.href = gerarLinkWhatsApp(
          `Olá, Letícia! Vim pelo site do ${CONFIG.nome} e gostaria de solicitar um orçamento para *${assunto}*.`
        );
      } else {
        el.href = linkWaPadrao;
      }
      el.target = "_blank";
      el.rel = "noopener";
    });
  }
  atualizarLinksWa();

  document.querySelectorAll("[data-wa-numero]").forEach((el) => {
    el.textContent = formatarTelefone(CONFIG.whatsapp);
  });

  // Botão para cliente enviar novo depoimento pelo WhatsApp
  const btnEnviarDepoimento = document.getElementById("btnEnviarDepoimento");
  if (btnEnviarDepoimento) {
    btnEnviarDepoimento.href = gerarLinkWhatsApp(
      `Olá, Letícia! Gostaria de deixar meu depoimento sobre o projeto com o ${CONFIG.nome} para publicar no site:\n\n`
    );
  }

  // Links de Instagram
  document.querySelectorAll("[data-ig]").forEach((el) => {
    el.href = CONFIG.instagramUrl || "#";
    el.target = "_blank";
    el.rel = "noopener";
  });

  document.querySelectorAll("[data-ig-user]").forEach((el) => {
    el.textContent = CONFIG.instagramUsuario;
  });

  // Ano atual no rodapé
  const anoEl = document.getElementById("anoAtual");
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  // 4. Renderização Dinâmica do Portfólio de Projetos + Filtro de Categorias
  const portfolioGrid = document.getElementById("portfolioGrid");
  const filterBtns = document.querySelectorAll("#portfolioFilters .filter-btn");

  function renderizarProjetos(filtroCategoria) {
    if (!portfolioGrid || !Array.isArray(CONFIG.projetos)) return;
    portfolioGrid.innerHTML = "";

    const lista =
      !filtroCategoria || filtroCategoria === "todos"
        ? CONFIG.projetos
        : CONFIG.projetos.filter((p) => p.categoria === filtroCategoria);

    lista.forEach((proj) => {
      const card = document.createElement("article");
      card.className = "project-card";

      const imgWrap = document.createElement("div");
      imgWrap.className = "project-img-wrap";

      const img = document.createElement("img");
      img.src = proj.imagem;
      img.alt = `${proj.titulo} - ${CONFIG.nome}`;
      img.loading = "lazy";

      const badge = document.createElement("span");
      badge.className = "project-badge";
      badge.textContent = proj.categoria;

      imgWrap.appendChild(img);
      imgWrap.appendChild(badge);

      const body = document.createElement("div");
      body.className = "project-body";

      const meta = document.createElement("div");
      meta.className = "project-meta";
      meta.textContent = proj.detalhe || proj.categoria;

      const h3 = document.createElement("h3");
      h3.textContent = proj.titulo;

      const p = document.createElement("p");
      p.textContent = proj.descricao;

      const link = document.createElement("a");
      link.className = "project-link";
      link.href = gerarLinkWhatsApp(
        `Olá, Letícia! Vi o destaque "${proj.titulo}" (${proj.categoria}) no site do ${CONFIG.nome} e gostaria de orçar um projeto semelhante.`
      );
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = "Quero um projeto assim →";

      body.appendChild(meta);
      body.appendChild(h3);
      body.appendChild(p);
      body.appendChild(link);

      card.appendChild(imgWrap);
      card.appendChild(body);
      portfolioGrid.appendChild(card);
    });
  }

  renderizarProjetos("todos");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-filter") || "todos";
      renderizarProjetos(cat);
    });
  });

  // 5. Renderização Dinâmica dos Depoimentos (Carrossel)
  const testiTrack = document.getElementById("testiTrack");
  const testiDots = document.getElementById("testiDots");
  const testiPrev = document.getElementById("testiPrev");
  const testiNext = document.getElementById("testiNext");

  if (testiTrack && Array.isArray(CONFIG.depoimentos)) {
    testiTrack.innerHTML = "";
    if (testiDots) testiDots.innerHTML = "";

    CONFIG.depoimentos.forEach((item, index) => {
      const card = document.createElement("article");
      card.className = "testi-card";

      const topDiv = document.createElement("div");
      const stars = document.createElement("div");
      stars.className = "stars";
      stars.setAttribute("aria-label", "5 estrelas");
      stars.textContent = "★★★★★";

      const quote = document.createElement("blockquote");
      quote.textContent = `"${item.texto}"`;

      topDiv.appendChild(stars);
      topDiv.appendChild(quote);

      const authorDiv = document.createElement("div");
      authorDiv.className = "testi-author";

      const avatar = document.createElement("div");
      avatar.className = "testi-avatar";
      avatar.textContent = extrairLetrasIniciais(item.nome, item.iniciais);

      const metaDiv = document.createElement("div");
      const strong = document.createElement("strong");
      strong.textContent = item.nome;
      const span = document.createElement("span");
      span.textContent = item.servico || "Cliente Espaço Arqui+";

      metaDiv.appendChild(strong);
      metaDiv.appendChild(span);

      authorDiv.appendChild(avatar);
      authorDiv.appendChild(metaDiv);

      card.appendChild(topDiv);
      card.appendChild(authorDiv);
      testiTrack.appendChild(card);

      if (testiDots) {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "testi-dot" + (index === 0 ? " active" : "");
        dot.setAttribute("aria-label", `Ver depoimento ${index + 1}`);
        dot.addEventListener("click", () => {
          const cards = testiTrack.querySelectorAll(".testi-card");
          if (cards[index]) {
            testiTrack.scrollTo({
              left: cards[index].offsetLeft - testiTrack.offsetLeft,
              behavior: "smooth"
            });
          }
        });
        testiDots.appendChild(dot);
      }
    });

    function atualizarDotAtivo() {
      if (!testiDots) return;
      const cards = testiTrack.querySelectorAll(".testi-card");
      const dots = testiDots.querySelectorAll(".testi-dot");
      if (!cards.length || !dots.length) return;

      let closestIndex = 0;
      let minDiff = Infinity;
      const scrollLeft = testiTrack.scrollLeft;

      cards.forEach((c, idx) => {
        const diff = Math.abs(c.offsetLeft - testiTrack.offsetLeft - scrollLeft);
        if (diff < minDiff) {
          minDiff = diff;
          closestIndex = idx;
        }
      });

      dots.forEach((d, idx) => {
        d.classList.toggle("active", idx === closestIndex);
      });
    }

    testiTrack.addEventListener("scroll", atualizarDotAtivo, { passive: true });

    function rolarCarrossel(direcao) {
      const card = testiTrack.querySelector(".testi-card");
      const larguraPasso = card ? card.offsetWidth + 18 : 300;
      testiTrack.scrollBy({ left: direcao * larguraPasso, behavior: "smooth" });
    }

    if (testiPrev) testiPrev.addEventListener("click", () => rolarCarrossel(-1));
    if (testiNext) testiNext.addEventListener("click", () => rolarCarrossel(1));
  }

  // 6. Menu Mobile
  const menuBtn = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 7. Sombra no Header ao rolar a página
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 8. Accordion de Perguntas Frequentes (FAQ)
  document.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (!btn || !answer) return;

    btn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Fecha outros abertos
      document.querySelectorAll(".faq-item.active").forEach((openItem) => {
        openItem.classList.remove("active");
        const openAnswer = openItem.querySelector(".faq-answer");
        if (openAnswer) openAnswer.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  // 9. Formulário inteligente que envia pedido de orçamento para o WhatsApp
  const waForm = document.getElementById("waForm");
  if (waForm) {
    waForm.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const nomeCliente = (document.getElementById("f-nome")?.value || "").trim();
      const servico = (document.getElementById("f-servico")?.value || "").trim();
      const imovel = (document.getElementById("f-imovel")?.value || "").trim();
      const mensagem = (document.getElementById("f-msg")?.value || "").trim();

      if (!nomeCliente || !mensagem) {
        alert("Por favor, preencha seu nome e conte brevemente sobre o seu projeto.");
        return;
      }

      const linhas = [
        `Olá, Letícia! Meu nome é *${nomeCliente}*.`,
        `Interesse: *${servico}* (${imovel}).`,
        `Detalhes: ${mensagem}`,
        `Vim pelo site do *${CONFIG.nome}* e gostaria de solicitar um orçamento.`
      ];

      window.open(gerarLinkWhatsApp(linhas.join("\n")), "_blank", "noopener");
    });
  }

  // 10. Animações suaves de entrada (Scroll Reveal)
  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("is-visible"));
  }
})();
