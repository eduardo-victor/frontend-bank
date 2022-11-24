import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";


function App() {

  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
