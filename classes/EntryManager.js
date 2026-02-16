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

        console.log(temp_arr.length);

        // Sort Entries by air_date
        temp_arr = this.sort(temp_arr);

        return temp_arr;
    }

    // Sorting Entries by air_date
    sort(arr) {
        let sorted_arr = [];
        while (arr.length >= 2) {
            let min = arr[0];
            for (let i = 1; i < arr.length - 1; i++) {
                let min_date = new Date(min.air_date);
                let checking = new Date(arr[i].air_date);
                if (min_date > checking) {
                    min = arr[i];
                }
            }
            sorted_arr.push(min);
            arr.splice(arr.indexOf(min), 1);
        }

        // Push what should be the last element left in the array, to the end of the sorted array
        sorted_arr.push(arr[0]);

        return sorted_arr;
    }
}