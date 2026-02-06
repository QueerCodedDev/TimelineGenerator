class EntryManager {
    constructor(entries_data, starting_year) {
        this.entries_arr = this.parse_entries_data(entries_data);
        this.starting_year = this.calc_starting_year();
            
    }

    parse_entries_data(data) {
        let temp_arr = [];
        for (let d of data) {
            temp_arr.push(new Entry(d));
        }

        return temp_arr;
    }

    calc_starting_year() {
        let earliest_year = 9999;
        for (let d of this.entries_arr) {
            let temp_year = d.start.split('-')[2];
            if (temp_year < earliest_year) earliest_year = temp_year;
        }

        console.log(earliest_year);
        return earliest_year;
    }

    render_entries() {
        let y = 0;
        for (let e of this.entries_arr) {
            // calculate the distance from the start of the timeline to the start of the entry
            let x = calc_dist_as_days('01-01-' + starting_year, e.start);
            e.render(x, y * timeline_row_height);
            y++;
        }

        fill(255);
        strokeWeight(1);
    }
}