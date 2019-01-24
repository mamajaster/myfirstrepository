setTimeout(function(){
  var sum = 0;
  for(var i = 0; i < 1000001; i = i + 2){
      sum = sum + i
  }
  console.log(document.getElementById('paragraph').innerHTML);
  document.getElementById('paragraph').innerHTML = sum
},1000)
