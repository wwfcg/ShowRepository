import './App.css';
import ClientAPI from "./api/services";
import Table from "./Table";
import Form from "./Form";
import { useState } from "react";

const initialClients = ClientAPI.all();

function App() {
  const [clients, setClients] = useState(initialClients);
  const [editingClient, setEditingClient] = useState(null);

  const delCli = (id) => {
    ClientAPI.delete(id);
    setClients([...ClientAPI.all()]);
  };

  const addClient = (client) => {
    const newClient = ClientAPI.add(client);
      setClients([...clients, newClient]);
  }

  const startEditClient = (client) => {
    setEditingClient(client);
  };

  const updateClient = (updatedClient) => {

    if (ClientAPI.update(updatedClient)) {
      setClients(clients.map(client =>
        client.id === updatedClient.id ? updatedClient : client
      ));
      setEditingClient(null);
    }
  }

  const cancelEdit = () => {
    setEditingClient(null);
  }

  return (
    <div className="App" style={{
      display: 'flex',
      gap: '30px',
      padding: '20px',
      margin: '0 auto',
      maxWidth: '12000px'
    }}>
      <Form handleSubmit={editingClient ? updateClient : addClient} 
      inClient={{name: "", surname: "", phone: ""}} 
      isEditing={!!editingClient} 
      onCancel={editingClient ? cancelEdit : null}
      />
      <Table 
      clients={clients} 
      delClient={delCli}
      editClient={startEditClient}
      />
    </div>
  );
}

export default App;
