import React, { useEffect, useState } from "react";
import { useData } from "../contexts/DataContext";
import DateRange from "./DateRange";
import Months from "./Months";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [title, setTitle] = useState("Resumo");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setTitle("Resumo");
      document.title = "Fintech | Resumo";
    }

    if (location.pathname === "/sales") {
      setTitle("Vendas");
      document.title = "Fintech | Vendas";
    }
  }, [location]);
  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Months />
    </header>
  );
};

export default Header;
