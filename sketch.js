let dataJSON;
let timeline;

function preload() {
    dataJSON = loadJSON('res/individual_data.json');
}

function setup() {
    timeline = new Timeline(dataJSON);
    createCanvas(100, 100);
    noLoop();
}

function draw() {
    background(255, 0, 0);
}