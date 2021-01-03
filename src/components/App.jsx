import React from 'react';
import ElementRender from './ElementRender.jsx';
import RenderArray from './RenderArray.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: []
    };
  }

  generateArray () {
    let result = [];
    for (let i=0; i < 101; i++) {
      let randInt = Math.floor(Math.random() * 500);
      if (randInt === 0) {
        randInt +=43
      }
      result.push(randInt)
    }
    this.setState({
      array: result
    });
  }

  render () {
    return(
      <div>
        <h2>Sorting Algorithm Visualizer</h2>
        <button id="button" type="button" onClick={ () => {this.generateArray()} }>Generate Array</button>
        <RenderArray
          array={this.state.array}
          generateArray={this.generateArray.bind(this)}
        />
      </div>
    );
  }
}

export default App;