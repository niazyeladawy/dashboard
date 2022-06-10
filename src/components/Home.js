import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("userToken");
    navigate('/login')

  }
  return (
    <div className='home'>
      <div className='container'>
        <h1>home</h1>
        <p className='cursr text-main' onClick={logOut}>LogOut</p>
      </div>
    </div>
  )
}

export default Home