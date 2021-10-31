//パズルの数字をシャッフルする。
export function shuffle(arr){
    //
    var n = arr.length;
    var i, temp;

    

    //n回動作し、ランダムにリストの数値を入れ替える。
    while(n){
        //shuffleする対象の配列の位置となる数字をランダムに生成する。
        n = n-1;
        i = Math.floor(Math.random()*n);
        // console.log("i:"+arr[i]);
        // console.log("n:"+arr[n]);

        //現在のn番目の配列を一時保管用の変数に入れる。
        temp = arr[n];
        //配列i番目の値を配列n番目の値に入れ替える。
        arr[n] = arr[i];
        // console.log("arr[n]:"+arr[n]);
        //配列n番目の値にtempの値に入れ替える。
        arr[i] = temp;
        // console.log("temp:"+arr[i]);

    }

    return arr;
}

// var arr = [1,2,3,4,5,6,7,8,9,10,11];

// console.log(shuffle(arr));