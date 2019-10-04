import React from 'react'

function header () {
  return (
    <header>
      <h1 style={headerStyle}>TodoList</h1>
    </header>
  )
}
const headerStyle = {
  background: '#333',
  textAlign: 'Center',
  color: '#fff',
  padding: '10px'
}

export default header
