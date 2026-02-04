let project_scale_multiplier = 2;
let timeline_row_height = 100;
let timeline_row_length = 365;
let starting_year = 2004;
let total_years_spanned_cieling = 25;
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
    canvas_height = timeline_row_height * series_data_arr.length;
    canvas_width = timeline_row_length * total_years_spanned_cieling;

    createCanvas(canvas_width, canvas_height);

    entry_manager = new EntryManager(series_data_arr, starting_year);
}

function draw() {
    background('black');
    setup_timeline_background();

    entry_manager.render_entries();

    noLoop();
}