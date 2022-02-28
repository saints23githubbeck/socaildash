import React from "react";
import {
  Label,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
  Pie,
  PieChart,
  Cell,
  BarChart,
  CartesianGrid,
  Legend,
  Bar,
  LineChart,
  Line,
} from "recharts";

const COLORS = ["#00C49F", "#FFBB28", "#ED2C1FE8", "#8C2E95"];
const GCOLORS = ["#8C2E95", "#1FC8ED"];

const AdsChart = (props) => {
  const { data, fbAdsLikes, fbAdsViewerByDevice, fbAdsGender, linkAdsClicks } = props;
  return (
    <>
      {fbAdsLikes && (
        <ResponsiveContainer width="100%" height={200}>
          <LineChart width={500} height={200} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="likes"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
      )}
      {fbAdsViewerByDevice && (
        <PieChart width={150} height={150}>
          <Pie
            data={data}
            // cx={2}
            // cy={5}
            innerRadius={50}
            outerRadius={70}
            // fill="#8884d8"
            // paddingAngle={5}
            // dataKey="value"
          >
            <Legend align="left" height={36} />
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      )}
      {fbAdsGender && (
        <PieChart width={150} height={150}>
          <Pie data={data} innerRadius={50} outerRadius={70}>
            {data.map((entry, index) => (
              <>
                <Label value="label" offset={0} position="center" />
                <Cell
                  key={`cell-${index}`}
                  fill={GCOLORS[index % GCOLORS.length]}
                />
              </>
            ))}
          </Pie>
        </PieChart>
      )}
      {linkAdsClicks && (
        <ResponsiveContainer width={450} height={200}>
          <BarChart width={450} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Paid" stackId="a" fill="#00C49F" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default AdsChart;
