function counting(numbers) {
  var number= 0
  var sum = 0
  while (number < 11){
    var thisNum = number;
    number = number +1
    sum= thisNum+sum
  }

  if(number < 11) {
    //DO THIS
  }
  else {
    // DO That
  }
  console.log("this is my sum: " + sum);
}
counting();
