function outputNumbers(one, two) {
  var currentValue = one;
  var timer = setInterval(function () {
    console.log(currentValue);
    if (currentValue == two) {
      clearInterval(timer);
    }
    currentValue++;
  }, 1000);
}

outputNumbers(1, 10);
