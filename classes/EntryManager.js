class EntryManager {
    constructor(entries_data) {
        // Array of all entries involved
        this.entries_arr = this.parse_entries_data(entries_data);
        // Get the earliest year present in data
        // as well as the latest year present in data
        this.start_end_year_data = this.get_start_and_end_year();
        // Parsing data from start_end_year_data for readibility
        this.starting_year = this.start_end_year_data.start_year;
        this.ending_year = this.start_end_year_data.end_year;
        // Calculate total duration, and then add one to adjust timeline range
        // so that it will actually include the final entry
        this.total_duration = this.ending_year - this.starting_year + 1;
        // Get universe tags and names
        this.universe_data = this.get_universes_and_count();
        // Parsing data from universe_data for readibility
        this.universe_count = this.universe_data.count;
        this.universe_tags = this.universe_data.universes;

        this.sort_and_group_entries_by_universe();
    }

    // Function for parsing data and using it for creating Entries
    parse_entries_data(data) {
        let temp_arr = [];
        for (let d of data) {
            if (d.episodes == null) {
                temp_arr.push(new MovieEntry(d))
            } else {
                temp_arr.push(new TVEntry(d));
            }
        }

        return temp_arr;
    }

    /**
    * Function for determining the earliest and latest years involved in the timeline
    */
    get_start_and_end_year() {
        // Set earliest_year and latest_year to theoritcal highest and lowest respectfully
        let earliest_year = 9999;
        let latest_year = 0;
        // Get year from start and year from end, compare to existing.
        // Replace earliest_year and latest_year with new values as needed.
        for (let d of this.entries_arr) {
            let temp_year_start = d.start.split('-')[2];
            if (temp_year_start < earliest_year) earliest_year = temp_year_start;

            let temp_year_end = d.end.split('-')[2];
            if (temp_year_end > latest_year) latest_year = temp_year_end;
        }

        // returning start_year and end_year as JSON for ease
        return { 'start_year': earliest_year, 'end_year': latest_year };
    }

    /**
     * Function for rendering all the Entries that are included in this manager.
     * Calls render for each Entry, and the Entry handles the rest.
     */
    render_entries() {
        for (let e of this.entries_arr) {
            // calculate the distance from the start of the timeline to the start of the entry
            let x = calc_dist_as_days('01-01-' + this.starting_year, e.start);
            let y = this.universe_tags.indexOf(e.universe);
            // e.render(x, y * timeline_row_height);
            e.render();
        }

        fill('white');
        strokeWeight(1);
    }

    get_universes_and_count() {
        let universes = [];
        let count = 0;

        for (let e of this.entries_arr) {
            if (!universes.includes(e.universe)) {
                universes.push(e.universe);
                count++;
            }
        }

        return { 'count': count, 'universes': universes };
    }

    sort_and_group_entries_by_universe() {
        let universes = [];
        for (let uni of this.universe_tags) {
            let applicable_universes = [];
            for (let e of this.entries_arr) {
                if (e.universe == uni) applicable_universes.push(e);
            }

            universes.push([{'uni': uni, 'shows': applicable_universes}]);
        }
    }

    calculate_entry_bounds() {
        for (let e of this.entries_arr) {
            e.calc_bounds(this.starting_year);
        }
    }

    check_for_clicked_entry(mx, my) {
        for (let e of this.entries_arr) {
            if (e.mouse_clicked_inside(mx, my)) {
                e.render_popup(mx, my);
            }
        }
    }
}