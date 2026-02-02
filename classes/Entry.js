
class Entry {
    constructor(data) {
        this.uni   = data.universe;
        this.name  = data.show;
        this.start = data.start;
        this.end   = data.end;

        this.render_length = this.calc_entry_length();

            
    }

    render(x, y) {
        // function variable placement reference: rect(x, y, length, height)
        rect(x, y, this.render_length, timeline_row_height);
    }

    calc_entry_length() {
        return calc_dist_as_days(this.start, this.end)
    }

}