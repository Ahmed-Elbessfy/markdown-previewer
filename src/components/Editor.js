import React, { Component } from 'react';

class Editor extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    this.props.markdownCode(e.target.value)
  }
  render() {
    return (
      <form id='editor'>
        <textarea onChange={this.handleChange}>
          
        </textarea>
      </form>
    );
  }
}

export default Editor;