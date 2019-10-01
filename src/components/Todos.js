import React from 'react'
import './TodoItem'
import TodoItem from './TodoItem'
import ProTypes from 'prop-types'

class Todos extends React.Component {
  // markComplete = e => {
  //   console.log('Hello World')
  // }
  render () {
    // console.log(this.props.todos)
    return this.props.todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
  }
}

// ProTypes
Todos.proTypes = {
  todos: ProTypes.array.required
}
export default Todos
