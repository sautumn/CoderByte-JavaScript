function ArithGeo(arr) {
if (arr.length < 2){ //make sure atleast 2 el in array
	return "-1";
} 

var diff = arr[1] - arr[0]

for (var i = arr.length - 1; i >= 0; i--) {
	if (diff === (arr[i] - arr[i-1]) ) {
		console.log(arr[i-1]);
		return "Arithmetic";
		}
	}

 var div = arr[1] / arr[0];

 for (var i = arr.length - 1; i >= 0; i--) {
	if (div === (arr[i] / arr[i-1]) ) {
		return "Geometric";
		}
	}

	return -1;
};


         

   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
console.log(ArithGeo([2, 6, 18, 54])); 
console.log(ArithGeo([2, 4, 6, 8]));                           


//Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]