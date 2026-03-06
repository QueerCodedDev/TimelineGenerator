class DataEntryManager {
    constructor(dataJSON) {
        // Create data entries and store them in a master array that should NOT be altered
        this.dataEntries = this.createDataEntries(dataJSON);
        // Create an array of entries sorted by date
        this.dataEntriesByAirDate = this.sort(this.dataEntries.slice());
        // Create an array of entries sorted by universe?
        // Create an array of entries sorted alphabetically by title?

        console.log(this.dataEntriesByAirDate);
    }

    createDataEntries(data) {
        let dataEntries = [];
        for (let d of data) {
            dataEntries.push(new DataEntry(d));
        }

        return dataEntries;
    }

    sort(arr) { // by air date
        let sortedArr = [];

        // While there is at least 1 item that needs to be sorted
        while (arr.length >= 1) {
            // Assume the first value in the array is the minimum
            let minItem = arr[0];

            // For each item in arr
            for (let i = 0; i < arr.length; i++) {
                // Compare it against the current minimum
                minItem = this.compare(minItem, arr[i]);
            }

            // Push new minimum to sortedArr
            sortedArr.push(minItem);
            // Remove new minimum from the array being sorted
            arr.splice(arr.indexOf(minItem), 1);
        }

        return sortedArr;
    }

    compare(min, cur) {
        let a = new Date(min.date);
        let b = new Date(cur.date);

        if (a > b) return cur; 

        return min;
    }
}