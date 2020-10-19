const hotelSearchButton = document.getElementById("hotel-search-header-button");
const hotelSearchDialogForm = document.querySelector(".hotel-search-dialog-form");
const hotelSearchStartDateInput = document.getElementById("hotel-start-date");
const hotelSearchEndDateInput = document.getElementById("hotel-end-date");
const hotelSearchAdultCountInput = document.getElementById("adults-count");
const hotelSearchChildrenCountInput = document.getElementById("children-count");
const hotelSearchDialogSubmitButton = document.getElementById("hotel-search-dialog-submit");

let isStorageSupport = true;

try {
  hotelSearchStartDate = localStorage.getItem("hotelSearchStartDate");
  hotelSearchEndDate = localStorage.getItem("hotelSearchEndDate");
  adultCount = localStorage.getItem("adultCount");
  childrenCount = localStorage.getItem("childrenCount");

  if ( hotelSearchStartDate )
  {
      hotelSearchStartDateInput.value = hotelSearchStartDate;
  }
  if ( hotelSearchEndDate )
  {
      hotelSearchEndDateInput.value = hotelSearchEndDate;
  }
  if ( adultCount )
  {
      hotelSearchAdultCountInput.value = adultCount;
  }
  if ( childrenCount )
  {
      hotelSearchChildrenCountInput.value = childrenCount;
  }
} catch (err) {
  isStorageSupport = false;
}

hotelSearchButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    hotelSearchDialogForm.classList.toggle("visually-hidden");

    if (isStorageSupport) {
      } else {
      }
});

hotelSearchDialogForm.addEventListener("submit", function (evt) {
    if (!hotelSearchStartDateInput.value
        || !hotelSearchEndDateInput.value
        || !hotelSearchAdultCountInput.value
        || !hotelSearchChildrenCountInput.value
        ) {
      evt.preventDefault();
    } else {
      localStorage.setItem("hotelSearchStartDate", hotelSearchStartDateInput.value);
      localStorage.setItem("hotelSearchEndDate", hotelSearchEndDateInput.value);
      localStorage.setItem("adultCount", hotelSearchAdultCountInput.value);
      localStorage.setItem("childrenCount", hotelSearchChildrenCountInput.value);
    }
  });