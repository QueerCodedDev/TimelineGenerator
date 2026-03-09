class CompressedEntry {
    constructor(entry) {
        this.prev;
        this.next;

        this.entry  = entry;
        this.output = this.formatEntry();
        this.render();
    }

    formatEntry() {
        let output = '';
        for (let e of this.entry) {
            output += `${e.title}\n${e.date}\n`
        }

        return output;
    }

    render() {
        console.log(this.output)
    }
}