maptilersdk.config.apiKey = "add-your-maptiler-api-key-here";
let mediaQueryObj = window.matchMedia("(prefers-color-scheme: dark)");
let isDarkMode = mediaQueryObj.matches;

let activeMode = isDarkMode ? "dark" : "light";
const style = getStyleByMode(activeMode);
if (isDarkMode) {
  document.getElementById("modeSwitch").checked = true;
}

function getStyleByMode(mode) {
  return mode == "dark"
    ? maptilersdk.MapStyle.DATAVIZ.DARK
    : maptilersdk.MapStyle.DATAVIZ.LIGHT;
}

function switchMode(mode) {
  activeMode = mode;
  const style = getStyleByMode(mode);
  map.setStyle(style);
}

const map = new maptilersdk.Map({
  container: "map",
  style: getStyleByMode(activeMode),
  center: [78.9629, 20.5937],
  zoom: 4,
  hash: true,
});

document.getElementById("modeSwitch").addEventListener("change", function () {
  if (this.checked && activeMode == "light") {
    switchMode("dark");
  } else if (!this.checked && activeMode == "dark") {
    switchMode("light");
  }
});

function updateMap() {
  fetch("/data/data.json")
    .then((response) => response.json())
    .then((res) => {
      res.data.forEach((element) => {
        latitude = element.latitude;
        longitude = element.longitude;

        cases = element.infected;
        if (cases > 1000) {
          color = `rgb(236, 0, 0)`;
        } else if (cases > 500) {
          color = `rgb(236,36,0)`;
        } else if (cases > 100) {
          color = `rgb(236,83,0)`;
        } else if (cases > 10) {
          color = `rgb(236,155,0)`;
        } else {
          color = `rgb(236,202,0)`;
        }

        var marker = new maptilersdk.Marker({
          draggable: false,
          color: color,
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}

updateMap();
