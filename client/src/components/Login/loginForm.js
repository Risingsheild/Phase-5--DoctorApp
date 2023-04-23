import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { login } from "../../features/Users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatients } from "../../features/Patient/patientSlice";

import {
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";


function LoginForm(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const errors = useSelector(state => state.users.errorMessages);
    const user = useSelector(state => state.users.entities)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const userData = {
        username: username,
        password: password,
        errors: " "
    }

    useEffect(() => {
      if(user && !user.errors){
        navigate('/');
        setUsername('');
        setPassword('');
      }
    }, [user, navigate]);

    function handleSubmit(e){
        e.preventDefault();
        dispatch(login(userData));
        dispatch(fetchPatients())
    }



return (
    <div className="login">
     
    <Container maxWidth="false" style={{ background: "white" }}>
      <Grid container>
        <Grid item xs={12} align="center" justify="center">
          <FormControl sx={{ m: 2 }}>
            <Typography
              justifySelf={"center"}
              style={{ fontSize: "2rem", fontWeight: "bold" }}
            >
              Login
            </Typography>
            <TextField
              sx={{ m: 2 }}
              required
              id="username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              label="Username"
            />
            <TextField
              sx={{ m: 2 }}
              required
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
            />
            <Button sx={{ ml: 10 }} onClick={handleSubmit} variant="contained">
              Login
            </Button>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} align="center" justify="center">
          <Button
            variant="contained"
            component={Link}
            to="/signup"
            align="center"
            justify="center"
          >
            Sign Up Instead
          </Button>
        </Grid>
      </Grid>
    </Container> 
    {errors?.map((err) => ( <h3 key={err}>{err}</h3>))}
    </div>
);
}

export default LoginForm;