const ClientAPI = {
    all: () => {
      const clients = JSON.parse(localStorage.getItem('clients') || '[]');
      return clients;
    },
        add: (client) => {
      const clients = ClientAPI.all();
      clients.push(client);
      localStorage.setItem('Clients', JSON.stringify(clients));
      return client;
    },
  
    delete: (id) => {
      let clients = ClientAPI.all();
      clients = clients.filter(emp => emp.number !== id);
      localStorage.setItem('clients', JSON.stringify(clients));
    },
  
    update: (id, updatedClient) => {
      let clients = ClientAPI.all();
      const index = clients.findIndex(emp => emp.number === id);
      
      if (index !== -1) {
        clients[index] = { ...clients[index], ...updatedClient };
        localStorage.setItem('clients', JSON.stringify(clients));
        return clients[index];
      }
      return null;
    }
  };
export default ClientAPI;