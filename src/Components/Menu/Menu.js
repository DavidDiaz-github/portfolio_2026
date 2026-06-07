import React, { useState } from 'react';
import { Link, withRouter,Switch, Route } from "react-router-dom";
import { Menu, Layout, Spin } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    AppstoreAddOutlined,
    SolutionOutlined,
    ProjectOutlined,
    HistoryOutlined
} from '@ant-design/icons';
import logo from '../../assets/png/logo-white.png';

import './menu.scss';

function MenuSider(props) {

  const [isCollapsed, setIsCollapsed] = useState(true);
  const { routes, location } = props;
  const menuKeys = ['/profile', '/project', '/evolution', '/education', '/skill'];
  const selectedMenuKey = menuKeys.find(
    (key) => location.pathname === key || location.pathname.startsWith(`${key}/`)
  );
    const toggleCollapsed = () => {
        setIsCollapsed((prev) => !prev);
    }

    const { Header, Sider, Content } = Layout;
    
  
  
    return  (
      <Layout className="app-shell">
        <Sider trigger={null} collapsible collapsed={isCollapsed} className="menu-sider">
          <div className="logo"><Link to='/'><img src={logo} alt='Logo web' /></Link></div>
          <Menu
            className="menu-nav"
            theme="dark"
            mode="inline"
            selectedKeys={selectedMenuKey ? [selectedMenuKey] : []}
          >
            <Menu.Item key="/profile" icon={<UserOutlined />}>
              <Link to={'/profile'}>Perfil</Link>
            </Menu.Item>
            <Menu.Item key="/project" icon={<ProjectOutlined />}>
              <Link to={'/project'}>Proyectos</Link>
            </Menu.Item>
            <Menu.Item key="/evolution" icon={<HistoryOutlined />}>
              <Link to={'/evolution'}>Evolución</Link>
            </Menu.Item>
            <Menu.Item key="/education" icon={<SolutionOutlined />}>
              <Link to={'/education'}>Estudios</Link>
            </Menu.Item>
            <Menu.Item key="/skill" icon={<AppstoreAddOutlined />}>
              <Link to={'/skill'}>Skill</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={`site-layout ${isCollapsed ? 'site-layout--collapsed' : 'site-layout--expanded'}`} >
          <Header className={`site-layout-background menu-header ${isCollapsed ? 'menu-header--collapsed' : 'menu-header--expanded'}`}>
            {React.createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggleCollapsed,
            })}
          </Header>
          <Content className="site-content">
              {routes ? <LoadRoutes routes={routes} /> : <Spin className="menu-loading" tip='Cargando' />}
          </Content>
          
        </Layout>
      </Layout>
    );
}

function LoadRoutes({ routes }) {
  
    return (
      
        <Switch>
            {routes.map((route) => (
                <Route 
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </Switch>
    );
}

export default withRouter(MenuSider);
