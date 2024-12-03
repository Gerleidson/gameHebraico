// Perguntas por nível
// ex de pergunta com audio:     { question: "Qual é a primeira letra do alfabeto hebraico?", image: "aleph.png", audio: "aleph.mp3", options: ["Aleph", "Bet", "Gimel"], answer: "Aleph" },

const questions = {
  basico: [  
      { question: "Qual é a primeira letra do alfabeto hebraico?", image: "aleph.png", options: ["Aleph", "Bet", "Gimel"], answer: "Aleph" },
      { question: "Qual é a segunda letra do alfabeto hebraico?", image: "bet.png", options: ["Bet", "Aleph", "Dalet"], answer: "Bet" },
      { question: "Qual é a terceira letra do alfabeto hebraico?", image: "gimel.png", options: ["Gimel", "Chet", "Tav"], answer: "Gimel" },
      { question: "Qual é a quarta letra do alfabeto hebraico?", image: "dalet.png", options: ["Dalet", "Bet", "Zayin"], answer: "Dalet" },
      { question: "Qual letra hebraica representa o som 'H'?", image: "he.png", options: ["He", "Chet", "Yud"], answer: "He" },
      { question: "Qual é a sexta letra do alfabeto hebraico?", image: "vav.png", options: ["Vav", "Lamed", "Mem"], answer: "Vav" },
      { question: "Qual é a sétima letra do alfabeto hebraico?", image: "zayin.png", options: ["Zayin", "Tav", "Kaf"], answer: "Zayin" },
      { question: "Qual é a oitava letra do alfabeto hebraico?", image: "chet.png", options: ["Chet", "Vav", "Bet"], answer: "Chet" },
      { question: "Qual é a nona letra do alfabeto hebraico?", image: "tet.png", options: ["Tet", "Daled", "Yud"], answer: "Tet" },
      { question: "Qual é a décima letra do alfabeto hebraico?", image: "yud.png", options: ["Yud", "Lamed", "Shin"], answer: "Yud" },
      { question: "Qual é a décima primeira letra do alfabeto hebraico?", image: "kaf.png", options: ["Kaf", "Nun", "Zayin"], answer: "Kaf" },
      { question: "Qual letra hebraica representa o som 'L'?", image: "lamed.png", options: ["Lamed", "Bet", "Gimel"], answer: "Lamed" },
      { question: "Qual é a décima terceira letra do alfabeto hebraico?", image: "mem.png", options: ["Mem", "Pe", "Aleph"], answer: "Mem" },
      { question: "Qual é a décima quarta letra do alfabeto hebraico?", image: "nun.png", options: ["Nun", "Zayin", "Lamed"], answer: "Nun" },
      { question: "Qual é a décima quinta letra do alfabeto hebraico?", image: "samekh.png", options: ["Samekh", "Shin", "Mem"], answer: "Samekh" },
      { question: "Qual é a décima sexta letra do alfabeto hebraico?", image: "ayin.png", options: ["Ayin", "Tet", "Pe"], answer: "Ayin" },
      { question: "Qual é a décima sétima letra do alfabeto hebraico?", image: "pe.png", options: ["Pe", "Kaf", "Vav"], answer: "Pe" },
      { question: "Qual letra hebraica representa o som 'T'?", image: "tzadi.png", options: ["Tzadi", "Tav", "Chet"], answer: "Tzadi" },
      { question: "Qual é a décima nona letra do alfabeto hebraico?", image: "kuf.png", options: ["Kuf", "Pe", "Tav"], answer: "Kuf" },
      { question: "Qual é a vigésima letra do alfabeto hebraico?", image: "resh.png", options: ["Resh", "Shin", "Yud"], answer: "Resh" },
      { question: "Qual é a vigésima primeira letra do alfabeto hebraico?", image: "shin.png", options: ["Shin", "Tzadi", "Aleph"], answer: "Shin" },
      { question: "Qual é a vigésima segunda letra do alfabeto hebraico?", image: "tav.png", options: ["Tav", "Yud", "Kuf"], answer: "Tav" } 
  ],
  intermediario: [
    { question: "Qual letra hebraica representa o som 'G'?", image: "gimel.png", options: ["Gimel", "Bet", "Dalet"], answer: "Gimel" },
    { question: "Qual letra hebraica representa o som 'D'?", image: "dalet.png", options: ["Dalet", "Chet", "Kaf"], answer: "Dalet" },
    { question: "Qual letra hebraica representa o som 'H' com uma pronúncia mais forte?", image: "chet.png", options: ["Chet", "He", "Tav"], answer: "Chet" },
    { question: "Qual letra hebraica representa o som 'K'?", image: "kaf.png", options: ["Kaf", "Bet", "Tav"], answer: "Kaf" },
    { question: "Qual é a letra que tem o som 'S' suave?", image: "samekh.png", options: ["Samekh", "Shin", "Mem"], answer: "Samekh" },
    { question: "Qual letra hebraica representa o som 'SH'?", image: "shin.png", options: ["Shin", "Shin Sofit", "Tav"], answer: "Shin" },
    { question: "Qual letra é usada para formar o som 'TS'?", image: "tzadi.png", options: ["Tzadi", "Zayin", "Mem"], answer: "Tzadi" },
    { question: "Qual é a letra que representa o som 'V'?", image: "vav.png", options: ["Vav", "Yud", "Kaf"], answer: "Vav" },
    { question: "Qual é a letra que representa o som 'T' suave?", image: "tet.png", options: ["Tet", "Tav", "Zayin"], answer: "Tet" },
    { question: "Qual letra hebraica é usada para representar o som 'F'?", image: "fe.png", options: ["Fe", "Pe", "Lamed"], answer: "Fe" },
    { question: "Qual letra hebraica é usada para formar o som 'M'?", image: "mem.png", options: ["Mem", "Nun", "Aleph"], answer: "Mem" },
    { question: "Qual letra hebraica é usada para o som 'N'?", image: "nun.png", options: ["Nun", "Bet", "Vav"], answer: "Nun" },
    { question: "Qual é a letra que representa o som 'Z'?", image: "zayin.png", options: ["Zayin", "Lamed", "Kuf"], answer: "Zayin" },
    { question: "Qual é a letra que representa o som 'P'?", image: "pe.png", options: ["Pe", "Kaf", "Shin"], answer: "Pe" },
    { question: "Qual letra hebraica é usada para o som 'S' mais forte?", image: "shin.png", options: ["Shin", "Samekh", "Tzadi"], answer: "Shin" },
    { question: "Qual letra hebraica é usada para o som 'I'?", image: "yud.png", options: ["Yud", "Vav", "He"], answer: "Yud" },
    { question: "Qual letra hebraica é usada para o som 'A'?", image: "aleph.png", options: ["Aleph", "Bet", "Gimel"], answer: "Aleph" },
    { question: "Qual é a letra que forma o som 'O' no alfabeto hebraico?", image: "vav.png", options: ["Vav", "Yud", "Tav"], answer: "Vav" },
    { question: "Qual letra hebraica representa o som 'R'?", image: "resh.png", options: ["Resh", "Kuf", "Tav"], answer: "Resh" },
    { question: "Qual letra hebraica tem o som 'C'?", image: "tsade.png", options: ["Tzadi", "Zayin", "Kuf"], answer: "Tzadi" },
    { question: "Qual letra é usada para o som 'B'?", image: "bet.png", options: ["Bet", "Vav", "Kaf"], answer: "Bet" },
    { question: "Qual é a letra hebraica usada para representar o som 'L'?", image: "lamed.png", options: ["Lamed", "Mem", "Nun"], answer: "Lamed" }
],
  avancado: [
    { question: "Qual letra hebraica é usada para o som 'CH'?", image: "chet.png", options: ["Chet", "Kaf", "Tav"], answer: "Chet" },
    { question: "Qual é a letra final usada para representar o som 'M'?", image: "memsofit.png", options: ["Mem Sofit", "Mem", "Nun Sofit"], answer: "Mem Sofit" },
    { question: "Qual é a letra final usada para representar o som 'N'?", image: "nunsofit.png", options: ["Nun Sofit", "Nun", "Yud"], answer: "Nun Sofit" },
    { question: "Qual é a letra final usada para representar o som 'K'?", image: "kafsofit.png", options: ["Kaf Sofit", "Kaf", "Bet"], answer: "Kaf Sofit" },
    { question: "Qual letra hebraica representa o som 'S' suave no final de uma palavra?", image: "finalsamekh.png", options: ["Final Samekh", "Samekh", "Shin"], answer: "Final Samekh" },
    { question: "Qual letra final representa o som 'P'?", image: "pesofit.png", options: ["Pe Sofit", "Pe", "Fe"], answer: "Pe Sofit" },
    { question: "Qual letra é usada para representar o som 'SH' no final de uma palavra?", image: "finalshin.png", options: ["Final Shin", "Shin", "Tav"], answer: "Final Shin" },
    { question: "Qual letra hebraica representa o som 'T' no final de uma palavra?", image: "finaltet.png", options: ["Final Tet", "Tet", "Tav"], answer: "Final Tet" },
    { question: "Qual é a letra que tem um som aspirado 'H' mais forte?", image: "heh.png", options: ["Heh", "Chet", "Yud"], answer: "Heh" },
    { question: "Qual letra representa o som 'Z' no alfabeto hebraico?", image: "zayin.png", options: ["Zayin", "Zade", "Tav"], answer: "Zayin" },
    { question: "Qual letra é usada para o som 'T' na forma final?", image: "finaltet.png", options: ["Final Tet", "Tet", "Tav"], answer: "Final Tet" },
    { question: "Qual é a letra que representa o som 'F' no alfabeto hebraico?", image: "fe.png", options: ["Fe", "Pe", "Vav"], answer: "Fe" },
    { question: "Qual letra é usada para o som 'B' no alfabeto hebraico?", image: "bet.png", options: ["Bet", "Vav", "Kaf"], answer: "Bet" },
    { question: "Qual é a letra final usada para representar o som 'TS'?", image: "tzadisoft.png", options: ["Tzadi Sofit", "Tzadi", "Zayin"], answer: "Tzadi Sofit" },
    { question: "Qual letra hebraica tem o som 'L'?", image: "lamed.png", options: ["Lamed", "Mem", "Aleph"], answer: "Lamed" },
    { question: "Qual é a letra que representa o som 'C' no alfabeto hebraico?", image: "tsade.png", options: ["Tzadi", "Zayin", "Kaf"], answer: "Tzadi" },
    { question: "Qual letra hebraica tem o som 'R'?", image: "resh.png", options: ["Resh", "Kuf", "Tav"], answer: "Resh" },
    { question: "Qual é a letra que representa o som 'V' no alfabeto hebraico?", image: "vav.png", options: ["Vav", "Yud", "Aleph"], answer: "Vav" },
    { question: "Qual é a letra usada para o som 'H' no alfabeto hebraico?", image: "he.png", options: ["He", "Chet", "Tav"], answer: "He" },
    { question: "Qual letra hebraica tem o som 'I'?", image: "yud.png", options: ["Yud", "Vav", "He"], answer: "Yud" },
    { question: "Qual é a letra usada para representar o som 'O' no alfabeto hebraico?", image: "vav.png", options: ["Vav", "Yud", "Aleph"], answer: "Vav" },
    { question: "Qual letra representa o som 'D'?", image: "dalet.png", options: ["Dalet", "Gimel", "Bet"], answer: "Dalet" }
  ],

};

// Variáveis globais
let currentQuestionIndex = 0;
let score = 0;
let currentLevel = "basico"; // Nível inicial definido como "basico"

// Função que inicia o jogo e carrega o nível selecionado
function setLevel(level) {
  if (!questions[level] || (level === "intermediario" || level === "avancado")) {
    alert("Nível bloqueado! Compre este nivel para desbloquear e continuar jogando.");
    goHome(); // Redireciona ao início se o nível for intermediário ou avançado
    return;
  }
  currentLevel = level;
  currentQuestionIndex = 0; // Resetando o índice das perguntas
  score = 0; // Resetando a pontuação
  shuffleQuestions(); // Embaralha as perguntas para o nível selecionado
  showQuestion(); // Chama a função para mostrar a primeira pergunta
}

// Função para redirecionar ao sair do jogo
function exitGame() {
  window.location.href = "index.html"; // Redireciona para a página index.html
}

// Função para embaralhar as perguntas
function shuffleQuestions() {
  const currentQuestions = questions[currentLevel];
  for (let i = currentQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [currentQuestions[i], currentQuestions[j]] = [currentQuestions[j], currentQuestions[i]];
  }
}

// Função para exibir a pergunta no modal
function showQuestion() {
  const currentQuestions = questions[currentLevel];
  const currentQuestion = currentQuestions[currentQuestionIndex];

  // Verifica se existem perguntas para o nível
  if (!currentQuestion) {
    showWinScreen(); // Se não houver mais perguntas, exibe a tela de vitória
    return;
  }

  // Atualiza o conteúdo do modal
  document.getElementById("questionText").textContent = currentQuestion.question;
  document.getElementById("questionImage").innerHTML = `
    <img src="${currentQuestion.image}" alt="Imagem da letra" class="img-fluid">
  `;
  document.getElementById("questionOptions").innerHTML = currentQuestion.options
    .map(option => `
      <button class="btn btn-primary option" onclick="checkAnswer('${option}')">${option}</button>
    `).join("");

  // Exibe a pontuação atual no modal
  document.getElementById("scoreText").textContent = `Pontuação: ${score}`;

  // Toca o áudio associado à pergunta
  const audio = new Audio(currentQuestion.audio);
  audio.play();

  // Exibe o modal
  const modal = new bootstrap.Modal(document.getElementById("questionModal"));
  modal.show();
}

// Função para verificar a resposta
function checkAnswer(selectedOption) {
  const currentQuestions = questions[currentLevel];
  const currentQuestion = currentQuestions[currentQuestionIndex];

  const selectedButton = Array.from(document.querySelectorAll(".option"))
    .find(btn => btn.textContent === selectedOption);

  if (selectedOption === currentQuestion.answer) {
    score += 10; // Ganha 10 pontos por acertar
    selectedButton.classList.remove("btn-primary");
    selectedButton.classList.add("btn-success");
  } else {
    score -= 10; // Perde 10 pontos por errar
    selectedButton.classList.remove("btn-primary");
    selectedButton.classList.add("btn-danger");
  }

  setTimeout(() => {
    currentQuestionIndex++; // Avança para a próxima pergunta
    if (currentQuestionIndex < currentQuestions.length) {
      showQuestion(); // Mostra a próxima pergunta
    } else {
      const modal = bootstrap.Modal.getInstance(document.getElementById("questionModal"));
      modal.hide(); // Fecha o modal
      showWinScreen(); // Mostra a tela de vitória
    }
  }, 1000); // Aguarda 1 segundo para exibir a próxima
}

// Função para mostrar a tela de vitória
function showWinScreen() {
  const gameDiv = document.getElementById("game");
  gameDiv.innerHTML = `
    <p class="score">Pontuação Final: ${score}</p>
    <p class="question">Parabéns! Você concluiu o jogo!</p>
    ${renderHomeAndRestartButtons()}
  `;
}

// Função para renderizar os botões de reinício e início
function renderHomeAndRestartButtons() {
  return `
    <div class="buttons-container d-flex justify-content-center mt-3">
      <button class="btn btn-secondary mx-2" onclick="goHome()">Início</button>
      <button class="btn btn-warning mx-2" onclick="setLevel('${currentLevel}')">Reiniciar</button>
    </div>
  `;
}

// Função de reiniciar a página
function goHome() {
  window.location.href = "game.html"; // Redireciona para a página principal
}
