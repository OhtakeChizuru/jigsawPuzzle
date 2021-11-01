// import { shuffle } from "./modules/shuffle.js";
const randomize = document.querySelector('.randomize');
var tiles = [];
//HTML文書の読み込みが終わったら、パズルを生成する。（＝＞これが動的というもの）


window.onload = function (){

    //ボタンを押すと新しいゲーム
    randomize.addEventListener('click', result);
    
    
    //パズルのタイルに表示する数字の配列を作成し、最後シャッフルする。
    

    function result(){

        var number = ['',1,2,3,4,5,6,7,8];
    
        shuffle(number);

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
            tileParts.onclick = click;
            //tileをpanel要素の子要素とする。
            panel.appendChild(tileParts);
            tiles.push(tileParts);

        }
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

// タイルのtextContentを入れ替える
function swapContent(i, k){
    
    var temp = tiles[i].textContent;
    tiles[i].textContent = tiles[k].textContent;
    tiles[k].textContent = temp;
    
}


//クリックした時の動作が決まっている。空白の部分と入れ替える。
function click(e) {
    
    //クリックしたタイルのインデックスを取得する。
    var i = e.target.index;

    if (i <= 5 && tiles[i + 3].textContent == '' ){
        // 下と入れ替え
        swapContent(i, i + 3);
    }else if ( i >= 3 && tiles[i - 3].textContent == ''){
        // 上と入れ替え
        swapContent(i, i - 3);
    }else if (i % 3 !== 2 && tiles[i + 1].textContent == ''){
        // 右と入れ替え
        swapContent(i, i + 1);
    }else if (i % 3 !== 0 && tiles[i - 1].textContent == ''){
        // 左と入れ替え
        swapContent(i, i - 1);
    }
}

//新しくシャッフルしてゲームをもう一度行う関数


