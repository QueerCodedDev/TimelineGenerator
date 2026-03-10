let dataJSON;
let timeline;
const SORT_OPTIONS = {
        DATE: 'date',
        UNIVERSE: 'universe'
}
let i = 0;
let canvasW = 1000;
let canvasH = 2000

function preload() {
    dataJSON = loadJSON('res/individual_data.json');
}

function setup() {
    textFont('Consolas');
    timeline = new Timeline(dataJSON);
    createCanvas(canvasW, canvasH);
}

function draw() {
    background(255,0,0);
    timeline.compEM.compEntries[i].render();
}

function mouseClicked() {
    i++;
}