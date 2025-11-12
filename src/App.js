import './App.css';
import ClientAPI from "./api/services";
import Table from "./Table";
import Form from "./Form";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './navbar';
import Login from './login';
import { useState } from "react";

const initialClients = ClientAPI.all();

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [clients, setClients] = useState(initialClients);
  

  const delCli = (id) => {
    if (ClientAPI.delete(id)) {
      setClients(clients.filter((client) => client.id !== id));
    }
  };

  const addClient = (client) => {
    
      const newClient = ClientAPI.add(client);
      if(newClient) {
        setClients([...clients, newClient]);
      }
    
    };

  return (
    <div className="App">
      <Form handleSubmit={addClient} 
      inClient={{name: "", surname: "", phone: ""}}
      />
      <Table clients={clients}
      delClient={delCli}
      />
      <Route>
        <Navbar />

        <Routes>
          <Route path="/login" element={
             <Login />
          } />
          
          <Route path="/" element={
            isAuthenticated ? 
            <Navigate to="/dashboard" replace /> : 
            <Navigate to="/login" replace />
          } />
        </Routes>
      </Route>
    </div>
  );
}

export default App;
