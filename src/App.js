import { Routes, Route } from "react-router-dom";
// components
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Routes>
        {/* <Header/> */}
        <Route path="/" element={<Header />} />
      </Routes>
    </>
  );
}

export default App;
