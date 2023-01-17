import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Signin, Signup } from './pages/index';
import { isAuth, getToken } from './utils/auth';
import CustomAxios from './utils/CustomAxios';
// import { Layout } from 'antd';

// const { Header, Footer, Sider, Content } = Layout;

function App() {
  const isLogged = localStorage.getItem('access_token');

  return (
    <div className='container-fluid'>
      <Routes>
        <Route
          path='/'
          element={!isLogged ? <Navigate to='/login' replace /> : <Home />}
        />
        <Route
          path='/login'
          element={isLogged ? <Navigate to='/' replace /> : <Signin />}
        />
        <Route path='/register' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
