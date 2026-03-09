class Timeline {
    constructor(dataJSON) {
        this.dataEM = new DataEntryManager(dataJSON.media);
        this.compEM = new CompressedEntryManager(this.dataEM);

        this.compEM.compEntries[0].render();
        this.compEM.compEntries[1].render();
    }
}