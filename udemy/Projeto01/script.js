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
