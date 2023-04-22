import "./App.css";
import AddRecipe from "./pages/AddRecipe/AddRecipe";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Nav from "./components/Nav/Nav";
import Register from "./pages/Registrer/Register";
import { Navigate, Route, Routes } from "react-router-dom";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addRecipe" element={<AddRecipe />} />
        <Route path="/detail/:id" element={<RecipeDetail />} />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
