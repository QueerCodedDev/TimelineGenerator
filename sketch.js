let media_data_json;
let entryManager;
let canvasDim = {
    'height': 5000,
    'width':  1000
};
let bigCanvas;

function preload() {
    media_data_json = loadJSON('res/individual_data.json');
}

function setup() {
    bigCanvas = createGraphics(canvasDim.width, canvasDim.height);
    bigCanvas.textFont('Consolas'); //fixed width font
    //bigCanvas.pixelDensity(2);

    // Create an EntryManager using the json data provided
    entryManager = new EntryManager(media_data_json.media);
    
    //createCanvas(canvasDim.width, canvasDim.height);
    bigCanvas.rectMode(CENTER);
    bigCanvas.textAlign(CENTER);
    
}

function draw() {
    //if (canvasDim.height < 5725000) canvasDim.height+=10000;
    //resizeCanvas(canvasDim.width, canvasDim.height); //<-- this works but is awful
    bigCanvas.translate(canvasDim.width/2, 0);
    bigCanvas.stroke(100);
    bigCanvas.strokeWeight(6);
    bigCanvas.line(0, 0, 0, canvasDim.height);
    entryManager.render();
    noLoop();
    console.log('ready to save');
}

function keyTyped() {
    if (key === 's') {
        bigCanvas.save('myLargeImage.png');
    }
}