import React from 'react'
import MenuConfig from '../../config/menuConfig'
import { Menu } from 'antd'
import './index.less'

const SubMenu = Menu.SubMenu
console.log(MenuConfig)

export default class NavLeft extends React.Component {
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig)
    console.log(menuTreeNode)

    // 此方法会调用render方法，还有forceUpdate也会
    this.setState({
      menuTreeNode
    })
  }
  renderMenu = (data) => {
    // 菜单渲染
    return data.map(item => {
      // 遍历
      if (item.children) {
        return <SubMenu title={item.title} key={item.key}>{this.renderMenu(item.children)}</SubMenu>
      }
      return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
    })
  }

  render() {
    /* let style = {
      backgroundColor: 'red'
    } */
    return (
      // <div style={style}>
      <div>
        {/* <a href="">NavLeft</a> */}
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>Access</h1>
        </div>
        <Menu theme="dark">
          {/* <SubMenu key="sub1" title="Menu">
            <Menu.Item key="1">1</Menu.Item>
            <Menu.Item key="2">2</Menu.Item>
            <Menu.Item key="3">3</Menu.Item>
            <Menu.Item key="4">4</Menu.Item>
          </SubMenu> */}
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}