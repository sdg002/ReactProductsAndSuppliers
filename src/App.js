//import logo from './logo.svg';
//import './App.css';
import {Provider} from "react-redux"
import Selector from './Selector';
import ProductDisplay from './ProductDisplay'
import SupplierDisplay from './SupplierDisplay'
import TestPage from './TestPage'
import myDataStore from "./mystore";
import TestArrayRendering from "./TestArrayRendering"

/*
The Provider component should wrap up all other components
You should create a store object and pass it to the 'store' property of the Provider
This will enable you to bridge the store to the underlying raw component via 'connect' function 
*/
function App() {
  return (
    <Provider store={myDataStore}>
      <Selector>
        <ProductDisplay name="Products" />
        <SupplierDisplay name="Suppliers" />
        <TestPage name="Test page" />
        <TestArrayRendering name="Test array rendering"></TestArrayRendering>        
      </Selector>
    </Provider>
  );
}

export default App;
