import Counter  from './features/counter/Counter'
import ProductList from './features/product-list/productList';
import './App.css';
import Navbar from './features/navbar/Navbar';
import Home from './Pages/Home';

import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import Allroutes from './app/Router/Allroutes';

function App() {
  return (
    <div className="App">
     <Allroutes/>
    </div>
  );
}

export default App;

