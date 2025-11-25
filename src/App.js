import './App.css';
import ClientAPI from "./api/services";
import Table from "./Table";
import Form from "./Form";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Box, Paper } from '@mui/material';


const initialClients = ClientAPI.all();

function App() {
  const [clients, setClients] = useState(initialClients);

  const addClient = (client) => {
    const newClient = ClientAPI.add(client);
    setClients([...clients, newClient]);
  }

  const delCli = (id) => {
    ClientAPI.delete(id);
    setClients([...ClientAPI.all()]);
  };

  // Компонент для главной страницы
  const Home = () => (
    <div className="home-page">
      <h1>Добро пожаловать в систему управления клиентами</h1>
      <p>Используйте навигационное меню для перехода между разделами</p>
    </div>
  );

  // Компонент для страницы товаров
  const Products = () => (
    <div className="products-page">
      <h1>Наши товары</h1>
      <p>Здесь будет список товаров</p>
      {/* Добавьте ваш компонент для товаров */}
    </div>
  );

  // Компонент для страницы таблицы
  const TablePage = () => (
    <Box sx={{ width: '100%' }}>
      <h1>Управление клиентами</h1>
      <div class='table-container'>
      <Box 
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '2rem',
          width: '100%'
        }}
      >
      <div class='form-container'>
        {/* Форма слева */}
        <Box>
          <Form 
            handleSubmit={addClient} 
            inClient={{name: "", surname: "", phone: ""}}
          />
        </Box>
      </div>

        <div class='client-table-container'>
        {/* Таблица справа */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Paper>
            <Table 
              clients={clients}
              delClient={delCli}
            />
          </Paper>
        </Box>
        </div>
      </Box>
      </div> 
    </Box>
  );

  // Компонент для страницы "О нас"
  const About = () => (
    <div className="about-page">
      <h1>О нашей компании</h1>
      <p>Мы занимаемся управлением клиентской базой с 2024 года.</p>
    </div>
  );

  return (
    <Router>
      <div className="App">
        {/* Навигационное меню */}
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
          </div>
        </nav>

        {/* Основной контент */}
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
  );
}

export default App;

