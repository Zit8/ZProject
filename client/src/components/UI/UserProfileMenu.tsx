import React, { useState } from "react";
import {
  CommentOutlined,
  ShoppingCartOutlined,
  StarOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import type { MenuProps } from "antd/es/menu";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Мой профиль", "1", <UserOutlined />),
  getItem("История заказов", "2", <ShoppingCartOutlined />),
  getItem("Избранное", "3", <StarOutlined />),
  getItem(
    <a href="https://t.me/var_Vitya" target="_blank" rel="noopener noreferrer">
      Наш Telegram
    </a>,
    "link",
    <CommentOutlined />
  ),
];

export default function UserProfileMenu(): JSX.Element {
  return (
    <>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["Мой профиль 1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={items}
      />
    </>
  );
}
