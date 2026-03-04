class CompressedEntryManager extends EntryManager {
    constructor(entries_data) {
        super(entries_data);
        this.compressed_entries = [];
        this.compressEntries(this.entries_arr);
    }

    compressEntry(e) {
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