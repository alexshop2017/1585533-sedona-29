const hotelSearchButton = document.getElementById("hotel-search-header-button");
const hotelSearchDialogForm = document.querySelector(".hotel-search-dialog-form");
const hotelSearchStartDateInput = document.getElementById("hotel-start-date");
const hotelSearchEndDateInput = document.getElementById("hotel-end-date");
const hotelSearchAdultCountInput = document.getElementById("adults-count");
const hotelSearchChildrenCountInput = document.getElementById("children-count");

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
    hotelSearchDialogForm.classList.add("hotel-search-dialog-form-active");
    hotelSearchDialogForm.classList.remove("hotel-search-dialog-form-error");
});

hotelSearchDialogForm.addEventListener("submit", function (evt) {
    if (!isValidDate(hotelSearchStartDateInput.value)
        || !isValidDate(hotelSearchEndDateInput.value)
        || !isValidInteger(hotelSearchAdultCountInput.value) || hotelSearchAdultCountInput.value == 0
        || !isValidInteger(hotelSearchChildrenCountInput.value)
        ) {
      evt.preventDefault();
      hotelSearchDialogForm.classList.add("hotel-search-dialog-form-error");
    } else {
      localStorage.setItem("hotelSearchStartDate", hotelSearchStartDateInput.value);
      localStorage.setItem("hotelSearchEndDate", hotelSearchEndDateInput.value);
      localStorage.setItem("adultCount", hotelSearchAdultCountInput.value);
      localStorage.setItem("childrenCount", hotelSearchChildrenCountInput.value);
    }
  });

  function isValidDate(s) {
    var d = new Date(s);
    if ( Object.prototype.toString.call(d) === "[object Date]" )
    {
      if (isNaN(d.getTime()))
      {
        return false;
      }
      else
      {
        return true;
      }
    }
    else
    {
      return true;
    }
  }

  function isValidInteger(s) {
    return  !isNaN(s) && 
      !isNaN(parseInt(s));
  }

  hotelSearchDialogForm.addEventListener("webkitAnimationEnd", function (evt) {
    hotelSearchDialogForm.classList.remove("hotel-search-dialog-form-active");
    hotelSearchDialogForm.classList.remove("hotel-search-dialog-form-error");
  });
  