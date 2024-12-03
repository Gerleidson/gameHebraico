// Perguntas por nível
const questions = {
  basico: [
    { question: "Qual é a primeira letra do alfabeto hebraico?", image: "aleph.png", audio: "aleph.mp3", options: ["Aleph", "Bet", "Gimel"], answer: "Aleph" },
    { question: "Qual é a última letra do alfabeto hebraico?", image: "tav.png", audio: "tav.mp3", options: ["Tav", "Yud", "Lamed"], answer: "Tav" },
  ],
  intermediario: [
    { question: "Qual letra hebraica representa o som 'G'?", image: "gimel.png", audio: "gimel.mp3", options: ["Gimel", "Bet", "Dalet"], answer: "Gimel" },
    { question: "Qual letra hebraica representa o som 'D'?", image: "dalet.png", audio: "dalet.mp3", options: ["Dalet", "Chet", "Kaf"], answer: "Dalet" },
  ],
  avancado: [
    { question: "Qual letra é usada para formar o som 'CH'?", image: "chet.png", audio: "chet.mp3", options: ["Chet", "Tzadi", "Kaf"], answer: "Chet" },
    { question: "Qual letra hebraica representa o som 'SH'?", image: "shin.png", audio: "shin.mp3", options: ["Shin", "Mem", "Yud"], answer: "Shin" },
  ],
};

// Variáveis globais
let currentQuestionIndex = 0;
let score = 0;
let currentLevel = "basico"; // Nível inicial definido como "basico"

// Função que inicia o jogo e carrega o nível selecionado
function setLevel(level) {
  if (!questions[level]) {
    goHome(); // Redireciona ao início se o nível for inválido
    return;
  }
  currentLevel = level;
  currentQuestionIndex = 0; // Resetando o índice das perguntas
  score = 0; // Resetando a pontuação
  showQuestion(); // Chama a função para mostrar a primeira pergunta
}

// Função para redirecionar ao sair do jogo
function exitGame() {
  window.location.href = "index.html"; // Redireciona para a página index.html
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
    score -= 5; // Perde 5 pontos por errar
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
