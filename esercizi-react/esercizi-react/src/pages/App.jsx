import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout"; // importa il layout
import Private from "./layout/Private";
import Public from "./layout/Public";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<Public />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="private" element={<Private />}>
          <Route index element={<Home />} />
          <Route path="menubusiness" element={<MenuBusiness />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
