tiles = [];

window.onload = function() {
    
    var arr = ['', '1', '2', '3', '4', '5', '6', '7', '8'];
    // シャッフル
    shuffle(arr);

    var panel = document.getElementById('panel');
    
    // div要素作成
    for (i = 0; i < 9; i++){
        var div = document.createElement('div');
        div.className = 'tile';
        div.index = i;
        div.textContent = arr[i];
        div.onclick = click;
        panel.appendChild(div);
        tiles.push(div);
    }
} 

// シャッフル用関数
function shuffle(arr) {
    var n = arr.length;
    var temp, i;

    while (n) {
        i = Math.floor(Math.random() * n--);
        temp = arr[n];
        arr[n] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

// タイルのtextContentを入れ替える
function swapContent(i, k){
    
    var temp = tiles[i].textContent;
    tiles[i].textContent = tiles[k].textContent;
    tiles[k].textContent = temp;
    
}

// クリック時の処理
function click(e) {
    
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
