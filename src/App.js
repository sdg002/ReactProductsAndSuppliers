//import logo from './logo.svg';
//import './App.css';
import Selector from './Selector';
import ProductDisplay from './ProductDisplay'
import SupplierDisplay from './SupplierDisplay'

function App() {
  return (
    <Selector>
      <ProductDisplay name="Products" />
      <SupplierDisplay name="Suppliers" />
    </Selector>
  );
}

export default App;
