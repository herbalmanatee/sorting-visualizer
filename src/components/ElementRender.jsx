import React from 'react';

let ElementRender = (props) => {
    return (
      <span>
        <svg id={props.index} height={props.element}>
          <rect width="5" height={props.element}/>
        </svg>
      </span>
    )
}

export default ElementRender;