import React from 'react';

let ElementRender = (props) => {
    return (
      <span>
        <svg width="5" height={props.element}>
          <rect width="5" height={props.element}/>
        </svg>
      </span>
    )
}

export default ElementRender;