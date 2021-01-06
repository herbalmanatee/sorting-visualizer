import App from './components/App.jsx';

let sortByBubble = (array) => {
  console.log('this', this);
  let swap = (index1, index2, array, cb) => {
	let temp = array[index1];
	array[index1] = array[index2];
    array[index2] = temp;
    return array;

  };

  let len = array.length;

  for (let i = 0; i < len; i++) {
    let swaps = 0;

    for (let j = 0; j < len - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swaps++;
        swap(j, j + 1, array);
      }
    }

    if (!swaps) { break; }
  }

  this.setState({
    array: array
  })
 };

 export default sortByBubble;