let dataJSON;
let timeline;

function preload() {
    dataJSON = loadJSON('res/individual_data.json');
    Settings.font = loadFont('res/Consolas.ttf');
}

function setup() {
    timeline = new Timeline(dataJSON);
    createCanvas(Settings.canvasW, Settings.canvasH);
}

function draw() {
    // If scrolling, draw background
    if (Settings.scroll) background(Settings.darkGrey);
    
    // Move origin so that it is in the middle, and Settings.offset pixels from the top
    translate(Settings.canvasW / 2, Settings.offset);

    // Draw the timeline to the canvas
    timeline.render();
}