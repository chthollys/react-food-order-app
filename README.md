# React Food Order App

This is a simple food ordering application built with React. It allows users to browse a list of available meals, add them to a cart, and place an order.

## 💫 Features

* Browse a list of available meals.
* Add and remove items from the shopping cart.
* Adjust the quantity of items in the cart.
* View the total price of the items in the cart.
* Place an order with customer details.
* Responsive design for a seamless experience on different devices.

## ✨✨ Technologies Used

* **Frontend:**
    * React
    * Vite
    * JavaScript (ES6+)
    * CSS
* **Backend:**
    * Node.js
    * Express.js

## 🔍 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### 🗄️ Prerequisites

* Node.js and npm (or yarn) installed on your machine.

### 💡 Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/chthollys/react-food-order-app.git](https://github.com/chthollys/react-food-order-app.git)
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd react-food-order-app
    ```

3.  **Install frontend dependencies:**

    ```bash
    npm install
    ```

4.  **Navigate to the backend directory and install dependencies:**

    ```bash
    cd backend
    npm install
    ```

### 💻 Running the Application

1.  **Start the backend server:**

    * From the `backend` directory, run:
        ```bash
        npm start
        ```
    * The backend server will start on `http://localhost:3000`.

2.  **Start the frontend development server:**

    * From the root project directory, run:
        ```bash
        npm run dev
        ```
    * The application will be available at `http://localhost:5173`.

## ⚒️ Project Structure

```bash
react-food-order-app
├── backend
│   ├── data
│   │   ├── available-meals.json
│   │   └── orders.json
│   ├── app.js
│   ├── package.json
│   └── ...
├── public
│   └── images
├── src
│   ├── assets
│   ├── components
│   │   ├── cart
│   │   │   ├── Cart.jsx
│   │   │   └── CartItem.jsx
│   │   ├── hooks
│   │   │   └── useHttp.js
│   │   ├── meal
│   │   │   ├── MealItem.jsx
│   │   │   └── Meals.jsx
│   │   ├── UI
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   └── Modal.jsx
│   │   ├── Checkout.jsx
│   │   ├── Error.jsx
│   │   └── Header.jsx
│   ├── store
│   │   ├── CartContext.jsx
│   │   └── UserProgressContext.jsx
│   ├── util
│   │   ├── formatting.js
│   │   └── totalprice.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🖋️ Acknowledgments

This project is part of the Udemy course on React and Node.js development. Special thanks to the course instructor for guidance.
