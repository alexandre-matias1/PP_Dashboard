import { api } from "@/lib/axios/axios";
import { createContext, ReactNode, useEffect, useState } from "react";

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
}

export const ChartsContext = createContext({} as ChartsContextType);

export function ChartsProvider({ children }: ChartsProviderProps) {
  const [chart, setChart] = useState<Req[]>([]);
  // const [viewChart, setViewChart] = useState(["qtdInd"]);
  const input = "2024-11-02 03:00:00";
  const encodedInput = encodeURIComponent(input);
  async function fetchRequestInd() {
    const response = await api.get(
      `/ind?date_gte=${encodedInput}&date_lte=2024-11-02%2018:00:00`,
    );

    setChart(response.data);
  }

  useEffect(() => {
    fetchRequestInd();
  }, []);

  return (
    <ChartsContext.Provider
      value={{
        chart,
      }}
    >
      {children}
    </ChartsContext.Provider>
  );
}
