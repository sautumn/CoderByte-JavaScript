function AdditivePersistence(num){

    var count = 0;
    add(num);
    function add(n){

        if (n < 10){
            return 0;
        }
        
        count++;

        var numarr = n.toString().split("")
        var sum = 0;

        for (var i = 0; i < numarr.length; i++){
            sum += parseInt(numarr[i],10);
        }
        if (sum.toString().length === 1){

            return count;
        }
        else{
            add(sum);
        }
    }
    return count;
}

console.log(multiplicationPersistence(277777788888899)); //3
console.log(multiplicationPersistence(25));          //1

