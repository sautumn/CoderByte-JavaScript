function FirstReverse(str) { 
    var newStr = '';
  for(var i=0; i < str.length; i++){
      newStr += str[str.length-1-i];
    }
  return newStr;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());                            
