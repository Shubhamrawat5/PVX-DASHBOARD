import { Box, Button, TextField, Typography } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

// const styles = {
//   root: {
//     display: "flex",
//     minHeight: "100vh",
//   },
// };

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError("");
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError("");
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    console.log("Submit");

    if (username === "admin" && password === "admin") {
      console.log("Correct login details");
      navigate("/dashboard");
    } else {
      setError("wrong credentials!");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ textAlign: "center" }}
      >
        <Typography sx={{ marginBottom: "20px" }} variant="h4">
          PVX ADMIN PANEL
        </Typography>
        <Box sx={{ marginBottom: "15px" }}>
          <TextField
            sx={{ width: "300px" }}
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={username}
            required
            onChange={handleUsernameChange}
          />
        </Box>
        <Box sx={{ marginBottom: "15px" }}>
          <TextField
            sx={{ width: "300px" }}
            id="outlined-password-input"
            type="password"
            label="Password"
            variant="outlined"
            value={password}
            required
            onChange={handlePasswordChange}
          />
        </Box>
        <Typography sx={{ color: "red", marginBottom: "10px" }}>
          {error}
        </Typography>
        <Button
          sx={{ padding: "10px", width: "200px" }}
          variant="contained"
          type="submit"
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}
