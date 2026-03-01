// Might have to ditch the large canvas size thing, and make several smaller
// canvases and stitch them together using Aesprite or something.
// There might be another way to maintain the large canvas size idea,
// but it very well may be more work than it is worth.

// Ignore above. No longer save image, just render a smaller canvas and have a search function to 
// find episodes to save from scrolling. For recording auto scroll with increment. 
// Only render the entries that would fit to the canvas.

let media_data_json;
let entryManager;
let canvasDim = {
    'height': 50000,
    'width':  5000
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
    bigCanvas.translate(canvasDim.width/2, canvasDim.height * entryManager.render_count);
    bigCanvas.stroke(100);
    bigCanvas.strokeWeight(6);
    bigCanvas.line(0, 0, 0, canvasDim.height);
    entryManager.render();
    console.log('ready to save');

    noLoop();
}

function keyTyped() {
    if (key === 's') {
            bigCanvas.save(`canvas${entryManager.render_count}.png`);
    }
}