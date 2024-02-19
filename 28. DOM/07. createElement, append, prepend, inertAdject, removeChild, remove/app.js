// ------------------------------------
// createElement()
// appendChild()
// append()
// prepend()
// insertBefore()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------
let h1 = document.createElement("h1");
h1.style.color = "pink";
h1.innerText = "I am created Element";
h1.style.display = "inline";
let ul = document.querySelector(".new-list");
ul.beforeBegin(h1);
