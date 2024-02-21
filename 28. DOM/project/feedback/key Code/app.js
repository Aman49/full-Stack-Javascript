const insert = document.querySelector("#insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
        <div class = "key">
            ${event.key === " " ? "space" : event.key}
        </div>
        <div class = "key">
            ${event.keyCode === " " ? "space" : event.keyCode}
        </div>
        <div class = "key">
            ${event.code === " " ? "space" : event.code}
        </div>
    `;
});
