class Timeline {
    constructor(dataJSON) {
        this.dataEntryManager = new DataEntryManager(dataJSON.media);
    }
}