// src/components/Table/Table.tsx
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  Pagination,
} from "@nextui-org/react";
import TopContent from "./TopContent";
import TableBodyContent from "./TableBodyContent";
import { useTable } from "../../hooks/useTable";

interface TableProps {
  users: any[];
  statusOptions: any[];
  columns: any[];
}

const MyTable: React.FC<TableProps> = ({ users, statusOptions, columns }) => {
  const {
    filterValue,
    selectedKeys,
    visibleColumns,
    statusFilter,
    rowsPerPage,
    sortDescriptor,
    page,
    items,
    sortedItems,
    renderCell,
    onNextPage,
    onPreviousPage,
    onRowsPerPageChange,
    onSearchChange,
    onClear,
    bottomContent,
  } = useTable(users, statusOptions, columns);

  return (
    <Table
      aria-label="Example table with custom cells, pagination and sorting"
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{ wrapper: "max-h-[382px]" }}
      selectedKeys={selectedKeys}
      selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      topContent={<TopContent 
        filterValue={filterValue}
        onClear={onClear}
        onSearchChange={onSearchChange}
        statusOptions={statusOptions}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        visibleColumns={visibleColumns}
        setVisibleColumns={setVisibleColumns}
        onRowsPerPageChange={onRowsPerPageChange}
        totalUsers={users.length}
      />}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBodyContent items={sortedItems} renderCell={renderCell} />
    </Table>
  );
};

export default MyTable;
