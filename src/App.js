import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Awards from './components/Setup/Awards/Awards';
import Dashboard from './components/Dashboard';
import { ForgotPassword } from './components/ForgotPassword';
import Login from './components/Login';
import ProtectRoute from './components/ProtectRoute';
import Register from './components/Register';
import Organisations from './components/Setup/Organisations/Organisations';
import Schools from './components/Setup/Schools/Schools';
import ResetPassword from './components/ResetPassword';
import Profile from './components/settings/Profile/Profile';
import Users from './components/manage users/Users/Users';
import Administrators from './components/manage users/Administrators/Administrators';
import CountryPartners from './components/manage users/Country Partners/CountryPartners';
import TeacherSuperAdmins from './components/manage users/Teacher Super Admins/TeacherSuperAdmins';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path='dashboard' element={<ProtectRoute><Dashboard /></ProtectRoute>} >
          <Route path='setup'>
            <Route path='awards' element={<Awards />} />
            <Route path='organisations' element={<Organisations />} />
            <Route path='schools' element={<Schools />} />
          </Route>
          <Route path='settings'>
            <Route path='profile' element={<Profile />} />
          </Route>
          <Route path='manage-users'>
            <Route path='users' element={<Users />} />
            <Route path='administrators' element={<Administrators />} />
            <Route path='country-Partners' element={<CountryPartners />} />
            <Route path='teacher-super-admins' element={<TeacherSuperAdmins />} />
          </Route>
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
      </Routes>
    </div>
  );
}

export default App;
