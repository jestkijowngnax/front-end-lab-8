const waitFewSec = (msec, triggerFail) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (triggerFail) {
        reject(false);
        return;
      }

      resolve(true);
    }, msec);
  });
};
const asyncFn = async () => {
  const result = await waitFewSec(1000);
  return result;
};
  
const doAsyncMagic = async() => {
	let arr = [];
    for(var i = 0; i<4; i++) {
	    var result =	await asyncFn().then(result => result)
	    arr.push(result);
    }
	console.log(arr);
}
doAsyncMagic();

async function* rangeGen() {
  for (let i = 1; i <= 15; i++) {
    yield i;
  }
}

async function iterateRange() {
	result = 0;
  for await (const number of rangeGen()) {
    result += number;
  }
	console.log(result);
}
iterateRange();

