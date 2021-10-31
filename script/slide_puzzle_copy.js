// import { shuffle } from "./modules/shuffle.js";

//HTML文書の読み込みが終わったら、パズルを生成する。（＝＞これが動的というもの）
window.onload = function (){
    //パズルのタイルに表示する数字の配列を作成し、最後シャッフルする。
    var number = ['',1,2,3,4,5,6,7,8];
    
    shuffle(number);

    console.log(number);



    //ブラウザ上のid=panelを持つ要素を返す
    var panel = document.getElementById("panel");

    //div要素作成(9枚のパネル)
    for (i=0; i<9; i++){
        //div要素を持つエレメントを作成する。
        var tileParts = document.createElement("div");
        //class名を指定する。
        tileParts.className="tile";
        //tileParts(div)が持つindexを定義する（でも、最後にtileにpushするのでいらない気がする、、、最後にこの行を抜いて試してみる）
        tileParts.index = i;
        //tileParts(div)にテキスト情報を付与する。
        tileParts.textContent = number[i];
        //tileParts(div)にクリックした時の動作を加える（関数は後で作成する）。
        tileParts.onclick = '';
        //tileをpanel要素の子要素とする。
        panel.appendChild(tileParts);

    }

}

//数字をshuffleする。
function shuffle(arr){
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

//clickした時の動作を定義する関数

//新しくシャッフルしてゲームをもう一度行う関数


