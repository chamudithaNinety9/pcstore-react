import React from 'react';

const ProductTable = ({ products, onEdit, onDelete }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Created At</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.brand}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td><img src={product.image} alt={product.name} width="50" /></td>
                        <td>{product.createdAt}</td>
                        <td>
                            <button onClick={() => onEdit(product.id)}>Edit</button>
                            <button onClick={() => onDelete(product.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductTable;
