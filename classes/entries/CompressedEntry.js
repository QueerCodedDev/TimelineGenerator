class CompressedEntry {
    constructor(entry) {
        this.prev;
        this.next;

        this.entry  = entry;
        this.w;
        this.h;
        this.dates  = '';
        this.titles = '';
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
        rectMode(CENTER);
        textAlign(CENTER, CENTER);
        textSize(Renderer.point);

        strokeWeight(Renderer.rectWeight);
        stroke(ColorManager.colors[this.entry[0].universe]);
        fill(ColorManager.colors.black);
        rect(0, 0, this.w, this.h, 25);
        
        fill(ColorManager.colors.white)
        stroke(ColorManager.colors.black);
        strokeWeight(Renderer.textWeight);
        text(this.titles, 0, 0);
        fill(ColorManager.colors.line)
        text(this.dates, 0, 0);

        textSize(Renderer._point);
        noStroke();
        fill(ColorManager.colors[this.entry[0].universe]);
        text(this.entry[0].name, 0, (-this.h/2) + Renderer._point);
    }
}