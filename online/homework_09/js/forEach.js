function forEach(arr,func){
    for(var i = 0; i < arr.length; i++) {
        func(arr[i]);
        }
    };

    var arr = [3, 5, 2];

    forEach(arr, function(el){
        console.log(el);
    })


