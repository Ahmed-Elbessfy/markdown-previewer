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
    const defaultContent = ` # FreeCodeCamp Markdown Previewer \n\n _this a default content but you can change it_ \n\n ## Welcome to my second project for FreeCodeCamp \n\n this a project for the Frotn-End libraries certificate at [FreeCodeCamp]() curriculium. \n\n ### Examples of markdown syntax: \n\n You can use this as reference to markdown syntax \n\n # heading1 \n ## heading \n ### heading3 \n #### heading4 \n ##### heading5 \n ###### heading6 \n\n --- \n #### plain paragraph \n\n This a plain paragraph.This a plain paragraph.This a plain paragraph.This a plain paragraph. \n \n --- \n #### Text Styles\n\n we can create text-styles like :
    \n *Italic Text* using astroids \* Itlaic Text \* or _Italic Text too_ using underscores \_ Italic Text \_ \n\n **Bold Text** using double astroids \*\* Bold Text \*\* or __Bold Text too__ using double underscores \_\_ Bold Text \_\_  \n\n ~~Deleted Text~~ using hyphens \~\~ Deleted Text \~\~  \n \n --- \n #### Links \n\n This is a [link](#) \n \n --- \n #### Images \n\n ![FreeCodeCamp](https://markdown-here.com/img/icon128.png) \n \n --- \n #### Lists 
    \n Here is some lists : \n\n * ul-list
    * ul-list-item
    * ul-list-item \n * ol-list
    1. ol-list-item
    2. ol-list-item
    3. ol-list-item \n * list-with-nested-items
      - list item
      - list parent
          1. list-child
          2. list-child
            * list-child-second
            * list-child-second
      - list parent two
          1. list-child
          2. list-child
   \n --- \n ##### Blockquotes \n\n > blockquote of a wise person \n\n --- \n #### Codeblocks \n\n you can write codeblocks too: \n\n \`\`\`javascript \n // multi-line code block \n const functionName = (args) => {
       return args.split('') \n } \n \`\`\` \n\n --- \n\n #### Tables \n\n |header|header|header|header|\n |---|---|---|---|\n |body|body|body|body|\n |body|body|body|body|\n |body|body|body|body|\n |body|body|body|body|\n `
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