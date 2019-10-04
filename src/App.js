import React from 'react'
import './App.css'
import TodoList from './components/TodoList'
import Header from './components/layout/header'
import AddTodo from './components/AddTodo'

class App extends React.Component {
  state = {
    todoList: [
      {
        id: 1,
        tittle: 'Take out the trash',
        complete: false
      },
      {
        id: 2,
        tittle: 'Dinner with wifey',
        complete: false
      },
      {
        id: 3,
        tittle: 'Meting with boss',
        complete: false
      }
    ]
  }
  // Toggle complete
  markComplete = id => {
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (item.id === id) {
          item.complete = !item.complete
        }
        return item
      })
    })
  }

  // Delete Item
  dltItem = id => {
    this.setState({
      todoList: [...this.state.todoList.filter(item => item.id != id)]
    })
  }
  // Add to do
  addTodo = tittle => {
    const newTodo = {
      id: 4,
      tittle,
      complete: false
    }

    this.setState({ todoList: [...this.state.todoList, newTodo] })
  }
  render () {
    return (
      <div className='App'>
        <div className='container'>
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <TodoList
            todoList={this.state.todoList}
            markComplete={this.markComplete}
            dltItem={this.dltItem}
          />
        </div>
      </div>
    )
  }
}

export default App
