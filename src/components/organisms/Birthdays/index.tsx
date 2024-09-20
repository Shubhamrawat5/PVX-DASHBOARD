import { TableCustom } from "@/components/molecules/TableCustom";

export default function Birthdays() {
  const columnsName = [
    {
      name: "ID",
      mapper: "id",
    },
    { name: "Name", mapper: "name" },
    { name: "Username", mapper: "username" },
    { name: "Date", mapper: "date" },
    { name: "Month", mapper: "month" },
    { name: "Year", mapper: "year" },
    { name: "Place", mapper: "place" },
  ];

  const columnsData = [
    {
      id: "1",
      name: "abc",
      usename: "xyz",
      date: "10",
      month: "3",
      year: "1998",
      place: "India",
    },
    {
      id: "2",
      name: "abc",
      usename: "xyz",
      date: "10",
      month: "3",
      year: "1998",
      place: "India",
    },
    {
      id: "3",
      name: "abc",
      usename: "xyz",
      date: "10",
      month: "3",
      year: "1998",
      place: "India",
    },
    {
      id: "4",
      name: "abc",
      usename: "xyz",
      date: "10",
      month: "3",
      year: "1998",
      place: "India",
    },
    {
      id: "5",
      name: "abc",
      usename: "xyz",
      date: "10",
      month: "3",
      year: "1998",
      place: "India",
    },
  ];

  return (
    <div>
      <TableCustom columnsName={columnsName} columnsData={columnsData} />
    </div>
  );
}
