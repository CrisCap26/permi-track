// src/components/Table/TopContent.tsx
import React from "react";
import {
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import { ChevronDownIcon } from "../../assets/icons/ChevronDownIcon";
import { PlusIcon } from "../../assets/icons/PlusIcon";
import { capitalize } from "../../utils/utils";

interface TopContentProps {
  filterValue: string;
  onClear: () => void;
  onSearchChange: (value: string) => void;
  statusOptions: any[];
  statusFilter: Set<string>;
  setStatusFilter: (filter: Set<string>) => void;
  visibleColumns: Set<string>;
  setVisibleColumns: (columns: Set<string>) => void;
  onRowsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  totalUsers: number;
}

const TopContent: React.FC<TopContentProps> = ({
  filterValue,
  onClear,
  onSearchChange,
  statusOptions,
  statusFilter,
  setStatusFilter,
  visibleColumns,
  setVisibleColumns,
  onRowsPerPageChange,
  totalUsers,
}) => (
  <div className="flex flex-col gap-4">
    <div className="flex justify-between gap-3 items-end">
      <Input
        isClearable
        className="w-full sm:max-w-[44%]"
        placeholder="Search by name..."
        startContent={<SearchIcon />}
        value={filterValue}
        onClear={onClear}
        onValueChange={onSearchChange}
      />
      <div className="flex gap-3">
        <Dropdown>
          <DropdownTrigger className="hidden sm:flex">
            <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
              Status
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            disallowEmptySelection
            aria-label="Table Columns"
            closeOnSelect={false}
            selectedKeys={statusFilter}
            selectionMode="multiple"
            onSelectionChange={setStatusFilter}
          >
            {statusOptions.map((status) => (
              <DropdownItem key={status.uid} className="capitalize">
                {capitalize(status.name)}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownTrigger className="hidden sm:flex">
            <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
              Columns
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            disallowEmptySelection
            aria-label="Table Columns"
            closeOnSelect={false}
            selectedKeys={visibleColumns}
            selectionMode="multiple"
            onSelectionChange={setVisibleColumns}
          >
            {columns.map((column) => (
              <DropdownItem key={column.uid} className="capitalize">
                {capitalize(column.name)}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <Button color="primary" endContent={<PlusIcon />}>
          Nueva Incidencia
        </Button>
      </div>
    </div>
    <div className="flex justify-between items-center">
      <span className="text-default-400 text-small">Total {totalUsers} users</span>
      <label className="flex items-center text-default-400 text-small">
        Rows per page:
        <select className="bg-transparent outline-none text-default-400 text-small" onChange={onRowsPerPageChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </label>
    </div>
  </div>
);

export default TopContent;
