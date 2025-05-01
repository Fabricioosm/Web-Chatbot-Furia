const messagesDiv = document.getElementById('messages');
const optionsDiv = document.getElementById('options');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Perguntas escritas
const perguntas = {
'Quem são os jogadores?': 'jogadores',
'oi': 'saudacao',
'Resultados recentes': 'resultados',
'Próximos jogos': 'proximos',
'História da Furia': 'historia',
'Quais titulos tem a Furia?': 'titulos',
'Próximos campeonatos': 'campeonatos',
'Camisetas do time': 'camisa',



};

// Função para adicionar mensagem ao chat
function addMessage(content, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message ' + sender;
  messageDiv.innerHTML = content;
  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Função para criar opções de clique
function createOptions(options) {
  optionsDiv.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = opt.label;
    optionsDiv.appendChild(btn);
    btn.onclick = () => {
      addMessage(opt.label, 'user');
      handleOption(opt.value);
      optionsDiv.innerHTML = '';
    };
  });
}

// Respostas do chatbot com opções
function handleOption(value) {
let response = '';
let options = [ { label: 'Quem são os jogadores?', value: 'jogadores' },
      { label: 'Resultados recentes', value: 'resultados' },
      { label: 'Próximos jogos', value: 'proximos' },
      { label: 'História da Furia', value: 'historia' },
      { label: 'Quais titulos tem a Furia?', value:'titulos'},
      { label: 'Camisetas do time', value: 'camisa'},
    ]
switch(value) { 
  case 'camisa':
       response = 'Para ter acesso aos nossos produtos, <a href="https://www.furia.gg" target="_blank">clique aqui</a>.';
    break;
  case 'titulos':
      response = `Conquistas notáveis:<br/>
      1º ESL Pro League Season 12 North America<br/>
      2º Esports Championship Series Season 7 Finals<br/>
      3º–4º	Intel Extreme Masters Rio 2024<br/>
      3º–4º	ESL Pro League Season 13<br/>
      3º–4º	Intel Extreme Masters Rio Major 2022<br/>
      3º–4º	ESL Pro League Season 15<br/>
      3º–4º	DreamHack Masters Dallas 2019<br/>
      3º–4º	ESL One: Cologne 2020 Online - North America<br/>
      3º–4º	Intel Extreme Masters Season XVII - Dallas.<br/>
      O que mais deseja saber?`
      options = [
        { label: 'Quem são os jogadores?', value: 'jogadores' },
        { label: 'Resultados recentes', value: 'resultados' },
        { label: 'Próximos jogos', value: 'proximos' },
        { label: 'História da Furia', value: 'historia' },
        { label: 'Camisetas do time', value: 'camisa'},]
      break;
  case 'saudacao':
    response = 'Olá fã da Furia! Como posso ajudar você hoje?';
    options = [
      { label: 'Quem são os jogadores?', value: 'jogadores' },
      { label: 'Resultados recentes', value: 'resultados' },
      { label: 'Próximos jogos', value: 'proximos' },
      { label: 'História da Furia', value: 'historia' },
      { label: 'Quais titulos tem a Furia?', value:'titulos'},
      { label: 'Camisetas do time', value: 'camisa'},
    ];
    break;
  case 'jogadores':
    response = `Os jogadores atuais da Furia são:<br/>
    <p>yuurih Yuri Santos-Rifler</p>
    <p>KSCERATO Kaike Cerato-Rifler</p>
    <p>FalleN Gabriel Toledo-Rifler-Capitão</p>
    <p>molodoy Danil Golubenko-AWPer</p>
    <p>skullz Felipe Medeiros-Rifler</p>
    <p>sidde Sid Macedo-Treinador</p>
    <p>Hepa Juan Borges-Treinador assistente.</p>
    O que mais deseja saber?`;
    options = [
      { label: 'Resultados recentes', value: 'resultados' },
      { label: 'Próximos jogos', value: 'proximos' },
      { label: 'História da Furia', value: 'historia' },
      { label: 'Quais titulos tem a Furia?', value:'titulos'},
      { label: 'Camisetas do time', value: 'camisa'},
      { label: 'Voltar ao menu', value: 'saudacao' }, 
    ];
    break;
  case 'resultados':
    response = `Os resultados mais recentes da Furia foram: 
    <p>PGL Bucharest 2025</p> 
    🗓️ 9/04 – FURIA 0 x 2 The MongolZ<br/> 
    🗓️ 8/04 – FURIA 0 x 2 Virtus.pro<br/> 
    🗓️ 7/04 – FURIA 1 x 2 Complexity<br/> 
    🗓️ 6/04 – ✅ FURIA 2 x 0 Apogee<br/> 
    <p>BLAST Open Lisbon 2025</p> 
    🗓️ 22/03 – FURIA 1 x 2 M80<br/>
    🗓️ 20/03 – FURIA 0 x 2 Natus Vincere<br/> 
    <p>ESL Pro League S21</p> 
    🗓️ 10/03 – FURIA 1 x 2 Falcons <br/>
    🗓️ 09/03 – ✅ FURIA 2 x 1 MIBR <br/>
    🗓️ 08/03 – FURIA 0 x 2 Liquid <br/>
    🗓️ 07/03 – FURIA 1 x 2 MOUZ.<br/> 
    <p>Deseja saber mais?</p>`;
    options = [
      { label: 'Quem são os jogadores?', value: 'jogadores' },
      { label: 'Próximos jogos', value: 'proximos' },
      { label: 'Quais titulos tem a Furia?', value:'titulos'},
      { label: 'História da Furia', value: 'historia' },
      { label: 'Camisetas do time', value: 'camisa'},
      { label: 'Voltar ao menu', value: 'saudacao' },
    ];
    break;
  case 'proximos':
    response = `<p>PGL Astana 2025</p>
     🗓️ 10/05 à 18/05
      <p>IEM Dallas 2025</p>
    🗓️ 19/05 à 25/05
     <p>BLAST.tv Austin Major 2025</p>
    🗓️ 03/06 à 22/06. 
    <p>O que mais deseja saber?</p>`;
    options = [
      { label: 'Resultados recentes', value: 'resultados' },
      { label: 'Quem são os jogadores?', value: 'jogadores' },
      { label: 'Quais titulos tem a Furia?', value:'titulos'},
      { label: 'História da Furia', value: 'historia' },
      { label: 'Voltar ao menu', value: 'saudacao' },
      { label: 'Camisetas do time', value: 'camisa'},]
     
    break;
  case 'historia':
    response = 'História da FURIA (CS:GO / CS2): A FURIA iniciou sua trajetória no CS:GO e participou de seu primeiro Major em 2019 (IEM Katowice). Ainda em 2019, chegou à final da 7ª temporada da ECS. Em 2020, venceu a ESL Pro League NA e, em 2021, firmou parceria permanente com a ESL através do "Acordo do Louvre", renovado até 2025. Em Majors, foi destaque ao chegar nas quartas de final do PGL Stockholm 2021 e Antwerp 2022, e fez história ao alcançar as semifinais do IEM Rio Major 2022 com grande apoio da torcida brasileira. Em 2023, contratou FalleN e chelo. Em 2024, arT foi movido ao banco após anos como capitão, e guerri assumiu como Head de Esports. Posteriormente, KSCERATO e yuurih renovaram até 2027, skullz entrou para o time titular, e a comissão técnica foi reforçada com os analistas Lucid e innersh1ne, sinalizando abertura para uma lineup internacional.';
    options = [
      { label: 'Resultados recentes', value: 'resultados' },
      { label: 'Quem são os jogadores?', value: 'jogadores' },
      { label: 'Próximos jogos', value: 'proximos' },
      { label: 'Quais titulos tem a Furia?', value:'titulos'},
      { label: 'Voltar ao menu', value: 'saudacao' },
      { label: 'Camisetas do time', value: 'camisa'},
      
    ];
    break;
  default:
    response = 'Desculpe, não entendi. Pode tentar novamente?';
    options = [
      { label: 'Voltar ao menu', value: 'saudacao' }
    ];
    break;
}

setTimeout(() => {
  addMessage(response, 'bot');
  createOptions(options);
}, 500);
}

// Evento de clique no botão Enviar
sendBtn.addEventListener('click', () => {
  const message = userInput.value.trim();
  if (message) {
    addMessage(message, 'user');
    handleOption(perguntas[message]);
    userInput.value = '';
  }
});

// Enviar mensagem ao pressionar Enter
userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendBtn.click();
  }
});

// Mensagem de boas-vindas
addMessage('Bem-vindo ao chat da Furia! Clique nas opções para navegar ou digite sua mensagem.', 'bot');

handleOption('saudacao');