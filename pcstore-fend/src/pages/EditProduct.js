import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const navigate = useNavigate(); // Hook to navigate programmatically
    const [formData, setFormData] = useState({
        name: '',
        brand: '',
        category: '',
        price: '',
        description: '',
        image_file_name: '', // Ensure this matches the key from the backend
        imageFile: null // Initialize imageFile state
    });

    // Fetch product details from backend
    useEffect(() => {
        fetch(`http://localhost:8090/products/${id}`)
            .then(response => response.json())
            .then(data => {
                setFormData({
                    name: data.name,
                    brand: data.brand,
                    category: data.category,
                    price: data.price,
                    description: data.description,
                    image_file_name: data.image_file_name // Ensure correct key for image file name
                });
            })
            .catch(error => console.error('Error fetching product:', error));
    }, [id]);

    // Handle form input changes
    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    // Handle image file change
    const handleImageChange = (event) => {
        if (event.target.files.length > 0) {
            setFormData({
                ...formData,
                imageFile: event.target.files[0]
            });
        }
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('brand', formData.brand);
        formDataToSend.append('category', formData.category);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('description', formData.description);

        // Append imageFile only if it's provided
        if (formData.imageFile) {
            formDataToSend.append('imageFile', formData.imageFile);
        }

        try {
            const response = await fetch(`http://localhost:8090/products/edit/${id}`, {
                method: 'PUT',
                body: formDataToSend
            });

            if (response.ok) {
                // Product updated successfully, redirect to Products page
                navigate('/products');
            } else {
                console.error('Failed to update product');
            }
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    // If formData is null or empty, display a loading message or handle error state
    if (!formData) {
        return <div>Loading...</div>;
    }

    // Render the form once product data is available
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
                    <input type="text" name="category" value={formData.category} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="text" name="price" value={formData.price} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="description" value={formData.description} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Current Image:</label>
                    <img
                        src={`http://localhost:8090/images/${formData.image_file_name}`}
                        alt={formData.name}
                        style={{ maxWidth: '200px' }}
                    />
                </div>
                <div>
                    <label>New Image:</label>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                </div>
                <button type="submit">Update Product</button>
            </form>
        </div>
    );
};

export default EditProduct;
