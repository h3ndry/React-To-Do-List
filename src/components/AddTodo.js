import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    tittle: ''
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state.tittle)
    this.setState({ tittle: '' })
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render () {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type='text'
          name='tittle'
          style={{ flex: '10', padding: '5px' }}
          placeholder='add to do item..'
          value={this.state.tittle}
          onChange={this.onChange}
        />
        <input
          type='submit'
          value='submit'
          className='btn'
          style={{ flex: '1' }}
        />
      </form>
    )
  }
}

export default AddTodo
