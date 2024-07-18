Overview

PC-Store is a full-stack e-commerce web application designed for buying and selling a variety of computer products, including laptops, desktops, peripherals, and accessories. Built using Spring Boot for the backend and React for the frontend, PC-Store provides a seamless shopping experience with essential features for both customers and administrators.

Key Features

PC-Store offers a comprehensive product catalog where users can browse and search for products with detailed information, such as name, brand, category, price, and images. The catalog also allows for filtering by category or brand to help users find exactly what they need. The application includes an admin dashboard that facilitates product management, enabling administrators to perform CRUD operations (create, read, update, delete) on products. This admin section is secured with authentication and authorization to ensure that only authorized users can access it.

The platform supports secure image uploads, allowing administrators to upload product images that are stored and served efficiently to optimize performance. Users can take advantage of the robust search functionality to find products by name, category, or brand, complete with autocomplete suggestions and advanced filtering options.

PC-Store features a dedicated "Contact Us" page where users can contact support and view company details, with a form for submitting inquiries and feedback.

Tech Stack

The frontend of PC-Store is built using React, a popular library for creating user interfaces, along with Material-UI for material design components and React Router for routing. The backend is powered by Spring Boot, a framework that simplifies the development of Java-based backend applications, and Spring Data JPA for database interactions and object-relational mapping. The application uses MySQL as its relational database management system.

Challenges & Learnings

Integrating React with Spring Boot was a significant challenge, particularly in managing state and ensuring efficient communication between the frontend and backend. This process involved overcoming CORS issues and optimizing API endpoints for better performance.