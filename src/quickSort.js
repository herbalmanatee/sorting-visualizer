var quicksort = function(array) {
  let result = [];
  let lessThanPivot = [];
  let greaterThanPivot = []; //will hold pivotVal
  let checkSet = new Set(array)
  //if array.length is 1 or contains all the same values
  if (array.length <= 1 || checkSet.size === 1) {
    //return array
    return array
  }
  //pick random value in array to be pivot
  let pivotVal = array[Math.floor(Math.random() * array.length)]
  //iterate over array
  for (let val of array ) {
    //build two arrays with values less than or values equal or greater than pivot
    val < pivotVal ? lessThanPivot.push(val) : greaterThanPivot.push(val);
  }
  //quicksort two resulting arrays (recursive)
    //array.concat(quicksort())
  result = result.concat(quicksort(lessThanPivot), quicksort(greaterThanPivot));
  return result;
};

export default quicksort;