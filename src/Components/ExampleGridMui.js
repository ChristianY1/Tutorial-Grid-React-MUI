import { Box, Button, Grid, TextField } from "@mui/material";

export default function ExampleGridMui() {
  return (
    <Grid container>
      <Grid item sm={2} lg={1}>
        <Box>Fecha:</Box>
      </Grid>
      <Grid item sm={10} lg={11}>
        <Box>
          <TextField
            className="customTextField"
            InputProps={{
              classes: {
                root: "customInputRoot",
                input: "customInput",
              },
            }}
          />
        </Box>
      </Grid>

      <Grid item sm={2} lg={1}>
        <Box>Moneda:</Box>
      </Grid>

      <Grid item sm={3} lg={1.5}>
        <Box>
          <TextField
            className="customTextField"
            InputProps={{
              classes: {
                root: "customInputRoot",
                input: "customInput",
              },
            }}
          />
        </Box>
      </Grid>
      <Grid sm={6}>
        <Box>Dolares</Box>
      </Grid>

      <Grid sm={12} sx={{ marginTop: 4 }}>
        <Box>
          <h2>Valores de la transaccion</h2>
        </Box>
      </Grid>

      <Grid sm={2} lg={1}>
        <Box>Valor efectivo:</Box>
      </Grid>

      <Grid sm={1}>
        <Box>
          <TextField
            className="customTextField2"
            InputProps={{
              classes: {
                root: "customInputRoot",
                input: "customInput",
              },
            }}
          />
        </Box>
      </Grid>

      <Grid sm={7} lg={10}>
        <Box>
          <Button variant="text">...</Button>
        </Box>
      </Grid>

      <Grid sm={2} lg={1}>
        <Box>Valor cheque:</Box>
      </Grid>

      <Grid sm={3} lg={1}>
        <Box>
          <TextField
            className="customTextField2"
            InputProps={{
              classes: {
                root: "customInputRoot",
                input: "customInput",
              },
            }}
          />
        </Box>
      </Grid>

      <Grid textAlign="left">
        <Button>...</Button>
      </Grid>
    </Grid>
  );
}
