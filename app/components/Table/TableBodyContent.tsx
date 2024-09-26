// src/components/Table/TableBodyContent.tsx
import React from "react";
import { TableBody, TableRow, TableCell } from "@nextui-org/react";

interface TableBodyContentProps {
  items: any[];
  renderCell: (item: any, columnKey: string) => React.ReactNode;
}

const TableBodyContent: React.FC<TableBodyContentProps> = ({ items, renderCell }) => (
  <TableBody emptyContent={"No users found"} items={items}>
    {(item) => (
      <TableRow key={item.id}>
        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
      </TableRow>
    )}
  </TableBody>
);

export default TableBodyContent;
