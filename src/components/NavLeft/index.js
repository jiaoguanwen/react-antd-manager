import React from 'react'
import MenuConfig from '../../config/menuConfig'
import { NavLink } from 'react-router-dom'
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
      return <Menu.Item title={item.title} key={item.key}>
        <NavLink to={'/admin' + item.key}>{item.title}</NavLink>
      </Menu.Item>
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
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}