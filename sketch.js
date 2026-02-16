let media_data_json;
let entryManager;

function preload() {
    media_data_json = loadJSON('res/individual_data.json')
}

function setup() {
    entryManager = new EntryManager (media_data_json.media)
    let i = 1;
    for (let md of entryManager.entries_arr) {
        createDiv(`${i}. ${md.air_date} | Name: ${md.name} | Universe: ${md.universe}`);
        i++;
    }
}

function draw() {
    noLoop();
}