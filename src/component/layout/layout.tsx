import * as React from 'react';
import {connect} from 'react-redux';

import actions from '../../store/action/couter';
import { withRouter } from 'react-router';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Store, Counter } from '../../types';
import { ILayoutComponentProps, ILayoutComponentState } from '../../interface/layout-interface';
import { mapDispatchToProps } from '../../store/bindActionCreators';
import { renderRoutes } from 'react-router-config'
import { routes } from '../../router/route'
import './layout.scss'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';


import userComponent from '../user/user';
import CounterComponent from '../counter'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class layoutComponent extends React.Component<ILayoutComponentProps, ILayoutComponentState> {
  constructor(props) {
    super(props);
    this.state = {
      route: props.route,
    }
  }

  render() {
    console.log('route', this.state.route);
      return (
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      subnav 1
                    </span>
                  }
                >
                  <Menu.Item key="1">
                    <Link to="/user">用户信息</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/counter">计算器</Link>
                  </Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="laptop" />
                      subnav 2
                    </span>
                  }
                >
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="notification" />
                      subnav 3
                    </span>
                  }
                >
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                {renderRoutes(this.state.route.children)}
                {/* Content */}
                {/* <Router>
                  <React.Fragment>
                    <Route exact path="/" component={userComponent}></Route>
                    <Route path="/user" component={CounterComponent}></Route>
                  </React.Fragment>
                </Router> */}
              </Content>
            </Layout>
          </Layout>
        </Layout>
    )
  }

  componentDidMount() {
    this.props.history.push('/user');
  }

}

let mapStateToProps = function(state: Store): Counter {
  console.log('state', state);
  return {
    number: state.counter.number,
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(layoutComponent));