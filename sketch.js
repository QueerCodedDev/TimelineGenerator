let timeline_row_height = 100;
let timeline_row_length = 365;
let canvas_width;
let canvas_height;
let series_data_json;
let SeriesEntryManager;

function preload() {
    series_data_json = loadJSON('res/series_data.json');
}

function setup() {
    SeriesEntryManager = new EntryManager(series_data_json.media);
    canvas_height = timeline_row_height * SeriesEntryManager.entries_arr.length;
    canvas_width  = timeline_row_length * SeriesEntryManager.total_duration;

    createCanvas(canvas_width, canvas_height);
}

function draw() {
    background('black');
    setup_timeline_background(SeriesEntryManager);

    SeriesEntryManager.render_entries();

    noLoop();
}