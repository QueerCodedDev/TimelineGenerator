let timeline_row_height = 100;
let timeline_row_length = 100;
let total_years_spanned_cieling = 25;
let canvas_width;
let canvas_height;
let series_data_json;
let series_data_arr;

function preload() {
    series_data_json = loadJSON('res/series_data.json');
}

function setup() {
    series_data_arr = series_data_json.shows;
    canvas_height = timeline_row_height * series_data_arr.length;
    canvas_width = timeline_row_length * total_years_spanned_cieling;

    createCanvas(canvas_width, canvas_height);

}

function draw() {
    background(255,50,0);
    setup_timeline_background();
    noLoop();
}

function setup_timeline_background() {
    // variables used for labels and readibility
    let x1, y1, x2, y2;

    // draw lines for each row that will be generated on the timeline
    for (let i = 0; i < series_data_arr.length; i++) {
        x1 = 0;
        y1 = i*timeline_row_height;
        x2 = canvas_width;
        y2 = i * timeline_row_height;
        line(x1, y1, x2, y2);
    }

    // draw lines to show the year marks
    for (let i = 0; i < total_years_spanned_cieling; i++) {
        x1 = i * timeline_row_length
        y1 = 0
        x2 = i * timeline_row_length
        y2 = canvas_height
        line(x1, y1, x2, y2);
    }
}