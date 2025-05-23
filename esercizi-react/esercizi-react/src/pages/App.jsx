/*import { Route, Routes } from "react-router-dom";
import Private from "./layout/Private";
import Public from "./layout/Public";
import Layout from "./layout/Layout";
import About from "./pages/About"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './TodoList';
import TodoDetail from './TodoDetail';



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
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
      </Routes>
    </Routes>
  );
};

export default App; */

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import TodoList from './features/todos/TodoList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1> ciao mondo</h1>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;


