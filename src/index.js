
// You should implement your task here.

module.exports = function towelSort (matrix) {
 
   const item = [];
   item.sort(( a, b ) => a.ratingRevievs > b.ratingRevievs ? 1 : -1);
    return item
}
