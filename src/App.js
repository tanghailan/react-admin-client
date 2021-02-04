import React, {Component} from 'react'
import {Button,message} from 'antd'
/*
 应用的根组件
 */
export default class App extends Component{
    handleClick = () =>{
        message.success("success")
    }
    render() {
        return <Button type="primary" onClick={this.handleClick}>测试antd</Button>
    }
}
