import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { ForgotPassword } from './components/ForgotPassword';
import Home from './components/Home';
import Login from './components/Login';
import ProtectRoute from './components/ProtectRoute';
import Register from './components/Register';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path='/home' element={<ProtectRoute><Home /></ProtectRoute> } />
        
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;
