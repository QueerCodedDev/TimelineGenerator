// No longer save image, just render a smaller canvas and have a search function to 
// find episodes to save from scrolling. For recording auto scroll with increment. 
// Only render the entries that would fit to the canvas.

let media_data_json;
let entryManager;
let canvasDim = {
    'height': 50000,
    'width':  1000
};

// Auto scroll attempts
// let scroll_speed = 0;
// let auto_scroll  = false;
// let first_pass   = true;

function preload() {
    media_data_json = loadJSON('res/individual_data.json');
}

function setup() {
    createCanvas(canvasDim.width, canvasDim.height);
    textFont('Consolas'); //fixed width font
    //pixelDensity(2);

    // Create an EntryManager using the json data provided
    entryManager = new EntryManager(media_data_json.media, compress=true);
    
    //createCanvas(canvasDim.width, canvasDim.height);
    rectMode(CENTER);
    textAlign(CENTER);
}

function draw() {
    // Autoscroll attempt
    // if (first_pass) {
    //     translate(canvasDim.width/2, 0);
    //     first_pass = false;
    // }

    translate(canvasDim.width/2, 0)
    stroke(100);
    strokeWeight(6);
    line(0, 0, 0, canvasDim.height);
    entryManager.render();

    // Autoscroll attempt
    // if (auto_scroll) translate(0, scroll_speed);
}

// Autoscroll attempt
// function autoScroll(speed) {
//     auto_scroll = !auto_scroll;
//     scroll_speed = speed;
// }