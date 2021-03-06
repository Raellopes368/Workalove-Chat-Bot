export default [
  {
    id: 0,
    message:
      'Olá, eu sou o Chatnilson, tudo bem? Para começarmos, preciso saber seu nome.',
    field: 'name',
    type: 'text',
    placeholder: 'Nome e sobrenome',
  },
  {
    id: 1,
    message:
      'Que satisfação, %%name%%. Agora que sei seu nome, qual o estado que você mora?',
    field: 'uf',
    dependent: 'name',
    type: 'text',
    placeholder: 'Uf',
  },
  {
    id: 2,
    message: 'E a sua cidade.',
    field: 'city',
    dependent: 'uf',
    type: 'text',
    placeholder: 'Cidade',
  },
  {
    id: 3,
    message:
      'Legal, agora que sabemos sua cidade e estado. Quando foi que você nasceu?',
    field: 'birth',
    dependent: 'city',
    type: 'date',
    placeholder: '00/00/0000',
  },
  {
    id: 4,
    message: 'Agora me fala teu e-mail, por gentileza.',
    field: 'email',
    dependent: 'birth',
    type: 'email',
    placeholder: 'Seu email',
  },
  {
    id: 5,
    message:
      'Você finalizou o teste. Faça uma avaliação sobre o processo que realizou até chegar aqui. Nós agradecemos!',
    field: 'satisfaction',
    dependent: 'email',
    type: 'satisfaction',
  },
];
