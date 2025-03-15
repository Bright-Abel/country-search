"use client";
import { useTheme } from "next-themes";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface ChartProps {
  data: { name: string; Population: number; Area: number }[];
}
// GDP: number;

const Chart = ({ data }: ChartProps) => {
  const { theme } = useTheme();

  const formatNumber = (num: number) => new Intl.NumberFormat().format(num);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <defs>
          <linearGradient id="gdpGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>

          <linearGradient id="populationGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>

          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#ffc658" stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis dataKey="name" tick={{ fill: "#333", fillOpacity: 1 }} />
        <YAxis
          tickFormatter={formatNumber}
          tick={{ fill: "#333", fillOpacity: 1 }}
        />
        <CartesianGrid vertical={false} />
        {/* <Tooltip formatter={(value) => formatNumber(Number(value))} /> */}
        <Tooltip
          formatter={(value) => formatNumber(Number(value))}
          contentStyle={{
            backgroundColor: theme === "dark" ? "#444" : "#e9ecef",
          }}
        />
        <Legend />

        <Area
          type="monotone"
          dataKey="GDP"
          stroke="#8884d8"
          fill="url(#gdpGradient)"
          name="GDP ($)"
        />
        <Area
          type="monotone"
          dataKey="Population"
          stroke="#82ca9d"
          fill="url(#populationGradient)"
          name="Population"
        />
        <Area
          type="monotone"
          dataKey="Area"
          stroke="#ffc658"
          fill="url(#areaGradient)"
          name="Area (sq km)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
