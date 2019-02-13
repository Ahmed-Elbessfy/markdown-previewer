import React from 'react'

function Previewer(props) {
  return (
    <div>
      <p id='previewer'>{props.htmlCode}</p>
    </div>
  )
}

export default Previewer;
