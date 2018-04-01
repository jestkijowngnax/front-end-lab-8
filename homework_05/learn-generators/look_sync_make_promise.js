function askFoo () {
  return new Promise(function (resolve, reject){
    resolve('foo');
  });
}

function run (generator) {
  var lol = generator();

  function go(result) {
    if (result.done) return result.value;

    return result.value.then(function (value) {
      return go(lol.next(value));
    }, function (error) {
      return go(lol.throw(error));
    });

  }

  go(lol.next());
}

run(function* () {
  try {
    var foo = yield askFoo();
    console.log(foo);
  } catch (e) {
    console.log(e);
  }
});