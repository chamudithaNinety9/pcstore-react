- PC-Store

PC-Store is a full-stack e-commerce web application designed for buying and selling a variety of computer products, including laptops, printers, and accessories. 
Built using Spring Boot for the backend and React for the frontend.
PC-Store provides a seamless shopping experience with essential features for both customers.

Project Description

PC-Store is an e-commerce platform that allows users to browse, search, and purchase computer-related products. 
The application offers an extensive product catalog with detailed information, an admin dashboard for managing products, secure image uploads, a robust search functionality.

Key Features
* Product Catalog: Browse and search for products with details such as name, brand, category, price, and images.
* Admin Dashboard: Perform CRUD operations on products with authentication and authorization.
* Image Uploads: Securely upload and manage product images.
* Search Functionality: Find products by name, category, or brand with autocomplete suggestions and advanced filtering options.
* Shopping Cart: Add products and printers to the cart, view quantities and totals, and manage cart items.
* Contact Page: Contact support and view company details, with a form for submitting inquiries and feedback.

Tech Stack
* Frontend: React, Material-UI, React Router
* Backend: Spring Boot, Spring Data JPA, Hibernate
* Database: MySQL
* Other Tools: Multer for file uploads

Challenges & Learnings

  Integrating React with Spring Boot presented several challenges, 
  * including managing state and ensuring efficient communication between the frontend and backend. 
  * Overcoming CORS issues and optimizing API endpoints for better performance were key areas of focus.

Installation

To run this project locally, follow these steps:
* Clone the repository:
  * git clone https://github.com/chamudithaNinety9/pcstore-react.git
  * cd pcstore-react
    
* Backend Setup:
  * Ensure you have Java and Maven installed.
  * Navigate to the backend directory and run:
      * mvn install
      * mvn spring-boot:run
    
Frontend Setup:
* Ensure you have Node.js and npm installed.
* Navigate to the frontend directory and run:
    - npm install
    - npm start
