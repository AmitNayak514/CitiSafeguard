"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";

export type LawColumn = {
  id: string;
  name: string;
  description: string;
  sections: string;
  fine: string;
  firstOffenseFine: string;
  category: string;
  applicableTo: string;
  createdAt: string;
};

export const columns: ColumnDef<LawColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "sections",
    header: "Sections",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "fine",
    header: "Fine",
  },
  {
    accessorKey: "firstOffenseFine",
    header: "First Offense Fine",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
