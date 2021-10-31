//tileをクリックしたら移動するようにしたい。htmlに認識されない、、、なぜ、、、

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
