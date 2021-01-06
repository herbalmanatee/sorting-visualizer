import React from 'react';
import ElementRender from './ElementRender.jsx'

let RenderArray = (props) => {
    return (
      <div>
        {
        props.array.map((element, index)=>{
          return (
            <ElementRender
              element={element}
              index={index}
              key={index}
            />
          )
        })
        }
      </div>
    );
}

export default RenderArray;