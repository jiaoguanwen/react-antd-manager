import React from 'react'
import { Link } from 'react-router-dom'

export default class Main extends React.Component {
  render() {
    return (
      <div>Main
        <Link to="/main/test-id">Topics1</Link>
        <Link to="/main/456">Topics2</Link>
        <hr />
        {this.props.children}
      </div>
    )
  }
}