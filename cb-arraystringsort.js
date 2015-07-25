var arr = ['Matt','Anna','AUTUMmn','Sue','Bob'];

// arr.sort(function(a, b){
//   return a.length - b.length; // ASC -> a - b; DESC -> b - a
// });

// console.log(arr);

// var arr2 = [5,2,8,1,0,5,3,888,6,44,23,67]
// console.log(arr2.sort());

arr.sort(function(a, b){
	var a = a.toLowerCase(), b = b.toLowerCase(); //Sorted by values, must check case 1st
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
})


console.log(arr)
