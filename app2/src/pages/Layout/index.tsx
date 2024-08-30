import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import { ProLayout } from '@ant-design/pro-components';
import useRoute from '@/hooks/useRoute';
import { menuList } from '@/routes';
import Header from './Header';

export default function Layout() {
  const { goto } = useRoute();
  const [pathname, setPathname] = useState('');

  const defaultProps = {
    route: {
      path: '/',
      routes: menuList,
    },
    location: { pathname }
  }

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [])

  return (
    <div id="app-pro-layout" style={{ height: '100vh' }}>
      {window.__POWERED_BY_QIANKUN__ ?
        <Outlet /> :
        <ProLayout
          title='权限引擎'
          siderWidth={216}
          {...defaultProps}
          headerRender={() => (<p>header</p>)}
          headerContentRender={() => (<p>header</p>)}
          token={{
            sider: {
              colorMenuBackground: '#fff',
              colorMenuItemDivider: '#dfdfdf',
              colorTextMenu: '#595959',
              colorTextMenuSelected: 'rgba(42,122,251,1)',
              colorBgMenuItemSelected: 'rgba(230,243,254,1)',
            }
          }}
          menuItemRender={(item, dom) => (
            <div onClick={() => {
              setPathname(item.path || '/welcome');
              goto(item.path || '/');
            }}>
              {dom}
            </div>
          )}
          onMenuHeaderClick={(e) => goto('/')}
        >
          <Header />
          <Outlet />
        </ProLayout>
      }
    </div >
  )
}