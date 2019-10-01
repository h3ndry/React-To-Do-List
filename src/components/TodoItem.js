import React, { Component } from 'react'
import ProTypes from 'prop-types'

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.complete ? 'line-through' : 'none'
    }
  }
  // markComplete = e => {
  //   return {}
  // }

  render () {
    // const { id, title } = this.props.todo
    return (
      <div style={this.getStyle()}>
        <p>
          {/* <input type='checkbox' onChange={this.props.markComplete} /> */}
          {this.props.todo.title}
        </p>
      </div>
    )
  }
}

TodoItem.proTypes = {
  todo: ProTypes.object.required
}

export default TodoItem
