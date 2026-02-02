    
function setup_timeline_background() {


    // variables used for labels and readibility
    let x1, y1, x2, y2;

    // draw lines for each row that will be generated on the timeline
    for (let i = 0; i < series_data_arr.length; i++) {
        x1 = 0;
        y1 = i * timeline_row_height;
        x2 = canvas_width;
        y2 = i * timeline_row_height;

        stroke(255);
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