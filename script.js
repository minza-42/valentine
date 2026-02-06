const noBtn = document.getElementById("noBtn");
const yesBtn = document.querySelector(".yes");
const title = document.getElementById("title");
const warning = document.getElementById("warning");
const heartsContainer = document.getElementById("hearts");

let noAttempts = 0;

// Event listeners for both Desktop (hover) and Mobile (touch)
noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // Prevents clicking the button on mobile
  moveButton();
});

function moveButton() {
  noAttempts++;

  // 1. Growth logic for YES button
  const newScale = 1 + noAttempts * 0.15;
  yesBtn.style.transform = `scale(${newScale})`;

  // 2. Trigger the "Cat with Gun" warning after 5 attempts
  if (noAttempts >= 5) {
    warning.classList.remove("hidden");
    warning.style.display = "block";
    warning.style.animation = "fadeIn 0.6s ease forwards";
    warning.style.zIndex = 1000;
    noBtn.style.display = "none";
    return;
  }

  // 3. Move logic
  noBtn.style.position = "fixed"; // Keep it relative to the viewport

  const yesRect = yesBtn.getBoundingClientRect();
  const padding = 10; // Keeps button away from screen edges
  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  let x,
    y,
    overlap,
    tooCenter,
    tries = 0;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  do {
    x = padding + Math.random() * (maxX - padding);
    y = padding + Math.random() * (maxY - padding);
    // Check for overlap with YES button (precise bounding box)
    const noRect = {
      left: x,
      right: x + noBtn.offsetWidth,
      top: y,
      bottom: y + noBtn.offsetHeight,
    };
    overlap = !(
      noRect.right < yesRect.left ||
      noRect.left > yesRect.right ||
      noRect.bottom < yesRect.top ||
      noRect.top > yesRect.bottom
    );
    // Avoid the center area (where YES is likely located)
    tooCenter =
      Math.abs(noRect.left + noBtn.offsetWidth / 2 - centerX) <
        yesBtn.offsetWidth / 1.5 &&
      Math.abs(noRect.top + noBtn.offsetHeight / 2 - centerY) <
        yesBtn.offsetHeight / 1.5;
    tries++;
  } while ((overlap || tooCenter) && tries < 50);

  // Clamp to visible area after setting position
  x = Math.max(padding, Math.min(x, maxX));
  y = Math.max(padding, Math.min(y, maxY));
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  // Double-check after rendering: if any part is outside, snap it in
  const rect = noBtn.getBoundingClientRect();
  let adjust = false;
  let newLeft = x,
    newTop = y;
  if (rect.left < 0) {
    newLeft = padding;
    adjust = true;
  }
  if (rect.top < 0) {
    newTop = padding;
    adjust = true;
  }
  if (rect.right > window.innerWidth) {
    newLeft = window.innerWidth - rect.width - padding;
    adjust = true;
  }
  if (rect.bottom > window.innerHeight) {
    newTop = window.innerHeight - rect.height - padding;
    adjust = true;
  }
  if (adjust) {
    noBtn.style.left = `${Math.max(padding, Math.min(newLeft, maxX))}px`;
    noBtn.style.top = `${Math.max(padding, Math.min(newTop, maxY))}px`;
  }
}

function yesClicked() {
  title.textContent = "YAY! I knew it 💖🥰";
  warning.classList.add("hidden");
  noBtn.style.display = "none";
  createHeartExplosion();
}

function createHeartExplosion() {
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animationDuration = 2 + Math.random() * 3 + "s";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
}
