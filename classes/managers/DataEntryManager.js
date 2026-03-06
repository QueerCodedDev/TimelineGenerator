class DataEntryManager {
    constructor(dataJSON) {
        this.dataEntries = this.createDataEntries(dataJSON);
    }

    createDataEntries(data) {
        let dataEntries = [];
        for (let d of data) {
            dataEntries.push(new DataEntry(d));
        }

        return dataEntries;
    }
}