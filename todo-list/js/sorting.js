/**
 * 
 * Takes the todosArray and sorts it based on if it is completed or not
 * @param {boolean} sortBy Boolean, by default true meaning show todos which aren't done first 
 * @returns sorted array
 */
function sortByDone(sortBy = true) {
  todosArray.sort(function(x, y) {
    x = x.done;
    y = y.done;

    if(sortBy) { return x - y; }
    else {return y - x; }
  });
  return todosArray;
}
/**
 * 
 * Takes the todosArray and sorts it based on the date
 * @param {boolean} sortBy Boolean, by default true meaning show tasks which are sooner first
 * @returns 
 */
function sortByDate(sortBy = true) {
  todosArray.sort(function(x, y) {
    x = Math.floor(new Date(x.date).getTime() / 1000);
    y = Math.floor(new Date(y.date).getTime() / 1000);

    if(sortBy) { return x - y; }
    else {return y - x; }
  });
  return todosArray;
}