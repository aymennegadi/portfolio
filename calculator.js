const timer = document.querySelector('.timer');

function updateTimer() {
    const time = new Date();
    timer.innerHTML = time.toLocaleTimeString();
}

setInterval(updateTimer, 1000);

updateTimer();


for(i=0;i<999;i++){
    console.log(5+4);
}


let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Erreur";
  }
}
