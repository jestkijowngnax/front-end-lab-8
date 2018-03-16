function reverseNumber(n)
{
	return Math.sign(n)*parseInt(n.toString().split('').reverse().join(''));
}
reverseNumber(123);