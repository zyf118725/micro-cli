import './public-path';
import ReactDOM from 'react-dom/client';
import AppRoute from '@/routes/AppRoute';
import '@/assets/reset.less';

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(< AppRoute />);

let root: any = null;

function render(props: any) {
  const { container } = props;
  root = ReactDOM.createRoot(
    container
      ? container.querySelector('#appp1root')
      : document.getElementById("appp1root")
  );
  root.render(< AppRoute />);
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log(' app1 bootstraped');
}

export async function mount(props: any) {
  render(props);
}

export async function unmount() {
  if (root) {
    root.unmount();
    root = null;
  }
}