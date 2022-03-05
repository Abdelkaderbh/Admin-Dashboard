import Navbar from "./components/NavBar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import "./app.css"
import Home from "./pages/home/Home";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Users from "./pages/users/Users";
import EditUser from "./pages/editUser/EditUser";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    
    <div className="container">
    <SideBar />
    <Routes>
          <Route path="/" element={<Home />} />       
          <Route path="/users" element={<Users />} /> 
          <Route path="/user/:userId" element={<EditUser />} />          
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
