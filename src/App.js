import React from 'react'
import './components/Todos'
import './App.css'
import Todos from './components/Todos'

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        tittle: 'Take out the trash',
        complete: false
      },
      {
        id: 2,
        tittle: 'Dinner with wifey',
        complete: true
      },
      {
        id: 3,
        tittle: 'Meting with boss',
        complete: false
      }
    ]
  }
  render () {
    // console.log(this.state.todos)

    return (
      <div className='App'>
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}

export default App
