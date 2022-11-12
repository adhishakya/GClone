let darkMode = localStorage.getItem("darkMode");
let darkButton = document.getElementById("darkLight");
let logo = document.getElementById("logo");
let imageSearchButton = document.getElementById("imageSearchButton");
let imageUpload = document.getElementById("camera");

let enableDarkMode = () => {
  document.body.classList.add("darkMode");
  darkButton.src = "/images/sun.png";
  logo.src = "/images/gimageDark.svg";
  imageSearchButton.src = "/images/cameraDark.svg";
  localStorage.setItem("darkMode", "true");
};

let disableDarkMode = () => {
  document.body.classList.remove("darkMode");
  darkButton.src = "/images/moon.png";
  logo.src = "/images/gimage.svg";
  imageSearchButton.src = "/images/camera.svg";
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

imageUpload.addEventListener("change", () => {
  // let file = imageUpload.files[0];
  // let imageUrl = URL.createObjectURL(event.target.files[0]);
  // window.location.replace(`https://lens.google.com/search?p=${imageUrl}`);
});
