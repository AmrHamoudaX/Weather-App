export { getInputValue };
import { getLocationData } from "./locationData";
import { getComingDays } from "./comingDays";

function getInputValue() {
  getLocationData("cairo");
  getComingDays("cairo");
  const searchInput = document.querySelector("#query");

  console.log(searchInput);
  console.log(searchInput.value);

  searchInput.addEventListener("change", () => {
    if (searchInput.value === "") {
      return;
    }
    getLocationData(searchInput.value);
    getComingDays(searchInput.value);
  });
}
