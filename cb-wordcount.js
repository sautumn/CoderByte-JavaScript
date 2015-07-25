function Palindrome(str) { 
  str = str.replace(' ', ''); //remove white space from og str
  var rev = str.replace(' ','').split('').reverse().join('');//remove whitespace,split into array, rev array, join to str

  if (str.toLowerCase() === rev.toLowerCase()){
  	return "true";
  }
  else{
  	return "false";
  }
         
}
   

console.log(Palindrome("dont nod"));                            


