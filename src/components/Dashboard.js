import React from 'react'

import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Sidebar from './sidebar/Sidebar';

const Dashboard = () => {
 
  return (
    <div className='home'>
      <Header/>
      <Navbar/>
      <div>
        <Sidebar/>
      </div>
    </div>
  )
}

export default Dashboard