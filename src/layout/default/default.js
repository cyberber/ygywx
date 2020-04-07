import React, {Component} from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link, Route, Redirect } from 'react-router-dom';
import App from '../../App';
import cusAddForm from '../../components/cusAddForm/cusAddForm';
import CHeader from '../../components/header/index';


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function erying() {
  return <h2>wocao</h2>
}

function saying() {
  return <h2>sanasnan</h2>
}

class defaultLayout extends Component {
  handleClick = (e) => {
    console.log('click ', e);
    this.props.history.push(`/defaultLayout/${e.keyPath[0]}`)
  }


  render() {
    return (
        <Layout style={{height: '100%'}}>
        <Header className="header">
        <CHeader></CHeader>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              onClick={this.handleClick}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />就叫菜单吧</span>}>
                <Menu.Item key="app">一一</Menu.Item>
                <Menu.Item key="erying">二二</Menu.Item>
                <Menu.Item key="sanying">三三</Menu.Item>
              </SubMenu>

            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <Route path='/defaultLayout/app' exact component= {App}></Route>
              <Route path='/defaultLayout/erying' component= {cusAddForm}></Route>
              <Route path='/defaultLayout/sanying' component= {saying}></Route>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
export default defaultLayout