import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import AppetizersPage from "./pages/AppetizersPage";
import DessertsPage from "./pages/DessertsPage";
import DrinksPage from "./pages/DrinksPage";
import DishesPage from "./pages/DishesPage";
import Texmex from "./pages/TexmexPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/appetizers" element={<AppetizersPage />} />
        <Route path="/dishes" element={<DishesPage />} />
        <Route path="/desserts" element={<DessertsPage />} />
        <Route path="/drinks" element={<DrinksPage />} />
        <Route path="/texmex" element={<Texmex />} />
        <Route path="/recipes/:id" element={<RecipePage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
