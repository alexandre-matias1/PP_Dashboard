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
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";

import { Checkbox } from "./ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";

const chartConfig = {
  ind: {
    label: "qtdInd",
    color: "hsl(var(--chart-1))",
  },
  rec: {
    label: "qtdRec",
    color: "hsl(var(--chart-2))",
  },
  rej: {
    label: "qtdRej",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

interface Req {
  date: string;
  qtdInd: number;
  qtdRec: number;
  qtdRej: number;
}

export function Charts() {
  const [chart, setChart] = useState<Req[]>([]);
  const [viewChart, setViewChart] = useState(["qtdInd"]);
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

  const handleCheckboxChange = (value: string, checked: CheckedState) => {
    setViewChart((state) => {
      if (checked) {
        return [...state, value];
      } else {
        return state.filter((item) => item !== value);
      }
    });
  };

  return (
    <Card>
      <CardHeader className="m-2 flex flex-row justify-between">
        <div className="flex flex-col gap-2">
          <CardTitle>Volumetria Sorter</CardTitle>
          <CardDescription>
            Quantidades de caixas induzidas, rejeitadas e recirculadas
          </CardDescription>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button className="w-[220px]" variant="outline">
              Teste
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[220px]">
            <div className="flex items-center justify-start gap-3">
              <Checkbox
                id="ind"
                checked={viewChart.includes("qtdInd")}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("qtdInd", checked)
                }
              />
              <label htmlFor="ind">Indução</label>
            </div>{" "}
            <div className="flex items-center justify-start gap-3">
              <Checkbox
                id="rec"
                checked={viewChart.includes("qtdRec")}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("qtdRec", checked)
                }
              />
              <label htmlFor="rec">Recirculação</label>
            </div>{" "}
            <div className="flex items-center justify-start gap-3">
              <Checkbox
                id="rej"
                checked={viewChart.includes("qtdRej")}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("qtdRej", checked)
                }
              />
              <label htmlFor="rej">Rejeito</label>{" "}
            </div>
          </PopoverContent>
        </Popover>
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
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(11, 16)}
              />
              <YAxis tickLine={false} axisLine={false} />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Area
                dataKey={viewChart[0]}
                fill="var(--color-ind)"
                fillOpacity={0.4}
                stroke="var(--color-ind)"
                type="monotone"
                stackId="a"
              />
              <Area
                dataKey={viewChart[1]}
                type="monotone"
                fill="var(--color-rej)"
                fillOpacity={0.4}
                stroke="var(--color-rej)"
                stackId="b"
              />{" "}
              <Area
                dataKey={viewChart[2]}
                type="monotone"
                fill="var(--color-rec)"
                fillOpacity={0.4}
                stroke="var(--color-rec)"
                stackId="c"
              />
            </AreaChart>
          </ChartContainer>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
