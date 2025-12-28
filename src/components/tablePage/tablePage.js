import React, { useEffect, useMemo, useState } from "react";
import Table from "../table/Table";
import Form from "../form/Form";
import { Box, Paper, Alert, CircularProgress } from "@mui/material";
import ClientAPI from "../../api/services";
import { useSelector } from "react-redux";

const TablePage = () => {
  const { isAuthenticated, user } = useSelector((s) => s.auth);
  const isAdmin = useMemo(() => isAuthenticated && user?.role === "admin", [isAuthenticated, user]);

  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadClients = async () => {
    setError("");
    setLoading(true);
    try {
      const data = await ClientAPI.all();
      setClients(Array.isArray(data) ? data : []);
    } catch (e) {
      setError("Не удалось загрузить клиентов. Проверь, запущен ли сервер (npm run server).");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadClients();
  }, []);

  const addClient = async (client) => {
    if (!isAdmin) return;

    setError("");
    try {
      const newClient = await ClientAPI.add(client);
      setClients((prev) => [...prev, newClient]);
    } catch (e) {
      setError("Не удалось добавить клиента.");
    }
  };

  const delCli = async (id) => {
    if (!isAdmin) return;

    setError("");
    try {
      await ClientAPI.delete(id);
      setClients((prev) => prev.filter((c) => c.id !== id));
    } catch (e) {
      setError("Не удалось удалить клиента.");
    }
  };

  return (
    <Box className="table-page" sx={{ width: "100%" }}>
      <h1>Управление клиентами</h1>

      {error ? (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      ) : null}

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
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
                <Form
                  handleSubmit={addClient}
                  inClient={{ name: "", surname: "", phone: "" }}
                />
              ) : (
                <div
                  style={{
                    padding: 16,
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    background: "var(--surface)",
                    boxShadow: "var(--shadow)",
                  }}
                >
                  Вход выполнен как <b>{isAuthenticated ? user?.role : "гость"}</b>.
                  Добавление клиентов доступно только администратору.
                  <div style={{ marginTop: 10, opacity: 0.8 }}>
                    Для демо admin: <b>admin@demo.com</b>
                  </div>
                </div>
              )}
            </div>

            <div className="client-table-container">
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Paper elevation={1}>
                  <Table clients={clients} delClient={delCli} />
                </Paper>
              </Box>
            </div>
          </Box>
        </div>
      )}
    </Box>
  );
};

export default TablePage;
