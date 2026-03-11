class Timeline {
    constructor(dataJSON) {
        this.dataEM   = new DataEntryManager(dataJSON.media);
        this.compEM   = new CompressedEntryManager(this.dataEM);
    }

    render() {
        this.compEM.render();
    }
}