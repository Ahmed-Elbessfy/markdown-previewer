import React from 'react';
import marked from 'marked';

function Previewer(props) {

  //https://medium.com/@arpith/handling-markdown-in-react-24b275cddf39
  //Convert Markdown to html code function
  const convertMarkdown = () => {
    let returnedCode = marked(props.htmlCode, {sanitize : true});
    return {__html : returnedCode}
  }
  return (
    <div>
      <p id='previewer' dangerouslySetInnerHTML={convertMarkdown()} />
    </div>
  )
}

export default Previewer;
