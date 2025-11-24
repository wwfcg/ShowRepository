import { Table, TableContainer, Button, TableBody, TableRow, TableHead, Paper, TableCell } from "@mui/material";
import React from "react";
<<<<<<< HEAD
=======
import "./Table.css";
>>>>>>> master

const ClientTable = ({ clients, delClient, editClient }) => {

  return (
<<<<<<< HEAD
    <div style={{ flex: '1' }}>
      <Paper 
        elevation={1} 
        sx={{ 
          borderRadius: 2, 
          overflow: 'hidden',
        }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 300 }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'primary.main' }}>
                <TableCell sx={{ 
                  color: 'white', 
                  fontWeight: 'bold', 
                  fontSize: '1rem',
                  py: 2
                }}>
                  Имя
                </TableCell>
                <TableCell sx={{ 
                  color: 'white', 
                  fontWeight: 'bold', 
                  py: 2
                }}>
                  Фамилия
                </TableCell>
                <TableCell sx={{ 
                  color: 'white', 
                  fontWeight: 'bold', 
                  fontSize: '1rem',
                  py: 2
                }}>
                  Телефон
                </TableCell>
                <TableCell sx={{ 
                  color: 'white', 
                  fontWeight: 'bold', 
                  fontSize: '1rem',
                  py: 2
                }}>
=======
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
>>>>>>> master
                  Действия
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clients.map((client) => (
                <TableRow 
                  key={client.id}
<<<<<<< HEAD
                  sx={{ 
                    '&:nth-of-type(odd)': { backgroundColor: 'action.hover' },
                    '&:last-child td, &:last-child th': { border: 0 },
                    transition: 'background-color 0.2s',
                    '&:hover': { backgroundColor: 'action.selected' }
                  }}
                >
                  <TableCell sx={{ 
                    fontWeight: 'medium', 
                    fontSize: '0.95rem',
                    py: 1.5
                  }}>
                    {client.name}
                  </TableCell>
                  <TableCell sx={{ 
                    fontSize: '0.95rem',
                    py: 1.5
                  }}>
                    {client.surname}
                  </TableCell>
                  <TableCell sx={{ 
                    fontSize: '0.95rem',
                    py: 1.5
                  }}>
                    {client.phone}
                  </TableCell>
                  <TableCell sx={{ py: 1.5 }}>
=======
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
>>>>>>> master
                    <Button 
                      variant="contained" 
                      color="error"
                      size="small"
                      onClick={() => delClient(client.id)}
<<<<<<< HEAD
                      sx={{
                        borderRadius: 1,
                        textTransform: 'none',
                        fontWeight: 'bold',
                        boxShadow: 1,
                        px: 2,
                        '&:hover': {
                          boxShadow: 2,
                          transform: 'translateY(-1px)'
                        },
                        transition: 'all 0.2s'
                      }}
=======
                      className="delete-button"
>>>>>>> master
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
<<<<<<< HEAD
  )
                  };
=======
  );
};
>>>>>>> master

export default ClientTable;