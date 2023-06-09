const dark = document.querySelector("#dark-mode");
const light = document.querySelector("#light-mode");
const body = document.querySelector("body");

function darkMode() {
  body.style.backgroundColor = "black";
  body.style.color = "white";
}

function lightMode() {
  body.style.backgroundColor = "white";
  body.style.color = "black";
}

light.addEventListener("click", lightMode);
dark.addEventListener("click", darkMode);

const btn = document.querySelector("#btn");

btn.addEventListener("click", function (evt) {
  // testing!
  const li = document.createElement("li");
  const inp = document.querySelector("input");
  li.textContent = inp.value;
  document.querySelector("ul").appendChild(li);
  inp.value = "";
  //   console.log(evt);
});
