import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import List  from './component/List';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        todoItem: '',
        todoList: []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      todoList: [...this.state.todoList, this.state.todoItem],
      todoItem: ''
    });
  }

  handleChange = (event) => {
    this.setState({
      todoItem: event.target.value
    });
  }
  

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter your name" value={this.state.todoItem} onChange={this.handleChange} />
          <button>Submit</button>
        </form>
        <List todoList={this.state.todoList} />
      </div>
    )
  }
}

export default App;
