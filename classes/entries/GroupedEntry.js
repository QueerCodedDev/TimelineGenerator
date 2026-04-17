class GroupedEntry {
    constructor(entryEX) {
        // Array of entries to be grouped
        this.entry      = entryEX;
        this.positions  = [];
        this.dimensions = [];

        this.formatEntry();
        //console.log(this.positions);
    }

    formatEntry() {
        for (let e of this.entry) {
            let bodyBounds = this.getBounds(`${e.title}\n${e.date}`);
            let headBounds = this.getBounds(e.name, Settings._point);
            
            // Add the height of the header to the height of the body for total height
            bodyBounds.h += headBounds.h;

            // Push dims of current entry to dimensions array
            this.dimensions.push(bodyBounds);

            // Add empty item as needed to make positioning easier
            let Ld2 = this.entry.length/2;
            if (this.entry.length%2 == 0) { // Even # of entries
                this.entry.splice(Ld2, 0, {'mid':true});
            }

            this.entry[floor(Ld2)].mid = true; // set mid of middle item to be true

            if (this.entry.indexOf(e) == 0) {
                e.prev = null;
                e.next = this.entry[1];
            } else if (this.IDO(e) == this.entry.length-1) {
                e.prev = this.entry[this.entry.length-2];
            } else {
                e.prev = this.entry[this.IDO(e)-1];
                e.next = this.entry[this.IDO(e)+1];
            }
        }

        // will remove code below this point
        for (let e of this.entry) {
            this.getPosition(e);
        }
        // and above this point eventually

        // Call setPositions, starting with the middle item
        this.setPositions(this.entry[floor(Ld2)]);
    }

    getBounds(text, point=Settings.point) {
        return Settings.font.textBounds(text, 0, 0, point);
    }

    setPositions(item) {
        let curr = item;
        let curr_pos = this.positions[this.IDO(item)];
        curr_pos = {'x':0, 'y':0};

        // While next entry
        while (curr.next) {
            let next_ind = this.IDO(curr.prev);
            curr_pos.x += (this.dimensions[next_ind]/2) + (this.dimensions[this.IDO(item)]/2);

            curr = curr.next;
        }

        curr = item;

        while (curr.prev) {
            let prev_ind = this.IDO(curr.prev);
            curr_pos.x += (this.dimensions[prev_ind]/2) + (this.dimensions[this.IDO(item)]/2);

            curr = curr.prev;
        }
    }

    IDO(i) {
        return this.entry.indexOf(i);
    }

    render() {
        
    }
}