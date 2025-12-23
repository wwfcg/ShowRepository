import React, { useState } from "react";
import Table from "../table/Table";
import Form from "../form/Form";
import { Box, Paper } from "@mui/material";
import ClientAPI from "../../api/services";
import { useSelector } from "react-redux";

const TablePage = () => {
    const [clients, setClients] = useState(() => ClientAPI.all());
    const { isAuthenticated, user } = useSelector((s) => s.auth);

        const addClient = (client) => {
            if (!isAdmin) return;
            const newClient = ClientAPI.add(client);
            setClients((prev) => [...prev, newClient]);
        };

    const delCli = (id) => {
        ClientAPI.delete(id);
        setClients(ClientAPI.all());
    };


    const isAdmin = isAuthenticated && user?.role === "admin";

    return (
        <Box className="table-page" sx={{ width: "100%" }}>
            <h1>Управление клиентами</h1>

            <div className="table-container">
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "2rem",
                        width: "100%",
                    }}
                >
                    <div className="form-container">
                        {isAdmin ? (
                            <Form handleSubmit={addClient} inClient={{ name: "", surname: "", phone: "" }} />
                        ) : (
                            <div style={{ padding: 16, border: "1px solid var(--border)", borderRadius: 12, background: "var(--surface)" }}>
                                Вход выполнен как <b>{user?.role || "гость"}</b>. Добавление клиентов доступно только администратору.
                            </div>
                        )}
                    </div>

                    <div className="client-table-container">
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Paper>
                                <Table clients={clients} delClient={delCli} />
                            </Paper>
                        </Box>
                    </div>
                </Box>
            </div>
        </Box>
    );
};

export default TablePage;
