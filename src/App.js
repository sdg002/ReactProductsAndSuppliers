//import logo from './logo.svg';
//import './App.css';
import Selector from './Selector';
import ProductDisplay from './ProductDisplay'
import SupplierDisplay from './SupplierDisplay'
import TestPage from './TestPage'

function App() {
  return (
    <Selector>
      <ProductDisplay name="Products" />
      <SupplierDisplay name="Suppliers" />
      <TestPage name="Test page" />
    </Selector>
  );
}

export default App;
