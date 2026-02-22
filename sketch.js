let media_data_json;
let entryManager;
let canvasDim = {
    'height': 1000,
    'width':  500
};

function preload() {
    media_data_json = loadJSON('res/individual_data.json');
}

function setup() {
    textFont('Consolas'); //fixed width font

    // Create an EntryManager using the json data provided
    entryManager = new EntryManager(media_data_json.media);
    

    createCanvas(canvasDim.width, canvasDim.height);
    rectMode(CENTER);
    textAlign(CENTER);
}

function draw() {
    noBackground();
    translate(canvasDim.width/2, 0);
    entryManager.render();
    noLoop();
}