function SecondGreatLow(arr) { 

  if (arr.length < 2){ // must be atleast 2 elemenst
  	return;
  }

  if (arr.length === 2){
    return arr[1] + ' ' + arr[0];
  }
  //sort javascript fn for #'s'
  arr.sort(function(a, b){
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    else
        return 0;});

  //remove duplicates in array
  var newArray = arr.filter(function(elem, pos) {
    return arr.indexOf(elem) == pos;
  }); 

  var secondLow = newArray[1];
  var secondGreat = newArray[(newArray.length-2)];

  return secondLow.toString() + ' ' + secondGreat.toString();
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
console.log(SecondGreatLow([80,80]));                            



//Input = 1, 42, 42, 180 Output = "42 42"
//Input = 4, 90 Output = "90 4"
//[7, 7, 12, 98, 106] the output should be 12 98.