import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.scss";

function TableList() {
  const rows = [
    {
      id: 1143155,
      product: "Muang Pattaya,Thailand",
      img: "https://a0.muscache.com/im/pictures/1f23e84a-f226-4b5d-9405-ffe291206b13.jpg?im_w=720",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "On-Site Payments",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Hoi an city,Vietnam",
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-9738315/original/822ef891-8fb6-4695-a31c-485ab7c2ee21.jpeg?im_w=720",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Vysloboky, Ukraina",
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-48038481/original/035ad76d-53c5-4412-b6b6-ac96b7ce87c2.jpeg?im_w=720",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "On-Site Payments",
      status: "Approved",
    },
    {
      id: 2357741,
      product: "Guyonvelle, Phap",
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/91290830-0db6-40c0-a23b-86a904ee5239.jpeg?im_w=720",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Pending",
    },
    {
      id: 2342355,
      product: "Salobrena, Tay ban nha",
      img: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="tableCellWrapper">
                  <img src={row.img} alt="img" className="img" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableList;
