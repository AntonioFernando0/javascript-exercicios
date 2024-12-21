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

 

  const carrossel = document.querySelector('.carrossel');
  const slides = document.querySelectorAll('.slide');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  
  let index = 0;
  
  function showSlide(index) {
      const totalSlides = slides.length;
      if (index < 0) {
          index = totalSlides - 1; // Volta para o último slide
      } else if (index >= totalSlides) {
          index = 0; // Volta para o primeiro slide
      }
      carrossel.style.transform = `translateX(-${index * 100}%)`;
      return index;
  }
  
  btnPrev.addEventListener('click', () => {
      index = showSlide(index - 1);
  });
  
  btnNext.addEventListener('click', () => {
      index = showSlide(index + 1);
  });
  
  // Opcional: Mover automaticamente os slides a cada 5 segundos
  setInterval(() => {
      index = showSlide(index + 1);
  }, 5000);


  