# 🛒 E-Commerce Admin Dashboard

A responsive and modern **E-Commerce Admin Dashboard** built with React.js. The dashboard provides an overview of business performance through KPI statistics, interactive charts, user management, product and inventory management, order information, filtering, pagination, and REST API integration.

## 🚀 Live Demo

[**Live Demo:**](https://e-commerce-dashboard-6d70dc.netlify.app/)

## 📌 Features

* 📊 Dashboard KPI statistics
* 💰 Total revenue analytics
* 🛒 Total orders tracking
* 👥 Customer/user statistics
* 📦 Product and inventory management
* 📈 Revenue and customer growth charts
* 📊 Sales by category analytics
* 🥧 Order status visualization
* 🏆 Top products analytics
* 👤 User management
* ➕ Add users and products
* ✏️ Edit users and products
* 🗑️ Delete users and products with confirmation dialogs
* 🔄 Update user account status
* 🔍 Search users and products
* 🏷️ Filter users by status
* 🗂️ Filter products by category
* 📄 Pagination for tables
* ⚠️ Low-stock inventory alerts
* ⏳ Loading states
* ❌ Error states
* ℹ️ Empty-data states
* 📱 Mobile-first responsive design
* 💻 Responsive tablet and desktop layouts

## 🛠️ Technologies Used

* **React.js**
* **React Hooks**
* **Bootstrap 5**
* **Material UI (MUI)**
* **MUI X Charts**
* **Axios**
* **REST API**
* **JSON Server**

## 🏗️ Project Structure

src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── DashboardHeader.jsx
│   ├── StatCard.jsx
│   ├── UserTable.jsx
│   ├── ProductForm.jsx
│   ├── ProductTable.jsx
│   ├── OrderTable.jsx
│   ├── LineChartComponent.jsx
│   ├── CategorySalesChart.jsx
│   ├── OrderStatusChart.jsx
│   └── TopProductsChart.jsx
│
├── App.jsx
├── main.jsx
└── index.css

## 📊 Dashboard Sections

### KPI / Statistics

The dashboard displays important business metrics such as:

* Total Revenue
* Total Orders
* Total Customers
* Total Products

These values are connected to application data and API responses.

### 📈 Analytics

The dashboard provides multiple visualizations:

* Revenue Analytics
* Sales by Category
* Order Status
* Top Products
* Customer Growth

MUI X Charts is used to display interactive data visualizations.

### 👥 User Management

Users can be:

* Viewed
* Searched
* Filtered by status
* Edited
* Activated/Deactivated
* Deleted

User data is integrated using Axios and REST API requests.

### 📦 Product & Inventory Management

The product management section provides:

* Add Product
* Edit Product
* Delete Product
* Product search
* Category filtering
* Pagination
* Stock tracking
* Low-stock alerts
* Product status indicators

### 🛒 Order Management

The dashboard includes a Recent Orders section displaying:

* Order ID
* Customer
* Order amount
* Order status

## 🔌 API Integration

Axios is used for communication between the React frontend and REST API endpoints.

The project uses JSON Server as a local mock backend for development.

Example API endpoints:

```
/products
/users
/orders
/revenue
/categorySales
/orderStatus
/topProducts
/customerGrowth
```

## 🔄 CRUD Operations

The project demonstrates CRUD operations using REST API concepts.

| Operation   | HTTP Method |
| ----------- | ----------- |
| Get Data    | GET         |
| Add Data    | POST        |
| Update Data | PUT / PATCH |
| Delete Data | DELETE      |

## 📱 Responsive Design

The dashboard follows a **mobile-first approach** using Bootstrap's responsive grid system.


Mobile
   ↓
Tablet
   ↓
Laptop / Desktop


The layout automatically adapts to different screen sizes while keeping charts, tables, forms, and dashboard cards usable across devices.

## 🎨 UI / UX

The interface combines:

* Bootstrap 5 for responsive layout and grid
* Material UI for modern UI components
* MUI X Charts for data visualization
* Cards and shadows for visual hierarchy
* Responsive tables
* Status chips
* Loading indicators
* Error and empty states
* Confirmation dialogs

## ⚙️ Installation

The React application and JSON Server should run simultaneously.

## 📚 What I Learned

Through this project, I practiced and implemented:

* React component architecture
* React Hooks
* State management with `useState`
* Side effects with `useEffect`
* Props and component communication
* Conditional rendering
* Event handling
* Array methods such as `map()`, `filter()`, and `reduce()`
* Axios API integration
* REST API concepts
* CRUD operations
* Bootstrap responsive design
* Material UI components
* Data visualization with MUI X Charts
* Search and filtering
* Pagination
* Loading, error, and empty states
* Responsive dashboard design
* Mobile-first UI development

## 🎯 Project Goal

The goal of this project was to build a practical, professional dashboard that demonstrates how a modern React application can combine **UI components, responsive design, data visualization, API integration, and CRUD functionality** into a single application.

## 👨‍💻 Author

**Faisal Salmani**

---

⭐ If you found this project useful, feel free to star the repository!
