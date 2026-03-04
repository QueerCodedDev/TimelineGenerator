class CompressedEntryManager extends EntryManager {
    constructor(entries_data) {
        super(entries_data);
        this.compressed_entries = [];
        this.compressEntries(this.entries_arr);
    }

    _compressEntries(arr) {
        let compressed_entries = [];
        let arr_len = arr.length;
        
        for (let i = 0; i < arr_len - 1; i++) {
            if (curr.buddy(curr, next)) {
                compressed_entries.push(this.compressEntry([arr[i]], arr[i], arr[i+1]));
            }
        }
    }

    compressEntry(e) {
        if (e.compressed = true) return;
        let temp_arr = [e];

        if (e.buddy(e, e.next)) {
            temp_arr.push(e.next);
        }

        return temp_arr;
    }

    compressEntries(arr) {
        for (let e of arr) {
            this.compressed_entries.push(this.compressEntry(e));
        }

        console.log(this.compressed_entries);
    }
}