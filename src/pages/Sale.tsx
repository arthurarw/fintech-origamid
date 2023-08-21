import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { ISale } from "../contexts/DataContext";
import Loading from "../components/Loading";

const Sale = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch<ISale>(
    `${import.meta.env.VITE_API_URL}/vendas/${id}`,
  );

  if (loading) {
    return <Loading />;
  }

  if (data === null) {
    return <div>Nenhuma venda encontrada com este código.</div>;
  }

  return (
    <div>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">
        Preço:{" "}
        {data.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Pagamento: {data.pagamento}</div>
    </div>
  );
};

export default Sale;
