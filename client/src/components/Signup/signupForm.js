import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from "../../features/Users/userSlice";
import {
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";


function SignupForm(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.users.entities);
    const errors = useSelector(state => state.users.errorMessages);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const userData = {
      username: username,
      password: password,
      errors: null
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
    dispatch(signup(userData));
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
              SignUp Here
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
              SignUp
            </Button>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} align="center" justify="center">
          <Button
            variant="contained"
            component={Link}
            to="/login"
            align="center"
            justify="center"
          >
            Login Instead
          </Button>
        </Grid>
      </Grid>
    </Container> 
    {errors?.map((err) => ( <h3 key={err}>{err}</h3>))}
    </div>
  );
}

export default SignupForm