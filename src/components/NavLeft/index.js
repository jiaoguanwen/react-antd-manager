import React from 'react'
import MenuConfig from '../../config/menuConfig'
import { Menu } from 'antd'
import './index.less'

const SubMenu = Menu.SubMenu
console.log(MenuConfig)

export default class NavLeft extends React.Component {
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
          <SubMenu key="sub1" title="Menu">
            <Menu.Item key="1">1</Menu.Item>
            <Menu.Item key="2">2</Menu.Item>
            <Menu.Item key="3">3</Menu.Item>
            <Menu.Item key="4">4</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}