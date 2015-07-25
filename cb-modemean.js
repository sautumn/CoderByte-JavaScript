function meanMode(arr){

	function maximum(key){
		if (hash[key] > (hash[modes[0]] || 0)){ // if key is greater than 1st item in mode or 0 (empty)
			modes = [key];} //if yes then make that the 1st item in mode
		else if (hash[key] === hash[modes[0]] && (key != modes[0])) // else if it EQUALS the item in mode (repeat) add key to mode
			modes.push(key); // adds modes that are equal to each other
	}

	var hash = new Object();
	var max = new Object();

	// Key of hash with greatest number of occurrences
	modes = [0];

	for (var i = 0; i < arr.length; i++) {
		
		var key = arr[i].toString(); //sets array val to key

		if (key in hash) {			//checks to see if in hash
			if(hash.hasOwnProperty(key)){ // if it is increm 1
				hash[key] += 1;
				// Max check.
				maximum(key); //call max fn
			}
		}
		else{
			hash[key] = 1;
			maximum(key); //Call max fn
		}
	}

	var avg = 0;

	for (var i = 0; i < arr.length; i++) {
		avg += arr[i];
	}
	avg = avg / arr.length;

	if (avg == modes[0]){ //coderbyte challenge only included one mode not multiple
		return 1;
	}
	else{
		return 0;
	}



};

console.log(meanMode([4, 4, 4, 6, 2]));

