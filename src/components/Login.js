import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../api/firebase";
import { AuthContext } from "../context/Auth";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid
} from "@material-ui/core";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      console.log(email, password);
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
	const styles = {
		cont:{
			marginTop: '15%'
		},
		header:{
			textAlign: 'center',
			margin: '30px 0'
		},
		mxa:{
			margin: '0 auto'
		},
		form:{
			display:'flex',
			flexDirection: 'column',
			paddingBottom: '30px'
		},
		inp:{
			width: '100%',
			marginBottom: '30px'
		}
		}
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }
 
  return (
    <Container maxWidth="sm" style={styles.cont}>
      <Paper>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" style={styles.header}>Log in</Typography>
          </Grid>
					<Grid item sm={6} style={styles.mxa}>
          <form onSubmit={handleLogin} style={styles.form}>
            <label>
              <TextField name="email" type="email" label="Email" style={styles.inp}/>
            </label>
            <label>
              <TextField name="password" type="password" label="Password" style={styles.inp}/>
            </label>
            <Button type="submit" variant="contained" color="secondary">
              Log in
            </Button>
          </form>
					</Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default withRouter(Login);
