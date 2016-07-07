import {Block} from "prosemirror/dist/model"
import React from "react"
import ReactDOM from "react-dom"

let interval;

class ExampleComponent extends React.Component {
  componentDidMount() {
    console.log('Mounting');
    interval = setInterval(function(){
      console.log('Still alive');
    }, 1000);
  }

  componentWillUnmount() {
    console.log('Unmounting');
    window.clearInterval(interval);
  }

  render() {
    return (
    <div style={{backgroundColor: 'orange', textAlign: 'center', padding: '30px'}}>
      This is a React component
    </div>)
  }
}

class ExampleNode extends Block {
  toDOM(node) {
    let dom = document.createElement("div")
    ReactDOM.render(<ExampleComponent />, dom)
    return dom
  }
}

exports.ExampleNode = ExampleNode
