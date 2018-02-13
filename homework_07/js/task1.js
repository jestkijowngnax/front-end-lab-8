var n = prompt('Enter natural number');

if (n > 0 && n <=20){

	for (var i = 0; i < n; i++) {
		var str = '';
    for (var j = 1; j < n-i; j++) { // -1 space
    	str = str + '   ';
    }
    for (var x = 1; x <= (2*i+1); x++) { // every prompt +2 cube
    	str = str + '[~]';
    }
    console.log(str + '\n'); // adding new line after each row
}
}else if (n < 0 || n > 20 || isNaN(n)) {
	console.error('Incorrect');
}