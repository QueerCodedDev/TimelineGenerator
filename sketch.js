let media_data_json;

function preload() {
    media_data_json = loadJSON('res/individual_data.json')
}

function setup() {
    background(55);
    
    for (let md of media_data_json) {
        createDiv(`${md.air_date} | Name: ${md.name} | Universe: ${md.universe}`);
    }
}

function draw() {
    noLoop();
}