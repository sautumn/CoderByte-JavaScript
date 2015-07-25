function MultiplicativePersistence(num){

    var count = 0;
    mult(num);
    function mult(n){
        if (n < 10){
          return 0;
        }
      
        count++;

        var numarr = n.toString().split("")
        var sum = 1;

        for (var i = 0; i < numarr.length; i++){
            sum = sum * parseInt(numarr[i],10);
        }
        if (sum.toString().length === 1){

            return count;
        }
        else{
            mult(sum);
        }
    }
    return count;
}

console.log(multiplicationPersistence(277777788888899)); //3
console.log(multiplicationPersistence(25));          //1

