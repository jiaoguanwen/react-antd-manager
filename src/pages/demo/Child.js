import React from 'react'

export default class Child extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentWillMount() {
    console.log('will mount')
    console.log(new Date().getTime())
  }

  componentDidMount() {
    console.log('did mount')
    console.log(new Date().getTime())
  }

  componentWillReceiveProps(newProps) {
    console.log('will props')
    console.log(newProps.name)
    console.log(new Date().getTime())
  }

  shouldComponentUpdate() {
    console.log('should update')
    console.log(new Date().getTime())
    return true
  }

  componentWillUpdate() {
    console.log('will update')
    console.log(new Date().getTime())
  }

  componentDidUpdate() {
    console.log('did update')
    console.log(new Date().getTime())
  }

  render() {
    return <div>
      <p>这里是子组件，测试子组件的生命周期</p>
      <p>{this.props.name}</p>
    </div>
  }
}
