import "./App.css";
import HomeScreen from "./components/homeScreen/HomeScreen";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";

function App() {
  const user = null;
  return (
    <div className="App">
      <Routes>
        {!user ?(<Route path="/" element={<Login />}/>) : (
        <Route path="/" element={<HomeScreen />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
