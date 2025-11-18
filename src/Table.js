import { Table, TableContainer, Button, TableBody, TableRow, TableHead, Paper, TableCell } from "@mui/material";
import React from "react";
import "./Table.css";

const ClientTable = ({ clients, delClient, editClient }) => {
  return (
    <div className="client-table-container">
      <Paper elevation={3} className="client-table-paper">
        <TableContainer>
          <Table sx={{ minWidth: 750 }}>
            <TableHead>
              <TableRow className="client-table-head-row">
                <TableCell>Имя</TableCell>
                <TableCell>Фамилия</TableCell>
                <TableCell>Телефон</TableCell>
                <TableCell>Действия</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clients.map((client) => (
                <TableRow key={client.id} className="client-table-body-row">
                  <TableCell>{client.name}</TableCell>
                  <TableCell>{client.surname}</TableCell>
                  <TableCell>{client.phone}</TableCell>
                  <TableCell className="client-table-actions-cell">
                    <Button 
                      variant="contained"
                      size="small"
                      
                      onClick={() => delClient(client.id)}
                      className="client-table-button delete-button"
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