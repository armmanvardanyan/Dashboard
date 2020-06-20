import React from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import classes from "./ActiveMedia.module.scss";

const ActiveMedia = () => {
  const data = [
    { name: `Total Views   200`, value: 200 },
    { name: "Total Clicks  65", value: 65 },
    { name: "Sign ups   22", value: 22 },
  ];
  const COLORS = ["#fbcf71", "#1f7bb6", "#01aaaa"];
  return (
    <div className={"row"} style={{ backgroundColor: " #222222" }}>
      <div className={"pt-2 col-12"}>Active Media</div>
      <ResponsiveContainer height={270} width={"100%"}>
        <PieChart className={`${classes.PieChart} col`}>
          <Legend
            verticalAlign="bottom"
            layout={"vertical"}
            iconType={"circle"}
          />
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ActiveMedia;
