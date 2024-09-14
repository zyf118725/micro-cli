import ReactDOM from 'react-dom/client';
import AppRoute from '@/routes/AppRoute';
import '@/assets/reset.less';
import './registerApps';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(< AppRoute />);
