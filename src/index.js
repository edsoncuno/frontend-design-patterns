import { createRoot } from 'react-dom/client';

import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import Layout from './components/Layout'
import Home from './pages/Home'
import Bridge from './pages/Bridge'
import Singelton from './pages/Singelton'
import NotFound from './pages/NotFound'

import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="bridge" element={<Bridge />} />
                <Route path="singelton" element={<Singelton />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
);