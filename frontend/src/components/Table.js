function Table({ products, deleteItem }) {
    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Product name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>
                                <button
                                    className='button is-danger'
                                    onClick={() => deleteItem(product.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
