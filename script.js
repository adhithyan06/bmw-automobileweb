document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submitBtn");

  const fullNameInput = document.getElementById("fname");
  const countrySelect = document.getElementById("country");
  const subjectTextarea = document.getElementById("subject");

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const heroSection = document.getElementById("hero");
    heroSection.scrollIntoView({ behavior: "smooth" });

    fullNameInput.value = "";
    countrySelect.selectedIndex = 0;
    subjectTextarea.value = "";
  });
});
