import React from 'react'
import Child from './Child'

export default class Life extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  /*state = {
      count: 0
  }*/

  // this call method need bind this, the THIS in this method is runtime this
  handleClick() {
    console.log('click')
  }

  // the THIS in this method is define this
  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    let style = {
      padding: 50
    }
    return <div style={style}>
      <p>React生命周期介绍</p>
      <button onClick={this.handleClick.bind(this)}>点击一下</button>
      <button onClick={this.handleAdd}>点击一下</button>
      <p>{this.state.count}</p>
      <Child name={this.state.count}></Child>
    </div>
  }
}
