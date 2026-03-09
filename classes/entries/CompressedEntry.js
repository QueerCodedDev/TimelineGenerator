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
            output += `${e.title}\n${e.date}\n`
        }

        return output;
    }

    render() {
        rect(0, 0, textWidth(this.output), textAscent() * this.entry.length * 2);
        text(this.output);
    }
}