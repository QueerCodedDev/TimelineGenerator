    
function setup_timeline_background(Entry_Manager) {


    // variables used for labels and readibility
    let x1, y1, x2, y2;

    // draw lines for each row that will be generated on the timeline
    let i = 0;
    for (let d of Entry_Manager.entries_arr) {
        x1 = 0;
        y1 = i * timeline_row_height;
        x2 = canvas_width;
        y2 = i * timeline_row_height;

        stroke('white');
        line(x1, y1, x2, y2);
        
        i++;
    }

    // draw lines to show the year marks
    for (let i = 0; i <= Entry_Manager.total_duration; i++) {
        x1 = i * timeline_row_length;
        y1 = 0;
        x2 = i * timeline_row_length;
        y2 = canvas_height;

        line(x1, y1, x2, y2);
    }

    // set stroke alpha so that month lines are lighter than year lines
    stroke(255, 255, 255, 50);

    // draw lines to show the month marks
    for (let i = 0; i <= Entry_Manager.total_duration * 12; i++) {
        x1 = i * timeline_row_length / 12;
        y1 = 0;
        x2 = i * timeline_row_length / 12;
        y2 = canvas_height;

        line(x1, y1, x2, y2);
    }

    // reset stroke to black, and alpha back to 100
    stroke(0, 0, 0, 100);
}