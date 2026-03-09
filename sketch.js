let dataJSON;
let timeline;
const SORT_OPTIONS = {
        DATE: 'date',
        UNIVERSE: 'universe'
}

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