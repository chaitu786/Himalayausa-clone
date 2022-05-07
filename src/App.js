import logo from './logo.svg';
import './App.css';
import { Products } from './product components/Products';
import {Routes, Route} from "react-router-dom"
import { Category } from './product components/Category';
import { Cart } from './product components/Cart';
import {Address} from "./PaymentCard/Address"
import {PaymentCard} from "./PaymentCard/PaymentCard"
import { ProductRoutes } from './products routes/ProductRoutes';
function App() {
  return (
    <div className="App">
   {/* <Routes>
     <Route path='/*' element={<Products/>}/>
     <Route path='/:HerbalSupplements' element={<Category/>}/>
     <Route path='/:HealthInterests' element={<Category/>}/>
     <Route path='/:OralCare' element={<Category/>}/>
     <Route path='/:PersonalCare' element={<Category/>}/>
     <Route path='/cart/*' element={<Cart/>}/>
     <Route path="/address/*" element={<Address/>}/>
     <Route path="/payment" element={<PaymentCard/>}/>
   </Routes> */}
   <ProductRoutes/>
   
    </div>
  );
}

export default App;
