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
const chartData = [
  {"Data":"2024-11-01 00:00:00","Mensagem":448},
  {"Data":"2024-11-01 01:00:00","Mensagem":2222},
  {"Data":"2024-11-01 02:00:00","Mensagem":3248},
  {"Data":"2024-11-01 03:00:00","Mensagem":2458},
  {"Data":"2024-11-01 04:00:00","Mensagem":1308},
  {"Data":"2024-11-01 05:00:00","Mensagem":827},
  {"Data":"2024-11-01 06:00:00","Mensagem":0},
  {"Data":"2024-11-01 07:00:00","Mensagem":1251},
  {"Data":"2024-11-01 08:00:00","Mensagem":1655},
  {"Data":"2024-11-01 09:00:00","Mensagem":2109},
  {"Data":"2024-11-01 10:00:00","Mensagem":1415},
  {"Data":"2024-11-01 11:00:00","Mensagem":1161},
  {"Data":"2024-11-01 12:00:00","Mensagem":500},
  {"Data":"2024-11-01 13:00:00","Mensagem":1200},
  {"Data":"2024-11-01 14:00:00","Mensagem":1344},
  {"Data":"2024-11-01 15:00:00","Mensagem":1315},
  {"Data":"2024-11-01 16:00:00","Mensagem":1438},
  {"Data":"2024-11-01 17:00:00","Mensagem":577},
  {"Data":"2024-11-01 18:00:00","Mensagem":831},
  {"Data":"2024-11-01 19:00:00","Mensagem":2215},
  {"Data":"2024-11-01 20:00:00","Mensagem":1727},
  {"Data":"2024-11-01 21:00:00","Mensagem":2355},
  {"Data":"2024-11-01 22:00:00","Mensagem":2331},
  {"Data":"2024-11-01 23:00:00","Mensagem":1105},
]



const chartConfig = {
  desktop: {
    label: "Mobile",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function Charts() {
  return (
    <Card >
      <CardHeader>
        <CardTitle>Volumetria Sorter</CardTitle>
        <CardDescription>
          Quantidades de caixas induzidas, rejeitadas e recirculadas
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={360}>
          <ChartContainer config={chartConfig}>
            <AreaChart
              accessibilityLayer
              data={chartData}
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
                tickFormatter={(value) => value.slice(10,16)}
              />
              <YAxis                 tickLine={false}
                axisLine={false}/>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Area
                dataKey="Mensagem"
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
