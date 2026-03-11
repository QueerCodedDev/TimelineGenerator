class CompressedEntry {
    constructor(entriesArr) {
        this.prev;
        this.next;

        this.entry  = entriesArr;
        this.titles = '';
        this.dates  = '';
        this.w;
        this.h;
        this.color  = ColorManager.colors[this.entry[0].universe];
        
        this.formatEntry();
    }

    formatEntry() {
        for (let e of this.entry) {
            this.titles += `\n${e.title}\n`;
            this.dates  += `\n\n${e.date}`;
        }

        let boundsTitle = font.textBounds(this.titles, 0, 0, textSize());
        let boundsDates = font.textBounds(this.dates,  0, 0, textSize());
        this.w = max(boundsTitle.w, boundsDates.w) +  textSize();
        this.h = max(boundsTitle.h, boundsDates.h) + (textSize() * 3);
    }

    render() {
        translate(canvasW / 2, canvasH / 2) // <-- Will likely need to get rid of/move/change
        rectMode(CENTER);
        textAlign(CENTER, CENTER);
        textSize(Renderer.point);

        strokeWeight(Renderer.rectWeight);
        stroke(this.color);
        fill(ColorManager.colors.black);
        rect(0, 0, this.w, this.h, Renderer.point);
        
        fill(ColorManager.colors.white)
        stroke(ColorManager.colors.black);
        strokeWeight(Renderer.textWeight);
        text(this.titles, 0, 0);
        fill(ColorManager.colors.line)
        text(this.dates, 0, 0);

        textSize(Renderer._point);
        noStroke();
        fill(this.color);
        text(this.entry[0].name, 0, (-this.h / 2) + Renderer._point);
    }
}