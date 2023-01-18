import logo from './logo.svg';
import './App.css';
// import Navbar from './components/navbar/Navbar'
import AllRoutes from './routes/AllRoutes';
import AdminNavbar from './components/adminNavbar/AdminNavbar';

function App() {
  return (
    <div className="App">
      <AdminNavbar />
      <AllRoutes />
    </div>
  );
}

export default App;
