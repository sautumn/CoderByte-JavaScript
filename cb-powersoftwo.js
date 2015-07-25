function PowersofTwo(num) { 
    function divideBy2(n){
	  if( n === 2 ){
	  	return "true";
	  }
	  if ( n < 2 ){
	  	return "false";
	  }
	  return divideBy2(n/2);	  
  }
  return divideBy2(num);
}

console.log(PowersofTwo(1));