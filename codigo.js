const wppIcon  = document.querySelector('.whatsapp-fijo');
  const h2Contacto = document.querySelector('.frase-limona');

  window.addEventListener('scroll', () => {
    const h2Rect = h2Contacto.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Mostrar icono cuando el h2 esté visible (parte superior o menos)
    if (h2Rect.top <= windowHeight && h2Rect.bottom >= 0) {
      wppIcon.style.opacity = '1';
    } else {
      wppIcon.style.opacity = '0';
    }
  });