import React from 'react'
import { Row, Col } from 'antd'
import Header from './components/header'
import Footer from './components/footer'
import NavLeft from './components/navLeft'
import './style/common.less'

export default class Admin extends React.Component {

  render() {
    return (
      <Row className="container">
        <Col span="3" className="nav-left">
          <NavLeft />
        </Col>
        <Col span="21" className="main">
          <Header />
          <Row className="content">
            {this.props.children}
          </Row>
          <Footer />
        </Col>
      </Row>
    )
  }
}