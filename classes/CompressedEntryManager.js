class CompressedEntryManager extends EntryManager {
    constructor(entries_data) {
        super(entries_data);
        this.compressed_entries = [];
        this.compressEntries(this.entries_arr);
    }

    compressEntry(arr, e) {
        arr.push(e);
        e.compressed = true;

        if (e.buddy(e, e.next)) {
            this.compressEntry(arr, e.next);
        }

        return arr;
    }

    compressEntries(arr) {
        for (let e of arr) {
            if (!e.compressed) {
                this.compressed_entries.push(this.compressEntry([], e));
            }
        }

        console.log(this.compressed_entries);
    }
}