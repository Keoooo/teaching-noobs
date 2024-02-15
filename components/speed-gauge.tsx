"use client";
import React from "react";
import ReactECharts from "echarts-for-react";

const SpeedGauge = ({ speed }: { speed: number }) => {
  const getOption = () => ({
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%",
    },
    series: [
      {
        name: "Speed",
        type: "gauge",
        detail: { formatter: "{value}" },
        data: [{ value: speed, name: "Rating" }],
        axisLine: {
          lineStyle: {
            width: 8,
            // Define a gradient for the gauge's line (or use a solid color)
            color: [
              [0.3, "#23D96C"],
              [0.7, "#be941e89"],
              [1, "#7b5c00"],
            ],
          },
        },
        pointer: {
          length: "60%",
          width: 6,
        },
      },
    ],
  });

  return (
    <div className="w-full 50">
      <ReactECharts option={getOption()} style={{ height: 400 }} />
    </div>
  );
};

export default SpeedGauge;
