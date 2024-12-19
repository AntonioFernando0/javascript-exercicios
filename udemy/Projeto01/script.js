// Script para toggle do menu em dispositivos móveis
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

// Função para alternar a visibilidade do menu de navegação em dispositivos móveis
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Script para interagir com o botão "Mostrar Mensagem"
const btnMensagem = document.getElementById('btnMensagem');
const mensagem = document.getElementById('mensagem');

btnMensagem.addEventListener('click', () => {
    mensagem.textContent = "Mensagem exibida com sucesso!";
});
  // Lógica para alternar o menu de navegação para dispositivos móveis
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
  });

  // Animações na imagem com javascript

  window.onload = () => {
    const image = document.querySelector('#imagem');
    image.classList.add('imagem'); // A imagem começa a balançar assim que a página carrega
  };
  