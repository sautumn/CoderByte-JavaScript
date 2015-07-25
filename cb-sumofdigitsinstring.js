

function NumberAddition(str) { 

   
  var digits = str.match(/\d+/g);

  if (digits === null){
		return;
	}

  var sum = 0;
  for (var i = 0; i < digits.length; i++) {
   	sum += parseInt(digits[i]);
   }
   return sum;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
console.log(NumberAddition(("ayty")));                            


