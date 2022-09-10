const toggleSpinner = (isLoading) => {
  if (isLoading == true) {
    document.getElementById("spinner").classList.remove("d-none");
  } else {
    document.getElementById("spinner").classList.add("d-none");
  }
};
