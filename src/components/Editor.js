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
    \nThis a project for the Front-End libraries certificate at [FreeCodeCamp](https://www.freecodecamp.com) curriculum.
    \n### Examples of markdown syntax:
    \nYou can use this as a reference to markdown syntax
    \n# heading1
    \n## heading2
    \n### heading3
    \n#### heading4
    \n##### heading5
    \n###### heading6
    \n
    \n#### plain paragraph :
    \nThis a plain paragraph.This a plain paragraph.This a plain paragraph.This a plain paragraph.
    \n
    \n#### Text Styles :
    \nWe can create text-styles like :
    \n*Italic Text* using asterisks \* Italic Text \* or _Italic Text too_ using underscores \_ Italic Text \_
    \n**Bold Text** using double asterisks \*\* Bold Text \*\* or __Bold Text too__ using double underscores \_\_ Bold Text \_\_
    \n~~Deleted Text~~ using hyphens \~\~ Deleted Text \~\~
    \n
    \n#### Links :
    \nThis is a [link](#)
    \n
    \n#### Images :
    \n![FreeCodeCamp](https://s3.amazonaws.com/freecodecamp/curriculum-diagram-full.jpg)
    \n
    \n#### Lists :
    \nHere are some lists :
    \n* ul-list
    * ul-list-item
    * ul-list-item
    \n* ol-list
    1. ol-list-item
    2. ol-list-item
    3. ol-list-item
    \n* list-with-nested-items

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
    \n#### Blockquotes : 
    \n> blockquote of a wise person
    \n
    \n#### Code blocks :
    \nWe can write code blocks too:
    \n\`\`\`javascript
    \n  // multi-line code block
    \n  const functionName = (args) => {
        return args.split('')
    \n  }
    \n\`\`\`
    \n
    \n#### Tables :
    \n|header|header|header|header|\n|--|--|--|--|\n|body|body|body|body|\n|body|body|body|body|\n|body|body|body|body|\n|body|body|body|body|
    \n\n#### Horizontal Lines :
    \nWe can create Horizontal lines (( hr )) elements using \\-\\-\\- or \\*\\*\\* or \n\\_\\_\\_
    \n___
    `
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