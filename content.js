var selectables = document.querySelectorAll(".selectable")

selectables.forEach((selectable) => {
    selectable.addEventListener("click", () => {
      selectable.classList.toggle("selected-option")
    });
});