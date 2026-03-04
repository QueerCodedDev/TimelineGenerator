class GroupedEntryManager extends EntryManager {
    constructor(entries_data) {
        super(entries_data);
        this.formatEntries(this.entries_arr);
        this.repositionEntries(this.entries_arr);
    }

    formatEntries(arr) {
        let arr_len = arr.length;
        // Special formatting for the first entry
        this.formatEntry(arr[0], null, arr[1]);

        // Normal formatting for the rest of the entries
        for (let i = 1; i <= arr_len - 2; i++) {
            this.formatEntry(arr[i], arr[i-1], arr[i+1]);
        }

        //special formatting for the last entry
        this.formatEntry(arr[arr_len-1], arr[arr_len-2], null);
    }

    formatEntry(curr, prev, next) {
        // Make sure text size is set before calculating dimensions
        textSize(curr.point);

        // Calculate dimensions
        curr.dims = {
            'x': 0,
            'y': 100,
            'w': textWidth(curr.header) + curr.point,
            'h': textAscent() * 4
        };

        // Set pointers for previous and next Entries
        curr.prev = prev;
        curr.next = next;

        if (curr.grouped()) {
            curr.determineGroupSize();
        }
    }

    repositionEntries(arr) {
        for (let e of arr) {
            e.reposition();
        }
    }
}