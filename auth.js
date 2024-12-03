//autenticação do cadastrado
document.addEventListener("DOMContentLoaded", function() {
  // Função para salvar os dados de cadastro no localStorage
  document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Pegando os valores dos campos de entrada
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Valida se os campos não estão vazios
    if (username === "" || password === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Verifica se o nome de usuário já está registrado
    if (localStorage.getItem(username)) {
      alert("Este nome de usuário já está cadastrado. Tente outro.");
      return;
    }

    // Salva os dados no localStorage
    const userData = {
      username: username,
      password: password
    };
    localStorage.setItem(username, JSON.stringify(userData));

    // Confirma que os dados foram salvos
    console.log(`Usuário ${username} cadastrado com sucesso!`);

    // Redireciona para o index.html após o cadastro
    window.location.href = "index.html";
  });

  // Função de Login
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const loginUsername = document.getElementById("loginUsername").value.trim();
    const loginPassword = document.getElementById("loginPassword").value.trim();

    // Verifica se o usuário está registrado
    const storedUser = localStorage.getItem(loginUsername);

    if (!storedUser) {
      alert("Usuário não encontrado!");
      return;
    }

    const userData = JSON.parse(storedUser);

    // Verifica a senha
    if (userData.password === loginPassword) {
      alert("Login bem-sucedido! Bem-vindo ao jogo.");
      window.location.href = "game.html"; // Redireciona para o jogo
    } else {
      alert("Senha incorreta! Tente novamente.");
    }
  });
});



//autenticação do login

document.addEventListener("DOMContentLoaded", function() {
  // Adiciona o evento de submit ao formulário de login
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Pegando os valores dos campos de login
    const loginUsername = document.getElementById("loginUsername").value.trim();
    const loginPassword = document.getElementById("loginPassword").value.trim();

    // Verifica se os campos de login não estão vazios
    if (loginUsername === "" || loginPassword === "") {
      document.getElementById("message").textContent = "Por favor, preencha todos os campos.";
      document.getElementById("message").style.color = "red";
      return;
    }

    // Verifica se o usuário está registrado no localStorage
    const storedUser = localStorage.getItem(loginUsername);

    if (!storedUser) {
      // Se o usuário não for encontrado, exibe uma mensagem de erro
      document.getElementById("message").textContent = "Usuário não encontrado!";
      document.getElementById("message").style.color = "red";
      return;
    }

    const userData = JSON.parse(storedUser);

    // Verifica se a senha está correta
    if (userData.password === loginPassword) {
      // Login bem-sucedido, redireciona para a página do jogo
      window.location.href = "game.html"; // Redireciona para o jogo
    } else {
      // Se a senha estiver incorreta, exibe uma mensagem de erro
      document.getElementById("message").textContent = "Senha incorreta! Tente novamente.";
      document.getElementById("message").style.color = "red";
    }
  });
});
