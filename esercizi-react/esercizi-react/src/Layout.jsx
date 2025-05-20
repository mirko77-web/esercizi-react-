import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* Qui puoi mettere navbar, sidebar, header, footer, ecc. */}
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold">La Mia App</h1>
      </header>

      {/* Contenuto dinamico delle pagine */}
      <main className="p-6">
        <Outlet />
      </main>

      <footer className="bg-gray-200 text-center p-4 mt-10">
        © 2025 La Mia Azienda
      </footer>
    </div>
  );
};

export default Layout;
