setTimeout(() => {
  document.getElementById('message').style.opacity = 1;
}, 2000);

// Génération de la neige
const snowflakes = Array.from({ length: 200 }, () => {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  snowflake.textContent = '\u2744'; // Flocon de neige
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
  snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
  document.body.appendChild(snowflake);
  return snowflake;
});
