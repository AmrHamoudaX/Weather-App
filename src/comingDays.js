export { getComingDays };
import { format } from "date-fns";

async function getComingDaysData(locationName) {
  const fetchData = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/` +
    locationName +
    `?unitGroup=metric&include=days&key=8QNJGXAPYFNUSS3G9WT6862CE&contentType=json
`,
    { mode: "cors" },
  );
  const jsonData = await fetchData.json();
  const firstDay = jsonData.days[1];
  const secondDay = jsonData.days[2];
  const thirdDay = jsonData.days[3];
  const fourthDay = jsonData.days[4];
  const fifthDay = jsonData.days[5];
  const sixthDay = jsonData.days[6];
  return {
    formatFirstDay: format(firstDay.datetime, "cccc"),
    tempFirstDay: firstDay.temp,
    formatSecondDay: format(secondDay.datetime, "cccc"),
    tempSecondDay: secondDay.temp,
    formatThirdDay: format(thirdDay.datetime, "cccc"),
    tempThirdDay: thirdDay.temp,
    formatFourthDay: format(fourthDay.datetime, "cccc"),
    tempfourthDay: fourthDay.temp,
    formatFifthDay: format(fifthDay.datetime, "cccc"),
    tempFifthDay: fifthDay.temp,
    formatSixthDay: format(sixthDay.datetime, "cccc"),
    tempSixthDay: sixthDay.temp,
  };
}
async function getComingDays(locationName = "cairo") {
  const comingDays = await getComingDaysData(locationName);
  console.log(comingDays);
  //Dom
  //Get Dom elements
  const firstDay = document.querySelector(".first-day");
  const tempFirst = document.querySelector(".temp-first");
  const secondDay = document.querySelector(".second-day");
  const tempSecond = document.querySelector(".temp-second");
  const thirdDay = document.querySelector(".third-day");
  const tempThird = document.querySelector(".temp-third");
  const fourthDay = document.querySelector(".fourth-day");
  const tempFourth = document.querySelector(".temp-fourth");
  const fifthDay = document.querySelector(".fifth-day");
  const tempFifth = document.querySelector(".temp-fifth");
  const sixthDay = document.querySelector(".sixth-day");
  const tempSixth = document.querySelector(".temp-sixth");

  //Text-Content
  firstDay.textContent = comingDays.formatFirstDay;
  tempFirst.textContent = comingDays.tempFirstDay + "°C";
  secondDay.textContent = comingDays.formatSecondDay;
  tempSecond.textContent = comingDays.tempSecondDay + "°C";
  thirdDay.textContent = comingDays.formatThirdDay;
  tempThird.textContent = comingDays.tempThirdDay + "°C";
  fourthDay.textContent = comingDays.formatFourthDay;
  tempFourth.textContent = comingDays.tempfourthDay + "°C";
  fifthDay.textContent = comingDays.formatFifthDay;
  tempFifth.textContent = comingDays.tempThirdDay + "°C";
  sixthDay.textContent = comingDays.formatSixthDay;
  tempSixth.textContent = comingDays.tempSixthDay + "°C";
}
