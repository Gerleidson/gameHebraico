const questions = [
    {
      question: "Qual é a primeira letra do alfabeto hebraico?",
      image: "aleph.png", // Adicione o caminho da imagem correspondente
      audio: "aleph.mp3", // Adicione o caminho do áudio correspondente
      options: ["Aleph", "Bet", "Gimel"],
      answer: "Aleph"
    },
    {
      question: "Qual é a última letra do alfabeto hebraico?",
      image: "tav.png",
      audio: "tav.mp3",
      options: ["Tav", "Yud", "Lamed"],
      answer: "Tav"
    },
    {
      question: "Qual letra representa o som 'B'?",
      image: "bet.png",
      audio: "bet.mp3",
      options: ["Bet", "Shin", "Dalet"],
      answer: "Bet"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
  }
  
  function showQuestion() {
    const gameDiv = document.getElementById("game");
    const currentQuestion = questions[currentQuestionIndex];
  
    // Reproduz o áudio
    playAudio(currentQuestion.audio);
  
    gameDiv.innerHTML = `
      <p class="score">Pontuação: ${score}</p>
      <p class="question">${currentQuestion.question}</p>
      <div class="image-container">
        <img src="${currentQuestion.image}" alt="Letra">
      </div>
      <div class="options">
        ${currentQuestion.options.map(option => `
          <button class="option" onclick="checkAnswer('${option}')">${option}</button>
        `).join('')}
      </div>
    `;
  }
  
  function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      score += 10; // Incrementa a pontuação em 10
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showWinScreen();
      }
    } else {
      score = 0; // Zera a pontuação em caso de erro
      showLoseScreen();
    }
  }
  
  function playAudio(audioFile) {
    const audio = new Audio(audioFile);
    audio.play();
  }
  
  function showWinScreen() {
    const gameDiv = document.getElementById("game");
    gameDiv.innerHTML = `
      <p class="score">Pontuação Final: ${score}</p>
      <p class="question">Parabéns! Você concluiu o jogo!</p>
      <div class="options">
        <button class="option" onclick="startGame()">Reiniciar</button>
      </div>
    `;
  }
  
  function showLoseScreen() {
    const gameDiv = document.getElementById("game");
    gameDiv.innerHTML = `
      <p class="score">Pontuação Final: ${score}</p>
      <p class="question">Você errou! Tente novamente.</p>
      <div class="options">
        <button class="option" onclick="startGame()">Reiniciar</button>
      </div>
    `;
  }
  