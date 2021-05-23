function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "🤍";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  heart.style.fontSize = Math.random() * 10 + 10 + "px";
  document.body.appendChild(heart);
}

setInterval(createHeart, 300);
