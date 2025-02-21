

import {
    Area,
    AreaChart,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
  } from "recharts";
  
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart";
  import { useEffect, useState } from "react";
  import { api } from "@/lib/axios/axios";
  
  const chartConfig = {
    desktop: {
      label: "Mobile",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;
  
  interface Req {
    date: string;
    qtd: number;
    rec: number;
  }
  
  interface ReqProps {
    req: Req[];
    fetchRequest: () => Promise<void>;
  }
  
  export function Charts() {
    const [chart, setChart] = useState<Req[]>([]);
    const [totalQtd, setTotalQtd] = useState(0);
    const input = "2024-11-02 03:00:00";
    const encodedInput = encodeURIComponent(input);
    async function fetchRequest() {
      const response = await api.get(
        `/ind?date_gte=${encodedInput}&date_lte=2024-11-02%2016:00:00`,
      );
  
      setChart(response.data);
    }
  
    
  
    useEffect(() => {
      fetchRequest();

      const total = chart.reduce ((sum,item) => sum + item.qtd, 0)
      setTotalQtd(total)
    }, []);
  
    return (
      <Card>
        <CardHeader>
          <CardTitle>Volumetria Sorter</CardTitle>
          <CardDescription>
            Quantidades de caixas induzidas, rejeitadas e recirculadas
            {totalQtd}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={360}>
            <ChartContainer config={chartConfig}>
              <AreaChart
                accessibilityLayer
                data={chart}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="Data"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(10, 16)}
                />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Area
                  dataKey="qtd"
                  type="natural"
                  fill="var(--color-mobile)"
                  fillOpacity={0.4}
                  stroke="var(--color-mobile)"
                  stackId="a"
                />
                {/* <Area
                  dataKey="rec"
                  type="natural"
                  fill="var(--color-desktop)"
                  fillOpacity={0.4}
                  stroke="var(--color-desktop)"
                  stackId="a"
                /> */}
              </AreaChart>
            </ChartContainer>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    );
  }
  