 function debounce (callback, timeToWait) {
	var timeoutID;
	return	function() {
		clearTimeout (timeoutID)
		timeoutID = setTimeout (callback, timeToWait)
	}
}
 
let iterator = 0;

function increaseIteratorBy1() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();

