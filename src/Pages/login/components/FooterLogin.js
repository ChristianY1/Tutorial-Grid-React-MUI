import { Grid } from "@mui/material";

function FooterLogin(props) {

    const footerStyle = {
        border: "1px solid blue",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "blue",
        position: 'fixed', //asegura que se mantenga al final de la pagina
        bottom: 0,        //asegura que se mantenga al final de la pagina
        width: '100%'
    };

    return (
        <Grid item md={12} style={footerStyle}>
            FooterLogin
        </Grid>
    )
    
}

export default FooterLogin;