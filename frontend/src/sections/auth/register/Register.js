import React, { useState, useEffect } from "react";
import { Navigate, Link as RouterLink, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Header from "../../../layout/Header";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../../../redux/auth/authSlice";

export default function Register() {
  const navigate = useNavigate();
  const { isError, isSuccess, isLoading, user, message } = useSelector(
    (state) => state?.user
  );


  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(state));
  };

  useEffect(() => {
      if (isError) {
        setTimeout(() => {
            alert(message)
        }, 1000)          
        navigate('/')
      }
      if (isSuccess) {
          setTimeout(() => {
              alert('User registered Successfully')
          }, 1000)

      }

      dispatch(reset())
  }, [isError, isSuccess, dispatch])

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" align="center" gutterBottom>
            Register
          </Typography>
          <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="Name"
                name="name"
                fullWidth
                required
                value={state.name}
                onChange={handleChange}
              />
              <TextField
                label="Email"
                name="email"
                fullWidth
                required
                value={state.email}
                onChange={handleChange}
              />
              <TextField
                type="password"
                name="password"
                label="Password"
                password={state.password}
                fullWidth
                required
                onChange={handleChange}
              />
              <Button variant="contained" size="large" fullWidth type="submit">
                Register
              </Button>
            </Stack>
          </Box>
          <Typography variant="body1" align="center" sx={{ mt: 3 }}>
            Already have an account?{" "}
            <RouterLink to="/login">Login here</RouterLink>
          </Typography>
        </Container>
      </Box>
    </>
  );
}
