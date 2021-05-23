const btn = document.getElementById("btn");

let randomRGB = randomColor();

document.body.style.backgroundColor = randomRGB;
btn.style.color = randomRGB;

function randomColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener("click", () => {
  randomRGB = randomColor();
  document.body.style.backgroundColor = randomRGB;
  btn.style.color = randomRGB;
});
