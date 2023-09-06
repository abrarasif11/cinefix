
import { useEffect } from 'react';
import './App.css'
import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import SearchResult from './pages/SearchResult/SearchResult';

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);
      useEffect(() => {
        apiTesting()
      }, []);
 
  
const apiTesting = () => {
      fetchDataFromApi("/movie/popular")
      .then((res) => {
        console.log(res);
        dispatch(getApiConfiguration(res))
      });
}

  return (
   <BrowserRouter>
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
       <Route path='/search/:query'
       element={<SearchResult></SearchResult>}
       ></Route>
       <Route path='/search/:query'
       element={<SearchResult></SearchResult>}
       ></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
