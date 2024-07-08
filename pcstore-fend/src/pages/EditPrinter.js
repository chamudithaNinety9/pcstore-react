import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditPrinter = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        brand: '',
        category: '',
        price: '',
        description: '',
        imageFile: null,
        image_file_name: ''
    });

    useEffect(() => {
        fetch(`http://localhost:8090/printers/${id}`)
            .then(response => response.json())
            .then(data => {
                setFormData({
                    name: data.name,
                    brand: data.brand,
                    category: data.category,
                    price: data.price,
                    description: data.description,
                    image_file_name: data.image_file_name
                });
            })
            .catch(error => console.error('Error fetching printer:', error));
    }, [id]);

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('brand', formData.brand);
        formDataToSend.append('category', formData.category);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('description', formData.description);
        if (formData.imageFile) {
            formDataToSend.append('imageFile', formData.imageFile);
        }

        try {
            const response = await fetch(`http://localhost:8090/printers/edit/${id}`, {
                method: 'PUT',
                body: formDataToSend
            });

            if (response.ok) {
                navigate('/printers');
            } else {
                console.error('Failed to update printer');
            }
        } catch (error) {
            console.error('Error updating printer:', error);
        }
    };

    return (
        <div>
            <h2>Edit Printer</h2>
            <form onSubmit={handleSubmit}>
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
                    <input type="number" name="price" value={formData.price} onChange={handleInputChange} required />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="description" value={formData.description} onChange={handleInputChange} required />
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
                <button type="submit">Update Printer</button>
            </form>
        </div>
    );
};

export default EditPrinter;
