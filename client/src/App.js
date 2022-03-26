import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './componets/navbar';
import HomePage from './componets/HomePage';
import AboutFarmer from './pages/AboutFarmer';
import ProgrammesandSchemes from './pages/ProgrammesandSchemes';
import CropInformation from './pages/CropInformation';
import Registration from "./componets/Forms/Registration";
import Login from "./componets/Forms/Login";
import Admin from "./componets/Admin/Admin";
// import AddCrop from "./componets/Admin/AddCrop";
import TransportationCompany from "./componets/Admin/TransportationCompany";
import Farmer from "./componets/Farmer/Farmer";
import UpdateProfile from "./componets/Farmer/UpdateProfile";
import ChangePassword from "./componets/Farmer/ChangePassword";
import ChangeContactNumber from "./componets/Farmer/ChangeContactNumber";
import UploadProducts from "./componets/Farmer/UploadProducts";
import FarmerInfo from "./componets/Admin/FarmerInfo";
import Transaction from "./componets/Admin/Transaction";
import BuyerInfo from "./componets/Admin/BuyerInfo";
import BuyerDetails from "./componets/Farmer/BuyerDetails";
import DisplayProducts from "./componets/Farmer/DisplayProducts";
import UserState from './context/users/userState';
import Buyer from "./componets/Buyer/Buyer";
import Wishlist from "./componets/Buyer/Wishlist";
import Viewproductdetails from "./componets/Buyer/Viewproductdetails";
import PlaceOrder from "./componets/Buyer/PlaceOrder";
import PaymentMode from "./componets/Buyer/PaymentMode";
import ForgotPassword from "./componets/Forms/ForgotPassword";
import Transpotations from "./componets/Buyer/Transpotations";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {CartProvider} from 'react-use-cart'


function App(){
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <CartProvider>
        <Routes>
          
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/About" element={<AboutFarmer />}></Route>
          <Route exact path="/programmes-schemes" element={<ProgrammesandSchemes />}></Route>
          <Route exact path="/crops-information" element={<CropInformation />}></Route>
          <Route exact path="/Registration" element={<Registration />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/ForgotPassword" element={<ForgotPassword />}></Route>
          <Route exact path="/Admin" element={<Admin />}></Route>
          {/* <Route exact path="/AddCrop" element={<AddCrop />}></Route> */}
          <Route exact path="/FarmerInfo" element={<FarmerInfo />}></Route>
          <Route exact path="/DisplayUploadedCrops" element={<Transaction />}></Route>
          <Route exact path="/BuyerInfo" element={<BuyerInfo />}></Route>
          <Route exact path="/TransportationCompany" element={<TransportationCompany />}></Route>
          <Route exact path="/Farmer" element={<Farmer />}></Route>
          <Route exact path="/UpdateProfile" element={<UpdateProfile />}></Route>
          <Route exact path="/ChangePassword" element={<ChangePassword />}></Route>
          <Route exact path="/ChangeContactNumber" element={<ChangeContactNumber />}></Route>
          <Route exact path="/UploadProducts" element={<UploadProducts />}></Route>
          <Route exact path="/BuyerDetails" element={<BuyerDetails />}></Route>
          <Route exact path="/DisplayProducts" element={<DisplayProducts />}></Route>
          <Route exact path="/UserState" element={<UserState/>}></Route>
          
            <Route exact path="/Buyer" element={<Buyer />}></Route>
            {/* <Route exact path="/Viewproductdetails" element={<Viewproductsdetails />}></Route> */}
            <Route exact path="/Wishlist" element={<Wishlist />}></Route>    
          
          <Route exact path="/Viewproductdetails" element={<Viewproductdetails />}></Route>          
          <Route exact path="/PlaceOrder" element={<PlaceOrder />}></Route>  
          <Route exact path="/PaymentMode" element={<PaymentMode />}></Route>
          <Route exact path="/Transpotations" element={<Transpotations />}></Route>
          
        </Routes>
        </CartProvider>
      </BrowserRouter>
     
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
export default App;
