let darkButton = document.getElementById("darkLight");
let logo = document.getElementById("logo");
let imageSearchButton = document.getElementById("imageSearchButton");
let imageUpload = document.getElementById("camera");

darkButton.onclick = () => {
  let element = document.body;
  element.classList.toggle("darkMode");
  //Toggling dark mode
  if (darkButton.src.endsWith("/images/moon.png") == true) {
    darkButton.src = "/images/sun.png";
    logo.src = "/images/gimageDark.svg";
    imageSearchButton.src = "/images/cameraDark.svg";
  }
  //Toggling light mode
  else if (darkButton.src.endsWith("/images/sun.png") == true) {
    darkButton.src = "/images/moon.png";
    logo.src = "/images/gimage.svg";
    imageSearchButton.src = "/images/camera.svg";
  }
};

imageUpload.addEventListener("change", () => {
  // let file = imageUpload.files[0];
  // let imageUrl = URL.createObjectURL(event.target.files[0]);
  // window.location.replace(`https://lens.google.com/search?p=${imageUrl}`);
});
