import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles.css'; // Importing the combined styles

const Products = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { addItemToCart } = useCart(); // Access addItemToCart function from CartContext

    useEffect(() => {
        fetch('http://localhost:8090/products')
            .then(response => response.json())
            .then(data => {
                // Sort products by ID in descending order
                const sortedData = data.sort((a, b) => b.id - a.id);
                setProducts(sortedData);
                setFilteredProducts(sortedData);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    useEffect(() => {
        setFilteredProducts(
            products.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.brand.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [searchQuery, products]);

    const handleDelete = (id) => {
        fetch(`http://localhost:8090/products/delete/${id}`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    const updatedProducts = products.filter(product => product.id !== id);
                    setProducts(updatedProducts);
                    setFilteredProducts(updatedProducts);
                } else {
                    console.error('Failed to delete product');
                }
            });
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const addToCart = (product) => {
        addItemToCart(product); 
    };

    return (
        <div className="products-container">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search products by name, category, or brand..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            <button className="create-button" onClick={() => window.location.href='products/create'}>Create Product</button>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.brand}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td>
                                <img 
                                    src={`http://localhost:8090/images/${product.image_file_name}`} 
                                    alt={product.name} 
                                    className="product-image"
                                />
                            </td>
                            <td>
                                <button onClick={() => window.location.href=`products/edit/${product.id}`}>Edit</button>
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                                <button onClick={() => addItemToCart({ id: product.id, name: product.name, price: product.price, type: 'product' })}> Add to Cart </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Products;
