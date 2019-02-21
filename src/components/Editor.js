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
    this.props.markdownCode(this.textarea.current.defaultValue);
    this.textarea.current.focus();
  }
  render() {
    const defaultContent = `# FreeCodeCamp Markdown Previewer
    \n_this a default content but you can change it_
    \n## Welcome to my second project for FreeCodeCamp
    \nthis a project for the Front-End libraries certificate at [FreeCodeCamp]() curriculum.
    \n### Examples of markdown syntax:
    \nYou can use this as a reference to markdown syntax
    \n# heading1
    \n## heading2
    \n### heading3
    \n#### heading4
    \n##### heading5
    \n###### heading6
    \n
    \n---
    \n#### plain paragraph
    \nThis a plain paragraph.This a plain paragraph.This a plain paragraph.This a plain paragraph.
    \n
    \n---
    \n#### Text Styles
    \nwe can create text-styles like :
    \n*Italic Text* using asteroids \* Italic Text \* or _Italic Text too_ using underscores \_ Italic Text \_
    \n**Bold Text** using double asteroids \*\* Bold Text \*\* or __Bold Text too__ using double underscores \_\_ Bold Text \_\_
    \n~~Deleted Text~~ using hyphens \~\~ Deleted Text \~\~
    \n
    \n---
    \n#### Links
    \nThis is a [link](#)
    \n
    \n---
    \n#### Images
    \n![FreeCodeCamp](https://markdown-here.com/img/icon128.png)
    \n
    \n---
    \n#### Lists
    \nHere is some lists :
    \n* ul-list
    * ul-list-item
    * ul-list-item  * ol-list
    1. ol-list-item
    2. ol-list-item
    3. ol-list-item  * list-with-nested-items
      - list item
      - list parent
          1. list-child
          2. list-child
            * list-child-second
            * list-child-second
      - list parent two
          1. list-child
          2. list-child
    \n
    \n---
    \n#### Blockquotes
    \n> blockquote of a wise person
    \n
    \n---
    \n#### Code blocks
    \nyou can write code blocks too:
    \n\`\`\`javascript
    \n  // multi-line code block
    \n  const functionName = (args) => {
        return args.split('')
    \n  }
    \n\`\`\`
    \n
    \n---
    \n#### Tables
    \n|header|header|header|header|\n|--|--|--|--|\n|body|body|body|body|\n|body|body|body|body|\n|body|body|body|body|\n|body|body|body|body|
    \n`
    return (
      <form id='editor'>
        <textarea
          ref = {this.textarea}
          onChange={this.handleChange}
          defaultValue={defaultContent}
        >
        </textarea>
      </form>
    );
  }
}

export default Editor;