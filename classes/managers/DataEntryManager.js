class DataEntryManager {
    static SORT_OPTIONS = {
        DATE: 'date',
        UNIVERSE: 'universe'
    }


    // Create data entries and store them in a master array that should NOT be altered
    static dataEntries;
    // Create an array of entries sorted by date
    static dataEntriesByAirDate;
    // Create an array of entries sorted by universe?
    // Create an array of entries sorted alphabetically by title?


    static getStarted(dataJSON) {
        // Create data entries and store them in a master array that should NOT be altered
        dataEntries = createDataEntries(dataJSON);
        // Create an array of entries sorted by date
        dataEntriesByAirDate = sort(dataEntries.slice(), SORT_OPTIONS.DATE);
        // Create an array of entries sorted by universe?
        // Create an array of entries sorted alphabetically by title?
    }


    /////////////////////////////////////////////////////////////////////////////////
    /********************************************************************************
     * Take the JSON data passed in and create DataEntries with that data.
     * 
     * @param {Array} data - Array of data that will be made into DataEntries
     * @returns {Array}    - Array of DataEntries
     */
    static createDataEntries(data) {
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
    static sort(arr, sortBy=SORT_OPTIONS.DATE) { // by air date
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
    static compare(min, cur, sortBy) {
        let a, b;

        if (sortBy == SORT_OPTIONS.DATE) {
        // Create vars to hold Dates for readibility
            a = new Date(min.date);
            b = new Date(cur.date);
        }

        // If val of min is larger than val of cur, return cur
        if (a > b) return cur; 

        // Return the current min by default
        return min;
    }
}