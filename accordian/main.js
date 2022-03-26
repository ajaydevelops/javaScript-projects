let button = document.getElementById("btn");

let p = document.querySelector("p");

p.style.display = "none";

button.addEventListener("click", () => {
  if (button.innerText === "+") {
    p.style.display = "block";
    button.innerText = "-";
  } else {
    button.innerText = "+";
    p.style.display = "none";
  }
});
