"use client";

import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  Legend,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Line,
  Area,
  Scatter,
  Tooltip,
  XAxis,
  CartesianGrid,
  YAxis,
  ComposedChart,
} from "recharts";

interface GraphsProps {
  data: any[];
  data01: any[];
  data3: any[];
  data4: any[];
  data5: any[];
}

const Graphs: React.FC<GraphsProps> = ({
  data,
  data01,
  data3,
  data4,
  data5,
}) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div>
      <div className="grid grid-cols-1  lg:grid-cols-10 gap-20">
        <div className=" lg:col-span-7">
          <ResponsiveContainer
            className={" p-4 shadow-2xl shadow-neutral-600/20 border"}
            height={500}
            width={"100%"}
          >
            <BarChart data={data}>
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip
                itemStyle={{ fontWeight: 400, color: "#000" }}
                contentStyle={{ backgroundColor: "#fff" }}
              />
              <Bar dataKey={"uv"} fill="#3498db" radius={[4, 4, 0, 0]} />
              <Bar dataKey={"pv"} fill="#3498db" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className=" lg:col-span-3">
          <ResponsiveContainer
            className={
              "flex items-center justify-center p-4 shadow-2xl shadow-neutral-600/20 border"
            }
            width="100%"
            height={500}
          >
            <PieChart>
              <Pie
                data={data01}
                innerRadius={80}
                outerRadius={120}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              />
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <ResponsiveContainer
          className={
            "p-4 shadow-2xl col-span-4 mt-12 shadow-neutral-600/20  border"
          }
          width="100%"
          height={400}
        >
          <LineChart
            data={data3}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
        <ResponsiveContainer
          className={
            "p-4 shadow-2xl col-span-4 mt-12 shadow-neutral-600/20 border"
          }
          width="100%"
          height={400}
        >
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data4}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
        <ResponsiveContainer
          className={
            "p-4 shadow-2xl mt-12 col-span-4 shadow-neutral-600/20 border"
          }
          width="100%"
          height={400}
        >
          <ComposedChart
            data={data5}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="amt"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            <Scatter dataKey="cnt" fill="red" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default Graphs;
