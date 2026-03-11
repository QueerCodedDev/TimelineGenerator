let dataJSON;
let font;
let timeline;
const SORT_OPTIONS = {
        DATE: 'date',
        UNIVERSE: 'universe'
}

let canvasW = 1000;
let canvasH = 50000

let i = 0;
let inc = 500;

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
    background(Renderer.darkGrey); // <--- Need to draw a background when autoscrolling
    // Move origin so that it is in the middle, and 20 pixels from the top
    translate(canvasW / 2, Renderer.offset); // <--- translate needs to be in draw
    if (i <= -inc) translate(0, i);
    timeline.render();
    i -= inc;
}