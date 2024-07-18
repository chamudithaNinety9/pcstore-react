import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; // Importing the combined style

const CreateProduct = () => {
    const [formData, setFormData] = useState({
        name: '',
        brand: '',
        category: '',
        price: '',
        description: '',
        imageFile: null
    });

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('brand', formData.brand);
        formDataToSend.append('category', formData.category);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('imageFile', formData.imageFile);

        try {
            const response = await fetch('http://localhost:8090/products/create', {
                method: 'POST',
                body: formDataToSend
            });
            if (response.ok) {
                // Product created successfully, redirect to Products page
                navigate('/products'); // Redirect to Products page
            } else {
                console.error('Failed to create product');
            }
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleImageChange = (event) => {
        setFormData({
            ...formData,
            imageFile: event.target.files[0]
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Form fields */}
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div>
                    <label>Brand:</label>
                    <input type="text" name="brand" value={formData.brand} onChange={handleInputChange} required />
                </div>
                <div>
                    <label>Category:</label>
                    <input type="text" name="category" value={formData.category} onChange={handleInputChange} required />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="text" name="price" value={formData.price} onChange={handleInputChange} required />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="description" value={formData.description} onChange={handleInputChange} required />
                </div>
                <div>
                    <label>Image:</label>
                    <input type="file" accept="image/*" onChange={handleImageChange} required />
                </div>
                <button type="submit">Create Product</button>
            </form>
        </div>
    );
};

export default CreateProduct;
