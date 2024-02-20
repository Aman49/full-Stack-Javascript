let btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
  let color = btn.value;
  btn.addEventListener("click", () => {
    changeBg(color);
  });
});
const body = document.body;

let changeBg = (color) => {
  body.className = "";
  body.className = color;
};
