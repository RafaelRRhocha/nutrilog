export type Meal = {
  name: string;
  items: string[];
};

export type Day = {
  name: string;
  shortName: string;
  meals: Meal[];
};

export type Week = {
  id: string;
  name: string;
  days: Day[];
};

export const weeks: Week[] = [
  {
    id: 'semana-a',
    name: 'SEMANA A',
    days: [
      {
        name: 'SEGUNDA',
        shortName: 'SEG',
        meals: [
          {
            name: 'Café',
            items: [
              'banana',
              'aveia',
              'mel',
              'pão (3 fatias)',
              'ovo',
              'batata doce',
            ],
          },
          { name: 'Lanche', items: ['pera', '3 biscoitos arroz'] },
          {
            name: 'Almoço',
            items: [
              'frango',
              'arroz (5 colheres)',
              'feijão',
              'brócolis',
              'cenoura',
              'salada',
            ],
          },
          { name: 'Lanche', items: ['6 biscoitos arroz', 'geleia'] },
          { name: '19h', items: ['whey', 'banana'] },
          {
            name: 'Jantar',
            items: [
              'ovo',
              'macarrão (5 pinças)',
              'abobrinha',
              'vagem',
              'aipim',
            ],
          },
          { name: 'Ceia', items: ['maçã'] },
        ],
      },
      {
        name: 'TERÇA',
        shortName: 'TER',
        meals: [
          {
            name: 'Café',
            items: ['mamão', 'aveia', 'mel', 'batata doce'],
          },
          { name: 'Lanche', items: ['laranja'] },
          {
            name: 'Almoço',
            items: ['peixe', 'arroz', 'feijão', 'abobrinha', 'cenoura'],
          },
          { name: 'Lanche', items: ['minibolo'] },
          { name: 'Jantar', items: ['aimpim', 'ovo', 'arroz (4)', 'salada'] },
          { name: 'Ceia', items: ['morango'] },
        ],
      },
      {
        name: 'QUARTA',
        shortName: 'QUA',
        meals: [
          {
            name: 'Café',
            items: ['banana', 'aveia', 'mel', 'pão (3)', 'ovo', 'aipim'],
          },
          { name: 'Lanche', items: ['maçã', 'biscoitos'] },
          {
            name: 'Almoço',
            items: ['frango', 'arroz (5)', 'feijão', 'berinjela', 'repolho'],
          },
          { name: 'Lanche', items: ['biscoito arroz', 'geleia'] },
          { name: '19h', items: ['whey', 'banana'] },
          {
            name: 'Jantar',
            items: ['ovo', 'arroz (4)', 'brócolis', 'cenoura', 'batata doce'],
          },
          { name: 'Ceia', items: ['pera', 'aveia'] },
        ],
      },
      {
        name: 'QUINTA',
        shortName: 'QUI',
        meals: [
          {
            name: 'Café',
            items: ['mamão', 'aveia', 'mel', 'pão (3)', 'batata doce'],
          },
          { name: 'Lanche', items: ['kiwi', 'biscoitos'] },
          {
            name: 'Almoço',
            items: ['frango', 'macarrão (5)', 'feijão', 'abobrinha', 'vagem'],
          },
          { name: 'Lanche', items: ['panqueca', 'fruta'] },
          {
            name: 'Jantar',
            items: ['pão', 'ovo', 'arroz (4)', 'cenoura', 'berinjela'],
          },
          { name: 'Ceia', items: ['maçã', 'aveia'] },
        ],
      },
      {
        name: 'SEXTA',
        shortName: 'SEX',
        meals: [
          {
            name: 'Café',
            items: ['banana', 'aveia', 'mel', 'pão (3)', 'aipim'],
          },
          { name: 'Lanche', items: ['pera', 'biscoitos'] },
          {
            name: 'Almoço',
            items: ['peixe', 'arroz (5)', 'feijão', 'brócolis', 'cenoura'],
          },
          { name: 'Lanche', items: ['biscoito arroz', 'geleia'] },
          { name: '19h', items: ['whey', 'banana'] },
          {
            name: 'Jantar',
            items: ['ovo', 'macarrão (5)', 'abobrinha', 'batata doce'],
          },
          { name: 'Ceia', items: ['maçã', 'aveia'] },
        ],
      },
      {
        name: 'SÁBADO',
        shortName: 'SÁB',
        meals: [
          {
            name: 'Café',
            items: [
              'banana',
              'aveia',
              'mel',
              'pão (3)',
              'queijo',
              'batata doce',
            ],
          },
          { name: 'Lanche', items: ['laranja', 'biscoitos'] },
          {
            name: 'Almoço',
            items: ['carne', 'arroz (5)', 'feijão', 'repolho', 'cenoura'],
          },
          { name: 'Lanche', items: ['minibolo', 'fruta'] },
          {
            name: 'Jantar',
            items: ['pão', 'queijo', 'macarrão (5)', 'salada'],
          },
          { name: 'Ceia', items: ['morango', 'aveia'] },
        ],
      },
      {
        name: 'DOMINGO',
        shortName: 'DOM',
        meals: [
          {
            name: 'Café',
            items: ['banana', 'aveia', 'mel', 'pão', 'batata doce', 'ovo'],
          },
          { name: 'Lanche', items: ['maçã', 'biscoitos'] },
          {
            name: 'Almoço',
            items: ['frango', 'macarrão (5)', 'feijão', 'legumes'],
          },
          { name: 'Lanche', items: ['biscoito arroz', 'geleia'] },
          { name: 'Jantar', items: ['ovo', 'arroz (4)', 'legumes', 'aipim'] },
          { name: 'Ceia', items: ['fruta', 'aveia'] },
        ],
      },
    ],
  },
  {
    id: 'semana-b',
    name: 'SEMANA B',
    days: [
      {
        name: 'SEGUNDA',
        shortName: 'SEG',
        meals: [
          {
            name: 'Café',
            items: ['banana', 'aveia', 'mel', 'pão (3)', 'aipim', 'ovo'],
          },
          { name: 'Lanche', items: ['maçã', 'biscoitos'] },
          {
            name: 'Almoço',
            items: ['frango', 'macarrão (5)', 'feijão', 'cenoura', 'vagem'],
          },
          { name: 'Lanche', items: ['biscoito', 'geleia'] },
          { name: '19h', items: ['whey', 'banana'] },
          {
            name: 'Jantar',
            items: ['ovo', 'arroz (4)', 'abobrinha', 'batata doce'],
          },
          { name: 'Ceia', items: ['pera', 'aveia'] },
        ],
      },
      {
        name: 'TERÇA',
        shortName: 'TER',
        meals: [
          {
            name: 'Café',
            items: ['mamão', 'aveia', 'mel', 'pão (3)', 'batata doce'],
          },
          { name: 'Lanche', items: ['laranja', 'biscoitos'] },
          {
            name: 'Almoço',
            items: ['peixe', 'arroz (5)', 'feijão', 'brócolis', 'cenoura'],
          },
          { name: 'Lanche', items: ['minibolo', 'fruta'] },
          { name: 'Jantar', items: ['pão', 'queijo', 'macarrão (5)'] },
          { name: 'Ceia', items: ['morango', 'aveia'] },
        ],
      },
      {
        name: 'QUARTA',
        shortName: 'QUA',
        meals: [
          {
            name: 'Café',
            items: ['banana', 'aveia', 'mel', 'aipim', 'pão', 'ovo'],
          },
          { name: 'Lanche', items: ['pera', 'biscoitos'] },
          {
            name: 'Almoço',
            items: ['frango', 'macarrão (5)', 'feijão', 'berinjela'],
          },
          { name: 'Lanche', items: ['biscoito arroz'] },
          { name: '19h', items: ['whey', 'banana'] },
          { name: 'Jantar', items: ['ovo', 'arroz (4)', 'legumes'] },
          { name: 'Ceia', items: ['maçã', 'aveia'] },
        ],
      },
      {
        name: 'QUINTA',
        shortName: 'QUI',
        meals: [
          {
            name: 'Café',
            items: ['mamão', 'aveia', 'mel', 'pão (3)', 'batata doce'],
          },
          { name: 'Lanche', items: ['kiwi', 'biscoitos'] },
          {
            name: 'Almoço',
            items: ['frango', 'arroz (5)', 'feijão', 'cenoura', 'vagem'],
          },
          { name: 'Lanche', items: ['panqueca', 'fruta'] },
          { name: 'Jantar', items: ['pão', 'ovo', 'macarrão (5)'] },
          { name: 'Ceia', items: ['maçã', 'aveia'] },
        ],
      },
      {
        name: 'SEXTA',
        shortName: 'SEX',
        meals: [
          {
            name: 'Café',
            items: ['banana', 'aveia', 'mel', 'pão (3)', 'aipim'],
          },
          { name: 'Lanche', items: ['maçã', 'biscoitos'] },
          {
            name: 'Almoço',
            items: ['peixe', 'macarrão (5)', 'feijão', 'brócolis'],
          },
          { name: 'Lanche', items: ['biscoito', 'geleia'] },
          { name: '19h', items: ['whey', 'banana'] },
          {
            name: 'Jantar',
            items: ['ovo', 'arroz (4)', 'legumes', 'batata doce'],
          },
          { name: 'Ceia', items: ['pera', 'aveia'] },
        ],
      },
      {
        name: 'SÁBADO',
        shortName: 'SÁB',
        meals: [
          {
            name: 'Café',
            items: ['banana', 'aveia', 'mel', 'pão (3)', 'queijo', 'aipim'],
          },
          { name: 'Lanche', items: ['laranja', 'biscoitos'] },
          {
            name: 'Almoço',
            items: ['carne', 'arroz (5)', 'feijão', 'repolho'],
          },
          { name: 'Lanche', items: ['minibolo'] },
          { name: 'Jantar', items: ['pão', 'queijo', 'macarrão (5)'] },
          { name: 'Ceia', items: ['morango', 'aveia'] },
        ],
      },
      {
        name: 'DOMINGO',
        shortName: 'DOM',
        meals: [
          {
            name: 'Café',
            items: ['banana', 'aveia', 'mel', 'pão', 'batata doce', 'ovo'],
          },
          { name: 'Lanche', items: ['pera', 'biscoitos'] },
          {
            name: 'Almoço',
            items: ['frango', 'macarrão (5)', 'feijão', 'legumes'],
          },
          { name: 'Lanche', items: ['biscoito', 'geleia'] },
          { name: 'Jantar', items: ['ovo', 'arroz (4)', 'aipim'] },
          { name: 'Ceia', items: ['fruta', 'aveia'] },
        ],
      },
    ],
  },
  {
    id: 'semana-c',
    name: 'SEMANA C',
    days: [
      {
        name: 'SEGUNDA',
        shortName: 'SEG',
        meals: [
          {
            name: 'Café',
            items: ['banana', 'aveia', 'mel', 'pão (3)', 'ovo', 'batata doce'],
          },
          { name: 'Lanche', items: ['pera', 'biscoitos'] },
          {
            name: 'Almoço',
            items: ['frango', 'arroz (5)', 'feijão', 'cenoura', 'vagem'],
          },
          { name: 'Lanche', items: ['biscoito arroz'] },
          { name: '19h', items: ['whey', 'banana'] },
          {
            name: 'Jantar',
            items: ['ovo', 'macarrão (5)', 'legumes', 'aipim'],
          },
          { name: 'Ceia', items: ['maçã', 'aveia'] },
        ],
      },
      {
        name: 'TERÇA',
        shortName: 'TER',
        meals: [
          {
            name: 'Café',
            items: ['mamão', 'aveia', 'mel', 'pão (3)', 'aipim'],
          },
          { name: 'Lanche', items: ['laranja', 'biscoitos'] },
          {
            name: 'Almoço',
            items: ['peixe', 'arroz (5)', 'feijão', 'brócolis'],
          },
          { name: 'Lanche', items: ['minibolo'] },
          { name: 'Jantar', items: ['pão', 'queijo', 'macarrão (5)'] },
          { name: 'Ceia', items: ['morango', 'aveia'] },
        ],
      },
      {
        name: 'QUARTA',
        shortName: 'QUA',
        meals: [
          {
            name: 'Café',
            items: ['banana', 'aveia', 'mel', 'pão', 'batata doce'],
          },
          { name: 'Lanche', items: ['maçã', 'biscoitos'] },
          {
            name: 'Almoço',
            items: ['frango', 'macarrão (5)', 'feijão', 'berinjela'],
          },
          { name: 'Lanche', items: ['biscoito arroz'] },
          { name: '19h', items: ['whey', 'banana'] },
          { name: 'Jantar', items: ['ovo', 'arroz (4)', 'legumes'] },
          { name: 'Ceia', items: ['pera', 'aveia'] },
        ],
      },
      {
        name: 'QUINTA',
        shortName: 'QUI',
        meals: [
          { name: 'Café', items: ['mamão', 'aveia', 'mel', 'aipim', 'ovo'] },
          { name: 'Lanche', items: ['kiwi', 'biscoitos'] },
          {
            name: 'Almoço',
            items: ['frango', 'arroz (5)', 'feijão', 'cenoura'],
          },
          { name: 'Lanche', items: ['panqueca'] },
          { name: 'Jantar', items: ['pão', 'ovo', 'macarrão (5)'] },
          { name: 'Ceia', items: ['maçã', 'aveia'] },
        ],
      },
      {
        name: 'SEXTA',
        shortName: 'SEX',
        meals: [
          {
            name: 'Café',
            items: ['banana', 'aveia', 'mel', 'pão', 'batata doce'],
          },
          { name: 'Lanche', items: ['pera', 'biscoitos'] },
          {
            name: 'Almoço',
            items: ['peixe', 'macarrão (5)', 'feijão', 'vagem'],
          },
          { name: 'Lanche', items: ['biscoito arroz'] },
          { name: '19h', items: ['whey', 'banana'] },
          { name: 'Jantar', items: ['ovo', 'arroz (4)', 'legumes'] },
          { name: 'Ceia', items: ['maçã', 'aveia'] },
        ],
      },
      {
        name: 'SÁBADO',
        shortName: 'SÁB',
        meals: [
          {
            name: 'Café',
            items: ['banana', 'aveia', 'mel', 'pão', 'queijo', 'batata doce'],
          },
          { name: 'Lanche', items: ['laranja', 'biscoitos'] },
          {
            name: 'Almoço',
            items: ['carne', 'arroz (5)', 'feijão', 'repolho'],
          },
          { name: 'Lanche', items: ['minibolo'] },
          { name: 'Jantar', items: ['pão', 'queijo', 'macarrão (5)'] },
          { name: 'Ceia', items: ['morango', 'aveia'] },
        ],
      },
      {
        name: 'DOMINGO',
        shortName: 'DOM',
        meals: [
          { name: 'Café', items: ['banana', 'aveia', 'mel', 'aipim', 'ovo'] },
          { name: 'Lanche', items: ['maçã', 'biscoitos'] },
          {
            name: 'Almoço',
            items: ['frango', 'macarrão (5)', 'feijão', 'legumes'],
          },
          { name: 'Lanche', items: ['biscoito arroz'] },
          { name: 'Jantar', items: ['ovo', 'arroz (4)'] },
          { name: 'Ceia', items: ['fruta', 'aveia'] },
        ],
      },
    ],
  },
  {
    id: 'semana-d',
    name: 'SEMANA D',
    days: [
      {
        name: 'SEGUNDA',
        shortName: 'SEG',
        meals: [
          {
            name: 'Café',
            items: ['banana', 'aveia', 'mel', 'pão', 'ovo', 'batata doce'],
          },
          { name: 'Lanche', items: ['pera', 'biscoitos'] },
          {
            name: 'Almoço',
            items: ['frango', 'macarrão (5)', 'feijão', 'cenoura'],
          },
          { name: 'Lanche', items: ['biscoito arroz'] },
          { name: '19h', items: ['whey', 'banana'] },
          { name: 'Jantar', items: ['ovo', 'arroz (4)', 'aipim'] },
          { name: 'Ceia', items: ['maçã', 'aveia'] },
        ],
      },
      {
        name: 'TERÇA',
        shortName: 'TER',
        meals: [
          {
            name: 'Café',
            items: ['mamão', 'aveia', 'mel', 'pão', 'batata doce'],
          },
          { name: 'Lanche', items: ['laranja', 'biscoitos'] },
          {
            name: 'Almoço',
            items: ['peixe', 'arroz (5)', 'feijão', 'brócolis'],
          },
          { name: 'Lanche', items: ['minibolo'] },
          { name: 'Jantar', items: ['pão', 'queijo', 'macarrão (5)'] },
          { name: 'Ceia', items: ['morango', 'aveia'] },
        ],
      },
      {
        name: 'QUARTA',
        shortName: 'QUA',
        meals: [
          { name: 'Café', items: ['banana', 'aveia', 'mel', 'aipim', 'pão'] },
          { name: 'Lanche', items: ['maçã', 'biscoitos'] },
          {
            name: 'Almoço',
            items: ['frango', 'arroz (5)', 'feijão', 'berinjela'],
          },
          { name: 'Lanche', items: ['biscoito arroz'] },
          { name: '19h', items: ['whey', 'banana'] },
          { name: 'Jantar', items: ['ovo', 'macarrão (5)'] },
          { name: 'Ceia', items: ['pera', 'aveia'] },
        ],
      },
      {
        name: 'QUINTA',
        shortName: 'QUI',
        meals: [
          {
            name: 'Café',
            items: ['mamão', 'aveia', 'mel', 'batata doce', 'ovo'],
          },
          { name: 'Lanche', items: ['kiwi', 'biscoitos'] },
          {
            name: 'Almoço',
            items: ['frango', 'macarrão (5)', 'feijão', 'cenoura'],
          },
          { name: 'Lanche', items: ['panqueca'] },
          { name: 'Jantar', items: ['pão', 'ovo', 'arroz (4)'] },
          { name: 'Ceia', items: ['maçã', 'aveia'] },
        ],
      },
      {
        name: 'SEXTA',
        shortName: 'SEX',
        meals: [
          { name: 'Café', items: ['banana', 'aveia', 'mel', 'pão', 'aipim'] },
          { name: 'Lanche', items: ['pera', 'biscoitos'] },
          { name: 'Almoço', items: ['peixe', 'arroz (5)', 'feijão', 'vagem'] },
          { name: 'Lanche', items: ['biscoito arroz'] },
          { name: '19h', items: ['whey', 'banana'] },
          { name: 'Jantar', items: ['ovo', 'macarrão (5)'] },
          { name: 'Ceia', items: ['maçã', 'aveia'] },
        ],
      },
      {
        name: 'SÁBADO',
        shortName: 'SÁB',
        meals: [
          {
            name: 'Café',
            items: ['banana', 'aveia', 'mel', 'pão', 'queijo', 'aipim'],
          },
          { name: 'Lanche', items: ['laranja', 'biscoitos'] },
          {
            name: 'Almoço',
            items: ['carne', 'arroz (5)', 'feijão', 'repolho'],
          },
          { name: 'Lanche', items: ['minibolo'] },
          { name: 'Jantar', items: ['pão', 'queijo', 'macarrão (5)'] },
          { name: 'Ceia', items: ['morango', 'aveia'] },
        ],
      },
      {
        name: 'DOMINGO',
        shortName: 'DOM',
        meals: [
          {
            name: 'Café',
            items: ['banana', 'aveia', 'mel', 'batata doce', 'ovo'],
          },
          { name: 'Lanche', items: ['maçã', 'biscoitos'] },
          {
            name: 'Almoço',
            items: ['frango', 'macarrão (5)', 'feijão', 'legumes'],
          },
          { name: 'Lanche', items: ['biscoito arroz'] },
          { name: 'Jantar', items: ['ovo', 'arroz (4)'] },
          { name: 'Ceia', items: ['fruta', 'aveia'] },
        ],
      },
    ],
  },
];
