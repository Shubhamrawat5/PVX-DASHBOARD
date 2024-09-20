import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "../ui/button";

interface Props {
  columnsName: {
    name: string;
    mapper: string;
  }[];
  columnsData: {
    id: string;
    [key: string]: string | number | boolean;
  }[];
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  showEdit?: boolean;
  showDelete?: boolean;
}

export function TableCustom(props: Props) {
  const { columnsData, columnsName, onEdit, onDelete, showEdit, showDelete } =
    props;

  const totalColumns = columnsName.length + (showEdit || showDelete ? 1 : 0);

  return (
    <Table className="overflow-hidden bg-secondary tr">
      <TableHeader>
        <TableRow className="border-border-color">
          {columnsName.map((columnName, index) => (
            <TableHead key={index}>{columnName.name}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {columnsData.map((columnData, columnIndex) => (
          <TableRow key={columnIndex} className="border-border-color">
            {Object.keys(columnData).map((column, index) => {
              return (
                <TableCell className="font-medium" key={index}>
                  {columnsData[columnIndex][column]}
                </TableCell>
              );
            })}
            {(showEdit || showDelete) && (
              <TableCell className="text-right">
                {showEdit && onEdit && (
                  <Button
                    onClick={() => onEdit(columnData.id)}
                    className="ml-6"
                  >
                    Edit
                  </Button>
                )}
                {showDelete && onDelete && (
                  <Button
                    onClick={() => onDelete(columnData.id)}
                    className="ml-6"
                  >
                    Delete
                  </Button>
                )}
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className="border-none bg-primary">
        <TableRow className="border-border-color">
          <TableCell colSpan={totalColumns}>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
