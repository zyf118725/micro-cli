import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import { routes, routerConfig } from './index';

export default function AppRoute() {
  const Layout = lazy(() => import('@/pages/Layout'));
  const Login = lazy(() => import('@/pages/Login'));

  useEffect(() => { }, []);
  return (
    <Router basename={window?.__POWERED_BY_QIANKUN__ ? '/app1' : '/'}>
      <Suspense>
        <Routes>
          <Route path="/" element={<Navigate to={routerConfig?.defaultRoute} replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />} >
            {routes.map((item: any, i: number) => (
              <Route key={i} path={item.path} element={<Suspense><item.element /></Suspense>} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}