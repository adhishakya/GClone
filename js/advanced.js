let darkMode = localStorage.getItem("darkMode");
let darkButton = document.getElementById("darkLight");
let logo = document.getElementById("logo");

let enableDarkMode = () => {
  document.body.classList.add("darkMode");
  darkButton.src = "/images/sun.png";
  logo.src = "/images/advancedLogoDark.svg";
  localStorage.setItem("darkMode", "true");
};

let disableDarkMode = () => {
  document.body.classList.remove("darkMode");
  darkButton.src = "/images/moon.png";
  logo.src = "/images/advancedLogo.svg";
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

let selectRegion = document.getElementById("selectRegion");

const options = { method: "GET" };

fetch("https://restcountries.com/v2/all", options)
  .then((countries) => countries.json())
  .then((countries) => {
    let regionOptions = "";
    regionOptions += `<option value="">any region</option>`;
    selectRegion.innerHTML = regionOptions;
    countries.forEach((countryName) => {
      alphaCode = countryName.alpha2Code;
      regionOptions += `<option value="country${alphaCode}">${countryName.name}</option>`;
      selectRegion.innerHTML = regionOptions;
    });
  })
  .catch((err) => console.error(err));
