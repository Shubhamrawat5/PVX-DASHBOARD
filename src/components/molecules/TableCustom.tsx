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

interface Props {
  columnsName: {
    name: string;
    mapper: string;
  }[];
  columnsData: {
    [key: string]: string | number;
  }[];
}

export function TableCustom(props: Props) {
  const { columnsData, columnsName } = props;

  return (
    <Table className="overflow-hidden bg-secondary">
      <TableHeader>
        <TableRow>
          {columnsName.map((columnName, index) => (
            <TableHead key={index}>{columnName.name}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {columnsData.map((columnData, columnIndex) => (
          <TableRow key={columnData.id}>
            {Object.keys(columnData).map((column, index) => {
              return (
                <TableCell className="font-medium" key={index}>
                  {columnsData[columnIndex][column]}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={columnsName.length}>
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
