import React, {Component} from 'react';
import './style.less'
import '../../App.css';
import axios from 'axios'
import { ConnectionBase } from 'mongoose';
import utils from 'utility';
import { Input, Icon, Button } from 'antd';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passWord: ''
        };
    }


    emitEmpty = (type) => {
        if( type === 'user') {
            this.setState({ userName: '' });
        } else if (type === 'pass') {
            this.setState({ passWord: '' });
        }        
    }

    md5Lock(pwd) {
        const salt = 'xiaoweidarendedujiajiamizifu'
        return utils.md5(utils.md5(pwd + salt));
    }
    
    onChangeUserName = (type,e) => {
        if( type === 'user') {
            this.setState({ userName: e.target.value });
        } else if (type === 'pass') {
            this.setState({ passWord: e.target.value });
        }
    }

    submitToLogin() {
        const userparam = {
            userName: this.state.userName,
            password: this.state.passWord
        }
        axios.post('/user/login', userparam)
        .then((res)=> {
            console.log(res);
        })
        .catch((err)=> {
            console.log(err);
        })
    }

  render() {
    const { userName, passWord } = this.state;
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this, 'user')} /> : null;
    const suffix1 = userName ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this, 'pass')} /> : null;
    return (
        <div>
      <Input
        placeholder="Enter your username"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        suffix={suffix}
        value={userName}
        onChange={this.onChangeUserName.bind(this,'user')}
      />
      <Input
      placeholder="Enter your password"
      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
      suffix={suffix1}
      value={passWord}
      onChange={this.onChangeUserName.bind(this,'pass')}
    />
    <Button type="primary" onClick={this.submitToLogin}>登陆</Button>
    <Button type="primary">注册</Button>
    </div>
    );
  }
}
export default Login