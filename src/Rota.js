import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Page from './components/Page';

const Rota = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Page />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );

}

export default Rota;