import { api } from "@/lib/axios/axios";
import { createContext, ReactNode, useState } from "react";

interface Req {
  date: string;
  qtdInd: number;
  qtdRec: number;
  qtdRej: number;
}

// interface RequestDateInput {
//     startAt: Date
//     finsihedAt: Date
//     hour: number
//     min: number
//     seg: number
// }

interface ChartsProviderProps {
  children: ReactNode;
}

interface ChartsContextType {
  chart: Req[];
  fetchRequestInd: (start?: string, end?: string) => Promise<void>;
}

export const ChartsContext = createContext({} as ChartsContextType);

export function ChartsProvider({ children }: ChartsProviderProps) {
  const [chart, setChart] = useState<Req[]>([]);
  // const [viewChart, setViewChart] = useState(["qtdInd"]);
  async function fetchRequestInd(start: any, end: any) {


    try {
      const response = await api.get(
        `/ind?date_gte=${start}&date_lte=${end}`,
      );
      setChart(response.data);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  }

  return (
    <ChartsContext.Provider
      value={{
        chart,
        fetchRequestInd,
      }}
    >
      {children}
    </ChartsContext.Provider>
  );
}
