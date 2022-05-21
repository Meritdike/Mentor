const btns = document.querySelectorAll (".nav-link");


btns.forEach(btn => {
    btn.addEventListener ('click', function(){
      btns.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
});


let valueDisplays = document.querySelectorAll(".counter");
let interval = 10400;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval( function() {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

