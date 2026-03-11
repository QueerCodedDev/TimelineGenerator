let dataJSON;
let font;
let timeline;
const SORT_OPTIONS = {
        DATE: 'date',
        UNIVERSE: 'universe'
}
let i = 0;
let canvasW = 1000;
let canvasH = 50000

function preload() {
    dataJSON = loadJSON('res/individual_data.json');
    font = loadFont('res/Consolas.ttf');
}

function setup() {
    textFont('Consolas');
    timeline = new Timeline(dataJSON);
    createCanvas(canvasW, canvasH);
}

function draw() {
    background(255,0,0);
    // Move origin so that it is in the middle, and 20 pixels from the top
    translate(canvasW / 2, Renderer.offset)
    timeline.render();
}

function mouseClicked() {
    i++;
}