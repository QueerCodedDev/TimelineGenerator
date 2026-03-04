class EntryManager {
    constructor(entries_data) {
        // Array of all entries involved
        this.entries_arr = this.parse_entries_data(entries_data);
    }

    // Parse data, create entries, and then sort entries by air_date
    parse_entries_data(data) {
        let temp_arr = [];

        for (let d of data) {
            temp_arr.push(new MediaEntry(d));
        }

        // Sort Entries by air_date
        return sort_by_airdate(temp_arr);
    }

    
    render() {
        for (let e of this.entries_arr) {
            Renderer.render(e);
        }
    }

    determineGroupSize(c) {
        let curr = c;
        while (curr.buddy(curr, curr.prev)) {
            c.before++;
            curr = curr.prev;
        }

        curr = c;
        while (curr.buddy(curr, curr.next)) {
            c.after++;
            curr = curr.next;
        }
    }
}