class GroupedEntryManager {
    constructor(data) {
        this.dataEntries  = data;
        this.groupEntries = this.groupEntries(this.dataEntries);
    }

    groupEntries(arr) {
        // Array that will hold the grouped entries
        let groupArr = [];

        // Temp array for helping group
        // Store first entry from arr by default
        let tempArr = [[arr[0]]];

        // For each of the rest of the entries in the array
        for (let i = 1; i < arr.length; i++) {
            // If the current entry has the same air_date as the last entry
            if (arr[i].dateOBJ == tempArr[tempArr.length-1][0].dateOBJ) {
                // Store the current entry alongside the last entry
                tempArr[tempArr.length-1].push(arr[i]);
            } else {
                // Otherwise, store current entry in a new spot
                tempArr.push([arr[i]]);
            }
        }

        // For every item in the temp array
        for (let e of tempArr) {
            // Turn that item (collection of entries) into a GroupedEntry
            groupArr.push(new GroupedEntry(e));
        }

        // Return array of GroupedEntries
        return groupArr;
    }

    render() {
        for (let ge of this.groupEntries) {
            ge.render();
            console.log(ge)
        }
    }
}