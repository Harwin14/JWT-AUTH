import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    const saveProduct = async (e) => {
        e.preventDefault();
        const product = { title, price };

        await fetch('http://localhost:8080/products', {
            method: 'post',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        navigate('/');
    };
    return (
        <div>
            <form onSubmit={saveProduct}>
                <div className='field'>
                    <label className='label'>Title</label>
                    <div className='control'>
                        <input
                            className='input'
                            type='text'
                            placeholder='Title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Price</label>
                    <div className='control'>
                        <input
                            className='input'
                            type='text'
                            placeholder='Price'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                <div className='field is-grouped'>
                    <div className='control'>
                        <button className='button is-success'>Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddProduct;
