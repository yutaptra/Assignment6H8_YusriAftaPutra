import React from "react";
import Search from "./Search";

const Header = ({ title, setQuery }) => {
  return (
    <header className="bg-warning text-white p-3 d-flex justify-content-between align-items-center">
      <h1 id="app-title">{title}</h1>
      <Search setQuery={setQuery} />
    </header>
  );
};

export default Header;
