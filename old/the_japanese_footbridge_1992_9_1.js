
// ひとまずthe_japanese_footbridge_1992_9_1.jpgでジグソーパズルを作ってみる。参照コード：https://www.codeproject.com/script/Articles/ViewDownloads.aspx?aid=395453

const { xml } = require("cheerio/lib/static");
const { Path, Point, Size, Group } = require("paper/dist/paper-core");

// 画像を切り取る
function getMask(tileRatio, topTab, rightTab, bottomTab, leftTab, tileWidth){

    let curvyCoords = [
        0, 0, 35, 15, 37, 5,
        37, 5, 40, 0, 38, -5,
        38, -5, 20, -20, 50, -20,
        50, -20, 80, -20, 62, -5,
        62, -5, 60, 0, 63, 5,
        63, 5, 65, 15, 100, 0
    ];

    let mask = new Path();
    let tileCenter = view.center;

    let topLeftEdge = new Point(-4,4);

    mask.moveTo(topLeftEdge);

    // Top
    for(let i =0; i<curvyCoords.length/6; i++){
        let p1 = topLeftEdge + new Point(curvyCoords[i*6+0]*tileRatio, topTab*curvyCoords[i*6+1]*tileRatio);
        let p2 = topLeftEdge + new Point(curvyCoords[i*6+2]*tileRatio, topTab*curvyCoords[i*6+3]*tileRatio);
        let p3 = topLeftEdge + new Point(curvyCoords[i*6+4]*tileRatio, topTab*curvyCoords[i*6+5]*tileRatio);

        mask.cubicCurveTo(p1,p2,p3);
    }

    // Right
    let topRightEdge = topLeftEdge + new Point(tileWidth, 0);

    for(let i=0; i<curvyCoords.length/6; i++){
        let p1 = topRightEdge + new Point(-rightTab*curvyCoords[i*6+1]*tileRatio, curvyCoords[i*6+0]*tileRatio);
        let p2 = topRightEdge + new Point(-rightTab*curvyCoords[i*6+2]*tileRatio, curvyCoords[i*6+3]*tileRatio);
        let p3 = topRightEdge + new Point(-rightTab*curvyCoords[i*6+4]*tileRatio, curvyCoords[i*6+5]*tileRatio);
        mask.cubicCurveTo(p1, p2, p3);
    }

    // Bottom
    let bottomRightEdge = topRightEdge + new Point(0, tileWidth);
    for(let i =0; i<curvyCoords.length/6; i++){
        let p1 = bottomRightEdge-newPoint(curvyCoords[i*6+0]*tileRatio, bottomTab*curvyCoords[i*6+1]*tileRatio);
        let p2 = bottomRightEdge-newPoint(curvyCoords[i*6+2]*tileRatio, bottomTab*curvyCoords[i*6+3]*tileRatio);
        let p3 = bottomRightEdge-newPoint(curvyCoords[i*6+4]*tileRatio, bottomTab*curvyCoords[i*6+5]*tileRatio);
        mask.cubicCurveTo(p1, p2, p3);
    }

    // Left
    let bottomLeftEdge = bottomRightEdge - new Point(tileWidth, 0);
    for(let i=0; i<curvyCoords.length/6; i++){
        let p1 = bottomLeftEdge-new Point(-leftTab*curvyCoords[i*6+1]*tileRatio, curvyCoords[i*6+0]*tileRatio);
        let p2 = bottomLeftEdge-new Point(-leftTab*curvyCoords[i*6+3]*tileRatio, curvyCoords[i*6+2]*tileRatio);
        let p3 = bottomLeftEdge-new Point(-leftTab*curvyCoords[i*6+5]*tileRatio, curvyCoords[i*6+4]*tileRatio);

        mask.cubicCurveTo(p1,p2,p3);
    }
    return mask;
}


let cloneImg = instance.puzzleImage.clone();

let img = getTileRaster(
    cloneImg,
    new Size(instance.tileWidth, instance.tileWidth),
    new Point(instance.tileWidth*x, instance.tileWidth*y)
);

let border = mask.clone();
border.strokeColor = '#ccc'
border.strokeWidth = 5;

let tile = new Group(mask, border, img, border);
tile.clipped = true;
tile.opacity =1;

tile.shape=shape;
tile.imagePosition = new Point(x,y);

//形をそれぞれのピースにランダムに割り当てる。






