
import { lazy } from 'react';
import { Route, Routes, Navigate, HashRouter } from 'react-router-dom';
import Layout from './Layout/Layout';

const Home = lazy(() => import('./pages/Home/Home'));
const Tweets = lazy(() => import('./pages/Tweets/Tweets'));

function App() {
  return (
    <Routes>
       <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
