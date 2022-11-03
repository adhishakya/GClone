let darkButton = document.getElementById("darkLight");

darkButton.onclick = () => {
  let element = document.body;
  element.classList.toggle("darkMode");
  if (darkButton.src.endsWith("/images/moon.png") == true) {
    darkButton.src = "/images/sun.png";
  } else if (darkButton.src.endsWith("/images/sun.png") == true) {
    darkButton.src = "/images/moon.png";
  }
};
