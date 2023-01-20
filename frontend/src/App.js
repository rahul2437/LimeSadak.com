import logo from './logo.svg';
import './App.css';
// import Navbar from './components/navbar/Navbar'
import AllRoutes from './routes/AllRoutes';
import AdminNavbar from './components/adminNavbar/AdminNavbar';
import VenderList from './admin/vendors/VenderList';
import UserList from './admin/users/UserList';
import ProductList from './admin/products/ProductList';
import Home from './pages/homepage/Home';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
      {/* <AdminNavbar /> */}
      <Navbar />
      <AllRoutes />
      {/* <VenderList/> */}
      {/* <UserList/> */}
      {/* <ProductList/> */}
    </div>
  );
}

export default App;
