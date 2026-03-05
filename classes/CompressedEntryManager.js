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
    }

    render() {
        let prev = null;
        for (let ce of this.compressed_entries) {
            let compressed_header = ``;
            for (let e of ce) {
                compressed_header = `${compressed_header}${e.header}\n`
            }

            
            let dims = {
                'x': 0,
                'y': 100,
                'w': textWidth(compressed_header) + Renderer.point,
                'h': textAscent() * 4 * ce.length
            }
            if (prev != null) {
                dims.y = prev.dims.h;
            }

            strokeWeight(Renderer.weight);
            stroke(ce[0].color);
            fill(ColorManager.colors.black);
            rect(
                dims.x, 
                dims.y, 
                dims.w, 
                dims.h, 
                Renderer.point
            );

            textSize(Renderer.point);
            fill(ColorManager.colors.white);
            stroke(ColorManager.colors.black);
            strokeWeight(2);
            text(compressed_header, dims.x, dims.y);

            textSize(Renderer._point);
            noStroke();
            fill(ce[0].color);
            text(ce[0].name, dims.x, dims.y-Renderer.point);

            translate(0, dims.h * 2);

            prev = ce;
        }
    }
}