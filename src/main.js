import React from 'react'
import ReactDOM from 'react-dom'

class ToDo extends React.Component {
    render() {
        return <li>{this.props.content}</li>
    }
}
class App extends React.Component {
    render() {
        const todoList = ['a', 'b', 'c', 'd']
        const todos = todoList.map((item, index)=>
            <ToDo content={item} key={index}/>
        )
        return <ol>{todos}</ol>
    }
}

ReactDOM.render(<App/>, document.getElementById('index')) 