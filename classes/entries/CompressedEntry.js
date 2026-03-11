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
            'dates': ''
        };

        for (let e of this.entry) {
            output.titles += `\n${e.title}\n`;
            output.dates  += `\n\n${e.date}`;
        }

        return output;
    }

    render() {
        translate(canvasW / 2, canvasH / 2) // <-- Will likely need to get rid of/move/change
        rectMode(CENTER);
        textAlign(CENTER, CENTER);
        textSize(Renderer.point);

        let bounds = font.textBounds(this.output.titles, 0, 0, Renderer.point);
        let dateBounds = font.textBounds(this.output.dates, 0, 0, Renderer.point);

        let height = max(bounds.h, dateBounds.h) + (Renderer.point * 3);

        strokeWeight(5);
        stroke(ColorManager.colors[this.entry[0].universe]);
        fill(ColorManager.colors.black);
        rect(0, 0, max(bounds.w, dateBounds.w)+Renderer.point, height, 25);
        
        fill(ColorManager.colors.white)
        stroke(ColorManager.colors.black);
        strokeWeight(2);
        text(this.output.titles, 0, 0);
        fill(ColorManager.colors.line)
        text(this.output.dates, 0, 0);

        textSize(Renderer._point);
        noStroke();
        fill(ColorManager.colors[this.entry[0].universe]);
        text(this.entry[0].name, 0, (-height/2) + Renderer._point);
    }
}