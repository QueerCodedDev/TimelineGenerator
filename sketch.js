let timeline_row_height = 100;
let timeline_row_length = 365;
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
    series_data_arr = series_data_json.shows;
    canvas_height = timeline_row_height * series_data_arr.length;
    canvas_width = timeline_row_length * total_years_spanned_cieling;

    createCanvas(canvas_width, canvas_height);

    entry_manager = new EntryManager(series_data_arr);
}

function draw() {
    background(255,50,0);
    setup_timeline_background();

    entry_manager.render_entries();

    noLoop();
}

function setup_timeline_background() {
    // variables used for labels and readibility
    let x1, y1, x2, y2;

    // draw lines for each row that will be generated on the timeline
    for (let i = 0; i < series_data_arr.length; i++) {
        x1 = 0;
        y1 = i * timeline_row_height;
        x2 = canvas_width;
        y2 = i * timeline_row_height;

        line(x1, y1, x2, y2);
    }

    // draw lines to show the year marks
    for (let i = 0; i < total_years_spanned_cieling; i++) {
        x1 = i * timeline_row_length;
        y1 = 0;
        x2 = i * timeline_row_length;
        y2 = canvas_height;

        line(x1, y1, x2, y2);
    }

    // set stroke alpha so that month lines are lighter than year lines
    stroke(0, 0, 0, 50);

    // draw lines to show the month marks
    for (let i = 0; i < total_years_spanned_cieling * 12; i++) {
        x1 = i * timeline_row_length / 12;
        y1 = 0;
        x2 = i * timeline_row_length / 12;
        y2 = canvas_height;

        line(x1, y1, x2, y2);
    }

    // reset stroke alpha back to 100
    stroke(0, 0, 0, 100);
}

function render_entries() {
    for (let e in entries) {
        e.render();
    }
}

class EntryManager {
    constructor(entries_data) {
        this.entries_arr = this.parse_entries_data(entries_data);
    }

    parse_entries_data(data) {
        let temp_arr = []
        for (let d of data) {
            temp_arr.push(new Entry(d));
        }

        return temp_arr;
    }

    render_entries() {
        for (let e of this.entries_arr) {
            e.render();
        }
    }
}

class Entry {
    constructor(data) {
        this.name  = data['show'];
        this.start = data['start'];
        this.end   = data['end'];

        this.render_length = this.calc_entry_length();
    }

    render() {
        rect(0,0,this.render_length, 100);
    }

    calc_entry_length() {
        let start_date = new Date(this.start);
        let end_date = new Date(this.end);
        let diff_milli = Math.abs(end_date - start_date);
        
        // milliseconds per second * seconds per minute * minutes per hours * hours per day
        let milli_per_day = (1000 * 60 * 60 * 24); 
        diff_days = Math.ceil(diff_milli / milli_per_day)
        
        return diff_days;
    }

}