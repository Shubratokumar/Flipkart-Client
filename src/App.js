// import { Routes, Route } from "react-router-dom";
// components
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import { Box } from '@mui/material';

function App() {
  return (
    <>
        <Header/>
        <Box style={{marginTop: 55}}>
          <Home/>
        </Box>
      {/* <Routes>
        <Route path="/" element={<Header />} />
      </Routes> */}
    </>
  );
}

export default App;
