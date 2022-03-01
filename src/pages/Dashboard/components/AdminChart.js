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

const COLORS = ["#00C49F", "#FFBB28", "#ED2C1FE8"];
const GCOLORS = ["#8C2E95", "#1FC8ED"];

const AdminChart = (props) => {
  const {
    youGainLostUser,
    youEngGainLostUser,
    youView, youAge, youGender,
    youAvgViewDuration,
    youEstimatedMinWatched,
    twTweet,
    twRetweet,
    twLikes,
    twFollower,
    orderDays,
    data,
    fbOrganicLikes,
    fbAudienceGrowth,
    fbLikeAge,
    fbGender,
    fbEngagement,
    fbAudienceEngagement,
    linkAudienceGrowth,
    linkOrganicLikes,
    linkClicks,
    linkImpression,
    linkSocialAction,
    linkByJobFunction,
    insNewFollower,
    insReach,
    insImpression,
    insAudienceAge,
    insAudienceGender, insProfileVisit, insWebsiteClick,
  } = props;
  return (
    <>
      {orderDays && (
        <div
          style={{
            width: "1000px",
            justifyContent: "center",
            margin: "20px auto",
          }}
        >
          <h1>Orders</h1>
          <ResponsiveContainer width={950} height={200}>
            <AreaChart width={500} height={200} data={data} syncId="anyId">
              <Area type="monotone" dataKey="amt" stroke="red" fill="none" />
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="pv"
                stroke="#82ca9d"
                fill="#3578E5"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}

      {fbOrganicLikes && (
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
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      )}
      {fbEngagement && (
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
            <Legend align="center" height={36} />
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      )}
      {fbGender && (
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

      {fbAudienceGrowth && (
        <ResponsiveContainer width={450} height={200}>
          <BarChart width={450} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <Legend verticalAlign="top" height={36} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Paid" stackId="a" fill="#00C49F" />
            <Bar dataKey="Organic" stackId="a" fill="#FFBB28" />
          </BarChart>
        </ResponsiveContainer>
      )}

      {fbLikeAge && (
        <ResponsiveContainer width="100%" height={200}>
          <BarChart width={150} height={40} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="ageList" fill="#23C229" />
          </BarChart>
        </ResponsiveContainer>
      )}
      {fbAudienceEngagement && (
        <ResponsiveContainer width="100%" height={200}>
          <LineChart width={500} height={200} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="date"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
      )}

      {twFollower && (
        <ResponsiveContainer width={500} height={200}>
          <BarChart width={900} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />

            <YAxis />
            <Tooltip />
            <Bar dataKey="Paid" stackId="a" fill="#00C49F" />
          </BarChart>
        </ResponsiveContainer>
      )}
      {twLikes && (
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
      {twRetweet && (
        <ResponsiveContainer width="100%" height={200}>
          <LineChart width={500} height={200} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="date"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
      )}
      {twTweet && (
        <ResponsiveContainer width="100%" height={200}>
          <LineChart width={500} height={200} data={data} syncId="anyId">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="date"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
      )}

      {youGainLostUser && (
        <ResponsiveContainer width={600} height={200}>
          <BarChart width={500} height={300} data={data}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Bar dataKey="Gain" stackId="a" fill="#66F733" />
            <Bar dataKey="Lost" stackId="a" fill="#C06818" />
          </BarChart>
        </ResponsiveContainer>
      )}
      {youEngGainLostUser && (
        <ResponsiveContainer width={300} height={200}>
          <BarChart width={500} height={300} data={data}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Bar dataKey="Gain" stackId="a" fill="#66F733" />
            <Bar dataKey="Lost" stackId="a" fill="#C06818" />
          </BarChart>
        </ResponsiveContainer>
      )}

      {youView && (
        <ResponsiveContainer width="100%" height={200}>
          <LineChart width={500} height={200} data={data} syncId="anyId">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="view"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
      )}
      {youAvgViewDuration && (
        <ResponsiveContainer width="100%" height={200}>
          <LineChart width={500} height={200} data={data} syncId="anyId">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="duration"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
      )}
      {youEstimatedMinWatched && (
        <ResponsiveContainer width="100%" height={200}>
          <LineChart width={500} height={200} data={data} syncId="anyId">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="watch"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
      )}
      {youAge && (
        <ResponsiveContainer width="100%" height={200}>
          <BarChart width={150} height={40} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="ageList" fill="#23C229" />
          </BarChart>
        </ResponsiveContainer>
      )}
      {youGender && (
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
      {linkOrganicLikes && (
        <PieChart width={150} height={150}>
          <Pie
            data={data}
            // cx={2}
            // cy={5}
            innerRadius={50}
            outerRadius={70}
            // fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          >
            <Label value="" offset={0} position="center" />
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      )}
      {linkAudienceGrowth && (
        <ResponsiveContainer width={450} height={200}>
          <BarChart width={450} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <Legend verticalAlign="top" height={36} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Organic" stackId="a" fill="#FFBB28" />
            <Bar dataKey="Paid" stackId="a" fill="#00C49F" />
          </BarChart>
        </ResponsiveContainer>
      )}
      {linkClicks && (
        <ResponsiveContainer width="100%" height={200}>
          <LineChart width={500} height={200} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="clicks"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
      )}
      {linkImpression && (
        <ResponsiveContainer width="100%" height={200}>
          <LineChart width={500} height={200} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="impression"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
      )}
      {linkSocialAction && (
        <ResponsiveContainer width={300} height={200}>
          <BarChart width={450} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <Legend verticalAlign="top" height={25} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Comments" stackId="a" fill="#6F6B6B" />
            <Bar dataKey="Likes" stackId="a" fill="#F87CF3" />
            <Bar dataKey="Share" stackId="a" fill="#3578E5" />
          </BarChart>
        </ResponsiveContainer>
      )}

      {linkByJobFunction && (
        <ResponsiveContainer width="100%" height={200}>
          <BarChart width={150} height={40} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="follower" fill="#23C229" />
          </BarChart>
        </ResponsiveContainer>
      )}
      {insNewFollower && (
        <ResponsiveContainer width={600} height={200}>
          <BarChart width={500} height={300} data={data}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="new" stackId="a" fill="#66F733" />
          </BarChart>
        </ResponsiveContainer>
      )}
      {insReach && (
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart width={500} height={200} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              connectNulls
              type="monotone"
              dataKey="reach"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
      {insImpression && (
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart width={500} height={200} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="impression"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
      {insAudienceAge && (
        <ResponsiveContainer width="100%" height={200}>
          <BarChart width={150} height={40} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="ageList" fill="#23C229" />
          </BarChart>
        </ResponsiveContainer>
      )}
      {insAudienceGender && (
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

      {insProfileVisit && (
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
      {insWebsiteClick && (
        <ResponsiveContainer width="100%" height={200}>
          <LineChart width={500} height={200} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="date"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default AdminChart;
