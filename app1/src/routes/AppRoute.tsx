import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import { routes, routerConfig } from './index';

export default function AppRoute() {
  const Layout = lazy(() => import('@/pages/Layout'));

  const MySuspense = (Dom: any) => <Suspense fallback={<p></p>}> {Dom} </Suspense >;
  console.log('routes: ', routes);
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/app1' : '/'}>
      <Routes>
        <Route path="/" element={<Navigate to={routerConfig?.defaultRoute} replace />} />
        <Route path="/" element={MySuspense(<Layout />)} >
          {routes.map((item: any, i: number) => (
            <Route key={i} path={item.path} element={MySuspense(<item.element />)} />
          ))}
        </Route>
      </Routes>
    </Router>
  )
}