class GroupedEntry {
    constructor(entry) {
        // Array of entries to be grouped
        this.entry      = entry;
        this.positions  = [];
        this.dimensions = [];

        this.formatEntry();
        console.log(this.positions);
    }

    formatEntry() {
        for (let e of this.entry) {
            let bodyBounds = this.getBounds(`${e.title}\n${e.date}`);
            let headBounds = this.getBounds(e.name, Settings._point);
            
            // Add the height of the header to the height of the body for total height
            bodyBounds.h += headBounds.h;
            this.dimensions.push(bodyBounds);

            if (this.entry.indexOf(e) == 0) {
                e.prev = null;
                e.next = this.entry[1];
            } else if (this.entry.indexOf(e) == this.entry.length-1) {
                e.prev = this.entry[this.entry.length-2];
            } else {
                e.prev = this.entry[this.entry.indexOf(e)-1];
                e.next = this.entry[this.entry.indexOf(e)+1];
            }
        }

        for (let e of this.entry) {
            this.getPosition(e);
        }
    }

    getBounds(text, point=Settings.point) {
        return Settings.font.textBounds(text, 0, 0, point);
    }

    getPosition(item) {
        let arrPos = this.entry.indexOf(item);
        let len    = this.entry.length;
        let arrMid = floor(len / 2);
        if ((len / 2) == arrMid) {
            // Even amount of items

        } else {
            // Odd amount of items
        }

    }
}