class CompressedEntry {
    constructor(entry) {
        // Array of entries to be compressed
        this.entry  = entry;

        // Output strings
        this.dates  = '';
        this.titles = '';

        // Rendering color
        this.color  = Renderer.UNI_COLORS[this.entry[0].universe];
        
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
        textSize(Renderer.point);

        // Get bounds for both titles string and dates string
        let textBounds = font.textBounds(this.titles, 0, 0);
        let dateBounds = font.textBounds(this.dates,  0, 0);

        // Set h to be the tallest of the two bounds, and add buffer
        this.h = max(textBounds.h, dateBounds.h) + (Renderer.point * 3) + 10;
        // Set w to be the widest of the two bounds, and add buffer
        this.w = max(textBounds.w, dateBounds.w) +  Renderer.point;
    }

    render() {
        this.renderRect();
        this.renderBody();
        this.renderHeader();

        translate(0, this.h + (Renderer.offset * 2));
    }

    renderRect() {
        // Configure render settings
        fill(Renderer.black);
        stroke(this.color);
        strokeWeight(Renderer.rectWeight);

        // Render rectangle/entry backer
        rect(0, (this.h/2), this.w, this.h, Renderer.point);
    }

    renderBody() {
        // Configure render settings
        fill(Renderer.white);
        stroke(Renderer.black);
        strokeWeight(Renderer.textWeight);
        textSize(Renderer.point);
        
        // Render titles
        text(this.titles, 0, Renderer.offset);
        
        // Set fill for rendering dates
        fill(Renderer.grey)
        
        // Render dates
        text(this.dates, 0, Renderer.offset);
    }

    renderHeader() {
        // Configure render settings
        fill(this.color);
        noStroke();
        textSize(Renderer._point);

        // render header
        text(this.entry[0].name, 0, Renderer.offset);
    }
}