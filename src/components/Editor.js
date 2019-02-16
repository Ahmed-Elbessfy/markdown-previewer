import React, { Component } from 'react';

class Editor extends Component {
  constructor(props){
    super(props);
    this.textarea = React.createRef();
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    this.props.markdownCode(e.target.value)
  }
  componentDidMount(){
    this.props.markdownCode(this.textarea.current.defaultValue)
  }
  render() {
    return (
      <form id='editor'>
        <textarea 
          ref = {this.textarea}
          onChange={this.handleChange}
          style={{width:'100%', height : '20rem' }}
          defaultValue='# header1'
        >
        </textarea>
      </form>
    );
  }
}

export default Editor;