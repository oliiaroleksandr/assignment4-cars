import { TableRow } from "@mui/material";
import { Project } from "./const";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TableCell from "@mui/material/TableCell";
import { MouseEvent, useState } from "react";

type Position = {
  mouseX: number;
  mouseY: number;
};

const MainTableRow = (project: Omit<Project, "id">) => {
  const [contextMenu, setContextMenu] = useState<Position | null>(null);

  const handleContextMenu = (event: MouseEvent<HTMLTableRowElement>) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : null
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  return (
    <TableRow
      onContextMenu={handleContextMenu}
      style={{ cursor: "context-menu" }}
    >
      <TableCell>{project.name}</TableCell>
      <TableCell>{project.status}</TableCell>
      <TableCell>{project.nextReview}</TableCell>
      <TableCell>{project.delivery}</TableCell>
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={handleClose}>Open</MenuItem>
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Duplicate</MenuItem>
        <MenuItem onClick={handleClose}>Download</MenuItem>
      </Menu>
    </TableRow>
  );
};

export default MainTableRow;
