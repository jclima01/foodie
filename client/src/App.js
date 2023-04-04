import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Registrer/Register";
import { Navigate, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      
    </div>
  );
}

export default App;
