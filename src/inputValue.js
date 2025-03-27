export { getInputValue };
import { getLocationData } from "./locationData";

function getInputValue() {
  const searchInput = document.querySelector("#query");

  console.log(searchInput);
  console.log(searchInput.value);

  searchInput.addEventListener("change", () => {
    if (searchInput.value === "") {
      return;
    }
    return getLocationData(searchInput.value);
  });
}
