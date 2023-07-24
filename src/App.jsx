import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Greeting from "./components/Greeting";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Greeting />
      <Routes></Routes>
    </div>
  );
};

export default App;
