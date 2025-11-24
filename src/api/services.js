const ClientAPI = { 
  all: () => {
    const clients = JSON.parse(localStorage.getItem('clients') || '[]');
    return clients;
  },
  
  add: (client) => {
    const clients = ClientAPI.all();
    if (!client.id) {
      client.id = Date.now().toString(); 
    }
    clients.push(client);
    localStorage.setItem('clients', JSON.stringify(clients)); 
    return client;
  },
  
  delete: (id) => {
    let clients = ClientAPI.all();
    const initialLength = clients.length;
    clients = clients.filter(client => client.id !== id); 
    localStorage.setItem('clients', JSON.stringify(clients));
    return clients.length < initialLength; 
  },
  };

export default ClientAPI;