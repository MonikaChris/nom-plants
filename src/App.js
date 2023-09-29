import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
//import DisplayContainer from './GardenDisplay';
import Welcome from './Welcome';
import Login from './Login';
import RegisterForm from './RegisterForm';
import RequireAuth from './RequireAuth';
import PersistAuth from './PersistAuth';
import GardenDisplay from './GardenDisplay';
import Demo from './Demo';

function App() {
  return (
    <div className="App">
      <div className="display-container">
      <Routes>
        
        
          <Route path="/" element={ <Welcome /> } >
            <Route index element={ <Login />} />
            <Route path="register" element={ <RegisterForm />} />
          </Route>

          <Route path="demo" element={<Demo />} />

          <Route element={ <RequireAuth /> } >
            <Route element={ <PersistAuth /> } >
              <Route path="/garden" element={ <GardenDisplay /> } />
            </Route>
          </Route>
        
     
      </Routes>
      </div>
    </div>
  );
}

export default App;
