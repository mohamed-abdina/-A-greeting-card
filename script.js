const card = document.getElementById('greetingCard');
const cardWrapper = document.getElementById('cardWrapper');
const blowBtn = document.getElementById('blowBtn');
const confettiContainer = document.getElementById('confetti');
const sparklesContainer = document.getElementById('sparkles');
const starsContainer = document.getElementById('stars');
const nameInput = document.getElementById('nameInput');
const updateNameBtn = document.getElementById('updateNameBtn');
const recipientName = document.getElementById('recipientName');
const downloadBtn = document.getElementById('downloadBtn');

// Open card on click
cardWrapper.addEventListener('click', (e) => {
  if (e.target.closest('.blow-btn')) return;
  if (!card.classList.contains('opened')) {
    card.classList.add('opened');
    launchConfetti();
  }
});

// Blow out candle
blowBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const flame = document.querySelector('.flame');
  if (!flame || flame.style.opacity === '0') return;

  flame.style.opacity = '0';
  launchConfetti();
});

// Update recipient name
updateNameBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  recipientName.textContent = name ? name : '';
});

nameInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    updateNameBtn.click();
  }
});

// Confetti burst
function launchConfetti() {
  const colors = ['#f472b6', '#fbbf24', '#34d399', '#60a5fa', '#a78bfa', '#fb923c'];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');
    piece.style.left = Math.random() * 100 + '%';
    piece.style.top = Math.random() * 30 + '%';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 0.8 + 's';
    piece.style.animationDuration = 2 + Math.random() * 2 + 's';
    piece.style.width = 6 + Math.random() * 8 + 'px';
    piece.style.height = 8 + Math.random() * 10 + 'px';
    confettiContainer.appendChild(piece);
    setTimeout(() => piece.remove(), 5000);
  }
}

// Sparkle dots
function createSparkles() {
  for (let i = 0; i < 20; i++) {
    const dot = document.createElement('div');
    dot.classList.add('sparkle-dot');
    dot.style.left = Math.random() * 100 + '%';
    dot.style.top = Math.random() * 100 + '%';
    dot.style.animationDelay = Math.random() * 3 + 's';
    dot.style.width = 3 + Math.random() * 5 + 'px';
    dot.style.height = dot.style.width;
    sparklesContainer.appendChild(dot);
  }
}

// Stars background
function createStars() {
  for (let i = 0; i < 80; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.setProperty('--duration', (1.5 + Math.random() * 2) + 's');
    star.style.animationDelay = Math.random() * 3 + 's';
    const size = 2 + Math.random() * 4;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    starsContainer.appendChild(star);
  }
}

// Download card as image
downloadBtn.addEventListener('click', async () => {
  const cardInside = document.querySelector('.card-inside');
  try {
    downloadBtn.textContent = 'Generating image...';
    downloadBtn.disabled = true;
    const canvas = await html2canvas(cardInside, { useCORS: true, scale: 2 });
    const link = document.createElement('a');
    link.download = 'greeting-card.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (err) {
    console.error('Download failed:', err);
    alert('Failed to download. Please try again.');
  } finally {
    downloadBtn.innerHTML = '&#128190; Download Card as Image';
    downloadBtn.disabled = false;
  }
});

createStars();
createSparkles();
