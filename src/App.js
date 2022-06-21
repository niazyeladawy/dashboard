import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Awards from './components/Setup/Awards/Awards';
import Dashboard from './components/Dashboard';
import { ForgotPassword } from './components/ForgotPassword';
import Login from './components/Login';
import ProtectRoute from './components/ProtectRoute';
import Register from './components/Register';
import Organisations from './components/Setup/Organisations/Organisations';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path='dashboard' element={<ProtectRoute><Dashboard /></ProtectRoute>} >
          <Route path='setup'>
            <Route path='awards' element={<Awards />} />
            <Route path='organisations' element={<Organisations />} />
          </Route>

        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
      </Routes>
    </div>
  );
}

export default App;
