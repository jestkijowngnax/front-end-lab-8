function forEach(arr,func){
    for(var i = 0; i < arr.length; i++) {
        func(arr[i])
    }
};

function getFilteredArray(arr,func) {
    var resultArr = [];
    forEach(arr, function(el) {
        func(el) ? resultArr.push(el) : resultArr
    })
    return resultArr;
};

console.log(getFilteredArray([1, 7, 20], function predicate(el) {
 return el > 3;
}))
