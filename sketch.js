let timeline_row_height = 100;
let timeline_row_length = 200;
let total_years_spanned_cieling = 25;
let series_data_json;
let series_data_arr;

function preload() {
    series_data_json = loadJSON('res/series_data.json');
}

function setup() {
    series_data_arr = series_data_json.shows;

    createCanvas(timeline_row_height*series_data_arr.length(), timeline_row_length*total_years_spanned_cieling);

    
}

function draw() {
  background(255,50,0);
  for (let i = 0; i < series_data_arr.length; i++) {
      line(0, i*timeline_row_height, width, i*timeline_row_height);
    }
    noLoop();
}