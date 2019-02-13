import React, { Component } from 'react';
import './App.css';

import Editor from './components/Editor';
import Previewer from './components/Previewer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      markdownCode : ''
    }
    this.getMarkdownCode = this.getMarkdownCode.bind(this)
  }
  getMarkdownCode(code){
    this.setState({
      markdownCode : code
    })
  }
  render() {
    return (
      <div className="App">
        <Editor markdownCode={this.getMarkdownCode}/>
        <Previewer />
      </div>
    );
  }
}

export default App;
