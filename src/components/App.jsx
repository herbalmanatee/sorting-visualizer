import React from 'react';
import ElementRender from './ElementRender.jsx';
import RenderArray from './RenderArray.jsx';
import sortByBubble from '../bubbleSort';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      pointerIndex: 0
    };
  }

  componentDidMount() {
    this.generateArray();
  }

  generateArray () {
    let result = [];
    for (let i=0; i < 100; i++) {
      let randInt = (Math.floor(Math.random() * (490))) + 10;
      result.push(randInt)
    }
    this.setState({
      array: result
    });
  }

  bubbleSort (array, cb) {
    let arrayStates = [];
    let swap = (index1, index2, newArray) => {
    let temp = array[index1];
    newArray[index1] = newArray[index2];
    newArray[index2] = temp;
    return newArray;
    };

    let len = array.length;

    for (let i = 0; i < len; i++) {
      let swaps = 0;
      for (let j = 0; j < len - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          swaps++;
          swap(j, j + 1, array);
          let arrayCopy = [...array]
          arrayStates.push(arrayCopy);
        }
      }
      if (!swaps) { break; }
    }
    console.log(arrayStates);
    // this.setState({
    //   array: array
    // })
    for (let i=0; i<arrayStates.length; i++) {
      setTimeout(()=>{
        this.setState({
          array: arrayStates[i]
        })
      }, 10*i)
    }
  }


  render () {
    return(
      <div>
        <h2>Sorting Algorithm Visualizer</h2>
        <button id="button" type="button" onClick={ () => {this.generateArray()} }>Generate Data</button>
        <button type="button" onClick={() => {this.bubbleSort(this.state.array)}}>Bubble Sort</button>
        <RenderArray
          array={this.state.array}
          generateArray={this.generateArray.bind(this)}
        />
      </div>
    );
  }
}

export default App;