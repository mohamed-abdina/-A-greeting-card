const card = document.getElementById('greetingCard');
const cardWrapper = document.getElementById('cardWrapper');
const blowBtn = document.getElementById('blowBtn');
const confettiContainer = document.getElementById('confetti');
const sparklesContainer = document.getElementById('sparkles');

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

createSparkles();
