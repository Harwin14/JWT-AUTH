import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import React from 'react';
import Home from './components/Home';
function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/register' element={<Register />}></Route>
                    <Route path='/dashboard' element={<Dashboard  /> }></Route>
                    <Route path='/' element={<Dashboard />}></Route>
                    <Route path='/add' element={<AddProduct />}></Route>
                    <Route path='/edit/:id' element={<EditProduct />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
