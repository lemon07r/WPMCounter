
let pressCount = 0;
let duration = 0;

function counterUpdate() {
  let cpm = (pressCount / (duration/10)) * 60;
  let wpm = cpm / 5;

  document.getElementById("counter").innerText = wpm.toFixed(1);
}

window.setInterval(() => {
  duration++;
  counterUpdate();
}, 100);

document.addEventListener("keypress", logKey);

function logKey() {
  pressCount++;
  setTimeout(function(){ pressCount--;}, 10000);
}
