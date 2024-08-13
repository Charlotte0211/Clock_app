function updateTime() {
  // MADRID
  let madridElement = document.querySelector("#madrid");
  let madridDateElement = madridElement.querySelector(".date");
  let madridDate = moment.tz("Europe / Madrid").format("MMMM Do YYYY");
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

updateTime();
setInterval(updateTime, 1000);

function showSelectedCountry(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "paris") {
      alert(` It is ${parisTime} in Paris, France `);
    }
    if (event.target.value === "tokyo") {
      alert(` It is ${tokyoTime} in Tokyo, Japan `);
    }
    if (event.target.value === "sydney") {
      alert(` It is ${sydneyTime} in Sydney, Australia `);
    }
  }
}

let parisTime = moment.tz("Europe/Paris").format("dddd, MMMM D, YYYY hh:mm A");
parisTime.innerHTML = ` It is ${parisTime} in Europe/Paris `;

let tokyoTime = moment.tz("Asia/Tokyo").format("dddd, MMMM D, YYYY hh:mm A");
tokyoTime.innerHTML = ` It is ${tokyoTime} in Asia/Tokyo `;

let sydneyTime = moment
  .tz("Australia/Sydney")
  .format("dddd, MMMM D, YYYY hh:mm A");
sydneyTime.innerHTML = ` It is ${sydneyTime} in Australia/Sydney`;

let selectCity = document.querySelector("#city");
selectCity.addEventListener("change", showSelectedCountry);
