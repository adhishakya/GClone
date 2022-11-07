let darkButton = document.getElementById("darkLight");
let logo = document.getElementById("logo");

darkButton.onclick = () => {
  let element = document.body;
  element.classList.toggle("darkMode");
  //Toggling dark mode
  if (darkButton.src.endsWith("/images/moon.png") == true) {
    darkButton.src = "/images/sun.png";
    logo.src = "/images/googleDark.svg";
  }
  //Toggling light mode
  else if (darkButton.src.endsWith("/images/sun.png") == true) {
    darkButton.src = "/images/moon.png";
    logo.src = "/images/google.svg";
  }
};

let selectRegion = document.getElementById("selectRegion");

const options = { method: "GET" };

fetch("https://restcountries.com/v2/all", options)
  .then((countries) => countries.json())
  .then((countries) => {
    let regionOptions = "";
    countries.forEach((countryName) => {
      console.log(countryName.name);
      regionOptions += `<option>${countryName.name}</option>`;
      selectRegion.innerHTML = regionOptions;
    });
  })
  .catch((err) => console.error(err));
