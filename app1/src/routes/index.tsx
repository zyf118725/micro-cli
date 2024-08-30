import React, { lazy } from "react";
import { AppstoreOutlined } from "@ant-design/icons";

// 路由或菜单的配置项
const routerConfig = {
  defaultRoute: '/home',
}

// 配置路由和菜单列表
const allRouteList = [
  {
    path: '/home',
    name: '首页',
    icon: <AppstoreOutlined />,
    hidden: false,
    component: lazy(() => import('@/pages/Home')),
  },
  {
    path: '/goods',
    name: '商品管理',
    icon: <AppstoreOutlined />,
    hidden: false,
    component: lazy(() => import('@/pages/Goods')),
  },
  {
    path: '/mymodal',
    name: '测试modal',
    icon: <AppstoreOutlined />,
    hidden: false,
    component: lazy(() => import('@/pages/MyModal')),
  },
]

// 生成菜单列表
function createMenuList(list: any) {
  const arr: any = [];
  list.forEach((item: any, i: number) => {
    const { path, name, icon, component, children } = item;
    const obj: any = { path, name, };
    if (component) obj.component = <item.component />;
    if (icon) obj.icon = icon;
    if (children && children.length > 0) {
      createMenuList(children)
      obj.routes = createMenuList(children);
    }
    arr.push(obj);
  })
  return arr;
}

// 生成路由列表-数组扁平化
function createRoutes(list: any) {
  const arr: any = [];
  list.forEach((item: any) => {
    const obj: any = {
      path: item.path,
    }
    if (item.component) {
      obj.element = item.component;
      arr.push(obj)
    }
    if (item.children) {
      arr.push(...createRoutes(item.children))
    };
  })
  return arr
}

const menuList = createMenuList(allRouteList);
const routes = createRoutes(allRouteList);

export { routes, menuList, routerConfig };