
import { useEffect } from 'react';
import './App.css'
import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import SearchResult from './pages/SearchResult/SearchResult';
import Explore from './pages/Explore/Explore';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);
      useEffect(() => {
        fetchApiConfig();
      }, []);
 
  
const fetchApiConfig = () => {
      fetchDataFromApi("/configuration")
      .then((res) => {
        console.log(res);

        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        }

        dispatch(getApiConfiguration(url))
      });
}

  return (
   <BrowserRouter>
   <Header></Header>
    <Routes>
       <Route path='/'
       element={<Home></Home>}
       ></Route>
       <Route path='/mediaType/:id'
       element={<Details></Details>}
       ></Route>
       <Route path='/search/:query'
       element={<SearchResult></SearchResult>}
       ></Route>
       <Route path='/explore/:mediaType'
       element={<Explore></Explore>}
       ></Route>
       <Route path='*'
       element={<ErrorPage></ErrorPage>}
       ></Route>
    </Routes>
    <Footer></Footer>
   </BrowserRouter>
  )
}

export default App
