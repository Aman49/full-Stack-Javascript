document.getElementById("btn").addEventListener("click", () => {
  const op = document.querySelector("#selectOp").value;
  const num1 = parseInt(document.querySelector(".num1").value);
  const num2 = parseInt(document.querySelector(".num2").value);
  console.log(num1, num2);
  const res = document.querySelector(".result");
  switch (op) {
    case "plus":
      res.innerHTML = `<h1>${num1 + num2}</h1>`;
      break;
    case "dev":
      res.innerHTML = `<h1>${num1 / num2}</h1>`;
      break;
    case "multi":
      res.innerHTML = `<h1>${num1 * num2}</h1>`;
      break;
    case "minus":
      res.innerHTML = `<h1>${num1 - num2}</h1>`;
      break;
  }
});
