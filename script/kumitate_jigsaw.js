// 参考：https://www.youtube.com/watch?v=hp9DxXl3YVg
// 画像の大きさ調整

let img = null;
let cutList = [];
let numberList = [];
let bango = -1;


// これで安定して画像が表示できるようになる。
function preload(){
    // 相対パスじゃないとだめ。
    img = loadImage("puzzles/data/the_japanese_footbridge_1992.9.1.jpg");
}

function setup(){
    // 写真の大きさにCanvasの大きさも合わせないと絵が変になる。
    createCanvas(600,400);
    // 画像の調整がうまくいかず、動画の大きさ以外対応できない。
    for(i=0;i<=23;i++){
        let _x= i%6 * 100;
        let _y=int(i/6)*100;
        cutList[i] = img.get(_x,_y,100,100);
        numberList[i] = i;
    }
    for(let i=0; i<1; i++){
        let from = int(random(0, 24));
        let to = int(random(0, 24));
        exchange(from, to);
    }
    
    
    
}

function draw(){
    background(30);
    for(i=0;i<=23;i++){
        let _x= i%6 * 100;
        let _y=int(i/6)*100;

        if(i == bango){
            _x = mouseX-50;
            _y = mouseY-50;
        }
        let number = numberList[i];
        image(cutList[number],_x,_y);
    }

    if(isClear()==1){

        alert('Clear!', width/2, height/2);

    }
    
}

function mousePressed(){
    for(i=0;i<=23;i++){
        let _x= i%6 * 100;
        let _y=int(i/6)*100;
        if(mouseX > _x && mouseX< _x +100){
            if(mouseY > _y && mouseY< _y +100){
                if(bango ==-1){
                    bango = i;
                }else{
                    exchange(bango, i);
                    bango = -1;
                }
                
            }
        }


    }

}

function exchange(from, to){
    let _chache = numberList[from];
    numberList[from] = numberList[to];
    numberList[to]=_chache;
}

function isClear(){
    for(let i=0; i<=23; i++){
        if(numberList[i] != i){
            return 0;
        }
    }
    return 1;
}



