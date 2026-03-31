export type ShoppingItem = {
  name: string;
  quantity: string;
};

export type ShoppingCategory = {
  emoji: string;
  name: string;
  items: ShoppingItem[];
  note?: string;
};

export type ShoppingSection = {
  id: string;
  emoji: string;
  title: string;
  subtitle?: string;
  note?: string;
  categories: ShoppingCategory[];
};

export const shoppingSections: ShoppingSection[] = [
  {
    id: "compra-grande",
    emoji: "🛒",
    title: "Compra Grande",
    subtitle: "1x no mês",
    note: "Compra tudo de uma vez",
    categories: [
      {
        emoji: "🍚",
        name: "Carboidratos base",
        items: [
          { name: "Arroz branco", quantity: "2 kg" },
          { name: "Macarrão sem glúten", quantity: "1,5 kg" },
          { name: "Farelo de aveia", quantity: "1 kg" },
        ],
      },
      {
        emoji: "🍞",
        name: "Pães e similares",
        note: "Pode congelar",
        items: [
          { name: "Pão de aveia / integral", quantity: "4 pães (~50–60 fatias)" },
        ],
      },
      {
        emoji: "🌱",
        name: "Leguminosas",
        items: [
          { name: "Feijão", quantity: "1,5 kg cru" },
        ],
      },
      {
        emoji: "🍪",
        name: "Lanches",
        items: [
          { name: "Bolacha de arroz", quantity: "8 pacotes" },
          { name: "Geleia sem açúcar", quantity: "2 potes" },
        ],
      },
      {
        emoji: "🍯",
        name: "Extras",
        items: [
          { name: "Mel", quantity: "1 pote grande (~500g)" },
          { name: "Azeite", quantity: "500 ml" },
          { name: "Temperos secos", quantity: "orégano, cúrcuma, etc." },
        ],
      },
      {
        emoji: "🥤",
        name: "Suplemento",
        items: [
          { name: "Whey vegano", quantity: "1 pote (mín. 12 doses)" },
        ],
      },
    ],
  },
  {
    id: "proteinas",
    emoji: "❄️",
    title: "Proteínas",
    subtitle: "Comprar 1x e congelar",
    note: "Já porcionar em 50g · Separa em saquinhos de 50g · Deixa pronto pra semana inteira",
    categories: [
      {
        emoji: "🍗",
        name: "Proteínas",
        items: [
          { name: "Frango", quantity: "1 kg" },
          { name: "Peixe", quantity: "600 g" },
          { name: "Carne vermelha", quantity: "200 g" },
        ],
      },
    ],
  },
  {
    id: "semana-a",
    emoji: "🗓️",
    title: "Semana A",
    subtitle: "Perecíveis semanais",
    categories: [
      {
        emoji: "🍎",
        name: "Frutas",
        items: [
          { name: "Maçã", quantity: "4" },
          { name: "Banana", quantity: "7" },
          { name: "Pera", quantity: "2" },
          { name: "Laranja", quantity: "2" },
          { name: "Mamão", quantity: "2 pequenos" },
          { name: "Kiwi", quantity: "2" },
          { name: "Morango", quantity: "200 g" },
        ],
      },
      {
        emoji: "🥦",
        name: "Legumes",
        items: [
          { name: "Brócolis", quantity: "1 cabeça" },
          { name: "Cenoura", quantity: "3" },
          { name: "Abobrinha", quantity: "2" },
          { name: "Vagem", quantity: "200 g" },
          { name: "Berinjela", quantity: "1" },
          { name: "Repolho", quantity: "½" },
        ],
      },
      {
        emoji: "🥗",
        name: "Salada",
        items: [
          { name: "Alface", quantity: "1 pé" },
          { name: "Pepino", quantity: "2" },
          { name: "Cebola", quantity: "2" },
          { name: "Pimentão", quantity: "1" },
        ],
      },
      {
        emoji: "🥔",
        name: "Extras frescos",
        items: [
          { name: "Batata doce", quantity: "800 g" },
          { name: "Aipim", quantity: "600 g" },
          { name: "Limão", quantity: "6–8" },
        ],
      },
    ],
  },
  {
    id: "semana-b",
    emoji: "🗓️",
    title: "Semana B",
    subtitle: "Perecíveis semanais",
    categories: [
      {
        emoji: "🍎",
        name: "Frutas",
        items: [
          { name: "Maçã", quantity: "3" },
          { name: "Banana", quantity: "8" },
          { name: "Pera", quantity: "2" },
          { name: "Laranja", quantity: "2" },
          { name: "Mamão", quantity: "2" },
          { name: "Kiwi", quantity: "1–2" },
          { name: "Morango", quantity: "200 g" },
        ],
      },
      {
        emoji: "🥦",
        name: "Legumes",
        items: [
          { name: "Brócolis", quantity: "1" },
          { name: "Cenoura", quantity: "3" },
          { name: "Abobrinha", quantity: "2" },
          { name: "Vagem", quantity: "200 g" },
          { name: "Berinjela", quantity: "1" },
        ],
      },
      {
        emoji: "🥗",
        name: "Salada",
        items: [
          { name: "Alface", quantity: "1" },
          { name: "Pepino", quantity: "2" },
          { name: "Cebola", quantity: "2" },
        ],
      },
      {
        emoji: "🥔",
        name: "Extras",
        items: [
          { name: "Batata doce", quantity: "900 g" },
          { name: "Aipim", quantity: "700 g" },
          { name: "Limão", quantity: "6" },
        ],
      },
    ],
  },
  {
    id: "semana-c",
    emoji: "🗓️",
    title: "Semana C",
    subtitle: "Perecíveis semanais",
    categories: [
      {
        emoji: "🍎",
        name: "Frutas",
        items: [
          { name: "Maçã", quantity: "4" },
          { name: "Banana", quantity: "7" },
          { name: "Pera", quantity: "2" },
          { name: "Laranja", quantity: "2" },
          { name: "Mamão", quantity: "2" },
          { name: "Kiwi", quantity: "1" },
          { name: "Morango", quantity: "200 g" },
        ],
      },
      {
        emoji: "🥦",
        name: "Legumes",
        items: [
          { name: "Brócolis", quantity: "1" },
          { name: "Cenoura", quantity: "3" },
          { name: "Abobrinha", quantity: "2" },
          { name: "Vagem", quantity: "150 g" },
          { name: "Repolho", quantity: "½" },
        ],
      },
      {
        emoji: "🥗",
        name: "Salada",
        items: [
          { name: "Alface", quantity: "1" },
          { name: "Pepino", quantity: "2" },
          { name: "Cebola", quantity: "2" },
        ],
      },
      {
        emoji: "🥔",
        name: "Extras",
        items: [
          { name: "Batata doce", quantity: "800 g" },
          { name: "Aipim", quantity: "600 g" },
          { name: "Limão", quantity: "6" },
        ],
      },
    ],
  },
  {
    id: "semana-d",
    emoji: "🗓️",
    title: "Semana D",
    subtitle: "Perecíveis semanais",
    categories: [
      {
        emoji: "🍎",
        name: "Frutas",
        items: [
          { name: "Maçã", quantity: "3" },
          { name: "Banana", quantity: "7" },
          { name: "Pera", quantity: "2" },
          { name: "Laranja", quantity: "2" },
          { name: "Mamão", quantity: "2" },
          { name: "Kiwi", quantity: "1" },
          { name: "Morango", quantity: "200 g" },
        ],
      },
      {
        emoji: "🥦",
        name: "Legumes",
        items: [
          { name: "Brócolis", quantity: "1" },
          { name: "Cenoura", quantity: "3" },
          { name: "Abobrinha", quantity: "2" },
          { name: "Berinjela", quantity: "1" },
          { name: "Repolho", quantity: "½" },
        ],
      },
      {
        emoji: "🥗",
        name: "Salada",
        items: [
          { name: "Alface", quantity: "1" },
          { name: "Pepino", quantity: "2" },
          { name: "Cebola", quantity: "2" },
          { name: "Pimentão", quantity: "1" },
        ],
      },
      {
        emoji: "🥔",
        name: "Extras",
        items: [
          { name: "Batata doce", quantity: "800 g" },
          { name: "Aipim", quantity: "600 g" },
          { name: "Limão", quantity: "6–8" },
        ],
      },
    ],
  },
];
