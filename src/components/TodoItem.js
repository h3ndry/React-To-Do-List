import React, { Component } from 'react'
import ProTypes from 'prop-types'

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todoItem.complete ? 'line-through' : 'none'
    }
  }
  // markComplete = e => {
  //   return {}
  // }

  render () {
    const { id, tittle } = this.props.todoItem
    return (
      <div style={this.getStyle()}>
        <p>
          {
            <input
              type='checkbox'
              onChange={this.props.markComplete.bind(this, id)}
            />
          }{' '}
          {tittle}
          <button onClick={this.props.dltItem.bind(this, id)} style={btnStyle}>
            X
          </button>
        </p>
      </div>
    )
  }
}

TodoItem.proTypes = {
  todoList: ProTypes.object.required
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '6px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
