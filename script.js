const noBtn = document.getElementById("noBtn");
const warning = document.getElementById("warning");
let noAttempts = 0;

noBtn.addEventListener("mouseenter", moveButton);

function moveButton() {
  noAttempts++;

  // After 5 attempts, show warning with cat image
  if (noAttempts >= 5) {
    warning.classList.remove("hidden");
    warning.style.animation = "fadeIn 0.6s ease forwards";
    noBtn.style.display = "none";
    return;
  }

  const x = Math.random() * 250;
  const y = Math.random() * 120;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

function yesClicked() {
  alert("YAY! 💖💍");
  warning.classList.add("hidden");
}
