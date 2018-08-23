import React from 'react'
import { Card, Button, Radio } from 'antd'
import './ui.less'

export default class Buttons extends React.Component {
  state = {
    loading: true,
    size: 'default'
  }

  // 不使用箭头函数保持this的话，调用的时候要用bind，把当前React对象穿进去
  handleCloseLoading() {
    this.setState({
      loading: false
    })
  }

  handleChange = (e) => {
    this.setState({
      size: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Card title="基础按钮" className="card-wrap">
          <Button type="primary">Jiaoguanwen</Button>
          <Button>Jiaoguanwen</Button>
          <Button type="dashed">Jiaoguanwen</Button>
          <Button type="danger">Jiaoguanwen</Button>
          <Button disabled>Jiaoguanwen</Button>
        </Card>
        <Card title="图形按钮" className="card-wrap">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button shape="circle" icon="search"></Button>
          <Button icon="search" type="primary">搜索</Button>
          <Button icon="download" type="primary">下载</Button>
        </Card>
        <Card title="Loading按钮" className="card-wrap">
          <Button loading={this.state.loading} type="primary">确定</Button>
          <Button type="primary" shape="circle" loading={this.state.loading}></Button>
          <Button loading={this.state.loading}>点击加载</Button>
          <Button shape="circle" loading={this.state.loading}></Button>
          <Button type="primary" onClick={this.handleCloseLoading.bind(this)}>关闭</Button>
        </Card>
        <Card title="按钮组">
          <Button.Group>
            <Button icon="left" type="primary">返回</Button>
            <Button icon="right" type="primary">前进</Button>
          </Button.Group>
        </Card>
        <Card title="按钮尺寸" className="card-wrap">
          <Radio.Group value={this.state.size} onChange={this.handleChange}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>Jiaoguanwen</Button>
          <Button size={this.state.size}>Jiaoguanwen</Button>
          <Button type="dashed" size={this.state.size}>Jiaoguanwen</Button>
          <Button type="danger" size={this.state.size}>Jiaoguanwen</Button>
          <Button disabled size={this.state.size}>Jiaoguanwen</Button>
        </Card>
      </div>
    )
  }
}