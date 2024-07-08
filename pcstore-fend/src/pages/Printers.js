import React, { useEffect, useState } from 'react';
import '../styles.css'; // Importing the combined styles

const Printers = () => {
    const [printers, setPrinters] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredPrinters, setFilteredPrinters] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8090/printers')
            .then(response => response.json())
            .then(data => {
                // Sort printers by ID in descending order
                const sortedData = data.sort((a, b) => b.id - a.id);
                setPrinters(sortedData);
                setFilteredPrinters(sortedData);
            })
            .catch(error => console.error('Error fetching printers:', error));
    }, []);

    useEffect(() => {
        setFilteredPrinters(
            printers.filter(printer =>
                printer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                printer.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                printer.brand.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [searchQuery, printers]);

    const handleDelete = (id) => {
        fetch(`http://localhost:8090/printers/delete/${id}`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    const updatedPrinters = printers.filter(printer => printer.id !== id);
                    setPrinters(updatedPrinters);
                    setFilteredPrinters(updatedPrinters);
                } else {
                    console.error('Failed to delete printer');
                }
            });
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="products-container">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search printers by name, category, or brand..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            <button className="create-button" onClick={() => window.location.href='printers/create'}>Create Printer</button>
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
                    {filteredPrinters.map(printer => (
                        <tr key={printer.id}>
                            <td>{printer.name}</td>
                            <td>{printer.brand}</td>
                            <td>{printer.category}</td>
                            <td>{printer.price}</td>
                            <td>
                                <img 
                                    src={`http://localhost:8090/images/${printer.image_file_name}`} 
                                    alt={printer.name} 
                                    className="product-image"
                                />
                            </td>
                            <td>
                                <button onClick={() => window.location.href=`printers/edit/${printer.id}`}>Edit</button>
                                <button onClick={() => handleDelete(printer.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Printers;
