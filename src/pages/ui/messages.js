import React from 'react'
import { Button, Card, message } from 'antd'
import './ui.less'

export default class Messages extends React.Component {

  showMessage = (type) => {
    message[type]('恭喜你，React课程晋级成功')
  }

  render() {
    return (
      <div>
        <Card title="全局提示框" className="card-wrap">
          <Button type="primary" onClick={() => { this.showMessage('success') }}>Success</Button>
          <Button type="primary" onClick={() => { this.showMessage('info') }}>Success</Button>
          <Button type="primary" onClick={() => { this.showMessage('warning') }}>Success</Button>
          <Button type="primary" onClick={() => { this.showMessage('error') }}>Success</Button>
          <Button type="primary" onClick={() => { this.showMessage('loading') }}>Success</Button>
        </Card>
      </div>
    )
  }
}