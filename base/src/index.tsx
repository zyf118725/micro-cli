import ReactDOM from 'react-dom/client';
import './registerApps';
import AppRoute from '@/routes/AppRoute'; // 处理appRoute
import './common.less'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<AppRoute />);

