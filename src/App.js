import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import BodyText from './Components/BodyText';
import BodyButton from './Components/BodyButton';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <BodyText/>
      <ProductList />
      <Cart/>
      <BodyButton/>
      <Footer/>
      
    </>
  );
}

export default App;
