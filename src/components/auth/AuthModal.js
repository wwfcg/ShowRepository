import React, { useMemo, useState } from "react";
import {Dialog,DialogTitle,DialogContent,DialogActions,Button,TextField,Alert,Stack,} from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";

const isValidEmail = (value) => {
  // достаточно строгая проверка для UI
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value);
};

export default function AuthModal({ open, onClose }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });
  const [error, setError] = useState("");

  const emailError = useMemo(() => {
    if (!touched.email) return "";
    if (!email.trim()) return "Email обязателен";
    if (!isValidEmail(email.trim())) return "Некорректный email";
    return "";
  }, [email, touched.email]);

  const passwordError = useMemo(() => {
    if (!touched.password) return "";
    if (!password) return "Пароль обязателен";
    if (password.length < 6) return "Минимум 6 символов";
    return "";
  }, [password, touched.password]);

  const canSubmit = !emailError && !passwordError && email.trim() && password;

  const handleSubmit = () => {
    setError("");
    if (!canSubmit) {
      setTouched({ email: true, password: true });
      return;
    }

    // демо-логин: пароль не проверяем по базе, только валидируем
    dispatch(login({ email }));
    onClose();
    setEmail("");
    setPassword("");
    setTouched({ email: false, password: false });
  };

  const handleClose = () => {
    onClose();
    setError("");
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
      <DialogTitle>Вход</DialogTitle>

      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          {error ? <Alert severity="error">{error}</Alert> : null}

          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched((p) => ({ ...p, email: true }))}
            error={Boolean(emailError)}
            helperText={emailError || " "}
            autoComplete="email"
            fullWidth
          />

          <TextField
            label="Пароль"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setTouched((p) => ({ ...p, password: true }))}
            error={Boolean(passwordError)}
            helperText={passwordError || " "}
            autoComplete="current-password"
            fullWidth
          />

          <Alert severity="info">
            Демо: admin — <b>admin@demo.com</b> 
          </Alert>
        </Stack>
      </DialogContent>

      <DialogActions sx={{ p: 2, pt: 1 }}>
        <Button onClick={handleClose} variant="text">
          Отмена
        </Button>
        <Button onClick={handleSubmit} variant="contained" disabled={!canSubmit}>
          Войти
        </Button>
      </DialogActions>
    </Dialog>
  );
}
