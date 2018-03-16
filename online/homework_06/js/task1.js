var a = parseInt (prompt('Enter first side of triangle'));
var b = parseInt (prompt('Enter second side of triangle'));
var c = parseInt (prompt('Enter third side of triangle'));
var sum = (a + b + c) / 2;
var square =Math.sqrt(sum * (sum - a) * (sum - b) * (sum - c)).toFixed(2);	


if ((a <= 0) || (b <= 0) || (c <= 0)) {
	console.log('Incorrect data');
} else if(a + b > c && a + c > b && b + c > a) {
	if (a === b && b === c) {
	console.log('Type of triangle is Eguilateral triangle ' + square);
} else if ((a === b || a === c || b === c)) {
	console.log('Type of triangle is Isosceles triangle ' + square);
} else if ((c*c === (a*a + b*b))) {
	console.log('Type of triangle is Right triangle ' + square);
} else if ((a != b) || (b != c) || (b != c)) {
	console.log('Type of triangle is Scalene triangle ' + square);
}
} else console.log('Incorect data');






