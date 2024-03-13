import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";

//components
import Header from "../header/header";
import Card from "../ui/card";

//redux
import { statics } from "../../redux/dashboard/dashboardActions";

//utils
import isAuth from "../../utils/isAuth";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.users);
  const { clientsCount, carsCount, expenses, income, clients } = useSelector(
    (state) => state.dashboard
  );
  const [records, setRecords] = useState([]);

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    isAuth(dispatch);
    dispatch(statics());
  }, []);

  useEffect(() => {
    if (clients) {
      const mappedRecords = clients.map((client) => {
        return {
          key: client.client_id,
          id: client.client_id,
          clientname: client.clientName,
          clientnumber: client.clientNumber,
          rentingCount: client.rentingCount,
          rentingNow: client.rentingNow ? "yes" : "no",
          created_at:
            client.created_at.split("T")[0] +
            " " +
            client.created_at.split("T")[1].split(".")[0],
        };
      });
      setRecords(mappedRecords);
    }
  }, [clients]);

  const columns = [
    {
      field: "clientname",
      headerName: "Client name",
      flex: 1,
      className: "centerText",
      align: "left",
      sortable: true,
    },
    {
      field: "clientnumber",
      headerName: "Client number",
      flex: 1,
      className: "centerText",
      align: "left",
      sortable: true,
    },
    {
      field: "rentingCount",
      headerName: "Count of rentals",
      flex: 1,
      className: "centerText",
      align: "left",
      sortable: true,
    },
    {
      field: "rentingNow",
      headerName: "Renting status",
      flex: 1,
      className: "centerText",
      align: "left",
      sortable: true,
    },
    {
      field: "created_at",
      headerName: "Created At",
      flex: 1,
      className: "centerText",
      align: "left",
      sortable: true,
    },
    {
      field: " ",
      flex: 1,
      width: 100,
      className: "centerText action",
      sortable: false,
      renderCell: (data) => {
        return (
          <Fragment>
            <button
              className="btn btn-info"
              onClick={() => {
                navigate("/Detail/" + data.id);
              }}
            >
              <i className="bi bi-info-circle"></i>
            </button>
          </Fragment>
        );
      },
    },
  ];

  return (
    <>
      <Header />
      <Card icon="bi bi-people" title="Clients Count">
        {clientsCount}
      </Card>
      <Card icon="bi bi-car-front" title="Cars Count">
        {carsCount}
      </Card>
      <Card icon="bi bi-cash" title="Expenses">
        {expenses}
      </Card>
      <Card icon="bi bi-cash-stack" title="Income">
        {income}
      </Card>
      <br></br>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <DataGrid
          className="table"
          rows={records}
          rowsPerPageOptions={[5, 25, 50]}
          columns={columns}
        />
      </div>
    </>
  );
}

export default Dashboard;
