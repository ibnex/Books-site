# Tech-Book: Online Book Selling Platform

## Project Description

Tech-Book is a web application designed for buying and selling books online. It provides users with a seamless experience to browse, purchase, and manage books. The platform includes user authentication (login, logout, registration), a product catalog, and an admin panel for adding new books.

## Features

* **User Authentication:**
    * User registration with email and password.
    * Secure login and logout functionality.
    * Session management for authenticated users.
* **Product Catalog:**
    * Display of books with details (name, price, category, image).
    * Ability to browse books by category.
    * Responsive design for various screen sizes.
* **Shopping Cart (Future Implementation):**
    *  add to cart and buy features.
* **Admin Panel:**
    * Secure admin login.
    * Functionality to add new book products with details (name, price, category, image URL).
* **JavaScript Backend:**
    * API endpoints for user authentication and product management.
    * Data storage and retrieval.

## Technologies Used

* **Frontend:**
    * React.js: For building the user interface.
    * Tailwind CSS: For styling and responsive design.
    * Axios: For making HTTP requests to the backend.
    * Javascript.
* **Backend:**
    * Node.js: Javascript runtime environment.
    * backend with javascript .
    * MongoDB: Database for storing user and product data.
* **Authentication:**
    * JWT


## Getting Started

### Prerequisites

* Node.js and npm (or yarn) installed.
* (Database needs to be installed, example: MongoDB)

### Installation

1.  **Clone the Repository:**

    ```bash
    git clone [https://github.com/ibnex/Tech-Book.git]
    cd Tech-Book
    ```

2.  **Install Backend Dependencies:**

    ```bash
    cd backend
    npm install
    ```

3.  **Install Frontend Dependencies:**

    ```bash
    cd Front-end
    npm install 
    ```

4.  **Database Configuration:**
    * Configure the database connection in the backend's configuration files.
    * Start your database server.

5.  **Start the Backend Server:**

    ```bash
    cd ../backend
    npm start
    ```

6.  **Start the Frontend Development Server:**

    ```bash
    cd ../frontend
    npm run dev
    ```


### Backend API Endpoints (Example)

* `POST /auth/register`: User registration.
* `POST /auth/login`: User login.
* `POST /auth/logout`: User logout.
* `POST /auth/products`: Admin add product.
* `GET /products`: Retrieve all products.

### Frontend Routes (Example)

* `/`: Product catalog.
* `/register`: User registration form.
* `/login`: User login form.
* `/admin/add-product`: Admin add product form.

## Future Enhancements

* Shopping cart and checkout functionality.
* User profile management.
* Search and filter options for books.
* Admin edit and delete product functionality.
* User order history. (edit)

## Contributing

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them.
4.  Push your changes to your fork.
5.  Submit a pull request.

## Author -->

* [Github] - [https://github.com/ibnex],
* [Instagram] - [https://www.instagram.com/ibne__ahad?igsh=MWgzbGs3bDY1M296Yg==]

                            <----->