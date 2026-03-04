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
        textSize(Renderer.point);

        // Calculate dimensions
        curr.dims = {
            'x': 0,
            'y': 100,
            'w': textWidth(curr.header) + Renderer.point,
            'h': textAscent() * 4
        };

        // Set pointers for previous and next Entries
        curr.prev = prev;
        curr.next = next;

        if (curr.grouped()) {
            console.log('grouped')
            this.determineGroupSize(curr);
        }
    }

    reposition(e) {
        if (!e.grouped()) return;
        console.log(e.dims)

        if (this.isLeft(e)) { // JUST left of center
            e.dims.x = (e.dims.w / -2) - 20;
            if (this.isCenter(e.next)) {
                e.dims.x += e.next.dims.w / -2;
            }
        } else if (this.isRight(e)) { // JUST right of center
            e.dims.x = (e.dims.w /  2) + 20;
            if (this.isCenter(e.prev)) {
                e.dims.x += e.prev.dims.w / 2;
            }
        } else if (this.isCenter(e)) {} //center
    }

    repositionEntries(arr) {
        for (let e of arr) {
            this.reposition(e);
        }
    }

    isLeft(e)   { return e.before  < e.after; }
    isRight(e)  { return e.before  > e.after; }
    isCenter(e) { return e.before == e.after; }
}