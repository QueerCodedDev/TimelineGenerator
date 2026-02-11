/**
 * 
 * @param {string} start - String that has date of start time
 * @param {string} end - String that has date of end time
 * @returns {number} diff_days - The number of days from start to end
 */
function calc_dist_as_days(start, end) {
    // Convert start and end date strings into Date objects
    let start_date = new Date(start);
    let end_date = new Date(end);
    // Calculate the difference between start_date and end_date in milliseconds
    let diff_milli = Math.abs(end_date - start_date);
    
    // Convert difference as milliseconds to difference as days
    // milliseconds per day = milliseconds per second * seconds per minute * minutes per hours * hours per day
    let milli_per_day = (1000 * 60 * 60 * 24); 
    let diff_days = Math.ceil(diff_milli / milli_per_day)
    
    return diff_days;
}