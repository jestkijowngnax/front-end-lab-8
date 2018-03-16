function forEach(arr,func){
    for(var i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
};

function getTransformedArray(arr,func){
    var res = [];
    forEach(arr, function(el) {
       res.push(func(el));
   })
    return res;
};

var arr = [1, 7, 20];

console.log(getTransformedArray(arr, function(el) {
    return el + 1;
}));