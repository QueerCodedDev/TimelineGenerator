class EntryManager {
    constructor(entries_data) {
        // Array of all entries involved
        this.entries_arr = this.parse_entries_data(entries_data);
        this.format_entries();
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

        // Sort Entries by air_date and then return
        return this.sort(temp_arr);
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

        return sorted_arr;
    }

    format_entries() {
        for (let e of this.entries_arr) {
            e.format_entry();
        }
    }

    render() {
        let timelineDIV = createDiv().addClass('timeline').center();
        for (let e of this.entries_arr) {
            timelineDIV.child(e.view);
            timelineDIV.child(createElement('br'));
        }
    }
}