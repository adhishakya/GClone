let darkLight = document.getElementById("darkLight");

// darkLight.addEventListener("click", dark());
// darkLight.addEventListener("click", light());

darkLight.onclick = function () {
  document.documentElement.style.background = "#202124";
  document.getElementById("darkLight").src = "sun.png";
};

function dark() {}

// function light() {
//   document.documentElement.style.background = "#fff";
//   document.getElementById("darkLight").src = "moon.png";
// }
