let media_data_json;
let entryManager;

function preload() {
    media_data_json = loadJSON('res/individual_data.json')
}

function setup() {
    noCanvas();
    // Create an EntryManager using the json data provided
    entryManager = new EntryManager(media_data_json.media);
    entryManager.render();
}

function draw() {
    noLoop();
}