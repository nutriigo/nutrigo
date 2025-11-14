// Receitas exclusivas por plano de assinatura

export interface Receita {
  id: string;
  titulo: string;
  descricao: string;
  tempoPreparo: string;
  calorias: number;
  proteinas: number;
  carboidratos: number;
  gorduras: number;
  ingredientes: string[];
  modoPreparo: string[];
  categoria: string;
  dificuldade: "Fácil" | "Média" | "Difícil";
  imagemUrl: string;
}

export interface ConteudoPlano {
  planoId: string;
  planoNome: string;
  emoji: string;
  descricao: string;
  receitas: Receita[];
  beneficiosExtras: string[];
}

// PLANO MENSAL - Receitas Básicas e Rápidas
export const receitasMensal: Receita[] = [
  {
    id: "mensal-1",
    titulo: "Omelete Proteico de Espinafre",
    descricao: "Omelete leve e nutritivo, perfeito para café da manhã ou lanche rápido",
    tempoPreparo: "10 minutos",
    calorias: 245,
    proteinas: 22,
    carboidratos: 8,
    gorduras: 14,
    ingredientes: [
      "3 ovos inteiros",
      "1 xícara de espinafre fresco",
      "1 tomate picado",
      "1 colher de azeite",
      "Sal e pimenta a gosto",
      "Queijo branco light (opcional)"
    ],
    modoPreparo: [
      "Bata os ovos em uma tigela com sal e pimenta",
      "Aqueça o azeite em uma frigideira antiaderente",
      "Adicione o espinafre e refogue por 1 minuto",
      "Despeje os ovos batidos sobre o espinafre",
      "Adicione o tomate picado",
      "Cozinhe em fogo baixo até firmar (3-4 minutos)",
      "Dobre ao meio e sirva quente"
    ],
    categoria: "Café da Manhã",
    dificuldade: "Fácil",
    imagemUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop"
  },
  {
    id: "mensal-2",
    titulo: "Salada de Grão-de-Bico com Atum",
    descricao: "Salada completa e refrescante, rica em proteínas e fibras",
    tempoPreparo: "12 minutos",
    calorias: 320,
    proteinas: 28,
    carboidratos: 35,
    gorduras: 8,
    ingredientes: [
      "1 lata de grão-de-bico escorrido",
      "1 lata de atum em água",
      "1 pepino picado",
      "1 tomate picado",
      "Cebola roxa a gosto",
      "Suco de 1 limão",
      "Azeite, sal e pimenta"
    ],
    modoPreparo: [
      "Escorra bem o grão-de-bico e o atum",
      "Em uma tigela, misture todos os ingredientes",
      "Tempere com limão, azeite, sal e pimenta",
      "Misture bem e deixe descansar por 5 minutos",
      "Sirva gelado ou em temperatura ambiente"
    ],
    categoria: "Almoço",
    dificuldade: "Fácil",
    imagemUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    id: "mensal-3",
    titulo: "Wrap de Frango com Abacate",
    descricao: "Wrap saudável e prático, ideal para levar para o trabalho",
    tempoPreparo: "15 minutos",
    calorias: 380,
    proteinas: 32,
    carboidratos: 28,
    gorduras: 16,
    ingredientes: [
      "1 tortilha integral",
      "150g de peito de frango grelhado",
      "1/2 abacate amassado",
      "Folhas de alface",
      "Tomate cereja",
      "Iogurte natural",
      "Temperos a gosto"
    ],
    modoPreparo: [
      "Grelhe o frango temperado até dourar",
      "Corte o frango em tiras finas",
      "Espalhe o abacate amassado na tortilha",
      "Adicione as folhas de alface",
      "Coloque o frango e os tomates",
      "Finalize com iogurte natural",
      "Enrole bem e corte ao meio"
    ],
    categoria: "Almoço",
    dificuldade: "Fácil",
    imagemUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop"
  }
];

// PLANO TRIMESTRAL - Receitas Intermediárias com Cardápio Semanal
export const receitasTrimestral: Receita[] = [
  {
    id: "trimestral-1",
    titulo: "Bowl de Quinoa com Salmão Grelhado",
    descricao: "Bowl nutritivo e completo com ômega-3 e proteínas de alta qualidade",
    tempoPreparo: "15 minutos",
    calorias: 450,
    proteinas: 35,
    carboidratos: 42,
    gorduras: 18,
    ingredientes: [
      "1 xícara de quinoa cozida",
      "150g de salmão fresco",
      "1 xícara de brócolis",
      "1/2 abacate fatiado",
      "Cenoura ralada",
      "Sementes de gergelim",
      "Molho de limão e azeite"
    ],
    modoPreparo: [
      "Cozinhe a quinoa conforme instruções da embalagem",
      "Tempere o salmão com sal, pimenta e limão",
      "Grelhe o salmão por 4-5 minutos de cada lado",
      "Cozinhe o brócolis no vapor por 5 minutos",
      "Monte o bowl: quinoa na base, salmão ao centro",
      "Adicione brócolis, cenoura e abacate ao redor",
      "Finalize com gergelim e molho de limão"
    ],
    categoria: "Almoço",
    dificuldade: "Média",
    imagemUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    id: "trimestral-2",
    titulo: "Panqueca de Banana e Aveia",
    descricao: "Panqueca saudável sem farinha, perfeita para pré-treino",
    tempoPreparo: "12 minutos",
    calorias: 280,
    proteinas: 18,
    carboidratos: 38,
    gorduras: 8,
    ingredientes: [
      "1 banana madura",
      "2 ovos",
      "3 colheres de aveia em flocos",
      "1 colher de mel",
      "Canela em pó",
      "Essência de baunilha",
      "Frutas para decorar"
    ],
    modoPreparo: [
      "Amasse a banana com um garfo",
      "Adicione os ovos e misture bem",
      "Acrescente a aveia, mel, canela e baunilha",
      "Deixe a massa descansar por 2 minutos",
      "Aqueça uma frigideira antiaderente",
      "Despeje porções da massa e cozinhe 2 min cada lado",
      "Sirva com frutas frescas por cima"
    ],
    categoria: "Café da Manhã",
    dificuldade: "Fácil",
    imagemUrl: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&h=300&fit=crop"
  },
  {
    id: "trimestral-3",
    titulo: "Frango Teriyaki com Legumes",
    descricao: "Receita asiática saudável e cheia de sabor",
    tempoPreparo: "15 minutos",
    calorias: 395,
    proteinas: 38,
    carboidratos: 32,
    gorduras: 12,
    ingredientes: [
      "200g de peito de frango em cubos",
      "Brócolis e cenoura",
      "Pimentão vermelho",
      "3 colheres de molho shoyu",
      "1 colher de mel",
      "Gengibre ralado",
      "Alho picado",
      "Gergelim para decorar"
    ],
    modoPreparo: [
      "Corte o frango em cubos médios",
      "Misture shoyu, mel, gengibre e alho",
      "Marine o frango por 5 minutos",
      "Aqueça uma wok ou frigideira grande",
      "Refogue o frango até dourar",
      "Adicione os legumes e refogue por 3 minutos",
      "Finalize com gergelim e sirva quente"
    ],
    categoria: "Jantar",
    dificuldade: "Média",
    imagemUrl: "https://images.unsplash.com/photo-1603073163308-9c0f6f1b2e3f?w=400&h=300&fit=crop"
  },
  {
    id: "trimestral-4",
    titulo: "Smoothie Bowl Energético",
    descricao: "Bowl cremoso e nutritivo para começar o dia com energia",
    tempoPreparo: "10 minutos",
    calorias: 320,
    proteinas: 15,
    carboidratos: 48,
    gorduras: 10,
    ingredientes: [
      "1 banana congelada",
      "1/2 xícara de frutas vermelhas",
      "1 scoop de whey protein",
      "1/2 xícara de leite vegetal",
      "Granola",
      "Frutas frescas",
      "Mel e sementes"
    ],
    modoPreparo: [
      "Bata a banana congelada com frutas vermelhas",
      "Adicione o whey e o leite vegetal",
      "Bata até obter consistência cremosa",
      "Despeje em uma tigela",
      "Decore com granola, frutas frescas",
      "Finalize com mel e sementes",
      "Sirva imediatamente"
    ],
    categoria: "Café da Manhã",
    dificuldade: "Fácil",
    imagemUrl: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop"
  }
];

// PLANO ANUAL - Receitas Premium e Gourmet
export const receitasAnual: Receita[] = [
  {
    id: "anual-1",
    titulo: "Risoto de Cogumelos Shiitake Light",
    descricao: "Risoto cremoso e sofisticado com baixo teor de gordura",
    tempoPreparo: "15 minutos",
    calorias: 420,
    proteinas: 18,
    carboidratos: 58,
    gorduras: 14,
    ingredientes: [
      "1 xícara de arroz arbóreo",
      "200g de cogumelos shiitake",
      "1 cebola pequena picada",
      "2 dentes de alho",
      "3 xícaras de caldo de legumes",
      "Queijo parmesão light",
      "Vinho branco (opcional)",
      "Azeite e ervas frescas"
    ],
    modoPreparo: [
      "Refogue a cebola e alho no azeite",
      "Adicione o arroz e torre por 1 minuto",
      "Acrescente vinho branco (se usar) e deixe evaporar",
      "Adicione o caldo quente aos poucos, mexendo sempre",
      "Refogue os cogumelos separadamente",
      "Quando o arroz estiver al dente, adicione os cogumelos",
      "Finalize com parmesão e ervas frescas"
    ],
    categoria: "Jantar",
    dificuldade: "Média",
    imagemUrl: "https://images.unsplash.com/photo-1476124369491-c4f9c6c6c8c6?w=400&h=300&fit=crop"
  },
  {
    id: "anual-2",
    titulo: "Filé Mignon ao Molho de Mostarda Dijon",
    descricao: "Prato sofisticado e saudável, perfeito para ocasiões especiais",
    tempoPreparo: "15 minutos",
    calorias: 380,
    proteinas: 42,
    carboidratos: 8,
    gorduras: 20,
    ingredientes: [
      "200g de filé mignon",
      "2 colheres de mostarda Dijon",
      "1/2 xícara de creme de leite light",
      "Alho e cebola",
      "Vinho branco",
      "Aspargos frescos",
      "Azeite e temperos"
    ],
    modoPreparo: [
      "Tempere o filé com sal e pimenta",
      "Sele o filé em fogo alto por 2 min cada lado",
      "Retire e reserve em papel alumínio",
      "Na mesma panela, refogue alho e cebola",
      "Adicione vinho branco e deixe reduzir",
      "Acrescente mostarda e creme de leite",
      "Grelhe os aspargos e sirva com o filé e molho"
    ],
    categoria: "Jantar",
    dificuldade: "Média",
    imagemUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop"
  },
  {
    id: "anual-3",
    titulo: "Poke Bowl Havaiano Premium",
    descricao: "Bowl tropical com atum fresco e ingredientes selecionados",
    tempoPreparo: "15 minutos",
    calorias: 480,
    proteinas: 38,
    carboidratos: 52,
    gorduras: 16,
    ingredientes: [
      "200g de atum fresco em cubos",
      "1 xícara de arroz japonês",
      "Edamame",
      "Abacate fatiado",
      "Manga em cubos",
      "Alga nori",
      "Molho de soja e gergelim",
      "Cebolinha e gengibre"
    ],
    modoPreparo: [
      "Cozinhe o arroz japonês e deixe esfriar",
      "Corte o atum em cubos perfeitos",
      "Marine o atum com shoyu e gergelim por 5 min",
      "Monte o bowl: arroz na base",
      "Disponha atum, edamame, abacate e manga",
      "Adicione alga nori em tiras",
      "Finalize com molho, cebolinha e gengibre"
    ],
    categoria: "Almoço",
    dificuldade: "Média",
    imagemUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    id: "anual-4",
    titulo: "Camarão ao Curry Tailandês",
    descricao: "Prato exótico e aromático com especiarias tailandesas",
    tempoPreparo: "15 minutos",
    calorias: 395,
    proteinas: 32,
    carboidratos: 28,
    gorduras: 18,
    ingredientes: [
      "300g de camarões limpos",
      "1 lata de leite de coco light",
      "2 colheres de pasta de curry",
      "Pimentão e cebola",
      "Tomate cereja",
      "Manjericão tailandês",
      "Gengibre e alho",
      "Arroz integral"
    ],
    modoPreparo: [
      "Refogue alho e gengibre no azeite",
      "Adicione a pasta de curry e mexa bem",
      "Acrescente o leite de coco e misture",
      "Adicione pimentão e cebola",
      "Cozinhe por 3 minutos",
      "Adicione os camarões e tomates",
      "Finalize com manjericão e sirva com arroz"
    ],
    categoria: "Jantar",
    dificuldade: "Média",
    imagemUrl: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop"
  },
  {
    id: "anual-5",
    titulo: "Tarte Tatin de Tomate e Queijo de Cabra",
    descricao: "Entrada sofisticada e saudável com toque gourmet",
    tempoPreparo: "15 minutos",
    calorias: 340,
    proteinas: 14,
    carboidratos: 32,
    gorduras: 18,
    ingredientes: [
      "1 massa folhada integral",
      "Tomates cereja coloridos",
      "Queijo de cabra",
      "Mel e vinagre balsâmico",
      "Tomilho fresco",
      "Azeite",
      "Rúcula para servir"
    ],
    modoPreparo: [
      "Corte os tomates ao meio",
      "Caramelize com mel e vinagre em uma frigideira",
      "Adicione tomilho e queijo de cabra em pedaços",
      "Cubra com a massa folhada",
      "Leve ao forno a 200°C por 12 minutos",
      "Vire em um prato com cuidado",
      "Sirva com rúcula fresca"
    ],
    categoria: "Entrada",
    dificuldade: "Média",
    imagemUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop"
  }
];

// Conteúdo completo por plano
export const conteudoPlanos: ConteudoPlano[] = [
  {
    planoId: "mensal",
    planoNome: "Mensal",
    emoji: "🥗",
    descricao: "Receitas rápidas e práticas para o dia a dia",
    receitas: receitasMensal,
    beneficiosExtras: [
      "3 receitas exclusivas mensais",
      "Cálculo nutricional completo",
      "Dicas de substituições saudáveis",
      "Suporte por e-mail"
    ]
  },
  {
    planoId: "trimestral",
    planoNome: "Trimestral",
    emoji: "🍳",
    descricao: "Cardápio semanal completo com receitas variadas",
    receitas: receitasTrimestral,
    beneficiosExtras: [
      "4 receitas exclusivas semanais",
      "Cardápio semanal personalizado",
      "Receitas antecipadas",
      "Lista de compras automática",
      "Prioridade no suporte"
    ]
  },
  {
    planoId: "anual",
    planoNome: "Anual",
    emoji: "🍱",
    descricao: "Receitas premium e gourmet com consultoria nutricional",
    receitas: receitasAnual,
    beneficiosExtras: [
      "5+ receitas premium semanais",
      "Consultoria nutricional mensal",
      "Receitas gourmet exclusivas",
      "Plano alimentar personalizado",
      "Suporte VIP 24/7",
      "Acesso antecipado a novidades"
    ]
  }
];

// Função para obter conteúdo por plano
export function getConteudoPorPlano(planoId: string): ConteudoPlano | undefined {
  return conteudoPlanos.find(plano => plano.planoId === planoId);
}

// Função para obter todas as receitas de um plano
export function getReceitasPorPlano(planoId: string): Receita[] {
  const conteudo = getConteudoPorPlano(planoId);
  return conteudo?.receitas || [];
}
