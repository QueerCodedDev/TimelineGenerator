class CompressedEntry {
    constructor(entry) {
        this.prev;
        this.next;

        this.entry  = entry;
        this.output = this.formatEntry();
    }

    formatEntry() {
        let output = {
            'titles': '',
            'dates': '',
            'w': 0,
            'h': 0
        };

        for (let e of this.entry) {
            output.titles += `\n${e.title}\n`;
            output.dates  += `\n\n${e.date}`;
        }

        textSize(25);
        let boundsTitle = font.textBounds(output.titles, 0, 0, textSize());
        let boundsDates = font.textBounds(output.dates,  0, 0, textSize());
        output.w = max(boundsTitle.w, boundsDates.w) + textSize();
        output.h = max(boundsTitle.h, boundsDates.h) + (textSize() * 3);

        return output;
    }

    render() {
        translate(canvasW / 2, canvasH / 2) // <-- Will likely need to get rid of/move/change
        rectMode(CENTER);
        textAlign(CENTER, CENTER);
        textSize(25);

        strokeWeight(5);
        stroke(ColorManager.colors[this.entry[0].universe]);
        fill(ColorManager.colors.black);
        rect(0, 0, this.output.w, this.output.h, 25);
        
        fill(ColorManager.colors.white)
        stroke(ColorManager.colors.black);
        strokeWeight(2);
        text(this.output.titles, 0, 0);
        fill(ColorManager.colors.line)
        text(this.output.dates, 0, 0);

        textSize(20);
        noStroke();
        fill(ColorManager.colors[this.entry[0].universe]);
        text(this.entry[0].name, 0, (-this.output.h/2) + textSize());
    }
}