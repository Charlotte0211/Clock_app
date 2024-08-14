function updateTime() {
  // MADRID
  let madridElement = document.querySelector("#madrid");
  let madridDateElement = madridElement.querySelector(".date");
  let madridDate = moment.tz("Europe/Madrid").format("MMMM Do YYYY");
  let madridTimeElement = madridElement.querySelector(".time");
  let madridTime = moment
    .tz("Europe/Madrid")
    .format("hh:mm:ss [<small>]A[</small>]");
  madridTimeElement.innerHTML = madridTime;
  madridDateElement.innerHTML = madridDate;

  //EDINBURGH

  let edinburghElement = document.querySelector("#edinburgh");
  let edinburghDateElement = edinburghElement.querySelector(".date");
  let edinburghTimeZone = moment.tz("Europe/London");
  let edinburghTimeElement = edinburghElement.querySelector(".time");
  edinburghTimeElement.innerHTML = edinburghTimeZone.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
  edinburghDateElement.innerHTML = edinburghTimeZone.format("MMMM Do YYYY");

  // Sydney

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeZone = moment.tz("Australia/Sydney");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  sydneyTimeElement.innerHTML = sydneyTimeZone.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
  sydneyDateElement.innerHTML = sydneyTimeZone.format("MMMM Do YYYY");
}

function showSelectedCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", "").split("/")[1];
  let cityDate = moment().tz(cityTimeZone).format("MMMM Do YYYY");
  let cityTime = moment()
    .tz(cityTimeZone)
    .format("hh:mm:ss [<small>]A[</small>]");

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityDate}</div>
          </div>
        <div class="time">${cityTime}</div>
        </div>

`;
}

updateTime();
setInterval(updateTime, 1000);

let selectCity = document.querySelector("#city");
selectCity.addEventListener("change", showSelectedCity);
