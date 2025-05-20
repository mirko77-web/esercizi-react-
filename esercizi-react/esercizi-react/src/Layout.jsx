import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Barra di navigazione */}
      <nav className="bg-gray-800 text-white p-4 flex gap-6">
        <NavLink 
          to="/" 
          end
          className={({ isActive }) =>
            isActive ? "underline font-bold" : "hover:underline"
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/signup" 
          className={({ isActive }) =>
            isActive ? "underline font-bold" : "hover:underline"
          }
        >
          Signup
        </NavLink>
        <NavLink 
          to="/private/menubusiness" 
          className={({ isActive }) =>
            isActive ? "underline font-bold" : "hover:underline"
          }
        >
          Menu Business
        </NavLink>
      </nav>

      {/* Contenuto principale */}
      <main className="flex-grow p-6 bg-gray-50">
        <Outlet />
      </main>

      {/* Footer (opzionale) */}
      <footer className="bg-gray-800 text-white text-center p-4">
        © 2025 La Mia Azienda
      </footer>
    </div>
  );
};

export default Layout;
