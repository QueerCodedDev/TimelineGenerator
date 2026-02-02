class EntryManager {
    constructor(entries_data, starting_year) {
        this.entries_arr = this.parse_entries_data(entries_data);
        this.starting_year = starting_year;
            
    }

    parse_entries_data(data) {
        let temp_arr = [];
        for (let d of data) {
            temp_arr.push(new Entry(d));
        }

        return temp_arr;
    }

    render_entries() {
        let y = 0;
        for (let e of this.entries_arr) {
            let x = calc_dist_as_days('01-01-' + starting_year, e.start);
            e.render(x, y * timeline_row_height);
            y++;
        }

        fill(255);
    }
}