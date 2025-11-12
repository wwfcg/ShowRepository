import { Table, TableContainer, Button, TableBody, TableRow, TableHead, Paper, TableCell } from "@mui/material";
import React from "react";

const ClientTable = ({ clients, delClient, editClient }) => {

  return (
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
                  Действия
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clients.map((client) => (
                <TableRow 
                  key={client.id}
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
                    <Button 
                      variant="contained" 
                      color="error"
                      size="small"
                      onClick={() => delClient(client.id)}
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
  )
                  };

export default ClientTable;