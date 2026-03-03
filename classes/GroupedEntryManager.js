class GroupedEntryManager extends EntryManager {
    constructor(entries_data) {
        super(entries_data);
        this.formatEntries(this.entries_arr);
        this.repositionEntries(this.entries_arr);
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
}