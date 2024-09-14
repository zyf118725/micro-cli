import { registerMicroApps, start } from 'qiankun';

const loader = (loading: any) => {
  console.log('loading: ', loading); // true
};

// 要加载的子应用的列表
const apps: any[] = [
  {
    name: 'react app', // app name registered
    entry: '//localhost:3345',
    container: '#app1',
    activeRule: '/app1',
    props: { myName: 'baes张三' }
  },
  {
    name: 'crm',
    entry: '//localhost:3346',
    container: '#crm',
    activeRule: '/crm',
  },
];

// 2.注册子应用，第二个参数是乾坤的声明周期
registerMicroApps(apps,
  {
    beforeLoad: [async (app: any) => { console.log('加载前', app.name); }],
    beforeMount: [async (app: any) => { console.log('挂载前', app.name); }],
    afterMount: [async (app: any) => { console.log('挂载后', app.name); }],
  }
);

start({
  sandbox: {
    experimentalStyleIsolation: true,
    // strictStyleIsolation: true, // 开启严格模式
  }
});