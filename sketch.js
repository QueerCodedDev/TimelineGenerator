let media_data_json;
let entryManager;
let canvasDim = {
    'height': 50000,
    'width':  1000 // canvas still too narrow, but only when grouped.
};

function preload() {
    media_data_json = loadJSON('res/individual_data.json');
}

function setup() {
    createCanvas(canvasDim.width, canvasDim.height);
    textFont('Consolas'); //fixed width font

    // Create an EntryManager using the json data provided
    entryManager = new EntryManager(media_data_json.media, group=false, compress=true);
    entryManager.formatEntries();
    
    rectMode(CENTER);
    textAlign(CENTER);
}

function draw() {
    translate(canvasDim.width/2, 0);
    stroke(100);
    strokeWeight(6);
    line(0, 0, 0, canvasDim.height);
    entryManager.render();
}