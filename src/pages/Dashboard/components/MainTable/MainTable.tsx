import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { columns, projetcs } from "./const";
import MainTableRow from "./MainTableRow";

import classes from "./MainTable.module.scss";

const MainTable = () => {
  return (
    <TableContainer className={classes["main-table"]}>
      <Table aria-label="main table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column} color="GrayText">
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {projetcs.map((project) => (
            <MainTableRow key={project.id} {...project} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MainTable;
