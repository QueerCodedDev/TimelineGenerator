let series_data_json;
let series_data_arr;

function preload() {
    series_data_json = loadJSON('res/series_data.json');
}

function setup() {
    createCanvas(400,400);
    series_data_arr = series_data_json.shows;
    print(series_data_arr);
}

function draw() {
  background(255,50,0);
}