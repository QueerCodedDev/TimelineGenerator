let timeline_row_height = 100;
let timeline_row_length = 365;
let canvas_width;
let canvas_height;
let series_data_json;
let series_data_arr;
let entry_manager;

function preload() {
    series_data_json = loadJSON('res/series_data.json');
}

function setup() {
    series_data_arr = series_data_json.media;
    entry_manager = new EntryManager(series_data_arr);
    canvas_height = timeline_row_height * series_data_arr.length;
    canvas_width  = timeline_row_length * entry_manager.ending_year;

    console.log('test')
    createCanvas(canvas_width, canvas_height);
}

function draw() {
    background('black');
    setup_timeline_background(entry_manager);

    entry_manager.render_entries();

    noLoop();
}