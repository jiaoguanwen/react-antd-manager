import React from 'react'
import { Card, Table, Modal, Button, message } from 'antd'
import axios from './../../axios/index'
import Utils from './../../utils/utils'

export default class BasicTable extends React.Component {
  state = {
    dataSource2: []
  }

  params = {
    page: 1
  }

  componentDidMount() {
    const data = [
      {
        id: '0',
        userName: 'Jack',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市海淀区奥林匹克公园',
        time: '09:00'
      },
      {
        id: '1',
        userName: 'Tom',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市海淀区奥林匹克公园',
        time: '09:00'
      },
      {
        id: '2',
        userName: 'Lily',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市海淀区奥林匹克公园',
        time: '09:00'
      }
    ]
    data.map((item, index) => {
      item.key = index
      return undefined
    })
    this.setState({
      dataSource: data
    })
    this.request()
  }

  request = () => {
    let _this = this
    axios
      .ajax({
        url: '/table/list',
        data: {
          params: {
            page: this.params.page
          }
        }
      })
      .then(res => {
        if (res.code === 0) {
          res.result.list.map((item, index) => {
            item.key = index
            return undefined
          })
          this.setState({
            dataSource2: res.result.list,
            pagination: Utils.pagination(res, current => {
              console.log(current)
              _this.params.page = current
              this.request()
            })
          })
        }
      })
  }

  onRowClick = (record, index) => {
    let selectKey = [index]
    Modal.info({
      title: '信息',
      content: `用户名：${record.userName}，用户爱好：${record.interest}`
    })
    this.setState({
      selectedRowKeys: selectKey,
      selectItem: record
    })
  }

  handleDelete = () => {
    Modal.confirm({
      title: '删除提示',
      content: `您确定要删除这些数据吗？`,
      onOk: () => {
        message.success('删除成功')
      }
    })
  }

  render() {
    const columns = [
      {
        title: 'id',
        key: 'id',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        key: 'userName',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        key: 'sex',
        dataIndex: 'sex',
        render(sex) {
          return sex === 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        key: 'state',
        dataIndex: 'state',
        render(state) {
          let config = {
            '1': '咸鱼一条',
            '2': '风华浪子',
            '3': '北大才子',
            '4': '百度FE',
            '5': '创业者'
          }
          return config[state]
        }
      },
      {
        title: '爱好',
        key: 'interest',
        dataIndex: 'interest',
        render(interest) {
          let config = {
            '1': '游泳',
            '2': '打篮球',
            '3': '踢足球',
            '4': '跑步',
            '5': '爬山',
            '6': '骑行',
            '7': '桌球',
            '8': '麦霸'
          }
          return config[interest]
        }
      },
      {
        title: '生日',
        key: 'birthday',
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        key: 'address',
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        key: 'time',
        dataIndex: 'time'
      }
    ]
    const selectedRowKeys = this.state.selectedRowKeys
    const rowSelection = {
      type: 'radio',
      // 目前来看，表格前面选择器和row选择是独立的，所以可以把他们关联起来，row点击后设置选择器的选中项，选择器选择后调row选择的方法
      onChange: (selectedRowKeys, selectedRows) => {
        this.onRowClick(selectedRows[0], selectedRowKeys[0])
      },
      selectedRowKeys
    }
    const rowCheckSelection = {
      type: 'checkbox',
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(selectedRowKeys)
        console.log(selectedRows)
      }
    }
    return (
      <div>
        <Card title="基础表格">
          <Table
            bordered
            pagination={false}
            dataSource={this.state.dataSource}
            columns={columns}
          />
        </Card>
        <Card title="动态数据渲染表格-mock" style={{ margin: '10px 0' }}>
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>
        <Card title="Mock-单选" style={{ margin: '10px 0' }}>
          <Table
            bordered
            rowSelection={rowSelection}
            onRow={(record, index) => ({
              onClick: () => {
                this.onRowClick(record, index)
              }
            })}
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>
        <Card title="Mock-多选" style={{ margin: '10px 0' }}>
          <div style={{ marginBottom: 10 }}>
            <Button onClick={this.handleDelete}>删除</Button>
          </div>
          <Table
            bordered
            rowSelection={rowCheckSelection}
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>
        <Card title="Mock-表格分页" style={{ margin: '10px 0' }}>
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={this.state.pagination}
          />
        </Card>
      </div>
    )
  }
}
