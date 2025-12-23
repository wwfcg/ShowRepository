import "./App.css";
import Home from "./components/home/home.js";
import Products from "./components/products/products.js";
import TablePage from "./components/tablePage/tablePage.js";
import About from "./components/about/about.js";
import { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./store/themeSlice";
import { logout } from "./store/authSlice";
import AuthModal from "./components/auth/AuthModal";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

function App() {
  const dispatch = useDispatch();

  const themeMode = useSelector((state) => state.theme.mode);
  const { isAuthenticated, user } = useSelector((s) => s.auth);

  const [authOpen, setAuthOpen] = useState(false);

  // CSS тема (для твоих обычных стилей)
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeMode);
  }, [themeMode]);

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
        shape: { borderRadius: 16 },
      }),
    [themeMode]
  );

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <nav className="navbar">
            <div className="nav-container">
              <h1 className="nav-logo">Client Manager</h1>

              <ul className="nav-menu">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Главная</Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link">Товары</Link>
                </li>
                <li className="nav-item">
                  <Link to="/table" className="nav-link">Таблица клиентов</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">О нас</Link>
                </li>
              </ul>

              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                {isAuthenticated ? (
                  <>
                    <span style={{ color: "var(--navbar-text)", fontSize: 14, opacity: 0.9 }}>
                      {user?.role === "admin" ? "Admin" : "User"}: {user?.email}
                    </span>
                    <button className="theme-toggle-btn" onClick={() => dispatch(logout())}>
                      Выйти
                    </button>
                  </>
                ) : (
                  <button className="theme-toggle-btn" onClick={() => setAuthOpen(true)}>
                    Войти
                  </button>
                )}

                <button className="theme-toggle-btn" onClick={() => dispatch(toggleTheme())}>
                  {themeMode === "dark" ? "☀️" : "🌙"}
                </button>
              </div>
            </div>
          </nav>

          <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/table" element={<TablePage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
