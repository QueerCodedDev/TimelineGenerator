let media_data_json;
let entryManager;
let canvasDim = {
    'height': 500,
    'width':  250
};

function preload() {
    media_data_json = loadJSON('res/individual_data.json');
}

function setup() {
    textFont('Consolas'); //fixed width font

    // Create an EntryManager using the json data provided
    entryManager = new EntryManager(media_data_json.media);
    entryManager.render();

    createCanvas(canvasDim.width, canvasDim.height);
    translate(canvasDim.width/2, 0);
    rectMode(CENTER);
}

function draw() {
    background(255,0,0);
    noLoop();
}