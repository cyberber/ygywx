import React, {Component} from 'react'
import {Row, Col} from 'antd'

export default class CHeader extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span="4">
                        <span>欢迎哈哈哈哈</span>
                        <a>退出</a>
                    </Col>
                    <Col span="20">
                    <span>欢迎哈哈哈哈</span>
                    <a>退出</a>
                </Col>
                </Row>
            </div>
        )
    }
}
