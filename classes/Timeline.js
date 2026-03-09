class Timeline {
    constructor(dataJSON) {
        this.dataEM = new DataEntryManager(dataJSON.media);
        this.compEM = new CompressedEntryManager(this.dataEM);

        console.log(this.compEM.compEntries[0]);
        // this.compEM.compEntries[0].render();
        // this.compEM.compEntries[1].render();
    }
}