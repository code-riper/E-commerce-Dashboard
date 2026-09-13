import {
  Dialog,
  DialogTitle,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  DialogContent,
  DialogActions,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  CircularProgress
} from "@mui/material";

import { Fragment, useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";
import OrderTable from "./components/OrderTable";
import DashboardHeader from "./components/DashboardHeader";
import UserTable from "./components/UserTable";

import { ExpandMore } from "@mui/icons-material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";

// import RevenueChart from "./components/RevenueChart";

import CategorySalesChart from "./components/CategorySalesChart";
import OrderStatusChart from "./components/OrderStatusChart";
import TopProductsChart from "./components/TopProductsChart";
import LineChartComponent from "./components/LineChartComponent";

import axios from "axios";

import ProductTable from "./components/ProductTable";
import ProductForm from "./components/ProductForm";


export default function App() {

  // =====================================================
  // STATE
  // =====================================================

  const [users, setUsers] = useState([]);

  const [userToDelete, setUserToDelete] = useState(null);

  const [dateRange, setDateRange] = useState("Last 30 Days");

  const [category, setCategory] = useState("All Categories");

  // const [loading,setLoading]=useState(false);

  const [usersLoading, setUsersLoading] = useState(false);

  const [addUserLoading, setAddUserLoading] = useState(false);

  const [error, setError] = useState(null);

  const [editUserLoading, setEditUserLoading] = useState(false);

  const [statusLoading, setStatusLoading] = useState(false);

  const [deleteUserLoading, setDeleteUserLoading] = useState(false);


  // =====================================================
  // REVENUE STATE
  // =====================================================

  const [revenueData, setRevenueData] = useState([]);

  const [revenueLoading, setRevenueLoading] = useState(false);

  const [revenueError, setRevenueError] = useState(null);


  // =====================================================
  // CATEGORY SALES STATE
  // =====================================================

  const [categoryData, setCategoryData] = useState([]);

  const [categoryLoading, setCategoryLoading] = useState(false);

  const [categoryError, setCategoryError] = useState(null);


  // =====================================================
  // ORDER STATUS STATE
  // =====================================================

  const [orderStatusData, setOrderStatusData] = useState([]);

  const [orderStatusLoading, setOrderStatusLoading] = useState(false);

  const [orderStatusError, setOrderStatusError] = useState(null);


  // =====================================================
  // TOP PRODUCTS STATE
  // =====================================================

  const [topProductsData, setTopProductsData] = useState([]);

  const [topProductsLoading, setTopProductsLoading] = useState(false);

  const [topProductsError, setTopProductsError] = useState(null);


  // =====================================================
  // CUSTOMER GROWTH STATE
  // =====================================================

  const [customerGrowthData, setCustomerGrowthData] = useState([]);

  const [customerGrowthLoading, setCustomerGrowthLoading] = useState(false);

  const [customerGrowthError, setCustomerGrowthError] = useState(null);


  // =====================================================
  // PRODUCT STATE
  // =====================================================

  const [products, setProducts] = useState([]);

  const [productsLoading, setProductsLoading] = useState(false);

  const [productsError, setProductsError] = useState(null);

  const [addProductLoading, setAddProductLoading] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [deleteProductLoading, setDeleteProductLoading] = useState(false);

  const [productToDelete, setProductToDelete] = useState(null);


  // =====================================================
  // ORDERS STATE
  // =====================================================

  const [orders, setOrders] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [ordersError, setOrdersError] = useState(null);

  // =====================================================
  // SELECTED USER
  // =====================================================

  const [selectedUser, setSelectedUser] = useState(null);


  // =====================================================
  // USERS API
  // =====================================================

  const fetchUsers = async () => {

    setUsersLoading(true);

    setError(null);

    try {

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      console.log(response.status);

      // setUsers(response.data)

      const formattedUsers = response.data.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        status: "Active"
      }));

      setUsers(formattedUsers);

    } catch (error) {

      // console.log(error);

      setError("Failed to load users");

    } finally {

      setUsersLoading(false);

    }
  };


  // =====================================================
  // OLD USER CREATE
  // =====================================================

  // const createUser = async () => {
  //   const response=await axios.post(
  //     "https://jsonplaceholder.typicode.com/users",newUser
  //   )

  //   console.log(response.data)
  // };


  // useEffect(()=>{
  //   fetchUsers();
  // },[])


  // =====================================================
  // ADD USER
  // =====================================================

  const handleAddUser = async (user) => {

    setAddUserLoading(true);

    setError(null);

    try {

      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        user
      );

      const createdUser = {
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
        status: "Active"
      };

      setUsers((prevUsers) => [
        ...prevUsers,
        createdUser
      ]);

    } catch (error) {

      setError("Failed to add user");

    } finally {

      setAddUserLoading(false);

    }
  };


  // =====================================================
  // PUT USER
  // =====================================================

  const handleEditUser = async (updatedUser) => {

    setEditUserLoading(true);

    setError(null);

    try {

      const response = await axios.put(
        "https://jsonplaceholder.typicode.com/users/" +
        updatedUser.id,
        updatedUser
      );

      setUsers((prevUsers) => {

        return prevUsers.map((user) => {

          if (user.id === updatedUser.id) {

            return response.data;

          }

          return user;

        });

      });

    } catch (error) {

      setError("Failed to update user");

    } finally {

      setEditUserLoading(false);

    }
  };


  // =====================================================
  // PATCH USER STATUS
  // =====================================================

  const handleStatusChange = async (userId, newStatus) => {

    setStatusLoading(true);

    setError(null);

    try {

      const updatedData = {
        status: newStatus
      };

      const response = await axios.patch(
        "https://jsonplaceholder.typicode.com/users/" +
        userId,
        updatedData
      );

      setUsers((prevUsers) => {

        return prevUsers.map((user) => {

          if (user.id === userId) {

            return {
              ...user,
              status: newStatus
            };

          }

          return user;

        });

      });

    } catch (error) {

      setError("Failed to update status");

    } finally {

      setStatusLoading(false);

    }
  };


  // =====================================================
  // SELECT USER
  // =====================================================

  const handleSelectUser = (user) => {

    setSelectedUser(user);

  };


  const handleClearSelectedUser = () => {

    setSelectedUser(null);

  };


  // =====================================================
  // DELETE USER
  // =====================================================

  const handleDeleteUser = async (userId) => {

    setDeleteUserLoading(true);

    setError(null);

    try {

      // const response =
      await axios.delete(
        "https://jsonplaceholder.typicode.com/users/" +
        userId
      );

      setUsers((prevUsers) => {

        return prevUsers.filter((user) => {

          return user.id !== userId;

        });

      });

      setUserToDelete(null);

    } catch (error) {

      setError("Failed to delete user");

    } finally {

      setDeleteUserLoading(false);

    }
  };


  const handleAskDelete = (user) => {

    setUserToDelete(user);

  };


  // =====================================================
  // OLD DASHBOARD STATS
  // =====================================================

  // const stats =[
  //   {
  //     title:"Total Users",
  //     value:"12,540"
  //   },
  //   {
  //     title:"Total Orders",
  //     value:"8,540"
  //   },
  //   {
  //     title:"Total Revenue",
  //     value:"1,25,540"
  //   },
  // ]


  // =====================================================
  // OLD HARD-CODED REVENUE DATA
  // =====================================================

  // const revenueData=[
  //   {month:"Jan",revenue:12000},
  //   {month:"Feb",revenue:15000},
  //   {month:"Mar",revenue:18000},
  //   {month:"Apr",revenue:16500},
  //   {month:"May",revenue:22000},
  //   {month:"Jun",revenue:25000},
  // ]


  // =====================================================
  // OLD HARD-CODED CATEGORY DATA
  // =====================================================

  // const categoryData = [
  //   { category: "Electronics", sales: 450000 },
  //   { category: "Fashion", sales: 320000 },
  //   { category: "Home", sales: 180000 },
  //   { category: "Sports", sales: 120000 },
  // ];


  // =====================================================
  // OLD HARD-CODED ORDER STATUS DATA
  // =====================================================

  // const orderStatusData = [
  //   { status: "Completed", value: 72 },
  //   { status: "Pending", value: 15 },
  //   { status: "Cancelled", value: 8 },
  //   { status: "Returned", value: 5 },
  // ];


  // =====================================================
  // OLD HARD-CODED TOP PRODUCTS DATA
  // =====================================================

  // const topProductsData = [
  //   { product: "Laptop", sales: 450000 },
  //   { product: "Headphones", sales: 280000 },
  //   { product: "Smart Watch", sales: 210000 },
  //   { product: "Keyboard", sales: 170000 },
  //   { product: "Mouse", sales: 120000 },
  // ];


  // =====================================================
  // OLD HARD-CODED CUSTOMER GROWTH DATA
  // =====================================================

  // const customerGrowthData = [
  //   { month: "Jan", customers: 1200 },
  //   { month: "Feb", customers: 1450 },
  //   { month: "Mar", customers: 1800 },
  //   { month: "Apr", customers: 2100 },
  //   { month: "May", customers: 2400 },
  //   { month: "Jun", customers: 2800 },
  // ];


  // =====================================================
  // LAST 7 DAYS DATA
  // =====================================================

  const revenueData7Days = [

    { month: "Mon", revenue: 3200 },
    { month: "Tue", revenue: 4500 },
    { month: "Wed", revenue: 3800 },
    { month: "Thu", revenue: 5200 },
    { month: "Fri", revenue: 6100 },
    { month: "Sat", revenue: 7200 },
    { month: "Sun", revenue: 6800 }

  ];


  const customerGrowthData7Days = [

    { month: "Mon", customers: 120 },
    { month: "Tue", customers: 180 },
    { month: "Wed", customers: 150 },
    { month: "Thu", customers: 220 },
    { month: "Fri", customers: 260 },
    { month: "Sat", customers: 310 },
    { month: "Sun", customers: 290 }

  ];


  // =====================================================
  // OLD DASHBOARD METRICS
  // =====================================================

  // const dashboardMetrics={
  //   orders:8540,
  //   customers:12540,
  //   products:1245
  // };


  // =====================================================
  // OLD ORDER DATA
  // =====================================================

  const orderData = [

    { category: "Electronics", orders: 3200 },
    { category: "Fashion", orders: 2400 },
    { category: "Home", orders: 1500 },
    { category: "Sports", orders: 900 }

  ];


  // OLD: category wise filtration

  const filteredOrderData =
    category === "All Categories"
      ? orderData
      : orderData.filter(
          (item) => item.category === category
        );


  // OLD: category-wise total orders

  // const totalOrders = filteredOrderData.reduce(
  //   (total,item)=>total + item.orders,0
  // );


  // =====================================================
  // FETCH ORDERS
  // =====================================================

  const fetchOrders = async () => {
    setOrdersLoading(true);
    setOrdersError(null);
    try {

      const response = await axios.get(
        "http://localhost:3000/orders"
      );

      setOrders(response.data);

    } catch (error) {

      console.log("Failed to load orders");
      setOrdersError("Failed to load orders");

    }finally{
      setOrdersLoading(false);
    }
  };


  // NEW: total orders from API

  const totalOrders = orders.length;


  // =====================================================
  // OLD PRODUCT DATA
  // =====================================================

  const productData = [

    { category: "Electronics", products: 320 },
    { category: "Fashion", products: 280 },
    { category: "Home", products: 180 },
    { category: "Sports", products: 12 }

  ];


  // OLD: category-wise product filtration

  const filteredProductData =
    category === "All Categories"
      ? productData
      : productData.filter(
          (item) => item.category === category
        );


  // old for total products but required total at once fixed to category wise

  // const totalProducts=filteredProductData.reduce(
  //   (total,item)=>total+item.products,0
  // )


  // NEW: total products from API

  const totalProducts = products.length;


  // =====================================================
  // FETCH REVENUE
  // =====================================================

  const fetchRevenue = async () => {

    setRevenueLoading(true);

    setRevenueError(null);

    try {

      const response = await axios.get(
        "http://localhost:3000/revenue"
      );

      setRevenueData(response.data);

      // console.log(response.data)

    } catch (error) {

      setRevenueError("Failed to load revenue data");

    } finally {

      setRevenueLoading(false);

    }
  };


  // OLD: category-wise revenue

  // const totalRevenue = filteredCategoryData.reduce(
  //   (total,item)=>total+item.sales,0
  // );


  // OLD: previous API calculation with wrong property

  // const totalRevenue = revenueData.reduce(
  //   (total,item)=>total+item.sales,0
  // );


  // NEW: revenue API uses "revenue" property

  const totalRevenue = revenueData.reduce(
    (total, item) => total + item.revenue,
    0
  );


  // =====================================================
  // FETCH CATEGORY SALES
  // =====================================================

  const fetchCategorySales = async () => {

    setCategoryLoading(true);

    setCategoryError(null);

    try {

      const response = await axios.get(
        "http://localhost:3000/categorySales"
      );

      setCategoryData(response.data);

    } catch (error) {

      setCategoryError("Failed to load category sales");

    } finally {

      setCategoryLoading(false);

    }
  };


  // =====================================================
  // FETCH ORDER STATUS
  // =====================================================

  const fetchOrderStatus = async () => {

    setOrderStatusLoading(true);

    setOrderStatusError(null);

    try {

      const response = await axios.get(
        "http://localhost:3000/orderStatus"
      );

      // console.log(response.data);

      setOrderStatusData(response.data);

    } catch (error) {

      setOrderStatusError("Failed to load order status");

    } finally {

      setOrderStatusLoading(false);

    }
  };


  // =====================================================
  // FETCH TOP PRODUCTS
  // =====================================================

  const fetchTopProducts = async () => {

    setTopProductsLoading(true);

    setTopProductsError(null);

    try {

      const response = await axios.get(
        "http://localhost:3000/topProducts"
      );

      console.log("Top Products:", response.data);

      setTopProductsData(response.data);

    } catch (error) {

      setTopProductsError("Failed to load top products");

    } finally {

      setTopProductsLoading(false);

    }
  };


  // =====================================================
  // CUSTOMER GROWTH DATA
  // =====================================================

  const fetchCustomerGrowth = async () => {

    setCustomerGrowthLoading(true);

    setCustomerGrowthError(null);

    try {

      const response = await axios.get(
        "http://localhost:3000/customerGrowth"
      );

      setCustomerGrowthData(response.data);

    } catch (error) {

      setCustomerGrowthError("Failed to load customer growth");

    } finally {

      setCustomerGrowthLoading(false);

    }
  };


  // =====================================================
  // PRODUCTS FETCH
  // =====================================================

// Products fetch
const fetchProducts = async () => {
  setProductsLoading(true);
  setProductsError(null);

  try {
    const response = await axios.get(
      "http://localhost:3000/products"
    );

    // console.log("Products:", response.data);

    setProducts(response.data);
  } catch (error) {
    setProductsError("Failed to load products");
  } finally {
    setProductsLoading(false);
  }
};


// =====================================================
// DASHBOARD CALCULATIONS
// =====================================================

// OLD: Total Customers was hardcoded
// const dashboardMetrics = {
//   orders: 8540,
//   customers: 12540,
//   products: 1245
// };

// NEW: Total Customers from users API
const totalCustomers = users.length;


// =====================================================
// TOTAL ORDERS
// =====================================================

// OLD: Total Orders from hardcoded orderData
// const totalOrders = filteredOrderData.reduce(
//   (total, item) => total + item.orders,
//   0
// );

// NEW: Total Orders from orders API
// const totalOrders = orders.length;


// =====================================================
// TOTAL PRODUCTS
// =====================================================

// OLD: Total Products from hardcoded productData
// const totalProducts = filteredProductData.reduce(
//   (total, item) => total + item.products,
//   0
// );

// NEW: Total Products from products API
// const totalProducts = products.length;


// =====================================================
// TOTAL REVENUE
// =====================================================

// OLD: Total Revenue from category data
// const totalRevenue = filteredCategoryData.reduce(
//   (total, item) => total + item.sales,
//   0
// );

// OLD: Wrong property for revenue API
// const totalRevenue = revenueData.reduce(
//   (total, item) => total + item.sales,
//   0
// );

// NEW: Total Revenue from revenue API
// const totalRevenue = revenueData.reduce(
//   (total, item) => total + item.revenue,
//   0
// );


// =====================================================
// LOW STOCK
// =====================================================

const lowStockProducts = products.filter(
  (product) => product.stock < 5
);


  // =====================================================
  // PRODUCT CRUD
  // =====================================================

  // Get or fetch data

  const handleAddProduct = async (product) => {

    setAddProductLoading(true);

    try {

      const response = await axios.post(
        "http://localhost:3000/products",
        product
      );

      setProducts((prevProducts) => [

        ...prevProducts,

        response.data

      ]);

    } catch (error) {

      console.log("Failed to add product");

    } finally {

      setAddProductLoading(false);

    }
  };


  const handleSelectProduct = (product) => {

    setSelectedProduct(product);

  };


  // put way

  const handleEditProduct = async (updatedProduct) => {

    try {

      const response = await axios.put(
        "http://localhost:3000/products/" +
        updatedProduct.id,
        updatedProduct
      );

      setProducts((prevProducts) => {

        return prevProducts.map((product) => {

          if (product.id === updatedProduct.id) {

            return response.data;

          }

          return product;

        });

      });

      setSelectedProduct(null);

    } catch (error) {

      console.log("Failed");

    }
  };


  // To handle Delete

  const handleDeleteProduct = async (productId) => {

    setDeleteProductLoading(true);

    try {

      await axios.delete(
        "http://localhost:3000/products/" +
        productId
      );

      setProducts((prevProducts) => {

        return prevProducts.filter((product) => {

          return product.id != productId;

        });

      });

      setProductToDelete(null);

    } catch (error) {

      console.log("Failed to delete products");

    } finally {

      setDeleteProductLoading(false);

    }
  };


  const handleAskDeleteProduct = (product) => {

    setProductToDelete(product);

  };


  // =====================================================
  // RESET FILTERS
  // =====================================================

  const displayedRevenueData =
    dateRange === "Last 7 Days"
      ? revenueData7Days
      : revenueData;


  const displayedCustomerGrowthData =
    dateRange === "Last 7 Days"
      ? customerGrowthData7Days
      : customerGrowthData;


  // Category wise filtration

  const filteredCategoryData =
    category === "All Categories"
      ? categoryData
      : categoryData.filter(
          (item) => item.category === category
        );


  const handleResetFilters = () => {

    setDateRange("Last 30 Days");

    setCategory("All Categories");

  };


  // =====================================================
  // STATS
  // =====================================================

  const stats = [

    {
      title: "Total Revenue",

      value: revenueLoading ? "Loading...": revenueError ? "Failed to load": `₹${totalRevenue.toLocaleString("en-IN")}`,

      // value: "₹12.5L",

      icon: AttachMoneyIcon,
      iconBg:"#e8f5e9",
      change: "+12.5%",

      comparison: "vs last month"
    },


    {
      title: "Total Orders",

      value:ordersLoading ? "Loading...": ordersError ? "Failed to load" : totalOrders.toLocaleString("en-IN"),

      icon: ShoppingCartIcon,
      iconBg:"#e3f2fd",
      change: "+8.2%",

      comparison: "vs last month"
    },


    {
      title: "Total Customers",

      value: usersLoading ?"Loadig...": error ? "Failed to load ": totalCustomers.toLocaleString("en-IN"),

      icon: PeopleIcon,
      iconBg:"#f3e5f5",
      change: "+15.4%",

      comparison: "vs last month"
    },


    {
      title: "Total Products",

      value: productsLoading ? "Loading..." : productsError ? "Failed to load" : totalProducts.toLocaleString("en-IN"),

      icon: InventoryIcon,
      iconBg:"#fff3e0",
      change: "+4.2%",

      comparison: "vs last month"
    }

  ];


  // =====================================================
  // ENVIRONMENT LOAD RUNS
  // =====================================================

  useEffect(() => {

    fetchUsers();

    fetchRevenue();

    fetchCategorySales();

    fetchOrderStatus();

    fetchTopProducts();

    fetchCustomerGrowth();

    fetchProducts();

    fetchOrders();

  }, []);


  console.log("product", productToDelete);


  // =====================================================
  // JSX
  // =====================================================

  return (

    <Fragment>

      <div className="dashboard-container container-fluid p-0">

        <Navbar />

        <div className="row">

          <div className="dashboard-body col-12 col-md-3">

            <Sidebar />

          </div>


          <div className="col-12 col-md-9 p-md-4 p-3">

          <div className="mb-4">
            <DashboardHeader
              onAddUser={handleAddUser}
              selectedUser={selectedUser}
              onEditUser={handleEditUser}
              onClearSelectedUser={handleClearSelectedUser}
              loading={addUserLoading}
            />
          </div>

            {/* FILTERS */}

            <div className="d-flex flex-column flex-md-row gap-3 justify-content-end mb-4 align-items-center p-3 border bg-white rounded">

              <div className="w-100 ">                                         
              <FormControl
                size="small"
                sx={{ minWidth: 160 , width:{ xs:"100%",md:"auto"}}}
              >

                <InputLabel>
                  Date Range
                </InputLabel>


                <Select
                  value={dateRange}
                  label="Date Range"
                  onChange={(e) =>
                    setDateRange(e.target.value)
                  }
                >

                  <MenuItem value="Today">
                    Today
                  </MenuItem>

                  <MenuItem value="Yesterday">
                    Yesterday
                  </MenuItem>

                  <MenuItem value="Last 7 Days">
                    Last 7 Days
                  </MenuItem>

                  <MenuItem value="Last 30 Days">
                    Last 30 Days
                  </MenuItem>

                  <MenuItem value="This Year">
                    This Year
                  </MenuItem>

                </Select>

              </FormControl>
              </div>

              <div className="w-100 ">                                         
              
              <FormControl
                size="small"
                sx={{ minWidth: 160, width:{ xs:"100%",md:"auto"} }}
              >

                <InputLabel>
                  Category
                </InputLabel>


                <Select
                  value={category}
                  label="Category"
                  onChange={(e) =>
                    setCategory(e.target.value)
                  }
                >

                  <MenuItem value="All Categories">
                    All Categories
                  </MenuItem>

                  <MenuItem value="Electronics">
                    Electronics
                  </MenuItem>

                  <MenuItem value="Fashion">
                    Fashion
                  </MenuItem>

                  <MenuItem value="Home">
                    Home
                  </MenuItem>

                </Select>

              </FormControl>
                  </div>
                
              <Button
                variant="outlined"
                onClick={handleResetFilters}
                sx={{
                  width:{ xs:"100%",md:"auto"}
                }}
              >
                Reset Filters
              </Button>

            </div>
                                                                                                                    

            {/* KPI / STATISTICS */}

            <div className="row g-4">

              {
                stats.map((stat) => {

                  return (

                    <div
                      className="col-12 col-md-6 col-lg-3"
                      key={stat.title}
                    >

                      <StatCard
                        title={stat.title}
                        value={stat.value}
                        icon={stat.icon}
                        iconBg={stat.iconBg}
                        change={stat.change}
                        comparison={stat.comparison}
                      />

                    </div>

                  );

                })
              }

            </div>


            {/* REVENUE + CATEGORY */}

            <div className="row g-4 mt-4">

              <div className="col-12 col-lg-6">

                <Card sx={{
                  height:"100%",
                  borderRadius:3,
                  boxShadow:2,
                  transition: "box-shadow 0.2s ease",

                  "&:hover":{
                    boxShadow: 4
                  }
                }}>

                  <CardContent sx={{p:3}}>

                    {/* notusable revenue */}
                  <div className="mb-3">
                    <h4 className="h5 fw-semibold mb-1">
                      Revenue Analytics
                    </h4>

                    <p className="small text-muted mb-0">
                      Revenue performance over time
                    </p>

                  </div>

                    {
                      revenueLoading ? (

                        <div className="d-flex justify-content-center align-items-center py-5">
                          <CircularProgress size={30}/>
                        </div>

                      ) : revenueError ? (

                        // <p>
                        //   {revenueError}
                        // </p>

                        <Alert severity="error">
                          {revenueError}
                        </Alert>

                      ) : revenueData.length === 0 ? (

                        // <p>
                        //   No revenue data unavailable
                        // </p>

                        <Alert severity="info">
                          No revenue data unavailable
                        </Alert>

                      ) : (

                        <div className="w-100 overflow-auto">
                          <LineChartComponent
                          data={displayedRevenueData}
                          xKey="month"
                          yKey="revenue"
                          label="Revenue"
                        />
                        </div>

                      )
                    }

                  </CardContent>

                </Card>

              </div>


              <div className="col-12 col-lg-6">

                <Card sx={{
                  height:"100%",
                  borderRadius:3,
                  boxShadow:2,
                  transition: "box-shadow 0.2s ease",

                  "&:hover":{
                    boxShadow: 4
                  }
                }}>

                  <CardContent sx={{p:3}}>

                    <h4 className="h5 fw-semibold mb-3 mt-0">
                      Sales by Category
                    </h4>


                    {
                      categoryLoading ? (

                        // <p>
                        //   Loading category sales...
                        // </p>

                        <div className="d-flex justify-content-center align-items-center py-5">
                          <CircularProgress size={30} />
                        </div>

                      ) : categoryError ? (

                        // <p>
                        //   {categoryError}
                        // </p>

                        <Alert severity="error">
                          {categoryError}
                        </Alert>

                      ) : filteredCategoryData.length === 0 ? (

                        // <p>
                        //   No category sales data available
                        // </p>

                        <Alert severity="info">
                          No category sales data available
                        </Alert>

                      ) : (

                        <CategorySalesChart
                          data={filteredCategoryData}
                        />

                      )
                    }

                  </CardContent>

                </Card>

              </div>

            </div>


            {/* ORDER STATUS + TOP PRODUCTS */}

            <div className="row g-4 mt-4">

              <div className="col-12 col-lg-6">

                <Card sx={{
                  height:"100%",
                  borderRadius:3,
                  boxShadow:2,
                  transition: "box-shadow 0.2s ease",

                  "&:hover":{
                    boxShadow: 4
                  }
                }}>

                  <CardContent sx={{p:3}}>

                    <h4 className="h5 fw-semibold mb-3 mt-0">
                      Order Status
                    </h4>


                    {
                      orderStatusLoading ? (

                       <div className="d-flex justify-content-center align-items-center py-5">
                         <CircularProgress size={30} />
                       </div>

                      ) : orderStatusError ? (

                        // <p>
                        //   {orderStatusError}
                        // </p>

                        <Alert severity="error">
                          {orderStatusError}
                        </Alert>

                      ) : orderStatusData.length === 0 ? (

                        // <p>
                        //   No order status data available
                        // </p>

                        <Alert severity="info">
                          No order status data available
                        </Alert>

                      ) : (

                        <OrderStatusChart
                          data={orderStatusData}
                        />

                      )
                    }

                  </CardContent>

                </Card>

              </div>


              <div className="col-12 col-lg-6">

                <Card sx={{
                  height:"100%",
                  borderRadius:3,
                  boxShadow:2,
                  transition: "box-shadow 0.2s ease",

                  "&:hover":{
                    boxShadow: 4
                  }
                }}>

                  <CardContent sx={{p:3}}>

                    <h4 className="h5 fw-semibold mb-3">
                      Top Products
                    </h4>


                    {
                      topProductsLoading ? (

                        <div className="d-flex justify-content-center align-items-center py-5">
                          <CircularProgress size={30} />
                        </div>

                      ) : topProductsError ? (

                        // <p>
                        //   {topProductsError}
                        // </p>

                        <Alert severity="error">
                          {topProductsError}
                        </Alert>

                      ) : topProductsData.length === 0 ? (

                        // <p>
                        //   No top products data available
                        // </p>

                        <Alert severity="info">
                          No top products data available
                        </Alert>

                      ) : (

                        <TopProductsChart
                          data={topProductsData}
                        />

                      )
                    }

                  </CardContent>

                </Card>

              </div>

            </div>


            {/* CUSTOMER GROWTH */}

            <div className="row g-4 mt-4">

              <div className="col-12 col-lg-6">

                <Card sx={{
                  height:"100%",
                  boxShadow:2,
                  borderRadius:3,
                  transition: "box-shadow 0.2s ease",

                  "&:hover":{
                    boxShadow: 4
                  }
                }}>

                  <CardContent sx={{p:3}}>

                    <h4 className="h5 fw-semibold mb-3 mt-0">
                      Customer Growth
                    </h4>


                    {
                      customerGrowthLoading ? (

                        <div className="d-flex justify-content-center align-items-center py-5">
                           <CircularProgress size={30} />
                         </div>

                      ) : customerGrowthError ? (

                        // <p>
                        //   {customerGrowthError}
                        // </p>

                        <Alert severity="error">
                          {customerGrowthError}
                        </Alert>

                      ) : customerGrowthData.length === 0 ? (

                        // <p>
                        //   No customer growth data available
                        // </p>

                        <Alert severity="info">
                           No customer growth data available
                        </Alert>

                      ) : (

                        <div className="w-100 overflow-auto">
                        <LineChartComponent
                          data={displayedCustomerGrowthData}
                          xKey="month"
                          yKey="customers"
                          label="Customers"
                        />
                        </div>
                      )
                    }


                    {/*
                    <LineChartComponent
                      data={revenueData}
                      xKey="month"
                      yKey="revenue"
                      label="Revenue"
                    />
                    */}

                  </CardContent>

                </Card>

              </div>

            </div>


            {/* orders */}

            <div className="row g-4 mt-4">

              <div className="col-12">

                  <Card sx={{
                    borderRadius:3,
                     boxShadow:2,
                     transition: "box-shadow 0.2s ease",

                  "&:hover":{
                    boxShadow: 4
                  }}}>

                    <CardContent sx={{ p:3 }}>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="mb-3">
                      <h4 className="h5 fw-semibold mb-1">
                        Recent Orders
                      </h4>

                      <p className="small text-muted mb-0">
                        Latest customer orders and their status
                      </p>
                    </div>
                </div>

                <div className="table-responsive">

                <OrderTable />

                </div>
                    </CardContent>
                  </Card>
              </div>

            </div>


            {/* USERS */}

            <div className="row g-4 mt-4">

              <div className="col-12">

                  <Card sx={{
                    borderRadius:3,
                    boxShadow:2,
                    transition: "box-shadow 0.2s ease",

                  "&:hover":{
                    boxShadow: 4
                  }
                  }}>

                    <CardContent sx={{ p:3 }}>

                <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="mb-3">
                    <h4 className="h5 fw-semibold mb-1">
                      Users
                    </h4>

                    <p className="small text-muted mb-0">
                      Manage users and account status
                    </p>
                  </div>
                </div>


                {
                  usersLoading ? (

                    <p>
                      Loading...
                    </p>

                  ) : error ? (

                    <p>
                      {error}
                    </p>

                  ) : (

                    <UserTable
                      users={users}
                      onEditUser={handleSelectUser}
                      onDeleteUser={handleAskDelete}
                      onStatusChange={handleStatusChange}
                      deleteUserLoading={deleteUserLoading}
                    />

                  )
                }

                  </CardContent>
                </Card>
              </div>

            </div>


            {/* LOW STOCK */}

            {/*
            <div className="mt-4">

              <strong>
                Low Stock:
              </strong>

              {lowStockProducts.length}

              <Alert severity="warning" className="mb-3">
                {lowStockProducts.length} products are low on stock.
              </Alert>

            </div>
            */}


            {/*
            {lowStockProducts.length > 0 && (
              <Alert severity="warning" className="mb-3">
                {lowStockProducts.length} products are low on stock.
              </Alert>
            )}
            */}


            {/* PRODUCTS / INVENTORY */}

            <div className="mt-5">

              <Card sx={{
                borderRadius: 3,
                boxShadow : 2,
                transition: "box-shadow 0.2s ease",

                  "&:hover":{
                    boxShadow: 4
                  }
              }}>

              <CardContent sx={{
                p: 3
              }}>

              <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="mb-3">
                  <h2 className="h5 fw-semibold mb-1">
                    Products / Inventory
                  </h2>

                  <p className="small text-muted mb-0">
                    Manage products, stock levels, and inventory
                  </p>
                </div>
              </div>

              <h3 className="h6 fw-semibold mb-3">
                {selectedProduct ? "Edit Product" : "Add Product"}
              </h3>


              <ProductForm
                onAddProduct={handleAddProduct}
                selectedProduct={selectedProduct}
                onEditProduct={handleEditProduct}
              />
              <hr className="my-4" />

              {
                lowStockProducts.length > 0 && (

                  <Alert
                    severity="warning"
                    className="mt-3 mb-3"
                  >

                    {lowStockProducts.length}
                    {" "}
                    products are low on stock.

                  </Alert>

                )
              }

              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="h6 fw-semibold mb-0">
                  Product list
                  <span className="text-muted fx-normal ms-2">
                    ({products.length})
                  </span>
                </h3>
              </div>

              {
                productsLoading ? (

                  <p>
                    Loading products...
                  </p>

                ) : productsError ? (

                  <p>
                    {productsError}
                  </p>

                ) : products.length === 0 ? (

                  <p>
                    No products available
                  </p>

                ) : (

                  <ProductTable
                    products={products}
                    onEditProduct={handleSelectProduct}
                    onDeleteProduct={handleAskDeleteProduct}
                    deleteProductLoading={deleteProductLoading}
                  />

                )
              }
                </CardContent>
              </Card>
            </div>
              
          </div>
          
        </div>

      </div>


      {/* =====================================================
          USER DELETE DIALOG
      ===================================================== */}

      <Dialog
        open={Boolean(userToDelete)}
        onClose={() => setUserToDelete(null)}
      >

        <DialogTitle>
          Delete User?
        </DialogTitle>


        <DialogContent>
          Are you sure you want to delete this user?
        </DialogContent>


        <DialogActions>

          <Button
            onClick={() => setUserToDelete(null)}
          >
            Cancel
          </Button>


          <Button
            variant="contained"
            disabled={deleteUserLoading}
            onClick={() =>
              handleDeleteUser(userToDelete.id)
            }
          >

            {
              deleteUserLoading
                ? "Deleting..."
                : "Delete"
            }

          </Button>

        </DialogActions>

      </Dialog>


      {/* for delete of table last */}

      {/* =====================================================
          PRODUCT DELETE DIALOG
      ===================================================== */}

      <Dialog
        open={productToDelete != null}
        onClose={() => setProductToDelete(null)}
      >

        <DialogTitle>
          Delete Product
        </DialogTitle>


        <DialogContent>

          Are you sure you want to delete{" "}

          <strong>
            {productToDelete?.name}
          </strong>

          ?

        </DialogContent>


        <DialogActions>

          <Button
            onClick={() => setProductToDelete(null)}
          >
            Cancel
          </Button>


          <Button
            variant="contained"
            color="error"
            disabled={deleteProductLoading}
            onClick={() =>
              handleDeleteProduct(productToDelete.id)
            }
          >

            {
              deleteProductLoading
                ? "Deleting..."
                : "Delete"
            }

          </Button>

        </DialogActions>

      </Dialog>

    </Fragment>
  );
}

