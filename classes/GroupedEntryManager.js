class GroupedEntryManager extends EntryManager {
    constructor(entries_data) {
        super(entries_data);
        this.formatEntries(this.entries_arr);
        this.repositionEntries(this.entries_arr);
    }

    formatEntries(arr) {
        for (let e of arr) {
            this.formatEntry(e);
        }
    }

    formatEntry(e) {
        // Make sure text size is set before calculating dimensions
        textSize(Renderer.point);

        // Calculate dimensions
        e.dims = {
            'x': 0,
            'y': 100,
            'w': textWidth(e.header) + Renderer.point,
            'h': textAscent() * 4
        };

        if (e.grouped()) this.determineGroupSize(e);
    }

    reposition(e) {
        if (!e.grouped()) return;
        
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