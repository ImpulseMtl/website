// IMPULSE // INNOVATION CATALYST - Interactive Elements

// Typewriter effect for hero
document.addEventListener('DOMContentLoaded', function () {
  const heroCommand = document.querySelector('.hero-command');
  const originalText = './execute --breakthrough-systems';
  heroCommand.innerHTML = '';

  let i = 0;
  function typeWriter() {
    if (i < originalText.length) {
      heroCommand.innerHTML += originalText.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    } else {
      heroCommand.innerHTML += '<span class="cursor"></span>';
    }
  }

  setTimeout(typeWriter, 1000);

  // Glitch effect on lab items
  document.querySelectorAll('.lab-item').forEach((item) => {
    item.addEventListener('mouseenter', () => {
      const title = item.querySelector('.lab-title');
      const originalText = title.textContent;

      // Brief glitch effect
      title.style.textShadow = '2px 0 #ff4500, -2px 0 #00ffff';
      setTimeout(() => {
        title.style.textShadow = 'none';
      }, 150);
    });
  });

  // Matrix rain effect (subtle)
  function createMatrixRain() {
    const chars = '01';
    const drops = [];

    for (let i = 0; i < 5; i++) {
      const drop = document.createElement('div');
      drop.style.position = 'fixed';
      drop.style.top = Math.random() * -100 + 'px';
      drop.style.left = Math.random() * window.innerWidth + 'px';
      drop.style.color = '#ff4500';
      drop.style.fontSize = '10px';
      drop.style.fontFamily = 'JetBrains Mono';
      drop.style.opacity = '0.1';
      drop.style.pointerEvents = 'none';
      drop.style.zIndex = '1';
      drop.textContent = chars[Math.floor(Math.random() * chars.length)];

      document.body.appendChild(drop);

      const duration = Math.random() * 3000 + 2000;
      drop.animate(
        [
          { transform: 'translateY(0px)', opacity: 0.1 },
          {
            transform: `translateY(${window.innerHeight + 100}px)`,
            opacity: 0,
          },
        ],
        {
          duration: duration,
          easing: 'linear',
        }
      ).onfinish = () => drop.remove();
    }
  }

  // Subtle matrix effect
  setInterval(createMatrixRain, 2000);
});
