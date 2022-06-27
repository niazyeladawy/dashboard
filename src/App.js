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
import Competitions from './components/manage competitions/competitions/Competitions';
import CompetitionSessions from './components/manage competitions/competition sessions/CompetitionSessions';
import Participants from './components/manage competitions/participants/Participants';
import PendingPartnersCompetitionDate from './components/manage competitions/Pending Partners\' Competition Date/PendingPartnersCompetitionDate';

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
          <Route path='manage-competitions'>
            <Route path='competitions' element={<Competitions />} />
            <Route path='competition-sessions' element={<CompetitionSessions />} />
            <Route path='participants' element={<Participants />} />
            <Route path='pending-partners-competition-date' element={<PendingPartnersCompetitionDate/>} />
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
