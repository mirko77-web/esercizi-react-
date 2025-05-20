import { Route, Routes } from "react-router-dom";
import Private from "./layout/Private";
import Public from "./layout/Public";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Layout />}>
        
        <Route element={<Public />}>
          <Route index element={<></>} /> {/* Componente placeholder */}
          <Route path="signup" element={<></>} /> {/* Componente placeholder */}
        </Route>

     
        <Route path="private" element={<Private />}>
          <Route index element={<></>} /> {/* Componente placeholder */}
          <Route path="menubusiness" element={<></>} /> {/* Componente placeholder */}
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
