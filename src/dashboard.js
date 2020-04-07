
import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import App from './App';
import { connect } from 'react-redux';
import { logout } from './redux/Auth.redux';
import Login from './containers/login/login';


function erying() {
    return <h2>wocao</h2>
}

function saying() {
    return <h2>sanasnan</h2>
}

@connect(
    state => state.auth,
    {logout}
)




class Dashboard extends Component {
    handleClick = (e) => {
        console.log('click ', e);
    }
    render() {
        console.log(this.props.match)
        const redirectToLogin = <Redirect to='/login'></Redirect>
        const app = (
            <div>
                <ul>
                    <li><Link to='/dashboard/'>首页</Link></li>
                    <li><Link to='/dashboard/erying'>二营</Link></li>
                    <li><Link to='/dashboard/sanying'>三营</Link></li>
                </ul>
                <Route path='/dashboard/' exact component= {App}></Route>
                <Route path='/dashboard/erying' component= {erying}></Route>
                <Route path='/dashboard/sanying' component= {saying}></Route>
            </div>
        )
        return this.props.isAuth ? app : redirectToLogin
    }
}

export default Dashboard