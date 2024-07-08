Overview
PC-Store is a full-stack e-commerce web application designed for buying and selling computer products, including laptops and printers. Built with a focus on clean code and best practices, PC-Store ensures a seamless shopping experience for users. 
The backend is implemented in Spring Boot, providing robust API endpoints for managing products and printers. The frontend is developed using React, offering a responsive and intuitive user interface.


Key Features
PC-Store allows users to browse and search products by name, category, or brand. 
It supports CRUD operations for both products and printers, facilitating easy management. The admin dashboard is secured with authentication and authorization, ensuring only authorized users can perform administrative tasks. The application features secure image uploads for product and printer images, enhancing user experience and performance.

API and Endpoints

PC-Store uses RESTful API endpoints to manage products and printers:

* Products API:
    GET /products: Fetch all products.
    POST /products/create: Create a new product.
    GET /products/{id}: Fetch a product by ID.
    PUT /products/edit/{id}: Update a product.
    DELETE /products/delete/{id}: Delete a product.

* Printers API:
    GET /printers: Fetch all printers.
    POST /printers/create: Create a new printer.
    GET /printers/{id}: Fetch a printer by ID.
    PUT /printers/edit/{id}: Update a printer.
    DELETE /printers/delete/{id}: Delete a printer.

Challenges & Learnings
Integrating React with Spring Boot presented challenges, particularly in managing state and optimizing communication between frontend and backend. 
Overcoming CORS issues and ensuring efficient API endpoint design were significant learning points. 
Implementing secure image uploads and handling authentication and authorization securely further enriched the development experience.

Best Practices of Coding
PC-Store adheres to best practices of coding, ensuring:
* Modular and Scalable Architecture: Separation of concerns between frontend and backend components for maintainability and scalability.
* Clean Code: Well-structured and readable code with meaningful variable names, comments, and consistent formatting.
* Error Handling: Proper error handling and validation to ensure robustness and reliability.
* Security: Implementation of secure practices, including data validation, input sanitization, and protection against common vulnerabilities.
* Code Ethics: Adherence to ethical standards in coding, promoting inclusivity, transparency, and respect for user privacy.

