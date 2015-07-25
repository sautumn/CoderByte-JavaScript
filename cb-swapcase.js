function SwapCase(str) { 

  var letters = str.split('');

  var swapcase = [];

	for (var i = 0; i < letters.length; i++) {
   		if (letters[i] == letters[i].toUpperCase()){
   		swapcase.push(letters[i].toLowerCase());
   		}
   		else{
   		swapcase.push(letters[i].toUpperCase());
   		}
  	}
 return swapcase.join('');        
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
console.log(SwapCase("Autumn"));                            
