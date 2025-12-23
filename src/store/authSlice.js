import { createSlice } from "@reduxjs/toolkit";

const ADMIN_EMAILS = ["admin@demo.com"]; // можешь добавить ещё

const loadAuth = () => {
  try {
    const raw = localStorage.getItem("auth");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const saveAuth = (authState) => {
  localStorage.setItem(
    "auth",
    JSON.stringify({
      isAuthenticated: authState.isAuthenticated,
      user: authState.user,
    })
  );
};

const initialStored = loadAuth();

const initialState = initialStored ?? {
  isAuthenticated: false,
  user: null, // { email, role }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { email } = action.payload;
      const normalized = String(email || "").trim().toLowerCase();

      const role = ADMIN_EMAILS.includes(normalized) ? "admin" : "user";

      state.isAuthenticated = true;
      state.user = { email: normalized, role };

      saveAuth(state);
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      saveAuth(state);
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
