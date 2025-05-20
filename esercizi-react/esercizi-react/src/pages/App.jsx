import { Route, Routes } from "react-router-dom";
import Private from "./layout/Private";
import Public from "./layout/Public";
import Layout from "./layout/Layout";
import About from "./pages/About"; 

const App = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Layout />}>
        
        <Route element={<Public />}>
          <Route index element={<></>} /> 
          <Route path="signup" element={<></>} /> 
          
        </Route>

     
        <Route path="private" element={<Private />}>
          <Route index element={<></>} />   
          <Route path="menubusiness" element={<></>} /> 
          <Route path="about" element={<About />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
