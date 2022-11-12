let darkMode = localStorage.getItem("darkMode");
let darkButton = document.getElementById("darkLight");
let logo = document.getElementById("logo");

let enableDarkMode = () => {
  document.body.classList.add("darkMode");
  darkButton.src = "/images/sun.png";
  logo.src = "/images/googleDark.svg";
  localStorage.setItem("darkMode", "true");
};

let disableDarkMode = () => {
  document.body.classList.remove("darkMode");
  darkButton.src = "/images/moon.png";
  logo.src = "/images/google.svg";
  localStorage.setItem("darkMode", "false");
};

if (darkMode === "true") {
  enableDarkMode();
}

darkButton.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode != "true") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

let lucky = () => {
  window.open("https://www.google.com/doodles", "_blank");
};
