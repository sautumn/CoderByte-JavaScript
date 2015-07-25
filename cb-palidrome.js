function Palindrome(str) { 
  str = str.replace(/\s+/g, ''); //remove space from og str
  var rev = str.split('').reverse().join('');//remove whitespace,split into array, rev array, join to str
  //console.log(str);
  //console.log(rev);
  if (str.toLowerCase() === rev.toLowerCase()){
  	return "true";
  }
  else{
  	return "false";
  }
         
}
   

console.log(Palindrome("do gEese see god"));                            


// "Amore, Roma" => valid
// "A man, a plan, a canal: Panama" => valid
// "No 'x' in 'Nixon'" => valid
// "Abba Zabba, you're my only friend" => invalid