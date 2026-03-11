class CompressedEntry {
    constructor(entry) {
        // Array of entries to be compressed
        this.entry  = entry;

        // Output strings
        this.dates  = '';
        this.titles = '';
        this.header = this.entry[0].name;

        // Rendering color
        this.color  = Settings.UNI_COLORS[this.entry[0].universe];
        
        // Bounds to be used for rendering
        this.w;
        this.h;

        // Format the entry for rendering
        this.formatEntry();
    }

    formatEntry() {
        // Get and compile all the titles and dates
        for (let e of this.entry) {
            this.titles += `\n${e.title}\n`;
            this.dates  += `\n\n${e.date}`;
        }

        // Make sure textSize is set appropriately for bounds calculation
        textSize(Settings.point);

        // Get bounds for titles string, dates string, and header string
        let textBounds = Settings.font.textBounds(this.titles, 0, 0);
        let dateBounds = Settings.font.textBounds(this.dates,  0, 0);
        let headBounds = Settings.font.textBounds(this.header, 0, 0);

        // Set h to be the tallest of the two bounds, and add buffer
        this.h = max(textBounds.h, dateBounds.h) + (Settings.point * 3) + 10;
        // Set w to be the widest of the two bounds, and add buffer
        this.w = max(textBounds.w, dateBounds.w, headBounds.w) +  Settings.point;
    }

    render() {
        // Draw the rectangle that acts as the background for the entry
        this.renderRect();
        
        // Draw the main body of the entry (titles and dates)
        this.renderBody();

        // Draw the header of the entry (universe)
        this.renderHeader();

        // Translate in preperation for the drawing of the next entry
        translate(0, this.h + (Settings.offset * 2));
    }

    renderRect() {
        // Configure render settings
        fill(Settings.black);
        stroke(this.color);
        strokeWeight(Settings.rectWeight);

        // Render rectangle/entry backer
        rect(0, (this.h/2), this.w, this.h, Settings.point);
    }

    renderBody() {
        // Configure render settings
        fill(Settings.white);
        stroke(Settings.black);
        strokeWeight(Settings.textWeight);
        textSize(Settings.point);
        
        // Render titles
        text(this.titles, 0, Settings.offset);
        
        // Set fill for rendering dates
        fill(Settings.grey)
        
        // Render dates
        text(this.dates, 0, Settings.offset);
    }

    renderHeader() {
        // Configure render settings
        fill(this.color);
        noStroke();
        textSize(Settings._point);

        // render header
        text(this.entry[0].name, 0, Settings.offset);
    }
}