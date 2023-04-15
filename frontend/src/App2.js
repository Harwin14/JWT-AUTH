// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
// import Login from './components/Login';
// import Navbar from './components/Navbar';
// import Register from './components/Register';

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Table from './components/Table';
import About from './components/About';
import Contact from './components/Contact';

// import Header from './components/Header';
function App() {
    // const [title, setTitle] = useState(true);
    // const toggle = () => {
    //     return setTitle(!title);
    // };
    const [products, setProducts] = useState([
        { id: 1, title: 'product 1', price: 899 },
        { id: 2, title: 'product 2', price: 799 },
        { id: 3, title: 'product 3', price: 699 },
        { id: 4, title: 'product 4', price: 599 },
        { id: 5, title: 'product 5', price: 499 },
        { id: 6, title: 'product 6', price: 399 },
    ]);
    const deleteProduct = (productId) => {
        const newProducts = products.filter(
            (product) => product.id !== productId
        );
        setProducts(newProducts);
    };

    // const [name, setName] = useState('Harwin');

    /* componentDidMount setiap*/

    // useEffect(() => {
    //     console.log('use Effect Running');
    // }, [name]);

    /* componentDidUpdate akan dipakai*/

    // const [online, setOnline] = useState(true);
    // useEffect(() => {
    //     console.log(`i am ${online ? 'online' : 'offline'} `);
    // }, [online]);

    /* componentWillUnmount akan dilepas/bersihkan*/

    // const [scrollPosition, setScrollPosition] = useState(window.scroll);

    // const updateScrollPosition = () => {
    //     console.log(window.scrollY);
    //     setScrollPosition(window.scrollY);
    // };
    // // useEffect(() => {
    // //     console.log('Attaching');
    // //     window.addEventListener('scroll', updateScrollPosition);
    // //     return () => {
    // //         console.log('Detaching');
    // //         window.removeEventListener('scroll', updateScrollPosition);
    // //     };
    // // });
    // useEffect(() => {
    //     console.log('Attaching');
    //     window.addEventListener('scroll', updateScrollPosition);

    // },[]);
    return (
        // <BrowserRouter>
        //     <Routes>
        //         <Route exact path='/' element={<Login />}></Route>
        //         <Route path='/register' element={<Register />}></Route>
        //         <Route path='/dashboard' element={<> <Navbar /> <Dashboard /> </>} >
        //         </Route>
        //     </Routes>
        // </BrowserRouter>
        // <div>
        // <Header judul={title} tombol={toggle} />

        //     <h1>{title ? 'welcome to my App' : 'Title Changed'}</h1>
        //     <button onClick={() => toggle()}>Change title</button>
        //     <Table products={products} deleteItem={deleteProduct} />
        //     {/* <button onClick={() => setOnline(!online)}>Hit</button> */}
        //     <div style={{ height: '3000px' }}></div>
        // </div>
        <Router>
            {/* <p>{name}</p>
            <button onClick={() => setName('Agung')}>Change Name</button> */}
            <Routes>
                <Route
                    path='/'
                    element={
                        <Table products={products} deleteItem={deleteProduct} />
                    }
                ></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}> </Route>
            </Routes>
        </Router>
    );
}

export default App;
