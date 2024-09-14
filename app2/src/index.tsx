import ReactDOM from 'react-dom/client';
import '@/assets/reset.less';
import './public-path';
import AppRoute from '@/routes/AppRoute';


let root: any = null;
function render(props: any) {
  const { container } = props;
  root = ReactDOM.createRoot(container ? container.querySelector('#root') : document.getElementById("root"));
  root.render(<AppRoute />);
}

if (!window.__POWERED_BY_QIANKUN__) render({});

export async function bootstrap() { }

export async function mount(props: any) {
  render(props);
}

export async function unmount() {
  if (root) {
    root.unmount();
    root = null;
  }
}