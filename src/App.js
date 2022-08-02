// components
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import { Box } from '@mui/material';
import DataProvider from './context/DataProvider';
import { Routes, Route } from "react-router-dom";
import DetailView from './components/Details/DetailView';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <DataProvider>
          <Header/>
          <Box style={{marginTop: 55}}>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/product/:id' element={<DetailView/>} />
              <Route path='/cart' element={<Cart/>} />
            </Routes>
          </Box>
    </DataProvider>
  );
}

export default App;
