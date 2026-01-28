let timeline_row_height = 100;
let timeline_row_length = 365;
let total_years_spanned_cieling = 25;
let canvas_width;
let canvas_height;
let series_data_json;
let series_data_arr;
let entries = [];

function preload() {
    series_data_json = loadJSON('res/series_data.json');
}

function setup() {
    series_data_arr = series_data_json.shows;
    canvas_height = timeline_row_height * series_data_arr.length;
    canvas_width = timeline_row_length * total_years_spanned_cieling;

    createCanvas(canvas_width, canvas_height);

    for (let d of series_data_arr) {
        entries.push(new Entry(d));
    }
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

class Entry {
    constructor(data) {
        this.name  = data['show'];
        this.start = data['start'];
        this.end   = data['end'];

        this.calc_entry_length();
    }

    render() {

    }

    calc_entry_length() {
        // let start_split = this.start.split('-');
        // let end_split = this.end.split('-');
        // let start_month = parseInt(start_split[0]);
        // let start_day = parseInt(start_split[1]);
        // let start_year = parseInt(start_split[2]);
        // let end_month = parseInt(end_split[0]);
        // let end_day = parseInt(end_split[1]);
        // let end_year = parseInt(end_split[2]);

        // let months = end_month - start_month;
        // let days = end_day - start_day;
        // let years = end_year - start_year;

        // print(this.name)
        // print("Months: " + months)
        // print(days)
        // print(years)

        let temp = new Date(this.start);
        let temp2 = new Date(this.end);
        let diff = Math.abs(temp2 - temp);
        diff = Math.ceil(diff / (1000 * 60 * 60 * 24))
        print("Diff: " + diff)

    }

}