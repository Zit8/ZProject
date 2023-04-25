import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import UserProfileMenu from "../UI/UserProfileMenu";

const { Header, Content, Sider } = Layout;

export default function Profile(): JSX.Element {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider width={200} style={{ background: colorBgContainer }}>
        <UserProfileMenu />
      </Sider>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Мой профиль
        </Content>
      </Layout>
    </Layout>
  );
}
