export { getLocationData };
import { format } from "date-fns";

async function getLocationData(locationName = "cairo") {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/` +
    locationName +
    `?unitGroup=metric&include=days&key=8QNJGXAPYFNUSS3G9WT6862CE&contentType=json
`,
    { mode: "cors" },
  );
  const jsonData = await response.json();
  const address = await jsonData.resolvedAddress;
  const celsius = await jsonData.days[0].temp;
  const condition = await jsonData.days[0].conditions;
  const dateTime = await jsonData.days[0].datetime;

  //Dom
  const cityName = document.querySelector(".location-name");
  const temperature = document.querySelector(".today");
  const description = document.querySelector(".description");
  const date = document.querySelector(".date");

  cityName.textContent = address;
  temperature.textContent = celsius + "°C";
  description.textContent = condition;
  date.textContent = format(dateTime, "PPPP");
  console.log(jsonData.days[0]);
}
