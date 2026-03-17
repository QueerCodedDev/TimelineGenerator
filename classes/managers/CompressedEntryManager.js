class CompressedEntryManager {
    constructor(data) {
        this.dataEntries = data;
        this.compEntries = this.compressEntries(this.dataEntries);
    }

    compressEntries(arr) {
        // Array that will hold the compressed entries
        let compArr = [];

        // Temp array for helping compress
        // First entry from array passed in get stored by default
        let tempArr = [[arr[0]]];

        // For each of the rest of the entries in the arr
        for (let i = 1; i < arr.length; i++) {
            // If the current entry belongs to the same universe as the last entry
            if (arr[i].universe == tempArr[tempArr.length-1][0].universe) {
                // Store the current entry alongside the last entry
                tempArr[tempArr.length-1].push(arr[i]);
            } else {
                // Store the current entry in its own spot for now
                tempArr.push([arr[i]]);
            }
        }

        // For every item in the temp array
        for (let e of tempArr) {
            // Turn that item (collection of entries) into a CompressedEntry
            compArr.push(new CompressedEntry(e));
        }

        // Return array of CompressedEntries
        return compArr;
    }

    render() {
        // For each CompressedEntry
        for (let ce of this.compEntries) {
            // Draw it
            ce.render();
        }
    }
}