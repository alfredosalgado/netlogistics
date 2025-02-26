document.addEventListener("DOMContentLoaded", () => {
  const titulos = document.querySelectorAll(".titulo-animado");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("titulo-visible"); // Agrega la animación cuando es visible
      } else {
        entry.target.classList.remove("titulo-visible"); // Quita la animación cuando deja de ser visible
      }
    });
  }, { threshold: 0.2 });

  titulos.forEach(titulo => observer.observe(titulo));
});



document.addEventListener("DOMContentLoaded", () => {
  const textos = document.querySelectorAll(".texto-fade");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("texto-visible"); // Activa la animación
      } else {
        entry.target.classList.remove("texto-visible"); // Permite que se repita
      }
    });
  }, { threshold: 0.2 });

  textos.forEach(texto => observer.observe(texto));
});





function animateCounter(counter) {
  const target = +counter.getAttribute('data-target');
  const isMoney = counter.classList.contains('money');
  let count = 0;
  const increment = target / 100; // Ajusta la velocidad de animación

  const updateCounter = () => {
    count += increment;

    if (count < target) {
      counter.textContent = isMoney ? `+ ${Math.floor(count).toLocaleString()}` : Math.floor(count);
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = isMoney ? `+ ${target.toLocaleString()}` : target;
    }
  };

  updateCounter();
}

// Observer para detectar cuando los contadores sean visibles
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counterBox = entry.target;
      counterBox.classList.add("visible"); // Aparece suavemente

      const counters = counterBox.querySelectorAll(".counter");
      counters.forEach(counter => {
        counter.textContent = "0"; // Reinicia el conteo cada vez que es visible
        animateCounter(counter);
      });
    }
  });
}, { threshold: 0.5 }); // Se activa cuando al menos el 50% del elemento es visible

// Aplicar el observer a cada contador
document.querySelectorAll('.counter-box').forEach(counterBox => observer.observe(counterBox));


// main.js
document.querySelector('.whatsapp-btn').addEventListener('click', function() {
  const phone = '56955310518'; // Número de teléfono
  const message = 'Hola, estoy interesado en más información.'; // Mensaje predefinido
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
});


// Obtén el botón de "Subir"
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Cuando el usuario haga scroll hacia abajo, muestra el botón
window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollToTopBtn.style.display = "flex"; // Muestra el botón
  } else {
    scrollToTopBtn.style.display = "none"; // Oculta el botón
  }
};

// Cuando el usuario haga clic en el botón, realiza el desplazamiento suave
scrollToTopBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Evita la acción predeterminada de ancla

  // Desplazamiento suave hasta la parte superior
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Añade la transición suave
  });
});
