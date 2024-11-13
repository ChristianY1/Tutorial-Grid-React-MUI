import { Grid } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

function HeaderLogin(props) {

    const headerStyle = {
        border: "1px solid red",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "red",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000 // Asegura que el header esté por encima de otros elementos
    }

    return(
        <Grid item md={12} style={headerStyle}>
            HeaderLogin
        </Grid>
    );
}

export default HeaderLogin;