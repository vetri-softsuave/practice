const btn = document.querySelector(".btn");
const out = document.getElementById("out");

btn.addEventListener("click", change);

function change() {
  out.innerHTML = "welcome vetri";
}
