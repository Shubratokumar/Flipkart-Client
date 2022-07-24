// components
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import { Box } from '@mui/material';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider>
        <Header/>
        <Box style={{marginTop: 55}}>
          <Home/>
        </Box>
    </DataProvider>
  );
}

export default App;
