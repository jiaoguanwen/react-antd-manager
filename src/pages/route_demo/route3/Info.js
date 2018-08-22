import React from 'react'

export default class Info extends React.Component {
  render() {
    return (
      <div>Info
      {this.props.match.params.mainId}  
      </div>
    )
  }
}