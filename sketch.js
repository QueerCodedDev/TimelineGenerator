let dataJSON;
let font;
let timeline;
const SORT_OPTIONS = {
        DATE: 'date',
        UNIVERSE: 'universe'
}

let canvasW = 1000;
let canvasH = 50000

function preload() {
    dataJSON = loadJSON('res/individual_data.json');
    font = loadFont('res/Consolas.ttf');
}

function setup() {
    textFont(font);
    timeline = new Timeline(dataJSON);
    createCanvas(canvasW, canvasH);
}

function draw() {
    background(Settings.darkGrey); // <--- Need to draw a background when autoscrolling
    // Move origin so that it is in the middle, and 20 pixels from the top
    translate(canvasW / 2, Settings.offset); // <--- translate needs to be in draw
    timeline.render();
}