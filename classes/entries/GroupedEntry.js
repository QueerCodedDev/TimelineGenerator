class GroupedEntry {
    constructor(entry) {
        // Array of entries to be grouped
        this.entry      = entry;
        this.positions  = [];
        this.dimensions = [];

        this.formatEntry();
    }

    formatEntry() {
        for (let e of this.entry) {
            let bodyBounds = this.getBounds(`${e.title}\n${e.date}`);
            let headBounds = this.getBounds(e.name, Settings._point);
            
            // Add the height of the header to the height of the body for total height
            bodyBounds.h += headBounds.h;
            this.dimensions.push(bodyBounds);

            this.positions.push(this.getPosition(e));
        }
    }

    getBounds(text, point=Settings.point) {
        return Settings.font.textBounds(text, 0, 0, point);
    }

    getPosition(item) {
        
    }
}