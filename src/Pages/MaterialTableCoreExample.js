import MaterialTable from "@material-table/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import '../styles/global.css'

const useStyles = makeStyles({
  actionColumn: {
    "&:nth-child(1)": {
      // Aplica el estilo al primer hijo (la columna de Actions)
      width: "70px !important",
      minWidth: "70px !important",
      textAlign: "center",
    },
  },
});

function MaterialTableCoreExample(params) {
  const classes = useStyles();
  const [data, setData] = useState([
    {
      name: "John",
      surname: "Doe",
      birthYear: 1985,
      birthCity: 63,
      email: "john.doe@example.com",
      phoneNumber: "123-456-7890",
      jobTitle: "Engineer",
      department: "Research",
      startDate: new Date("2015-04-20"),
    },
    {
      name: "Jane",
      surname: "Smith",
      birthYear: 1990,
      birthCity: 34,
      email: "jane.smith@example.com",
      phoneNumber: "098-765-4321",
      jobTitle: "Manager",
      department: "HR",
      startDate: new Date("2017-06-15"),
    },
    {
      name: "Albert",
      surname: "Johnson",
      birthYear: 1975,
      birthCity: 21,
      email: "albert.johnson@example.com",
      phoneNumber: "111-222-3333",
      jobTitle: "Developer",
      department: "IT",
      startDate: new Date("2012-01-10"),
    },
  ]);

  const columns = [
    { title: "Name", field: "name", width: "100px" },
    { title: "Surname", field: "surname", width: "150px" },
    {
      title: "Birth Year",
      field: "birthYear",
      type: "numeric",
      width: "100px",
    },
    {
      title: "Birth City",
      field: "birthCity",
      type: "numeric",
      width: "100px",
    },
    { title: "Email", field: "email", width: "300px" },
    { title: "Phone Number", field: "phoneNumber", width: "150px" },
    { title: "Job Title", field: "jobTitle", width: "150px" },
    { title: "Department", field: "department", width: "150px" },
    { title: "Start Date", field: "startDate", type: "date", width: "150px" },
  ];

  return (
    <MaterialTable
      title="Extended Editable Example"
      columns={columns}
      data={data}
      options={{
        tableLayout: "fixed",
        headerStyle: { whiteSpace: "nowrap" },
        search: false,
        actionsColumnIndex: 0,
        actionsCellStyle: {
          width: "100px", // Aumenta el ancho de la columna de acciones
          minWidth: "100px",
          padding: "8px",
          justifyContent: "center",
        },
      }}
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const updatedData = [...data];
              const index = oldData.tableData.id;
              updatedData[index] = newData;
              setData(updatedData);
              resolve();
            }, 600);
          }),
      }}
      style={{
        [`& th.${classes.actionColumn}`]: classes.actionColumn, // Aplica la clase de estilo
      }}
    />
  );
}

export default MaterialTableCoreExample;
