let media_data_json;

function preload() {
    media_data_json = loadJSON('res/individual_data.json')
}

function setup() {
    
    for (let md of media_data_json.media) {
        createDiv(`${md.air_date} | Name: ${md.name} | Universe: ${md.universe}`);
    }
}

function draw() {
    noLoop();
}