
const loginScreen = document.getElementById("loginScreen");
const welcomeScreen = document.getElementById("welcomeScreen");
const gameScreen = document.getElementById("gameScreen");

document.getElementById("loginButton").onclick = function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("loginMessage");

  if (username === "player" && password === "racing123") {
    message.textContent = "";
    loginScreen.classList.add("hidden");
    welcomeScreen.classList.remove("hidden");
  } else {
    message.textContent = "Username atau password salah!";
  }
};

document.getElementById("openGame").onclick = function () {
  welcomeScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
};

document.getElementById("logoutButton").onclick = function () {
  welcomeScreen.classList.add("hidden");
  gameScreen.classList.add("hidden");
  loginScreen.classList.remove("hidden");
};

document.getElementById("homeButton").onclick = function () {
  gameScreen.classList.add("hidden");
  welcomeScreen.classList.remove("hidden");
};

let playerPosition = 115;

document.getElementById("leftBtn").onclick = function () {
  playerPosition = Math.max(5, playerPosition - 30);
  document.getElementById("player").style.left = playerPosition + "px";
};

document.getElementById("rightBtn").onclick = function () {
  playerPosition = Math.min(235, playerPosition + 30);
  document.getElementById("player").style.left = playerPosition + "px";
};

document.getElementById("startButton").onclick = function () {
  document.getElementById("score").textContent = "0";
  alert("Game siap dimulai! Fitur balapan akan kita lanjutkan.");
};

