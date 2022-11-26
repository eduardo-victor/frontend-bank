import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";


function App() {

  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/myprofile" element={<UserPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
