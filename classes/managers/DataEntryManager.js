class DataEntryManager {
    constructor(dataJSON) {
        // Create data entries and store them in a master array that should NOT be altered
        this.dataEntries = this.createDataEntries(dataJSON);
        // Create an array of entries sorted by date
        this.dataEntriesByAirDate = this.sort(this.dataEntries.slice(), SORT_OPTIONS.DATE);
        // Create an array of entries sorted by universe?
        this.dataEntriesByAirDate = this.sort(this.dataEntries.slice(), SORT_OPTIONS.UNIVERSE);
        // Create an array of entries sorted alphabetically by title?

        console.log(this.dataEntriesByAirDate);
    }


    /////////////////////////////////////////////////////////////////////////////////
    /********************************************************************************
     * Take the JSON data passed in and create DataEntries with that data.
     * 
     * @param {Array} data - Array of data that will be made into DataEntries
     * @returns {Array}    - Array of DataEntries
     */
    createDataEntries(data) {
        let dataEntries = [];
        for (let d of data) {
            dataEntries.push(new DataEntry(d));
        }

        return dataEntries;
    }


    /////////////////////////////////////////////////////////////////////////////////
    /********************************************************************************
     * Sort the array of DataEntries passed in, in ascending order.
     * Calls helper function compare() to determine which value should be added next.
     * 
     * @param {Array} arr     - Unsorted array of DataEntries
     * @param {String} sortBy - Sort method. Date by defualt
     * @returns {Array}       - Sorted array of DataEntries
     */
    sort(arr, sortBy=SORT_OPTIONS.DATE) {
        let sortedArr = [];

        // While there is at least 1 item that needs to be sorted
        while (arr.length >= 1) {
            // Assume the first value in the array is the minimum
            let minItem = arr[0];

            // For each item in arr
            for (let i = 0; i < arr.length; i++) {
                // Compare it against the current minimum
                minItem = this.compare(minItem, arr[i], sortBy);
            }

            // Push new minimum to sortedArr
            sortedArr.push(minItem);
            // Remove new minimum from the array being sorted
            arr.splice(arr.indexOf(minItem), 1);
        }

        if (!this.isSorted(sortedArr, sortBy)) this.sort(sortedArr, sortBy);

        // Return the sorted array
        return sortedArr;
    }


    /////////////////////////////////////////////////////////////////////////////////
    /********************************************************************************
     * Compare the selected value (date by default) of the two DataEntries passed in.
     * Return the DataEntry that has the lowest value of the two.
     * 
     * @param {DataEntry} min - DataEntry with the current min
     * @param {DataEntry} cur - DataEntry that is being compared against the current min
     * @param {String} sortBy - Sorting method. Date by defualt
     * @returns {DataEntry}   - Whichever DataEntry has the actual min
     */ 
    compare(min, cur, sortBy) {
        switch(sortBy) {
            case SORT_OPTIONS.DATE:
                if (min.dateOBJ > cur.dateOBJ) return cur;
            case SORT_OPTIONS.UNIVERSE:
                if (min.universe > cur.universe) return cur;
            
        }

        return min;
    }


    /////////////////////////////////////////////////////////////////////////////////
    /********************************************************************************
     * Go through the potentially sorted array and make sure things are actually
     * sorted.
     * 
     * @param {Array} arr - Array being checking if sorted
     * @param {String} sortBy - Sorting method. Date by defualt
     * @returns {Boolean}   - Whether arr is sorted or not
     */ 
    isSorted(arr, sortBy) {
        for (let i = 0; i < arr.length-1; i++) {
            if (this.compare(arr[i], arr[i+1], sortBy) != arr[i]) return false;
        }

        return true;
    }
}