class EntryManager {
    constructor(entries_data) {
        // Array of all entries involved
        this.entries_arr = this.parse_entries_data(entries_data);
    }

    // Parse data, create entries, and then sort entries by air_date
    parse_entries_data(data) {
        let temp_arr = [];

        for (let d of data) {
            if (d.season == null) { // If no season data
                temp_arr.push(new MovieEntry(d)); // Create as MovieEntry
            } else { // otherwise (it has season data)
                temp_arr.push(new TVEntry(d)); // Create as TVEntry
            }
        }

        // Sort Entries by air_date
        let sorted_arr = this.sort(temp_arr);
        this.formatEntries(sorted_arr);
        this.repositionEntries(sorted_arr);

        return sorted_arr;
    }

    // Sorting Entries by air_date
    sort(arr) {
        let sorted_arr = [];

        // While there is at least 1 value that needs to be sorted
        while (arr.length >= 1) {
            // Let the first item in array be the minimum
            let min = arr[0];

            // For each item in the array
            for (let i = 0; i < arr.length; i++) {
                // Convert min_date and checking into Dates for comparison
                let min_date = new Date(min.air_date);
                let checking = new Date(arr[i].air_date);
                // If existing min is greater than what is being checked,
                // replace existing min with what is being checked
                if (min_date > checking) {
                    min = arr[i];
                }
            }

            // Add current min to the sorted array
            sorted_arr.push(min);
            // Remove added min from the array of items that still need sorting
            arr.splice(arr.indexOf(min), 1);
        }

        // Collect dates to get unique date list
        let dates = []
        for (let e of sorted_arr) {
            dates.push(e.air_date);
        }

        return sorted_arr;
    }

    formatEntries(arr) {
        let arr_len = arr.length;
        // Special formatting for the first entry
        arr[0].formatEntry(null, arr[1]);

        // Normal formatting for the rest of the entries
        for (let i = 1; i <= arr_len - 2; i++) {
            arr[i].formatEntry(arr[i-1], arr[i+1]);
        }

        //special formatting for the last entry
        arr[arr_len-1].formatEntry(arr[arr_len-2], null);
    }

    repositionEntries(arr) {
        for (let e of arr) {
            e.reposition();
        }
    }
    render() {
        for (let e of this.entries_arr) {
            e.render();
        }
    }
}