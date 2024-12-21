document.addEventListener("click", (event) => {
  const circle = document.createElement("div");
  circle.className = "circle";
  circle.innerHTML = "Hii";
  document.body.appendChild(circle);

  const x = event.clientX;
  const y = event.clientY;

  circle.style.left = `${x - 25}px`;
  circle.style.top = `${y - 25}px`;

  const colors = [
    "rgb(240, 137, 206)",
    "rgb(174, 57, 185)",
    "rgb(151, 95, 46)",
    "rgb(210, 188, 123)",
    "rgb(79, 54, 32)",
    "rgb(99, 157, 66)",
    "rgb(68, 28, 187)",
    "rgb(216, 39, 212)",
    "rgb(64, 143, 46)",
    "rgb(176, 175, 41)",
  ];
  const index = Math.floor(Math.random() * colors.length);
  circle.style.backgroundColor = colors[index];

  const greetings = [
    "Hey!",
    "Hello!",
    "Yo!",
    "Sup?",
    "Hola!",
    "Hiya!",
    "Howdy!",
    "Greetings!",
    "What's up?",
    "Hey there!",
  ];
  const random = Math.floor(Math.random() * greetings.length);
  circle.innerHTML = greetings[random];

  setTimeout(() => {
    circle.remove();
  }, 5000);
});
