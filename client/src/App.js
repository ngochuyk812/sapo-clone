import logo from './logo.svg';
import './App.css';
import IndexLayout from './layout/DefaultLayout/index';
import Home from './components/Home'
import OderMain from './components/OderMain'
import ListOrder from './components/ListOrder'
import Product from './components/Product'
import Customer from './components/Customer'
import Login from './components/Login'
import Register from './components/Register'
import {  } from 'react-router-dom';

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate
} from 'react-router-dom';
import { useEffect, useState } from 'react';
function App() {
  const handleOutside=()=>{
    console.log("Click outside");
  }

  const [sayHi, setSayHi]= useState("");
  const rs = "";
  // const fetchData = () => {
  //   return axios.get("http://localhost:5000/api/v1")
  //      .then((response) => console.log(response.data));
  //   } 
  // useEffect(
  //   fetchData()
  // )
  const [token, setToken] = useState(localStorage.getItem('user') || null);
  return (
    <div className="App">
      {sayHi}
      <BrowserRouter>
      
      { token === null ?
      <Routes>
      <Route path="/" element={<Login setToken = {setToken}/>} />
      <Route path="/register" element={<Register />} />


      </Routes>
      :
      <IndexLayout>

      <Routes>
      <Route path="/" element={<Home title = "Home"/>} />
        <Route path="/odermain" element={<OderMain />} />
        <Route path="/listoder" element={<ListOrder />} />
        <Route path="/product" element={<Product />} />
        <Route path="/customer" element={<Customer />} />

      </Routes>
      </IndexLayout>

      }
      
    </BrowserRouter>


    </div>
  );
}

export default App;
