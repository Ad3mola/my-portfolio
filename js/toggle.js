const toggle = document.getElementById("switch");
const body = document.getElementById("body");

{
  toggle.addEventListener("click", () => {
    if (toggle.checked) {
      body.classList.add("day");
      body.classList.remove("night");
    } else {
      body.classList.add("night");
      body.classList.remove("day");
    }
  });
}
