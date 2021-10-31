function shuffle(arr) {
    var n = arr.length;
    var temp, i;

    while (n) {
        console.log(n);
        i = Math.floor(Math.random() * 10);
        console.log("i:"+i)
        temp = arr[n];
        console.log("temp:"+temp);
        arr[n] = arr[i];
        console.log("arr[n]:"+arr[n]);
        arr[i] = temp;
        console.log("arr[i]:"+arr[i]);
        console.log("arr:"+arr);
        n=n-1

    }
    return arr;
}

var arr = ["",1,2,3,4,5,6,7,8];
shuffle(arr);