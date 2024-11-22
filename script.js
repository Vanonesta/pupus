document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('reveal-button');
  const surprise = document.getElementById('surprise');
  const music = document.getElementById('background-music');
  const themeToggle = document.getElementById('theme-toggle');
  let darkMode = true;

  // Play music
  music.volume = 0.5;
  music.play();

  // Reveal surprise
  button.addEventListener('click', () => {
    surprise.classList.remove('hidden');
    button.textContent = 'Nikmati Momen Ini!';
    button.disabled = true;
    button.style.cursor = 'default';
  });

  // Toggle theme
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    darkMode = !darkMode;
    themeToggle.textContent = darkMode ? 'Mode Gelap' : 'Mode Terang';
  });

  // Dynamic particle background
  particlesJS('particles', {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: '#ffffff' },
      shape: {
        type: 'circle',
        stroke: { width: 0, color: '#000000' },
        polygon: { nb_sides: 5 },
      },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'repulse' },
        onclick: { enable: true, mode: 'push' },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });
});