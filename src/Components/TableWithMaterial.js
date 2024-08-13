import MaterialTable from "@material-table/core";
import { Grid, TextField } from "@mui/material";
import { useState } from "react";

export default function TableWithMaterial() {
  const [sumaTotal, setSumaTotal] = useState(0);
  const [tableData, setTableData] = useState([
    { productName: "Producto A", price: 100, quantity: 1, total: 0 },
    { productName: "Producto B", price: 200, quantity: 1, total: 0 },
    { productName: "Producto C", price: 300, quantity: 1, total: 0 },
  ]);

  const handleRowUpdate = (newData, oldData, resolve) => {
    const dataUpdate = [...tableData];
    const index = oldData.tableData.id;
    dataUpdate[index] = newData;

    // console.log(`Se ha editado ${index} el nuevo es ${dataUpdate[index].quantity}`);

    let dataProduct = dataUpdate[index];

    let totalValue = dataProduct.price * dataProduct.quantity;

    dataProduct.total = totalValue;

    let suma = 0;

    dataUpdate.map((item) => {
      suma += item.total;
    });

    setSumaTotal(suma);

    setTableData([...dataUpdate]);
    resolve();
  };

  return (
    <Grid container>
      <MaterialTable
        title="Lista de Productos"
        columns={[
          { title: "Nombre del Producto", field: "productName" },
          { title: "Precio", field: "price", type: "numeric" },
          {
            title: "Cantidad",
            field: "quantity",
            editComponent: (props) => (
              <TextField
                value={props.value || ""}
                onChange={(e) => props.onChange(e.target.value)}
                type="number"
              />
            ),
          },
          {
            title: "Total",
            field: "total",
            type: "numeric",
            editable: "never",
          },
        ]}
        data={tableData}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              handleRowUpdate(newData, oldData, resolve);
            }),
        }}
      />

      <Grid item sx={{ marginTop: 2 }}>
        Suma total:
        <TextField value={sumaTotal} />
      </Grid>
    </Grid>
  );
}
