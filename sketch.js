let media_data_json;
let entryManager;

function preload() {
    media_data_json = loadJSON('res/individual_data.json')
}

function setup() {
    entryManager = new EntryManager (media_data_json.media)
    for (let md of entryManager.entries_arr) {
        createDiv(`${md.air_date} | Name: ${md.name} | Universe: ${md.universe}`);
    }
}

function draw() {
    noLoop();
}