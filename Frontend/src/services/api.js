import axios from "axios";

// Basis-URL für das Backend
const API_BASE_URL = "http://localhost:8000";

// Axios-Instanz erstellen
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// API-Services
export default {
  // DB-Test Endpoint
  testDatabase() {
    return apiClient.get("/dbtest");
  },

  // User erstellen
  createUser(userData) {
    return apiClient.post("/users", userData);
  },

  // Weitere API-Calls können hier hinzugefügt werden
  // z.B.:
  // getItems() {
  //   return apiClient.get('/items');
  // },
};
