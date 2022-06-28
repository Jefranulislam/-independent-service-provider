import { Route, Routes } from 'react-router-dom';
import css from './App.css';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Checkout from './pages/Checkout/Checkout';
import Dashboard from './pages/Dashboard/Dashboard';
import Features from './pages/Features/Features';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import NotFound from './pages/NotFound/NotFound';
import Signup from './pages/Signup/Signup';



function App() {
  return (<div>
    <Header></Header>

    <Routes>
      <Route path='/' element={<Home></Home>}> </Route>
      <Route path='/home' element={<Home></Home>}> </Route>
      <Route path='/home' element={<Features></Features>}> </Route>
      <Route path='/about' element={<About></About>}> </Route>
      <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}></Route>
      <Route path='checkout' element={<RequireAuth><Checkout></Checkout></RequireAuth>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/Signup' element={<Signup></Signup>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
  </div >
  );
}

export default App;
