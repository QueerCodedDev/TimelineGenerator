class EntryManager {
    constructor(entries_data) {
        // Array of all entries involved
        this.entries_arr = this.parse_entries_data(entries_data);
        this.connectEntries(this.entries_arr);
    }

    // Parse data, create entries, and then sort entries by air_date
    parse_entries_data(data) {
        let temp_arr = [];

        for (let d of data) {
            temp_arr.push(new Entry(d));
        }

        // Sort Entries by air_date
        return sort_by_airdate(temp_arr);
    }

    connectEntries(arr) {
        let arr_len = arr.length;

        this.connectEntry(arr[0], null, arr[1]);

        for (let i = 1; i <= arr_len - 2; i++) {
            this.connectEntry(arr[i], arr[i-1], arr[i+1]);
        }

        //special formatting for the last entry
        this.connectEntry(arr[arr_len-1], arr[arr_len-2], null);
    }

    connectEntry(curr, prev, next) {
        curr.prev = prev;
        curr.next = next;
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