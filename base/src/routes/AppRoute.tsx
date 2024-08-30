import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import { routes, routerConfig } from './index'
import Layout from '@/pages/Layout';
// import App from '@/pages/App';

export default function AppRoute() {
  const App = lazy(() => import('@/pages/App'));
  const MySuspense = (Dom: any) => <Suspense fallback={<p></p>}> {Dom} </Suspense>;
  useEffect(() => { }, [])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={routerConfig?.defaultRoute} replace />} />
        <Route path="/" element={<Layout />} >
          {routes.map((item: any, i: number) => (
            <Route key={i} path={item.path} element={MySuspense(<item.element />)} />
          ))}
          <Route path='/app' element={MySuspense(<App />)} />
          <Route path='/app1/*' element={MySuspense(<App />)} />
          <Route path='/app2/*' element={MySuspense(<App />)} />
        </Route>
      </Routes>
    </Router>
  )
}