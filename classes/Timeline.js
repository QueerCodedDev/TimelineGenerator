class Timeline {
    constructor(dataJSON) {
        this.point      = 25;
        this._point     = 20;
        this.textWeight =  2;
        this.rectWeight =  5;

        this.dataEM = new DataEntryManager(dataJSON.media);
        this.compEM = new CompressedEntryManager(this.dataEM);
    }
}