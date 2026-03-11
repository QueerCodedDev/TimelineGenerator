class CompressedEntry {
    constructor(entry) {
        this.prev;
        this.next;

        this.entry  = entry;
        this.w;
        this.h;
        this.dates  = '';
        this.titles = '';
        this.color  = Renderer.UNI_COLORS[this.entry[0].universe];
        this.formatEntry();
    }

    formatEntry() {
        for (let e of this.entry) {
            this.titles += `\n${e.title}\n`;
            this.dates  += `\n\n${e.date}`;
        }

        textSize(Renderer.point);

        let textBounds = font.textBounds(this.titles, 0, 0, Renderer.point);
        let dateBounds = font.textBounds(this.dates,  0, 0, Renderer.point);

        this.h = max(textBounds.h, dateBounds.h) + (Renderer.point * 3);
        this.w = max(textBounds.w, dateBounds.w) +  Renderer.point;
    }

    render() {
        translate(canvasW / 2, canvasH / 2) // <-- Will likely need to get rid of/move/change
        
        this.renderRect();
        this.renderBody();
        this.renderHeader();
    }

    renderRect() {
        // Configure render settings
        fill(Renderer.black);
        rectMode(CENTER);
        stroke(this.color);
        strokeWeight(Renderer.rectWeight);

        // Render rectangle/entry backer
        rect(0, 0, this.w, this.h, Renderer.point);
    }

    renderBody() {
        // Configure render settings
        fill(Renderer.white);
        stroke(Renderer.black);
        strokeWeight(Renderer.textWeight);
        textAlign(CENTER, CENTER);
        textSize(Renderer.point);
        
        // Render titles
        text(this.titles, 0, 0);
        
        // Set fill for rendering dates
        fill(Renderer.grey)
        
        // Render dates
        text(this.dates, 0, 0);
    }

    renderHeader() {
        // Configure render settings
        fill(this.color);
        noStroke();
        textSize(Renderer._point);

        // render header
        text(this.entry[0].name, 0, (-this.h/2) + Renderer._point);
    }
}