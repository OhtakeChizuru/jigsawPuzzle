// 参考：https://www.youtube.com/watch?v=hp9DxXl3YVg
// 画像の大きさ調整

let img = null;
let cutList = [];
let numberList = [];
let bango = -1;
const startBtn = document.querySelector(".restart");

// これで安定して画像が表示できるようになる。
function preload() {
  // 相対パスじゃないとだめ。
  img = loadImage("puzzles/data/paintingDatas/猫_絵画3.jpg");
}

function setup() {
  // 写真の大きさにCanvasの大きさも合わせないと絵が変になる。
  let canvas = createCanvas(500, 500);
  canvas.parent("canvas");

  // 画像の調整がうまくいかず、動画の大きさ以外対応できない。
  for (i = 0; i <= 24; i++) {
    let _x = (i % 5) * 100;
    let _y = int(i / 5) * 100;
    cutList[i] = img.get(_x, _y, 100, 100);
    numberList[i] = i;
  }
  for (let i = 0; i < 1; i++) {
    let from = int(random(0, 24));
    let to = int(random(0, 24));
    exchange(from, to);
  }
}

function draw() {
  background(5);
  for (i = 0; i <= 24; i++) {
    let _x = (i % 5) * 100;
    let _y = int(i / 5) * 100;

    if (i == bango) {
      _x = mouseX - 50;
      _y = mouseY - 50;
    }
    let number = numberList[i];
    image(cutList[number], _x, _y);
  }

  if (isClear() == 1) {
    alert("Clear!", width / 2, height / 2);
    // 綺麗に画像が出ないから、sleep機能をつけたい。
    // クリアしたら再度ジグソーパズルをセットする。
    setup();
  }
}

function mousePressed() {
  for (i = 0; i <= 24; i++) {
    let _x = (i % 5) * 100;
    let _y = int(i / 5) * 100;
    if (mouseX > _x && mouseX < _x + 100) {
      if (mouseY > _y && mouseY < _y + 100) {
        if (bango == -1) {
          bango = i;
        } else {
          exchange(bango, i);
          bango = -1;
        }
      }
    }
  }
}

function exchange(from, to) {
  let _chache = numberList[from];
  numberList[from] = numberList[to];
  numberList[to] = _chache;
}

function isClear() {
  for (let i = 0; i <= 24; i++) {
    if (numberList[i] != i) {
      return 0;
    }
  }
  return 1;
}

startBtn.addEventListener("click", setup());
