	function *range(from, to) {
	   for(r = from;r <= to; r++) {
	   	yield r;
	   }
	}
	    
	for (var r of range(5, 10)) {
	        console.log( r );
	}
