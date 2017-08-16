import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const marked = require('marked');

const init="Heading\n" +
    "=======\n" +
    "\n" +
    "Sub-heading\n" +
    "-----------\n" +
    " \n" +
    "### Another deeper heading\n" +
    " \n" +
    "Paragraphs are separated\n" +
    "by a blank line.\n" +
    "\n" +
    "Leave 2 spaces at the end of a line to do a  \n" +
    "line break\n" +
    "\n" +
    "Text attributes *italic*, **bold**, \n" +
    "`monospace`, ~~strikethrough~~ .\n" +
    "\n" +
    "Shopping list:\n" +
    "\n" +
    "  * apples\n" +
    "  * oranges\n" +
    "  * pears\n" +
    "\n" +
    "Numbered list:\n" +
    "\n" +
    "  1. apples\n" +
    "  2. oranges\n" +
    "  3. pears\n" +
    "\n" +
    "The rain---not the reign---in\n" +
    "Spain.\n" +
    "\n" +
    " *[Herman Fassett](https://freecodecamp.com/hermanfassett)*";

class Markdown extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {

        return (

            <div className="markdown container-fluid">
                <div className="row">
                    <textarea id="inputArea" type="text" className="inputArea col-md-6" onChange={(inputArea)=>{this.props.markdownToHTML(inputArea);}}></textarea>
                    <div className="outputArea col-md-6" id="content">

                        </div>
                </div>
            </div>
        );
    }
}


class App extends React.Component {
    constructor(){
        super();
        this.state={
            html:undefined,
            watcher: undefined,
        };
        this.markDownToHTML=this.markDownToHTML.bind(this);
    }
    markDownToHTML(inputArea){

      this.setState({html:marked(inputArea.target.value)});
        if(this.state.watcher){clearTimeout(this.state.watcher);}
        this.setState({watcher:setTimeout(()=>{document.getElementById('content').innerHTML = this.state.html},500)});
    };

    render(){

        return(
            <div>
                <Markdown markdownToHTML={this.markDownToHTML} htmltag={this.state.html}/>
            </div>


        )
    }
}

export default App;


setTimeout(()=>{document.getElementById('content').innerHTML = marked(init);
    document.getElementById('inputArea').value = init},500);