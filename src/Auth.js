
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './redux/Auth.redux';
import { Redirect } from 'react-router-dom';
import { Button } from 'antd';


@connect(
    state => state.auth,
    { login }
)

class Auth extends Component {

    render() {
        return (
            <div>
               { this.props.isAuth? <Redirect to='/dashboard' /> : null }
               <h2>你还没有登陆哦</h2>
               <Button type="primary" onClick={this.props.login}>Primary</Button>
            </div>
        )
    }
}
export default Auth