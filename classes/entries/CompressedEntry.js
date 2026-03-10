class CompressedEntry {
    constructor(entry) {
        this.prev;
        this.next;

        this.entry  = entry;
        this.output = this.formatEntry();
    }

    formatEntry() {
        let output = '';
        for (let e of this.entry) {
            output += `\n${e.title}\n${e.date}`
        }

        return output;
    }

    render() {
        translate(canvasW / 2, canvasH / 2) // <-- Will likely need to get rid of/move/change
        rectMode(CENTER);
        textAlign(CENTER, CENTER);
        textSize(25);
        

        let height = (textLeading() + textSize()) * this.entry.length

        strokeWeight(5);
        stroke(ColorManager.colors[this.entry[0].universe]);
        fill(ColorManager.colors.black);
        rect(0, 0, textWidth(this.output), height, 25); // <-- Change height bs here to use textLeading()
        
        fill(ColorManager.colors.white)
        stroke(ColorManager.colors.black);
        strokeWeight(2);
        text(this.output, 0, 0);

        textSize(20);
        noStroke();
        fill(ColorManager.colors[this.entry[0].universe]);
        text(this.entry[0].name, 0, -height/2);
    }
}