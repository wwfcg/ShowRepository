import { Table, TableContainer, Button, TableBody, TableRow, TableHead, Paper, TableCell } from "@mui/material";
import React from "react";
import "./Table.css";

const ClientTable = ({ clients, delClient, editClient }) => {

  return (
    <div className="client-table-container">
      <Paper 
        elevation={1} 
        className="client-table-paper"
      >
        <TableContainer>
          <Table className="client-table">
            <TableHead>
              <TableRow className="client-table-head">
                <TableCell className="client-table-header-cell">
                  Имя
                </TableCell>
                <TableCell className="client-table-header-cell">
                  Фамилия
                </TableCell>
                <TableCell className="client-table-header-cell">
                  Телефон
                </TableCell>
                <TableCell className="client-table-header-cell">
                  Действия
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clients.map((client) => (
                <TableRow 
                  key={client.id}
                  className="client-table-body-row"
                >
                  <TableCell className="client-table-cell-bold">
                    {client.name}
                  </TableCell>
                  <TableCell className="client-table-cell">
                    {client.surname}
                  </TableCell>
                  <TableCell className="client-table-cell">
                    {client.phone}
                  </TableCell>
                  <TableCell className="client-table-cell">
                    <Button 
                      variant="contained" 
                      color="error"
                      size="small"
                      onClick={() => delClient(client.id)}
                      className="delete-button"
                    >
                      Удалить
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default ClientTable;