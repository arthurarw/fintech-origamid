import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import useFetch from "../hooks/useFetch";

interface IDataContext {
  loading: boolean;
  error: string | null;
  data: ISale[] | null;
  startDate: string;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  endDate: string;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
}

interface ISale {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "cartao" | "pix";
  parcelas: number | null;
  data: string;
}

const DataContext = createContext<IDataContext | null>(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData precisa estar em DataContextProvider");
  }

  return context;
};

function getDate(n: number): string {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
}

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [startDate, setStartDate] = useState(getDate(30));
  const [endDate, setEndDate] = useState(getDate(0));

  const { data, loading, error } = useFetch<ISale[]>(
    `${
      import.meta.env.VITE_API_URL
    }/vendas/?inicio=${startDate}&final=${endDate}`,
  );

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
