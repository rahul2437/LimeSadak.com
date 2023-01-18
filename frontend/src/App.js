import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar'
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
