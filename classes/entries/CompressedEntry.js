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
        
        formatEntry();
    }

    formatEntry() {
        for (let e of this.entry) {
            this.titles += `\n${e.title}\n`;
            this.dates  += `\n\n${e.date}`;
        }

        let boundsTitle = font.textBounds(this.titles, 0, 0, timeline.point);
        let boundsDates = font.textBounds(this.dates,  0, 0, timeline.point);
        this.w = max(boundsTitle.w, boundsDates.w) + timeline.point;
        this.h = max(boundsTitle.h, boundsDates.h) + (timeline.point * 3);
    }

    render() {
        translate(canvasW / 2, canvasH / 2) // <-- Will likely need to get rid of/move/change
        rectMode(CENTER);
        textAlign(CENTER, CENTER);
        textSize(timeline.point);

        strokeWeight(timeline.rectWeight);
        stroke(this.color);
        fill(ColorManager.colors.black);
        rect(0, 0, this.output.w, this.output.h, timeline.point);
        
        fill(ColorManager.colors.white)
        stroke(ColorManager.colors.black);
        strokeWeight(timeline.textWeight);
        text(this.output.titles, 0, 0);
        fill(ColorManager.colors.line)
        text(this.output.dates, 0, 0);

        textSize(timeline._point);
        noStroke();
        fill(this.color);
        text(this.entry[0].name, 0, (-this.output.h / 2) + timeline._point);
    }
}