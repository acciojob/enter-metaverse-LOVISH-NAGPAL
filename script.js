//your JS code here. If required.
let statusPara = document.getElementById("status");
let button = document.getElementById("enterBtn");

button.addEventListener("click", () => {
  statusPara.outerHTML = "<h1 id='status'>Entered Metaverse</h1>";
});

