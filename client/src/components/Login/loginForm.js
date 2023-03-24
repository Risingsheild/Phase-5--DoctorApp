import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { login } from "../../features/Users/userSlice";
import { useDispatch, useSelector } from "react-redux";


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
        dispatch(login(userData));
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
            <Button sx={{ m: 2 }} onClick={handleSubmit} variant="contained">
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
    <ul style={{ fontSize: "1.5rem", fontWeight: "bold", color: "red", background: "white"}}>{errors}</ul>
    </div>
);
}

export default LoginForm;