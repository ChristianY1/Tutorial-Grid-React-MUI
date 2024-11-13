import { Box, Button, Grid, TextField } from "@mui/material";
import HeaderLogin from "./components/HeaderLogin";
import FooterLogin from "./components/FooterLogin";

export default function Login() {
  const loginStyle = {
    border: "1px solid black",
    padding: "auto",
    textAlign: "center",
    backgroundColor: "white",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const formStyle = {
    border: "1px solid green",
    borderRadius: "10px",
    textAlign: "center",
    padding: "20px",
    
  };

  const itemsForm = {
    margin: "2%",
  };

  return (
    <Grid container>
      <HeaderLogin />

      <Grid item md={12} sm={12} style={loginStyle}>
        <Grid container xs={12} sm={12} md={6} lg={4} xl={2} style={formStyle}>
          <Grid item md={12} sm={12} xs={12}>
            <TextField style={itemsForm} label="Tipo de documento" />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <TextField style={itemsForm} label="Ingrese DNI" />
          </Grid>

          <Button variant="contained" sx={{ margin: "0  auto" }}>
            Contained
          </Button>
        </Grid>
      </Grid>

      <FooterLogin />
    </Grid>
  );
}
