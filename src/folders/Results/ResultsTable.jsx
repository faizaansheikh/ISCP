
// import React from "react";
// import "../Results/table.css";
// function ResultsTable() {
//   return (
//     <>
//       <div className="container tbl-container">
//         <div className="row tbl-fixed">
//           <table className="table-striped table-condensed">
//             <thead className="thd">
//               <tr>
//                 <th>ABC</th>
//                 <th>XYZ</th>
//                 <th className="brand1">Brand</th>
//                 <th>Grammage</th>
//                 <th>2019 m11</th>
//                 <th>2019 m12</th>
//                 <th>2020 M01</th>
//                 <th>2020 M02</th>
//                 <th>2020 M03</th>
//                 <th>2020 M01</th>
//                 <th>2020 M02</th>
//                 <th>2020 M03</th>
//                 <th>2020 M01</th>
//                 <th>2020 M02</th>
//                 <th>2020 M03</th>
//                 <th>2020 M03</th>
//                 <th>2020 M01</th>
//                 <th>2020 M02</th>
//                 <th>2020 M03</th>
//               </tr>
//             </thead>
//             <tbody className="tbdy">
//               <tr>
//                 <td>A</td>
//                 <td>X</td>
//                 <td>Max bar regular</td>
//                 <td>190-285 GM</td>
//                 <td>COGS</td>
//                 <td>37244</td>
//                 <td>36883</td>
//                 <td>39222</td>
//                 <td>37740</td>
//                 <td>36883</td>
//                 <td>39222</td>
//                 <td>37740</td>
//                 <td>36883</td>
//                 <td>39222</td>
//                 <td>37740</td>
//                 <td>37740</td>
//                 <td>36883</td>
//                 <td>39222</td>
//                 <td>37740</td>
//               </tr>
//               <tr>
//                 <td>A</td>
//                 <td>X</td>
//                 <td>Max bar regular</td>
//                 <td>190-285 GM</td>
//                 <td>COGS</td>
//                 <td>37244</td>
//                 <td>36883</td>
//                 <td>39222</td>
//                 <td>37740</td>
//               </tr>
//               <tr>
//                 <td>A</td>
//                 <td>X</td>
//                 <td>Max bar regular</td>
//                 <td>190-285 GM</td>
//                 <td>COGS</td>
//                 <td>37244</td>
//                 <td>36883</td>
//                 <td>39222</td>
//                 <td>37740</td>
//               </tr>
//               <tr>
//                 <td>A</td>
//                 <td>X</td>
//                 <td>Max bar regular</td>
//                 <td>190-285 GM</td>
//                 <td>COGS</td>
//                 <td>37244</td>
//                 <td>36883</td>
//                 <td>39222</td>
//                 <td>37740</td>
//               </tr>
//               <tr>
//                 <td>A</td>
//                 <td>X</td>
//                 <td>Max bar regular</td>
//                 <td>190-285 GM</td>
//                 <td>COGS</td>
//                 <td>37244</td>
//                 <td>36883</td>
//                 <td>39222</td>
//                 <td>37740</td>
//               </tr>
//               <tr>
//                 <td>A</td>
//                 <td>X</td>
//                 <td>Max bar regular</td>
//                 <td>190-285 GM</td>
//                 <td>COGS</td>
//                 <td>37244</td>
//                 <td>36883</td>
//                 <td>39222</td>
//                 <td>37740</td>
//               </tr>
//               <tr>
//                 <td>A</td>
//                 <td>X</td>
//                 <td>Max bar regular</td>
//                 <td>190-285 GM</td>
//                 <td>COGS</td>
//                 <td>37244</td>
//                 <td>36883</td>
//                 <td>39222</td>
//                 <td>37740</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ResultsTable;

// import "./App.css";
import '../Results/newtable.css'
import fakeData from "./MOCK_DATA.json";
import * as React from "react";
import { useTable } from "react-table";

function ResultsTable() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Last Name",
        accessor: "university",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="App">
      <div className="container">
        <table className='react_table' {...getTableProps()}>
          <thead className='new_thead'>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th className='new_th' {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className='new_tbody' {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr className='new_tr' {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td className='new_td' {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResultsTable;