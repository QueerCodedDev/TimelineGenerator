class CompressedEntryManager {
    constructor(dataEM) {
        this.dataEntries = dataEM.dataEntriesByAirDate;
        this.compEntries = this.compressEntries(this.dataEntries);
    }

    compressEntries(arr) {
        let compArr = [];
        let tempArr = [[arr[0]]]; // Store first entry in array by default
        for (let i = 1; i < arr.length; i++) {
            if (arr[i].universe == tempArr[tempArr.length-1][0].universe) {
                tempArr[tempArr.length-1].push(arr[i]);
            } else {
                tempArr.push([arr[i]]);
            }
        }

        for (let e of tempArr) {
            compArr.push(new CompressedEntry(e));
        }

        return compArr;
    }
}