let dataJSON;
let timeline;

function preload() {
    dataJSON = loadJSON('res/individual_data.json');
    Settings.font = loadFont('res/Consolas.ttf');
}

function setup() {
    textFont(Settings.font);
    timeline = new Timeline(dataJSON);
    createCanvas(Settings.canvasW, Settings.canvasH);
}

function draw() {
    background(Settings.darkGrey); // <--- Need to draw a background when autoscrolling
    // Move origin so that it is in the middle, and 20 pixels from the top
    translate(Settings.canvasW / 2, Settings.offset); // <--- translate needs to be in draw
    timeline.render();
}