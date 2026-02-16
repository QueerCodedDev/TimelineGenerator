class EntryManager {
    constructor(entries_data) {
        // Array of all entries involved
        this.entries_arr = this.parse_entries_data(entries_data);
    }

    // Function for parsing data and using it for creating Entries
    parse_entries_data(data) {
        let temp_arr = [];
        for (let d of data) {
            if (d.season == null) {
                temp_arr.push(new MovieEntry(d))
            } else {
                temp_arr.push(new TVEntry(d));
            }
        }

        temp_arr = this.sort(temp_arr);

        return temp_arr;
    }

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

        return sorted_arr;
    }
}