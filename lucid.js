// Button Function

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// Weather API

// Scottsdale

let weather = {
  apiKey: "38564753ed038f14cb4ef6819ad2f457",
  fetchWeatherScottsdale: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeatherScottsdale(data));
  },

  displayWeatherScottsdale: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, temp_max, temp_min } = data.main;

    document.getElementById("sct-temp").innerHTML =
      "Temp: " + temp.toFixed(0) + "<span>&#176 </span> ";
    document.querySelector("#sct-desc").innerHTML = description;
    document.querySelector("#sct-weather-icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector("#sct-hi").innerHTML =
      "hi " + temp_max.toFixed(0) + " <span>&#176 </span>";
    document.querySelector("#sct-low").innerHTML =
      " low " + temp_min.toFixed(0) + " <span>&#176 </span>";
  },

  // Las Angeles

  fetchWeatherLosAngeles: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeatherLa(data));
  },

  displayWeatherLa: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, temp_max, temp_min } = data.main;

    document.querySelector("#la-temp").innerHTML =
      "Temp: " + temp.toFixed(0) + "<span>&#176 </span>";
    document.querySelector("#la-desc").innerHTML = description;
    document.querySelector("#la-weather-icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector("#la-hi").innerHTML =
      "hi " + temp_max.toFixed(0) + " <span>&#176 </span>";
    document.querySelector("#la-low").innerHTML =
      " low " + temp_min.toFixed(0) + " <span>&#176 </span>";
  },

  // Beverly Hills

  fetchWeatherBeverlyHills: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeatherBhc(data));
  },

  displayWeatherBhc: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, temp_max, temp_min } = data.main;

    document.querySelector("#bhc-temp").innerHTML =
      "Temp: " + temp.toFixed(0) + "<span>&#176 </span>";
    document.querySelector("#bhc-desc").innerHTML = description;
    document.querySelector("#bhc-weather-icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector("#bhc-hi").innerHTML =
      "hi " + temp_max.toFixed(0) + " <span>&#176 </span>";
    document.querySelector("#bhc-low").innerHTML =
      " low " + temp_min.toFixed(0) + " <span>&#176 </span>";
  },

  // Seattle

  fetchWeatherSeattleWa: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeatherSea(data));
  },

  displayWeatherSea: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, temp_max, temp_min } = data.main;

    document.querySelector("#sea-temp").innerHTML =
      "Temp: " + temp.toFixed(0) + "<span>&#176 </span>";
    document.querySelector("#sea-desc").innerHTML = description;
    document.querySelector("#sea-weather-icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector("#sea-hi").innerHTML =
      "hi " + temp_max.toFixed(0) + " <span>&#176 </span>";
    document.querySelector("#sea-low").innerHTML =
      " low " + temp_min.toFixed(0) + " <span>&#176 </span>";
  },

  // Boston

  fetchWeatherBoston: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeatherBo(data));
  },

  displayWeatherBo: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, temp_max, temp_min } = data.main;

    document.querySelector("#bo-temp").innerHTML =
      "Temp: " + temp.toFixed(0) + "<span>&#176 </span>";
    document.querySelector("#bo-desc").innerHTML = description;
    document.querySelector("#bo-weather-icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector("#bo-hi").innerHTML =
      "hi " + temp_max.toFixed(0) + " <span>&#176 </span>";
    document.querySelector("#bo-low").innerHTML =
      " low " + temp_min.toFixed(0) + " <span>&#176 </span>";
  },

  // Miami

  fetchWeatherMiami: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeatherMi(data));
  },

  displayWeatherMi: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, temp_max, temp_min } = data.main;

    document.querySelector("#mi-temp").innerHTML =
      "Temp: " + temp.toFixed(0) + "<span>&#176 </span>";
    document.querySelector("#mi-desc").innerHTML = description;
    document.querySelector("#mi-weather-icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector("#mi-hi").innerHTML =
      "hi " + temp_max.toFixed(0) + " <span>&#176 </span>";
    document.querySelector("#mi-low").innerHTML =
      " low " + temp_min.toFixed(0) + " <span>&#176 </span>";
  },

  // Chicago

  fetchWeatherChicago: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeatherChi(data));
  },

  displayWeatherChi: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, temp_max, temp_min } = data.main;

    document.querySelector("#chi-temp").innerHTML =
      "Temp: " + temp.toFixed(0) + "<span>&#176 </span>";
    document.querySelector("#chi-desc").innerHTML = description;
    document.querySelector("#chi-weather-icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector("#chi-hi").innerHTML =
      "hi " + temp_max.toFixed(0) + " <span>&#176 </span>";
    document.querySelector("#chi-low").innerHTML =
      " low " + temp_min.toFixed(0) + " <span>&#176 </span>";
  },

  // Vancouver, BC

  fetchWeatherVancouver: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeatherVan(data));
  },

  displayWeatherVan: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, temp_max, temp_min } = data.main;

    document.querySelector("#van-temp").innerHTML =
      "Temp: " + temp.toFixed(0) + "<span>&#176 </span>";
    document.querySelector("#van-desc").innerHTML = description;
    document.querySelector("#van-weather-icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector("#van-hi").innerHTML =
      "hi " + temp_max.toFixed(0) + " <span>&#176 </span>";
    document.querySelector("#van-low").innerHTML =
      " low " + temp_min.toFixed(0) + " <span>&#176 </span>";
  },

  // Toronto, ON

  fetchWeatherToronto: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeatherOt(data));
  },

  displayWeatherOt: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, temp_max, temp_min } = data.main;

    document.querySelector("#ot-temp").innerHTML =
      "Temp: " + temp.toFixed(0) + "<span>&#176 </span>";
    document.querySelector("#ot-desc").innerHTML = description;
    document.querySelector("#ot-weather-icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector("#ot-hi").innerHTML =
      "hi " + temp_max.toFixed(0) + " <span>&#176 </span>";
    document.querySelector("#ot-low").innerHTML =
      " low " + temp_min.toFixed(0) + " <span>&#176 </span>";
  },
};
weather.fetchWeatherScottsdale("Scottsdale");
weather.fetchWeatherLosAngeles("Los Angeles");
weather.fetchWeatherBeverlyHills("Beverly Hills");
weather.fetchWeatherSeattleWa("Seattle");
weather.fetchWeatherBoston("Boston");
weather.fetchWeatherMiami("Miami");
weather.fetchWeatherChicago("Chicago");
weather.fetchWeatherVancouver("Vancouver");
weather.fetchWeatherToronto("Toronto");

// Maps Locations API

function sctMapApi() {
  let options = {
    zoom: 8,
    center: { lat: 33.50259, lng: -111.92917 },
  };
  let map = new google.maps.Map(document.getElementById("sctMapApi"), options);
}

function laMapApi() {
  let options = {
    zoom: 8,
    center: { lat: 34.058601, lng: -118.418999 },
  };
  let map = new google.maps.Map(document.getElementById("laMapApi"), options);
}

function bhcMapApi() {
  let options = {
    zoom: 8,
    center: { lat: 34.067, lng: -118.418999 },
  };
  let map = new google.maps.Map(document.getElementById("bhcMapApi"), options);
}
function seaMapApi() {
  let options = {
    zoom: 8,
    center: { lat: 47.57273, lng: -122.32193 },
  };
  let map = new google.maps.Map(document.getElementById("seaMapApi"), options);
}

function boMapApi() {
  let options = {
    zoom: 8,
    center: { lat: 42.35114, lng: -71.04438 },
  };
  let map = new google.maps.Map(document.getElementById("boMapApi"), options);
}

function miMapApi() {
  let options = {
    zoom: 8,
    center: { lat: 25.76708, lng: -80.1931 },
  };
  let map = new google.maps.Map(document.getElementById("miMapApi"), options);
}

function chiMapApi() {
  let options = {
    zoom: 8,
    center: { lat: 41.90635, lng: -87.65544 },
  };
  let map = new google.maps.Map(document.getElementById("chiMapApi"), options);
}

function vanMapApi() {
  let options = {
    zoom: 8,
    center: { lat: 49.28339, lng: -123.11794 },
  };
  let map = new google.maps.Map(document.getElementById("vanMapApi"), options);
}

function otMapApi() {
  let options = {
    zoom: 8,
    center: { lat: 43.72598, lng: -79.45241 },
  };
  let map = new google.maps.Map(document.getElementById("otMapApi"), options);
}
