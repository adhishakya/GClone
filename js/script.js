let darkButton = document.getElementById("darkLight");
let logo = document.getElementById("logo");

darkButton.onclick = () => {
  let element = document.body;
  element.classList.toggle("darkMode");
  if (darkButton.src.endsWith("/images/moon.png") == true) {
    darkButton.src = "/images/sun.png";
    logo.src = "/images/googleDark.svg";
  } else if (darkButton.src.endsWith("/images/sun.png") == true) {
    darkButton.src = "/images/moon.png";
    logo.src = "/images/google.svg";
  }
};
