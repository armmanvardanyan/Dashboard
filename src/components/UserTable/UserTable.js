import React from "react";
import classes from "./UserTable.module.scss";
import { Table } from "react-bootstrap";

const TableComponent = () => {
  return (
    <Table responsive className={classes.Table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Profit($)</th>
          <th>Comission($)</th>
          <th>View</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1007</td>
          <td>Simona</td>
          <td>55</td>
          <td>Simona</td>
          <td>
            <i className="fa fa-table" aria-hidden="true" />
          </td>
        </tr>
        <tr>
          <td>1008</td>
          <td>Arianna</td>
          <td>45</td>
          <td>Adelina</td>
          <td>
            <i className="fa fa-table" aria-hidden="true" />
          </td>
        </tr>
        <tr>
          <td>1009</td>
          <td>Adam</td>
          <td>35</td>
          <td>Adam</td>
          <td>
            <i className="fa fa-table" aria-hidden="true" />
          </td>
        </tr>
        <tr>
          <td>1010</td>
          <td>Adam</td>
          <td>25</td>
          <td>Adam</td>
          <td>
            <i className="fa fa-table" aria-hidden="true" />
          </td>
        </tr>
        <tr>
          <td>1011</td>
          <td>Garry</td>
          <td>11</td>
          <td>Garry</td>
          <td>
            <i className="fa fa-table" aria-hidden="true" />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

const UserTable = () => {
  return (
    <div className={classes.UserTable}>
      <div className={classes.Top}>
        <div className={classes.Header}>Top Affiliates</div>
        <TableComponent />
      </div>
      <div className={classes.Signups}>
        <div className={classes.Header}>Signups</div>
        <TableComponent />
      </div>
      <div className={classes.Pending}>
        <div className={classes.Header}>Pending Commissions </div>
        <TableComponent />
      </div>
    </div>
  );
};

export default UserTable;
