class CompressedEntryManager extends EntryManager {
    constructor(entries_data) {
        super(entries_data);
        this.compressEntries(this.entries_arr);
    }

    compressEntries(arr) {
        let compressed_entries = [];
        let arr_len = arr.length;
        
        for (let i = 0; i < arr_len - 1; i++) {
            if (curr.buddy(curr, next)) {
                compressed_entries.push(this.compressEntry([arr[i]], arr[i], arr[i+1]));
            }
        }
    }

    compressEntry(comp, curr, next) {
        if (!curr.buddy(curr, next)) {
            return(comp);
        }

        else {
            curr.compressed = true;
            next.compressed = true;
            this.compressEntry(comp.push(curr), next, next.next);
        }
    }
}