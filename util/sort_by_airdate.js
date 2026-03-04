// Sorting Entries by air_date
function sort_by_airdate(arr) {
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