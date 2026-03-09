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
        translate(canvasW / 2, canvasH / 2)
        rectMode(CENTER);
        textAlign(CENTER, CENTER);
        let height = textAscent() + textDescent();
        rect(0, 0, textWidth(this.output), height * (this.entry.length+1) * 2);
        text(this.output, 0, 0);
    }
}