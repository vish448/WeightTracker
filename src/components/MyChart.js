import React from "react";
import { VictoryChart, VictoryLine } from "victory";

export default function MyChart({ weights }) {
    console.log(weights)
  const data = weights.map((weight) => ({"weight":weight.weight, "date":weight.selectedDate}))
  console.log(data);
  return (
    <>
    <div className="list-group">
    <h2 className="mt-5 mb-3">Chart</h2>
    <VictoryChart
    width={550}
          height={400}
          scale={{x: "date"}}>
      <VictoryLine
        style={{
          data: { stroke: "#c43a31" },
        }}
        data={data}
        x="date"
        y="weight"
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
        }}
      
        labels={({ datum }) => datum.y}
        
        />
    </VictoryChart>
    </div>
      
    </>
  );
}
