// index.js
function initSwiper() {
  if (window.innerWidth <= 767) {
      const swiper = new Swiper('.swiper-container', {
          slidesPerView: 'auto',
          spaceBetween: 16,
          pagination: {
              el: '.swiper-pagination',
              clickable: true,
          },
      });
  }
}

function toggleBrands() {
  const toggleBtn = document.querySelector('.expand');
  const hiddenContent = document.querySelector('.swiper__controls');
  
  if (toggleBtn && hiddenContent) {
      toggleBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const isExpanded = hiddenContent.classList.toggle('show-all');
          
          // Меняем текст и иконку
          const textElement = toggleBtn.querySelector('p');
          const iconElement = toggleBtn.querySelector('img');
          
          textElement.textContent = isExpanded ? 'Скрыть' : 'Показать все';
          iconElement.src = isExpanded 
              ? 'images/expand1.png' 
              : 'images/expand0.png';
      });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  initSwiper();
  toggleBrands();
});

window.addEventListener('resize', () => {
  initSwiper();
});