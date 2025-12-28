import { http } from "./http";

const ClientAPI = {
  all: async () => {
    const res = await http.get("/clients");
    return res.data;
  },

  add: async (client) => {
    const payload = { ...client, id: client.id ?? Date.now().toString() };
    const res = await http.post("/clients", payload);
    return res.data;
  },

  delete: async (id) => {
    await http.delete(`/clients/${id}`);
    return true;
  },
};

export default ClientAPI;