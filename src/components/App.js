import "../App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Login from "./Login";
import RegisterForm from "./RegisterForm";
import RequireAuth from "./RequireAuth";
import PersistAuth from "./PersistAuth";
import GardenDisplay from "./GardenDisplay";
import Demo from "./Demo";
import PlantChart from "./PlantChart";

function App() {
  return (
    <div className="App">
      <div className="display-container">
        <Routes>
          <Route path="/" element={<Welcome />}>
            <Route index element={<Login />} />
            <Route path="register" element={<RegisterForm />} />
          </Route>

          <Route path="demo" element={<Demo />} />

          <Route element={<RequireAuth />}>
            <Route element={<PersistAuth />}>
              <Route path="/garden" element={<GardenDisplay />} />
              <Route path="/chart" element={<PlantChart />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
