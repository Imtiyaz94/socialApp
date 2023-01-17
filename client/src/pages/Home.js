import React, { useEffect } from 'react';
import { Headers, Sidebar, Card } from '../components/index';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container-fluid'>
      <Headers />
      <div className='d-flex justify-content-evenly mt-1 shadow-sm'>
        <Sidebar />
        <div className='main shadow-sm rounded'>
          <Card />
          {/* <List /> */}
        </div>
      </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default Home;
