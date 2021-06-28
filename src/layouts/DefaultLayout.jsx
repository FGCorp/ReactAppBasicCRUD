import React from "react"
import { Layout, Menu } from 'antd';
import { withRouter, NavLink } from "react-router-dom";

const { Header, Footer, Content } = Layout;

const DefaultLayout = ({ children, location: { pathname } }) => {
  return (
    <Layout>
      <Header style={{ background: "white" }}>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={[pathname]}>
          <Menu.Item key="/">
            <NavLink to="/">Ana Sayfa</NavLink>
          </Menu.Item>
          <Menu.Item key="/products">
            <NavLink to="/products">Ürünler</NavLink>
          </Menu.Item>
        </Menu>
      </Header>

      <Content style={{ minHeight: "calc(100vh - 198px)", margin: 60, marginTop: 30, marginBottom: 30 }}>
        {children}
      </Content>

      <Footer style={{ textAlign: "center"}}>
        Footer
      </Footer>
    </Layout>
  )
}

export default withRouter(DefaultLayout);