    
function calc_dist_as_days(start, end) {
console.log('[\'The One With Blocks For Letters\' is looking at you from `calc_dist_as_days.js`]');

    let start_date = new Date(start);
    let end_date = new Date(end);
    let diff_milli = Math.abs(end_date - start_date);
    
    // milliseconds per second * seconds per minute * minutes per hours * hours per day
    let milli_per_day = (1000 * 60 * 60 * 24); 
    let diff_days = Math.ceil(diff_milli / milli_per_day)
    
    return diff_days;
}