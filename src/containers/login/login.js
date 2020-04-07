import React, {Component} from 'react';
import './style.less'
import '../../App.css';
import axios from 'axios'
import utils from 'utility';
import { Icon, Input, Button, Tabs, message } from 'antd';
import { connect } from 'react-redux';
import { login } from '../../redux/Auth.redux';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { register } from '../../redux/user.redux';





const TabPane = Tabs.TabPane;

@connect(
    state => state,
    { login, register }
)

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

    submitToLogin = () => {
        let userparam = {
            userName: this.state.userName,
            passWord: this.md5Lock(this.state.passWord)
        }
        this.props.register(userparam)
        // axios.post('/user/login', userparam)
        // .then((res)=> {
        //     const msg = res.data.msg;
        //     message.success(msg);
        //     this.props.login();
        //     // this.props.history.push('/default') 
        // })
        // .catch((err)=> {
        //     console.log(err);
        // })
    }
    callback = () => {
        console.log(123)
    }

    submitToregister = () => {

    }

  render() {
    // const store = this.props.store
    // const num = store.getState()
    const { userName, passWord } = this.state;
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this, 'user')} /> : null;
    const suffix1 = passWord ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this, 'pass')} /> : null;
    return (
      <div className="login_content">
      { this.props.isAuth? <Redirect to='/defaultLayout' /> : null }
        <div className="login_main">
            <Tabs defaultActiveKey="1" onChange={this.callback} style={{textAlign:'center'}}>
                <TabPane tab="登陆" key="1">
                    <div style={{margin: '50px'}}>
                    <div style={{ marginBottom: 16 }}>
                        <Input
                            placeholder="Enter your username"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            suffix={suffix}
                            value={userName}
                            onChange={this.onChangeUserName.bind(this,'user')}
                        />
                        </div>
                        <div style={{ marginBottom: 16 }}>
                        <Input
                        placeholder="Enter your password"
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type='password'
                        suffix={suffix1}
                        value={passWord}
                        onChange={this.onChangeUserName.bind(this,'pass')}
                        />
                        </div>
                        <div style={{ marginBottom: 16 }}>
                        <Button type="primary" onClick={this.submitToLogin}>登陆</Button>
                        </div>
                    </div>
                </TabPane>
                <TabPane tab="注册" key="2">不给注册</TabPane>
            </Tabs>
        </div>
      </div>
    );
  }
}
export default Login