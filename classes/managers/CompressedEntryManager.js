class CompressedEntryManager {
    constructor(dataEM) {
        this.dataEntries = dataEM.dataEntriesByAirDate;
        this.compEntries = this.compressEntries(this.dataEntries);
        console.log(this.compEntries);
    }

    compressEntries(arr) {
        let compArr = [[arr[0]]]; // Store first entry in array by default
        for (let i = 1; i < arr.length-1; i++) {
            if (arr[i].universe == compArr[compArr.length-1].universe) {
                compArr[compArr.length-1].push(arr[i]);
            } else {
                compArr.push([arr[i]]);
            }
        }

        return compArr;
    }
}