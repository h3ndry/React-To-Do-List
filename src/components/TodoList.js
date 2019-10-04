import React from 'react'
import TodoItem from './TodoItem'
import ProTypes from 'prop-types'

class TodoList extends React.Component {
  render () {
    // console.log(this.props.todoList.map(item => item.tittle))
    return this.props.todoList.map(item => (
      <TodoItem
        key={item.id}
        todoItem={item}
        markComplete={this.props.markComplete}
        dltItem={this.props.dltItem}
      />
    ))
  }
}

// ProTypes
TodoList.proTypes = {
  todoList: ProTypes.array.required
}
export default TodoList
