import { Route, Routes } from 'react-router-dom';
import css from './App.css';
import About from './pages/About/About';
import Dashboard from './pages/Dashboard/Dashboard';
import Features from './pages/Features/Features';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import Signup from './pages/Signup/Signup';



function App() {
  return (<div>
    <Header></Header>

    <Routes>
      <Route path='/' element={<Home></Home>}> </Route>
      <Route path='/home' element={<Home></Home>}> </Route>
      <Route path='/home' element={<Features></Features>}> </Route>
      <Route path='/about' element={<About></About>}> </Route>
      {/* <RequireAuth>
        <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>
      </RequireAuth> */}
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/Signup' element={<Signup></Signup>}></Route>
    </Routes>
    <Footer></Footer>
  </div >
  );
}

export default App;
