import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { dataFormater } from "../Functions/functions";
import "../Css/grafic.css";

export default function Grafic(props) {
  let [dataToShow, setDataToShow] = useState([]);
  let [dataToDisplay, setDataToDisplay] = useState([]);

  useEffect(() => {
    setDataToShow(props.dataHistorical[props.type]);
    if (dataToShow) {
      setDataToDisplay(
        Object.keys(dataToShow).map((key) => {
          const options = { month: "long", day: "numeric" };
          return {
            name: new Date(key).toLocaleDateString("en-US", options),
            cases: dataToShow[key],
          };
        }),
      );
    }
  }, [props, dataToShow]);

  return (
    <ResponsiveContainer className="grafic">
      <AreaChart
        data={dataToDisplay}
        margin={{
          top: 10,
          right: 30,
          left: 10,
          bottom: 0,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis tickFormatter={dataFormater} />
        <Tooltip />
        <Area type="monotone" dataKey="cases" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
