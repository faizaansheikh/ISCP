import React from "react";
import Plot from "react-plotly.js";
import {data} from '../Graph/data.js'
function Graph() {
    // console.log(data);
    let date = data.map((elem)=>{
        return elem.date
    })
    let electric_bill = data.map((elem)=>{
        return elem.electric_bills
    })
    let gas_bills = data.map((elem)=>{
        return elem.gas_bills
    })
    let per_month_exp = data.map((elem)=>{
        return elem.per_month_exp
    })
  return (
    <>
      <Plot
        data={[
          {
            x: date,
            y: electric_bill,
            type:'scatterg1',
            marker:{color:'red'},
            name:'Electricity Bills'
          },
          {
            x: date,
            y: gas_bills,
            type:'scatterg1',
            marker:{color:'blue'},
            name:'Gas Bills'
          },
          {
            x: date,
            y: per_month_exp,
            type:'scatterg1',
            marker:{color:'green'},
            name:'per_month_exp'
          },
        ]}
      />
    </>
  );
}

export default Graph;
