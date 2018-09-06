import React from 'react'
import { Card, Button, notification } from 'antd'
import './ui.less'
export default class Notices extends React.Component {
  render() {
    return (
      <div>
        <Card title="通知提醒框" className="card-wrap">
          <Button type="primary" onClick={() => this}></Button>
        </Card>
      </div>
    )
  }
} 