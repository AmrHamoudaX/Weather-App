export { locationData };
const weatherApiKey = "8QNJGXAPYFNUSS3G9WT6862CE";

function locationData(locationName) {
    fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/` +
        locationName +
        `?unitGroup=metric&include=days&key=8QNJGXAPYFNUSS3G9WT6862CE&contentType=json
`,
        {
            method: "GET",
            header: {},
            mode: "cors",
        },
    )
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
}
