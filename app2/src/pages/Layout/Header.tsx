import { Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import useRoute from '@/hooks/useRoute';
import './index.less';

export default function MyHeader() {
  const { goto } = useRoute();

  function logout() {
    goto('/login');
    localStorage.clear();
  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div key="logout" onClick={logout}>
          <LogoutOutlined /> 退出登录
        </div>
      ),
    },
  ];

  return (
    <div className={`headerwrap`}>
      <p></p>
      <div className={`right`}>
        <Dropdown className="action" menu={{ items }}>
          <Space>
            <UserOutlined />
            <span className="name">张三</span>
          </Space>
        </Dropdown>
      </div>
    </div>
  );
}