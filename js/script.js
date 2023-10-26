function randomText(letter) {
  let text = "abcdefghijklmnopqrstuvwxyz0123456789";
  letter = text[Math.floor(Math.random() * text.length)];
  return letter;
}

function rain() {
  const cloud = document.querySelector(".cloud");
  const element = document.createElement("div");
  const left = Math.floor(Math.random() * 310);
  const size = Math.random() * 1.15;
  const duration = Math.random() * 1;
  element.classList.add("text");
  cloud.appendChild(element);
  element.innerText = randomText();
  element.style.fontSize = 0.5 + size + "em";
  element.style.left = left + "px";
  element.style.animationDuration = 1 + duration + "s";
  setTimeout(function () {
    cloud.removeChild(element);
  }, 2000);
}
setInterval(function () {
  rain();
}, 20);
