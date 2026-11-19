// Textos em PORTUGUÊS (Brasil). Segue exatamente as chaves de es.mjs.
// Marcadores entre chaves, ex. {checkin}, são substituídos na geração: NÃO traduzi-los.
// As strings podem conter HTML simples (<em>, <strong>, <a>, <ul>, <li>, <p>, <br>).

export default {
  code: 'pt',
  locale: 'pt_BR',
  name: 'Português',
  short: 'PT',

  slugs: { guide: 'guia-armenia-quindio', long: 'estadias-longas', legal: 'politicas' },

  seo: {
    siteName: 'Camelot · Hospedagem em Armenia, Quindío',
    home: {
      title: 'Camelot | Hotel no centro de Armenia, Colômbia · Diárias e mensais',
      description: 'Quartos estilo hotel com banheiro privativo e Wi-Fi no centro de Armenia, Quindío, no Eixo Cafeeiro. Diárias, semanas ou meses. Reserve direto e economize.',
    },
    guide: {
      title: 'O que fazer em Armenia e no Quindío: guia local | Camelot',
      description: 'Guia prático de Armenia e da região do café: Valle de Cocora, Salento, Filandia, Parque del Café, PANACA e mais, com o tempo de viagem a partir do centro.',
    },
    long: {
      title: 'Quarto mobiliado por mês em Armenia, Quindío | Camelot',
      description: 'Estadias longas no centro de Armenia: quarto privativo mobiliado, contas e Wi-Fi incluídos, sem fiador. Ideal para trabalho, saúde, estudo ou home office.',
    },
    legal: {
      title: 'Políticas, privacidade e regras da casa | Camelot Armenia',
      description: 'Política de privacidade (Lei 1581 de 2012), termos de hospedagem, cancelamento, regras da casa e prevenção da ESCNNA do Camelot, em Armenia, Quindío.',
    },
    notFound: { title: 'Página não encontrada | Camelot', description: 'Esta página não existe ou mudou de endereço. Volte ao início do Camelot, hospedagem no centro de Armenia, Quindío, ou consulte o nosso guia da região.' },
    keywords: 'hotel Armenia Colômbia, onde ficar em Armenia Quindío, hospedagem no centro de Armenia, quarto mobiliado por mês Armenia, estadia longa Armenia Colômbia, hospedagem Eixo Cafeeiro, hotel região do café Colômbia, quarto por diária Armenia Quindío',
  },

  nav: {
    home: 'Início',
    stays: 'Estadias',
    rooms: 'Quartos',
    legend: 'Experiência',
    calc: 'Tarifas',
    location: 'Localização',
    guide: 'Guia do Quindío',
    long: 'Estadias longas',
    faq: 'Perguntas',
    contact: 'Contato',
    book: 'Reservar',
    menu: 'Menu',
    close: 'Fechar',
    skip: 'Pular para o conteúdo',
    langLabel: 'Idioma',
    themeLabel: 'Alternar entre modo claro e escuro',
    backTop: 'Voltar ao topo',
    breadcrumbHome: 'Início',
  },

  hero: {
    eyebrow: 'Hospedagem no centro de Armenia · Quindío, Colômbia',
    title: 'Seu castelo no <em>coração do Eixo Cafeeiro</em>',
    lead: 'Quartos privativos estilo hotel para ficar uma noite, uma temporada ou vários meses. A poucas quadras da Plaza de Bolívar e com todo o Quindío ao seu alcance.',
    ctaPrimary: 'Calcular minha estadia',
    ctaSecondary: 'Ver os quartos',
    chips: ['{rooms} quartos privativos', 'Banheiro privativo', 'Wi-Fi', 'Tarifas por noite, semana ou mês'],
    slides: [
      'Vista aérea da Plaza de Bolívar, no centro de Armenia, Quindío',
      'Palmeiras-de-cera no Valle de Cocora, em Salento, Quindío',
      'Fachadas coloridas em Filandia, Quindío',
    ],
    scroll: 'Descubra o Camelot',
  },

  stays: {
    eyebrow: 'Escolha sua estadia',
    title: 'Uma noite, uma temporada <em>ou um reinado inteiro</em>',
    lead: 'O mesmo quarto, três formas de ficar. Quanto mais tempo, melhor a tarifa.',
    items: {
      short: {
        tag: 'Estadia curta',
        name: 'Passagem do viajante',
        range: '1 a 6 noites',
        desc: 'Para viagens a passeio, a negócios ou paradas pelo Eixo Cafeeiro. Você chega, descansa e sai para explorar.',
        points: ['Tarifa por noite', 'Chegada combinada pelo WhatsApp', 'Dicas para conhecer o Quindío'],
      },
      medium: {
        tag: 'Estadia média',
        name: 'Temporada na corte',
        range: '7 a 29 noites',
        desc: 'Para projetos, cursos, férias longas ou para conhecer a região sem pressa.',
        points: ['{mediumPct}% de desconto sobre a diária', 'Limpeza e troca de roupa de cama programadas', 'Roteiro sugerido para uma semana'],
      },
      long: {
        tag: 'Estadia longa',
        name: 'Residência no reino',
        range: '30 noites ou mais',
        desc: 'Sua base fixa em Armenia: contas incluídas, sem fiador e com um acordo claro, por escrito.',
        points: ['Tarifa mensal com contas e Wi-Fi', 'Sem fiador nem codevedor', 'Nota fiscal para a sua empresa'],
      },
    },
    cta: 'Calcular tarifa',
    more: 'Tudo sobre estadias longas',
  },

  rooms: {
    eyebrow: 'Os quartos',
    title: 'Escolha o seu <em>aposento</em>',
    lead: 'Quartos privativos com banheiro próprio, roupa de cama e toalhas. Conte quantas pessoas vêm e indicamos o quarto ideal.',
    from: 'A partir de',
    perNight: 'noite',
    perMonth: 'mês',
    guests: 'Até {n} hóspedes',
    guest: '1 hóspede',
    bedDouble: '{n} cama de casal',
    bedsDouble: '{n} camas de casal',
    bedSingle: '{n} cama de solteiro',
    bedsSingle: '{n} camas de solteiro',
    privateBath: 'Banheiro privativo',
    illustrative: 'Imagem ilustrativa',
    indicative: 'Tarifa de referência',
    ask: 'Consultar este quarto',
    items: {
      escudero: { name: 'Escudeiro', type: 'Quarto individual', desc: 'Compacto e tranquilo, pensado para quem viaja sozinho, a trabalho ou a passeio.', alt: 'Quarto individual com cama de casal e luminárias de cabeceira' },
      caballero: { name: 'Cavaleiro', type: 'Quarto duplo', desc: 'Cama de casal e espaço para dois. O favorito dos casais e de quem fica por mais tempo.', alt: 'Quarto duplo com cama ampla e luz aconchegante' },
      hermandad: { name: 'Irmandade', type: 'Quarto triplo', desc: 'Uma cama de casal e uma de solteiro para amigos, colegas ou uma família pequena.', alt: 'Quarto com duas camas e mesa de cabeceira' },
      mesa: { name: 'Távola Redonda', type: 'Quarto família', desc: 'Para a família inteira ou o grupo de viagem: várias camas em um só espaço.', alt: 'Quarto família com várias camas' },
    },
  },

  legend: {
    eyebrow: 'A lenda de Camelot',
    title: 'Cinco promessas <em>da corte</em>',
    lead: 'Pegamos o melhor da lenda arturiana e o transformamos em hospitalidade com alma cafeeira.',
    items: [
      { key: 'excalibur', name: 'Excalibur', title: 'Chegar é fácil', desc: 'Nada de espadas cravadas na pedra: antes da sua chegada, enviamos pelo WhatsApp a localização, o horário e as instruções passo a passo.' },
      { key: 'grial', name: 'O Graal', title: 'Café de origem', desc: 'O verdadeiro graal do Quindío é servido na xícara. Contamos onde tomar o melhor café especial perto do Camelot.' },
      { key: 'mesa', name: 'Távola Redonda', title: 'De igual para igual', desc: 'Tarifas claras, sem letras miúdas nem cobranças surpresa. O valor do orçamento é o que você paga.' },
      { key: 'avalon', name: 'Avalon', title: 'Descanso de verdade', desc: 'Roupa de cama limpa, silêncio à noite e, se você pedir, um quarto interno, longe do barulho da rua.' },
      { key: 'merlin', name: 'Merlin', title: 'Um concierge que entende do assunto', desc: 'Merlin, nosso assistente, responde na hora em cinco idiomas, e por trás dele há um anfitrião de verdade que conhece cada cantinho do Quindío.' },
    ],
  },

  amenities: {
    eyebrow: 'Incluído',
    title: 'Tudo o que você precisa, <em>nada a mais</em>',
    items: {
      bath: 'Banheiro privativo',
      wifi: 'Wi-Fi grátis',
      tv: 'Televisão',
      linen: 'Roupa de cama e toalhas',
      hotwater: 'Água quente',
      cleaning: 'Limpeza do quarto',
      coffee: 'Café de boas-vindas',
      desk: 'Cantinho para trabalhar',
      laundry: 'Lavanderia sob consulta',
      luggage: 'Guarda-volumes',
      concierge: 'Guia local e concierge',
      invoice: 'Nota fiscal eletrônica',
    },
  },

  calc: {
    eyebrow: 'Calcule sua estadia',
    title: 'Sua tarifa <em>em segundos</em>',
    lead: 'Escolha as datas e o quarto. Identificamos o tipo de estadia e aplicamos o desconto automaticamente.',
    checkin: 'Chegada',
    checkout: 'Saída',
    guests: 'Hóspedes',
    room: 'Quarto',
    currency: 'Moeda',
    nights: '{n} noites',
    night: '1 noite',
    tierShort: 'Estadia curta',
    tierMedium: 'Estadia média',
    tierLong: 'Estadia longa',
    base: 'Tarifa base',
    discount: 'Desconto por duração',
    direct: 'Desconto por reserva direta',
    total: 'Total estimado',
    avg: 'Média por noite',
    monthly: 'Equivale a {amount} por mês',
    deposit: 'Sinal para confirmar ({pct}%)',
    depositLong: 'Para estadias longas: primeiro mês e caução reembolsável, conforme o acordo.',
    approx: 'Valores aproximados em {cur}; o pagamento é feito em pesos colombianos.',
    indicative: 'Tarifa de referência, sujeita à disponibilidade. Confirmamos o valor final por escrito.',
    send: 'Solicitar pelo WhatsApp',
    sendMail: 'Solicitar por e-mail',
    invalid: 'Escolha uma data de saída posterior à de chegada.',
    capacity: 'Capacidade máxima deste quarto: {n}. Sugerimos o quarto {room} ou dois quartos.',
    pickDates: 'Escolha as datas para ver a tarifa.',
    waIntro: 'Olá, Camelot! Gostaria de consultar a disponibilidade:',
    waLines: ['Chegada: {in}', 'Saída: {out} ({nights})', 'Hóspedes: {guests}', 'Quarto: {room}', 'Estadia: {tier}', 'Total estimado no site: {total}'],
  },

  longBand: {
    eyebrow: 'Estadias longas',
    title: 'Vai ficar em Armenia <em>por alguns meses</em>?',
    lead: 'Trabalho, tratamento médico, estudo ou trabalho remoto: viva o centro de Armenia com uma tarifa mensal que inclui contas, Wi-Fi e limpeza. Sem fiador, sem codevedor e sem a burocracia de um aluguel.',
    points: ['Contas de água, luz e gás e Wi-Fi incluídos', 'Acordo de hospedagem claro e por escrito', 'Nota fiscal em nome da sua empresa'],
    cta: 'Ver estadias longas',
  },

  location: {
    eyebrow: 'Localização',
    title: 'No centro, <em>a poucas quadras de tudo</em>',
    lead: 'O Camelot fica no centro de Armenia, a região comercial e bancária da cidade, a poucas quadras da Plaza de Bolívar. Daqui saem os ônibus e táxis para todo o Quindío.',
    items: [
      { label: 'Plaza de Bolívar e Catedral', value: '≈ 8 min a pé' },
      { label: 'Calle Real (Carrera 14, calçadão)', value: '≈ 5 min a pé' },
      { label: 'Terminal de Transportes (rodoviária)', value: '≈ 10 min de carro' },
      { label: 'Aeroporto Internacional El Edén (AXM)', value: '≈ 25 min de carro' },
      { label: 'Parque del Café', value: '≈ 30 min de carro' },
      { label: 'Salento e Valle de Cocora', value: '≈ 55 min de carro' },
    ],
    mapCta: 'Carregar o mapa',
    mapNote: 'O mapa é fornecido pelo OpenStreetMap e só é carregado se você pedir (protegemos a sua privacidade).',
    mapTitle: 'Mapa do centro de Armenia, Quindío',
    exact: 'Enviamos a localização exata assim que a sua reserva for confirmada.',
    directions: 'Como chegar',
  },

  guideTeaser: {
    eyebrow: 'O mapa do reino',
    title: 'O Quindío <em>ao seu redor</em>',
    lead: 'Montanhas de café, palmeiras-de-cera e cidadezinhas coloridas, a menos de uma hora do seu quarto.',
    cta: 'Abrir o guia completo',
  },

  rules: {
    eyebrow: 'As regras da Távola Redonda',
    title: 'Convivência <em>de cavaleiros</em>',
    lead: 'Poucas regras, e bem claras, para que todos descansem bem.',
    items: [
      'Check-in a partir das {checkin} e check-out até as {checkout}. Chegada antecipada ou saída tardia conforme a disponibilidade.',
      'Silêncio das {quietFrom} às {quietTo}.',
      'Proibido fumar ou usar vape dentro dos quartos.',
      'Registro obrigatório de cada hóspede com documento de identidade, como exige a lei colombiana.',
      'As visitas devem ser anunciadas e registradas; não são permitidas festas nem eventos.',
      'Menores de idade sempre acompanhados pelos pais ou com autorização por escrito.',
    ],
    cta: 'Ler as regras e políticas completas',
  },

  faq: {
    eyebrow: 'Perguntas frequentes',
    title: 'O que mais <em>nos perguntam</em>',
    items: [
      { q: 'Onde fica o Camelot?', a: 'No centro de Armenia, Quindío, a poucas quadras da Plaza de Bolívar, da Calle Real e da região dos bancos. Enviamos a localização exata e as instruções de chegada quando a reserva é confirmada.' },
      { q: 'Qual é a diferença entre estadia curta, média e longa?', a: 'É o mesmo quarto com tarifas diferentes: a curta (1 a 6 noites) é cobrada por noite; a média (7 a 29 noites) tem {mediumPct}% de desconto; a longa (30 noites ou mais) tem tarifa mensal com contas incluídas e um acordo por escrito.' },
      { q: 'Qual é o horário de check-in e check-out?', a: 'O check-in é a partir das {checkin} e o check-out até as {checkout}. Se for chegar mais cedo ou sair mais tarde, fale com a gente: ajustamos conforme a disponibilidade.' },
      { q: 'Os quartos têm banheiro privativo?', a: 'Sim. Todos os quartos são privativos, com banheiro próprio, roupa de cama, toalhas e Wi-Fi.' },
      { q: 'O Wi-Fi dá conta de trabalho ou estudo?', a: 'Sim, o Wi-Fi é gratuito para todos os hóspedes. Se o seu trabalho depende de videochamadas, pergunte pelo quarto com o melhor sinal.' },
      { q: 'Como chego do aeroporto ou da rodoviária?', a: 'Do Aeroporto Internacional El Edén (AXM) são cerca de 25 minutos de táxi; do Terminal de Transportes de Armenia, a rodoviária, cerca de 10 minutos. Enviamos as instruções ao reservar.' },
      { q: 'Quais formas de pagamento vocês aceitam?', a: 'Confirmamos as opções disponíveis no momento da reserva (transferência, pagamentos digitais e dinheiro). Os preços são cobrados em pesos colombianos; mostramos valores aproximados em dólares e euros como referência.' },
      { q: 'Vocês emitem nota fiscal?', a: 'Sim. Peça ao reservar, informando os dados da pessoa ou da empresa. Se você é estrangeiro e não reside na Colômbia, pergunte sobre a isenção de IVA na hospedagem prevista na legislação tributária colombiana.' },
      { q: 'Vocês aceitam animais de estimação?', a: 'Consulte-nos antes de reservar. Cães de assistência são sempre bem-vindos.' },
      { q: 'Vocês têm estacionamento?', a: 'Pergunte sobre a disponibilidade. No centro há estacionamentos públicos a poucas quadras.' },
      { q: 'Qual é a política de cancelamento?', a: 'Estadias curtas: sem custo até 72 horas antes da chegada. Médias: até 7 dias antes. Longas: até 14 dias antes. Veja os detalhes em nossas políticas.' },
      { q: 'O centro de Armenia é seguro?', a: 'É a região mais movimentada da cidade, com comércio, bancos e transporte. Como em qualquer centro urbano, recomendamos cuidados básicos à noite; teremos prazer em dar algumas dicas quando você chegar.' },
    ],
  },

  contact: {
    eyebrow: 'Contato e reservas',
    title: 'Vamos conversar sobre <em>a sua estadia</em>',
    lead: 'Escreva para a gente e respondemos com a disponibilidade e a tarifa final. Reservando direto, você sempre garante o melhor preço.',
    name: 'Nome',
    email: 'E-mail',
    phone: 'WhatsApp ou telefone',
    dates: 'Datas aproximadas',
    guests: 'Hóspedes',
    stay: 'Tipo de estadia',
    message: 'Mensagem',
    messagePh: 'Conte o que você precisa: motivo da viagem, horário de chegada, pedidos especiais…',
    consent: 'Autorizo o tratamento dos meus dados para responder à minha solicitação, conforme a <a href="{legalUrl}#privacidad">política de privacidade</a>.',
    submit: 'Enviar solicitação',
    sending: 'Enviando…',
    success: 'Obrigado! Recebemos a sua solicitação e responderemos muito em breve.',
    error: 'Não conseguimos enviar o formulário. Tente pelo WhatsApp ou por e-mail.',
    required: 'Preencha os campos obrigatórios e aceite a política de privacidade.',
    channelPending: 'Estamos ativando nossos canais de reserva. Em breve você poderá falar com a gente por aqui.',
    whatsapp: 'WhatsApp',
    mail: 'E-mail',
    airbnb: 'Ver no Airbnb',
    booking: 'Ver no Booking',
    response: 'Respondemos o quanto antes com a disponibilidade e a tarifa final.',
  },

  footer: {
    tagline: 'Hospedagem no centro de Armenia, Quindío. Estadias curtas, médias e longas.',
    explore: 'Explore',
    legalTitle: 'Políticas',
    contactTitle: 'Contato',
    rnt: 'RNT',
    rntPending: 'RNT em tramitação',
    escnna: 'O Camelot repudia a exploração e o abuso sexual de crianças e adolescentes. Lei 679 de 2001 e Lei 1336 de 2009.',
    rights: 'Todos os direitos reservados.',
    madeBy: 'Concebido e desenvolvido pelo Dr. Mauricio Rodríguez Herrera.',
    links: { privacy: 'Privacidade', terms: 'Termos de hospedagem', cancel: 'Cancelamento', rules: 'Regras da casa', escnna: 'Prevenção da ESCNNA', a11y: 'Acessibilidade', credits: 'Créditos das imagens' },
  },

  places: {
    plaza: { name: 'Plaza de Bolívar e Catedral', desc: 'O coração de Armenia: a catedral de formato triangular, o Monumento al Esfuerzo e o vaivém do centro, a poucas quadras do Camelot.', tip: 'Passeie por ali ao entardecer e siga pela Calle Real (Carrera 14) até o Parque Sucre.' },
    parquevida: { name: 'Parque de la Vida', desc: 'O grande pulmão verde da cidade: lagos, cascatas, pontes e trilhas entre bambuzais de guadua.', tip: 'Ideal para caminhar ou correr pela manhã.' },
    museo: { name: 'Museo del Oro Quimbaya', desc: 'Ourivesaria e cerâmica do povo Quimbaya em um edifício de tijolos aparentes do arquiteto Rogelio Salmona.', tip: 'Confira os horários oficiais antes de ir; a entrada costuma ser gratuita.' },
    botanico: { name: 'Jardín Botánico e borboletário', desc: 'Em Calarcá: floresta andina, pontes suspensas e um borboletário em forma de borboleta.', tip: 'Vá cedo: as borboletas ficam mais ativas com o sol da manhã.' },
    parquecafe: { name: 'Parque del Café', desc: 'Parque temático em Montenegro com brinquedos de parque de diversões, cultura cafeeira e shows.', tip: 'Funciona por temporadas e nos fins de semana; consulte o calendário oficial.' },
    panaca: { name: 'PANACA', desc: 'Parque agropecuário em Quimbaya para conhecer de perto o campo, seus animais e suas tradições.', tip: 'Programa perfeito com crianças; reserve o dia inteiro.' },
    cocora: { name: 'Salento e Valle de Cocora', desc: 'A cidadezinha mais colorida do Quindío e o Valle de Cocora (Vale de Cocora), lar da palmeira-de-cera, a árvore nacional da Colômbia.', tip: 'Da praça de Salento saem os jipes Willys rumo a Cocora. Leve casaco e botas.' },
    filandia: { name: 'Filandia', desc: 'Ruas de casarões de pau a pique (bahareque), artesanato de cipó e um mirante com vista para três departamentos colombianos.', tip: 'Fique para o pôr do sol e tome um café ao redor da praça.' },
  },

  guide: {
    h1: 'Guia de Armenia e do Quindío',
    lead: 'Tudo o que você pode fazer a partir do Camelot: do centro de Armenia às cidadezinhas e vales da Paisagem Cultural Cafeeira.',
    introTitle: 'Armenia, a Cidade Milagre',
    intro: [
      'Armenia é a capital do Quindío e uma das portas de entrada da Paisagem Cultural Cafeeira da Colômbia, declarada Patrimônio da Humanidade pela UNESCO em 2011. Fica a cerca de 1.480 metros acima do nível do mar e tem clima ameno o ano todo.',
      'É chamada de Cidade Milagre pela forma como se reconstruiu após o terremoto de 1999. Hoje é uma cidade acolhedora, verde e bem conectada, de onde você chega em menos de uma hora a quase todas as atrações do departamento.',
    ],
    gettingTitle: 'Como chegar',
    getting: [
      { title: 'De avião', text: 'O Aeroporto Internacional El Edén (AXM) fica a cerca de 25 minutos do centro de táxi, com voos diários de Bogotá e de outras cidades. O aeroporto de Pereira (PEI) fica a cerca de uma hora.' },
      { title: 'De ônibus', text: 'O Terminal de Transportes de Armenia recebe ônibus de Bogotá, Medellín, Cali e Pereira, e de lá saem com frequência os ônibus para Salento, Filandia, Montenegro e Calarcá.' },
      { title: 'De carro', text: 'Armenia fica a cerca de 3 horas e meia de Cali, umas 6 de Medellín e entre 6 e 8 de Bogotá, dependendo do trânsito e do clima. Pereira fica a cerca de uma hora.' },
    ],
    placesTitle: 'O que fazer perto do Camelot',
    placesLead: 'Tempos aproximados a partir do centro de Armenia. Confira horários e preços nas fontes oficiais antes de ir.',
    walk: 'a pé',
    car: 'de carro',
    foodTitle: 'O que provar',
    food: [
      { name: 'Café especial', desc: 'Você está em terra de café: peça um método filtrado e pergunte de onde vem o grão.' },
      { name: 'Truta', desc: 'Típica de Salento, ao alho ou grelhada, com patacón crocante (banana-da-terra frita).' },
      { name: 'Bandeja paisa e feijão', desc: 'Para os dias de trilha: feijão, arroz, torresmo, arepa e abacate.' },
      { name: 'Frutas tropicais', desc: 'Lulo, maracujá, granadilla, graviola: em suco ou direto do mercado municipal.' },
    ],
    weekTitle: 'Sua semana no reino',
    weekLead: 'Um roteiro sugerido para quem fica sete noites ou mais.',
    week: [
      { day: 'Dia 1', title: 'O centro', text: 'Plaza de Bolívar, Catedral, Calle Real e almoço típico.' },
      { day: 'Dia 2', title: 'Parque del Café', text: 'Um dia inteiro de cultura cafeeira e atrações em Montenegro.' },
      { day: 'Dia 3', title: 'Salento e Cocora', text: 'Jipe Willys até o vale, caminhada entre palmeiras-de-cera e truta em Salento.' },
      { day: 'Dia 4', title: 'Filandia', text: 'Artesanato, mirante e pôr do sol em uma das cidadezinhas mais bonitas do país.' },
      { day: 'Dia 5', title: 'Jardín Botánico e fazenda de café', text: 'Borboletário em Calarcá e visita a uma fazenda para ver o café da semente à xícara.' },
      { day: 'Dia 6', title: 'PANACA', text: 'O campo colombiano ao vivo, ideal para quem viaja com crianças.' },
      { day: 'Dia 7', title: 'Descanso', text: 'Parque de la Vida, Museo del Oro Quimbaya e um bom café para fechar a semana.' },
    ],
    tipsTitle: 'Dicas práticas',
    tips: [
      { title: 'Clima', text: 'Ameno, com manhãs de sol e chuva à tarde. As épocas mais chuvosas costumam ser abril–maio e outubro–novembro: traga um casaco leve e guarda-chuva.' },
      { title: 'Dinheiro', text: 'No centro há bancos e caixas eletrônicos a poucas quadras. Leve dinheiro em espécie para as cidadezinhas, os jipes Willys e as lojas pequenas.' },
      { title: 'Transporte', text: 'Os táxis são baratos; peça um por aplicativo ou na recepção. Para as cidadezinhas, os ônibus que saem do terminal são frequentes e seguros.' },
      { title: 'Emergências', text: 'Número único de emergências na Colômbia: 123. Se precisar de um médico, indicamos a clínica mais próxima.' },
    ],
    cta: 'Reserve sua base em Armenia',
  },

  long: {
    h1: 'Estadias longas em Armenia: seu quarto por mês',
    lead: 'Um quarto privativo mobiliado no centro de Armenia, com contas, Wi-Fi e limpeza incluídos. Sem fiador, sem codevedor e com um acordo claro, por escrito.',
    profilesTitle: 'Para quem é?',
    profiles: [
      { title: 'Trabalho e viagens corporativas', text: 'Profissionais, técnicos e prestadores de serviço que vêm a Armenia por causa de um projeto ou de uma obra.' },
      { title: 'Saúde', text: 'Pacientes e acompanhantes durante tratamentos ou recuperações nas clínicas da cidade.' },
      { title: 'Estudo', text: 'Estudantes, estagiários e pesquisadores das universidades do Quindío ou de cursos de espanhol.' },
      { title: 'Trabalho remoto', text: 'Nômades digitais que buscam clima ameno, boa conexão e custo de vida razoável.' },
      { title: 'Mudanças e trâmites', text: 'Quem está se mudando para Armenia e precisa de uma base enquanto procura moradia.' },
      { title: 'Viajantes sem pressa', text: 'Aposentados e adeptos do slow travel que querem viver o Eixo Cafeeiro como um morador local.' },
    ],
    includedTitle: 'Incluído na tarifa mensal',
    included: ['Contas de água, luz e gás', 'Wi-Fi', 'Limpeza programada do quarto', 'Troca semanal de roupa de cama e toalhas', 'Televisão', 'Suporte do anfitrião pelo WhatsApp'],
    ratesTitle: 'Tarifas mensais de referência',
    ratesLead: 'Valores por quarto e por mês. A tarifa final depende da temporada, do número de hóspedes e da duração.',
    stepsTitle: 'Como funciona',
    steps: [
      { title: 'Conte para a gente', text: 'Datas, número de hóspedes e motivo da viagem.' },
      { title: 'Receba sua proposta', text: 'Enviamos a tarifa, o que está incluído e as condições.' },
      { title: 'Assine e confirme', text: 'Assinamos um acordo de hospedagem simples, e você paga o primeiro mês e a caução.' },
      { title: 'Chegue em casa', text: 'Esperamos você com o quarto pronto e um guia da cidade.' },
    ],
    reqTitle: 'Requisitos',
    req: ['Documento de identidade ou passaporte válido', 'Acordo de hospedagem assinado', 'Primeiro mês pago adiantado', 'Caução reembolsável combinada por escrito'],
    faqTitle: 'Perguntas sobre estadias longas',
    faq: [
      { q: 'Preciso de fiador ou codevedor?', a: 'Não. Assinamos um acordo de hospedagem com os seus dados e uma caução reembolsável; não pedimos fiador, codevedor nem análise cadastral.' },
      { q: 'Posso prolongar minha estadia?', a: 'Sim, conforme a disponibilidade. Avise com pelo menos 15 dias de antecedência para reservarmos o seu quarto.' },
      { q: 'E se eu precisar ir embora antes?', a: 'Basta avisar por escrito com 15 dias de antecedência. As condições de saída antecipada ficam claras no acordo desde o início.' },
      { q: 'Vocês emitem nota fiscal em nome da minha empresa?', a: 'Sim. Emitimos nota fiscal eletrônica em nome da pessoa ou da empresa que você indicar.' },
      { q: 'Quando recebo a caução de volta?', a: 'Em até 5 dias úteis após a sua saída, descontando apenas danos ou consumos pendentes, se houver.' },
    ],
    cta: 'Pedir minha proposta mensal',
  },

  legal: {
    h1: 'Políticas e regras',
    lead: 'Regras claras para uma estadia tranquila. Se tiver dúvidas, fale com a gente.',
    updated: 'Última atualização: {date}',
    toc: 'Nesta página',
    pendingData: '[dado a completar]',
    sections: [
      {
        id: 'privacidad',
        title: 'Política de privacidade e tratamento de dados',
        html: `<p>Esta política se aplica aos dados pessoais coletados pelo Camelot (doravante, “Camelot”), hospedagem localizada em Armenia, Quindío, Colômbia, em cumprimento da Lei 1581 de 2012, do Decreto 1074 de 2015 e das demais normas sobre proteção de dados pessoais.</p>
<h3>Responsável pelo tratamento</h3>
<p>{businessName} · NIT/C.C. {nit} · Armenia, Quindío, Colômbia · E-mail: {email} · WhatsApp: {phone}.</p>
<h3>Quais dados tratamos</h3>
<ul><li>Dados de identificação e contato: nome, documento de identidade ou passaporte, nacionalidade, telefone e e-mail.</li><li>Dados da reserva: datas, número de hóspedes, quarto, pagamentos e faturamento.</li><li>Dados que você compartilha voluntariamente, por exemplo, necessidades de acessibilidade. Se forem dados sensíveis, só os tratamos com a sua autorização expressa e para atender você.</li><li>Dados de menores de idade: apenas os necessários para o registro, fornecidos pelos pais ou representantes legais.</li></ul>
<h3>Para que os usamos</h3>
<ul><li>Gerenciar a sua reserva, a sua estadia e a comunicação com você.</li><li>Cumprir obrigações legais: registro de hóspedes (Tarjeta de Registro Hotelero, a ficha de registro hoteleiro), comunicação de estrangeiros à Migración Colombia (SIRE) e emissão de nota fiscal eletrônica perante a DIAN.</li><li>Segurança dos hóspedes e do imóvel.</li><li>Enviar novidades ou ofertas, somente se você autorizar; você pode retirar essa autorização a qualquer momento.</li></ul>
<h3>Seus direitos</h3>
<p>Você pode conhecer, atualizar e retificar os seus dados; solicitar prova da autorização; ser informado sobre o uso que fazemos deles; revogar a autorização ou pedir a sua exclusão quando não houver dever legal de conservá-los; acessá-los gratuitamente e apresentar reclamações à Superintendencia de Industria y Comercio (SIC).</p>
<h3>Como exercê-los</h3>
<p>Escreva para {email} ou fale com a gente pelo WhatsApp. Respondemos às consultas em no máximo 10 dias úteis (prorrogáveis por mais 5) e às reclamações em no máximo 15 dias úteis (prorrogáveis por mais 8), conforme determina a Lei 1581 de 2012.</p>
<h3>Conservação e segurança</h3>
<p>Conservamos os dados enquanto durar a nossa relação com você e pelo tempo exigido pelas normas de turismo, contábeis e tributárias. Aplicamos medidas razoáveis de segurança, e somente as pessoas que precisam deles têm acesso.</p>
<h3>Visitantes da União Europeia, do Reino Unido e do Brasil</h3>
<p>Se você reside em um desses lugares, tratamos os seus dados com base na execução do contrato de hospedagem, no cumprimento de obrigações legais, no nosso legítimo interesse na segurança e, quando aplicável, no seu consentimento. Você também tem os direitos de acesso, retificação, eliminação, oposição, limitação e portabilidade previstos no RGPD, no UK GDPR e na LGPD (Lei Geral de Proteção de Dados Pessoais), e pode recorrer à autoridade de proteção de dados do seu país (no Brasil, a ANPD).</p>`,
      },
      {
        id: 'cookies',
        title: 'Cookies e privacidade neste site',
        html: `<ul><li><strong>Sem cookies de rastreamento nem de publicidade.</strong> Este site não usa ferramentas de análise de terceiros nem pixels de redes sociais.</li><li>Guardamos no seu próprio navegador (armazenamento local) apenas as suas preferências: idioma, modo claro ou escuro, moeda e se você já viu o aviso de privacidade. Você pode apagá-las pelo navegador.</li><li>O mapa do OpenStreetMap só é carregado se você clicar em “Carregar o mapa”.</li><li>Quando você fala com a gente pelo WhatsApp ou por plataformas como o Airbnb, também se aplicam as políticas dessas empresas.</li><li>O site está hospedado no GitHub Pages (GitHub, Inc., Estados Unidos), que pode registrar dados técnicos, como o endereço IP, por motivos de segurança.</li></ul>`,
      },
      {
        id: 'terminos',
        title: 'Termos de hospedagem',
        html: `<ul><li><strong>Contrato de hospedagem.</strong> A reserva confirmada por escrito constitui um contrato de hospedagem regido pela lei colombiana (Código de Comercio e normas de turismo). As tarifas exibidas neste site são indicativas até que as confirmemos por escrito.</li><li><strong>Confirmação.</strong> As estadias curtas e médias são confirmadas com um sinal de {deposit}%. As estadias longas, com o primeiro mês e uma caução reembolsável, conforme o acordo de hospedagem assinado.</li><li><strong>Registro.</strong> Todo hóspede apresenta um documento de identidade válido (cédula ou passaporte) na chegada. Os dados são registrados na Tarjeta de Registro Hotelero e, no caso de estrangeiros, comunicados à Migración Colombia.</li><li><strong>Menores de idade.</strong> Só se hospedam com os pais ou com um adulto autorizado por escrito, mediante apresentação da certidão de nascimento ou de um documento que comprove o parentesco.</li><li><strong>Ocupação.</strong> Cada quarto tem uma capacidade máxima. As visitas devem ser anunciadas e registradas; por segurança, não podem pernoitar sem se registrar como hóspedes.</li><li><strong>Pagamentos e nota fiscal.</strong> Os preços são cobrados em pesos colombianos e incluem os impostos aplicáveis. Emitimos nota fiscal eletrônica. Estrangeiros não residentes podem ter direito à isenção de IVA prevista no Estatuto Tributario, desde que cumpram os requisitos.</li><li><strong>Cuidado com o imóvel.</strong> O hóspede responde pelos danos que causar no quarto ou nas áreas comuns. Recomendamos não deixar objetos de valor à vista.</li><li><strong>Direito de admissão.</strong> Podemos recusar ou encerrar a hospedagem por motivos de segurança ou por descumprimento grave destas regras, nunca por motivos discriminatórios.</li><li><strong>Plataformas.</strong> Se você reservar pelo Airbnb, pelo Booking ou por outra plataforma, também se aplicam os termos e a política de cancelamento dela.</li><li><strong>Queixas e reclamações.</strong> Escreva para a gente e responderemos dentro dos prazos legais. Você também pode recorrer à Superintendencia de Industria y Comercio, conforme a Lei 1480 de 2011.</li></ul>`,
      },
      {
        id: 'cancelacion',
        title: 'Política de cancelamento',
        html: `<table><thead><tr><th>Estadia</th><th>Cancelamento sem custo</th><th>Depois desse prazo</th></tr></thead><tbody><tr><td>Curta (1–6 noites)</td><td>Até 72 horas antes da chegada</td><td>Cobramos a primeira noite</td></tr><tr><td>Média (7–29 noites)</td><td>Até 7 dias antes da chegada</td><td>Retemos 50% do sinal; com menos de 48 horas de antecedência, o sinal integral</td></tr><tr><td>Longa (30 noites ou mais)</td><td>Até 14 dias antes da chegada</td><td>Retemos 50% do sinal</td></tr></tbody></table>
<ul><li><strong>O não comparecimento</strong> (no-show) sem aviso equivale a um cancelamento fora do prazo.</li><li><strong>Saída antecipada</strong> em estadias curtas e médias: cobramos as noites utilizadas, com a tarifa correspondente à duração real. Em estadias longas, é necessário aviso por escrito com 15 dias de antecedência.</li><li><strong>Força maior</strong> (bloqueio de estradas, emergência médica, desastre natural): remarcamos sem custo dentro dos 6 meses seguintes.</li><li><strong>Reembolsos</strong> pelo mesmo meio de pagamento, em até 10 dias úteis. Os custos de transferências internacionais ficam por conta de quem as solicita.</li></ul>`,
      },
      {
        id: 'normas',
        title: 'Regras da casa',
        html: `<ul><li>Check-in a partir das {checkin} e check-out até as {checkout}.</li><li>Silêncio das {quietFrom} às {quietTo}, em respeito aos demais hóspedes e aos vizinhos.</li><li>Proibido fumar ou usar vape dentro dos quartos e em áreas fechadas.</li><li>Não são permitidas festas, eventos nem substâncias ilegais.</li><li>As visitas devem ser anunciadas e registradas.</li><li>Animais de estimação somente com autorização prévia; cães de assistência são sempre bem-vindos.</li><li>Economize água e energia: apague as luzes e desligue os aparelhos ao sair.</li><li>Ajude-nos a reciclar: separe o lixo conforme as indicações.</li></ul>`,
      },
      {
        id: 'escnna',
        title: 'Prevenção da exploração sexual de crianças e adolescentes',
        html: `<p><strong>Advertência:</strong> em cumprimento ao disposto no artigo 17 da Lei 679 de 2001, o Camelot adverte o hóspede de que a exploração e o abuso sexual de menores de idade no país são punidos penal e administrativamente, conforme as leis vigentes.</p>
<p>O Camelot cumpre a Lei 1336 de 2009 e o código de conduta contra a exploração sexual comercial de crianças e adolescentes (ESCNNA). Não é permitida a entrada de menores de idade sem os pais ou um adulto autorizado. Denuncie qualquer suspeita: Linha 141 do ICBF, Linha 123 da Polícia Nacional ou em <a href="https://www.teprotejo.org" rel="noopener" target="_blank">teprotejo.org</a>.</p>`,
      },
      {
        id: 'accesibilidad',
        title: 'Acessibilidade',
        html: `<p>Este site busca cumprir as diretrizes WCAG 2.2, nível AA: contraste adequado, navegação por teclado, textos alternativos e respeito à preferência por movimento reduzido.</p><p>Se você tem necessidades de mobilidade ou de outro tipo, conte para a gente antes de reservar: informamos com precisão sobre acessos, escadas e o quarto mais adequado.</p>`,
      },
      {
        id: 'creditos',
        title: 'Créditos das imagens',
        html: `<p>As fotografias de lugares do Quindío vêm do Wikimedia Commons e são usadas de acordo com as suas licenças livres; elas foram recortadas e redimensionadas. As fotos dos quartos são ilustrativas enquanto não publicamos fotografias próprias.</p>{credits}`,
      },
    ],
  },

  merlin: {
    name: 'Merlin',
    role: 'Concierge digital do Camelot',
    open: 'Abrir o concierge Merlin',
    close: 'Fechar o concierge',
    greeting: 'Boas-vindas ao Camelot! Eu sou o Merlin. Pergunte o que quiser sobre a sua estadia ou escolha um tema.',
    placeholder: 'Digite sua pergunta…',
    send: 'Enviar',
    fallback: 'Essa pergunta merece um anfitrião de carne e osso. Quer que eu coloque você em contato com ele?',
    toHost: 'Falar com o anfitrião',
    more: 'Outros temas',
    topics: [
      { id: 'rates', label: 'Tarifas', kw: ['preco', 'tarifa', 'custo', 'quanto', 'valor', 'noite', 'diaria', 'barato', 'orcamento'], a: 'A tarifa depende do quarto e de quantas noites você fica: a partir de 7 noites há {mediumPct}% de desconto e, a partir de 30 noites, tarifa mensal. Use a calculadora e veja o total na hora.', action: 'calc' },
      { id: 'long', label: 'Estadia longa', kw: ['mes', 'meses', 'mensal', 'longa', 'longo', 'temporada', 'morar', 'fiador', 'aluguel'], a: 'Para 30 noites ou mais, temos tarifa mensal com contas, Wi-Fi e limpeza incluídos, sem fiador nem codevedor. Assinamos um acordo simples, por escrito.', action: 'long' },
      { id: 'checkin', label: 'Check-in e check-out', kw: ['chegada', 'checkin', 'check-in', 'saida', 'checkout', 'horario', 'hora', 'cedo', 'tarde'], a: 'O check-in é a partir das {checkin} e o check-out até as {checkout}. Se for chegar mais cedo ou sair mais tarde, avise e ajustamos conforme a disponibilidade.' },
      { id: 'arrive', label: 'Como chegar', kw: ['aeroporto', 'rodoviaria', 'terminal', 'onibus', 'taxi', 'chegar', 'aviao', 'voo', 'transporte'], a: 'Do Aeroporto El Edén (AXM) são cerca de 25 minutos de táxi; do Terminal de Transportes, uns 10. Enviamos a localização exata quando você reservar.' },
      { id: 'where', label: 'Localização', kw: ['onde', 'localizacao', 'endereco', 'centro', 'bairro', 'regiao', 'seguro', 'seguranca', 'fica'], a: 'Estamos no centro de Armenia, a poucas quadras da Plaza de Bolívar, dos bancos, do comércio e do transporte para todo o Quindío.' },
      { id: 'pay', label: 'Pagamentos e nota fiscal', kw: ['pagamento', 'pagar', 'cartao', 'transferencia', 'dinheiro', 'pix', 'nota', 'fiscal', 'iva', 'dolar'], a: 'Confirmamos as formas de pagamento ao reservar (transferência, pagamentos digitais ou dinheiro). Emitimos nota fiscal eletrônica, inclusive em nome de empresas.' },
      { id: 'pets', label: 'Animais de estimação', kw: ['animal', 'animais', 'estimacao', 'pet', 'cachorro', 'cao', 'gato'], a: 'Consulte-nos antes de reservar e explicamos as condições. Cães de assistência são sempre bem-vindos.' },
      { id: 'parking', label: 'Estacionamento', kw: ['estacionamento', 'estacionar', 'garagem', 'vaga', 'carro', 'moto'], a: 'Pergunte sobre a disponibilidade; no centro há estacionamentos públicos a poucas quadras.' },
      { id: 'wifi', label: 'Wi-Fi e trabalho', kw: ['wifi', 'internet', 'trabalhar', 'trabalho', 'remoto', 'videochamada', 'sinal', 'conexao'], a: 'O Wi-Fi é gratuito para todos os hóspedes. Se você trabalha com videochamadas, peça o quarto com o melhor sinal.' },
      { id: 'cancel', label: 'Cancelamento', kw: ['cancelar', 'cancelamento', 'reembolso', 'devolucao', 'estorno', 'mudar', 'remarcar', 'alterar'], a: 'Curtas: sem custo até 72 h antes. Médias: até 7 dias antes. Longas: até 14 dias antes. Os detalhes estão nas políticas.', action: 'legal' },
      { id: 'todo', label: 'O que fazer', kw: ['fazer', 'turismo', 'passeio', 'cocora', 'salento', 'filandia', 'parque', 'tour', 'visitar', 'cafe'], a: 'Valle de Cocora, Salento, Filandia, Parque del Café, PANACA, o Jardín Botánico… tudo a menos de uma hora. Veja o nosso guia com os tempos a partir do Camelot.', action: 'guide' },
      { id: 'access', label: 'Acessibilidade', kw: ['acessivel', 'acessibilidade', 'cadeira', 'rodas', 'escada', 'escadas', 'mobilidade', 'deficiencia'], a: 'Conte o que você precisa antes de reservar e informamos com precisão sobre acessos, escadas e o quarto mais adequado.' },
    ],
    actions: { calc: 'Abrir a calculadora', long: 'Ver estadias longas', legal: 'Ver políticas', guide: 'Abrir o guia' },
    waMsg: 'Olá, Camelot! Vim pelo site e tenho uma pergunta:',
  },

  toasts: {
    langSuggest: 'Esta página também está disponível em português.',
    switchLang: 'Trocar',
    dismiss: 'Fechar',
    privacy: 'Este site não usa cookies de rastreamento. Guardamos apenas as suas preferências no seu navegador.',
    privacyOk: 'Entendi',
    privacyMore: 'Saiba mais',
    pendingChannel: 'Este canal de reservas será ativado em breve. Enquanto isso, use o formulário de contato.',
  },

  notFound: {
    title: 'Esta porta do castelo não existe',
    text: 'A página que você procura se perdeu na floresta. Volte ao início ou consulte o guia.',
    cta: 'Voltar ao início',
  },
};
