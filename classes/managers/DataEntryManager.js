class DataEntryManager {
    constructor(dataJSON) {
        this.dataEntries = this.createDataEntries(dataJSON);
        this.dataEntriesByAirDate = this.sort(this.dataEntries);
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
                minItem = this.compare(minItem, arr[i]);
            }

            sortedArr.push(minItem);
            arr.splice(arr.indexOf(minItem), 1);
        }

        return sortedArr;
    }

    compare(min, cur) {
        let a = new Date(min.date);
        let b = new Date(cur.date);

        if (a > b) return b;
        if (a < b) return a;

        return null;
    }
}