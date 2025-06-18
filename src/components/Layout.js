import React from "react";
import { Layout, Typography, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";

const { Header, Content } = Layout;
const { Title } = Typography;

const AppLayout = () => {
  return (
    <Layout className="app-layout">
      <Header className="undercover-header">
        <Space align="center" size="middle" className="header-content">
          <Link className="header-title" to="/">
            UNDERCOVER
          </Link>
          <UserOutlined className="header-icon" />
        </Space>
      </Header>

      <Content className="main-content">
        <Outlet />
      </Content>
    </Layout>
  );
};

export default AppLayout;
