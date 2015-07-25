function DivisionStringified(num1,num2) { 
  
  var sum = Math.round(num1 / num2);
  console.log(sum);

  var sumArray = sum.toString().split('').reverse();

  var newArray = [];

  for (var i = 0 ; i < sumArray.length; i++){
    if ( i % 3 == 0 && i != 0){ // every third element
      newArray.push(',');
  	}
    newArray.push(sumArray[i]);
  };
  return newArray.reverse().join('');
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
console.log(DivisionStringified(2,3));  
//console.log(DivisionStringified(1235522222555504,1));  