import { TableCustom } from "@/components/molecules/TableCustom";

export default function Groups() {
  const columnsName = [
    {
      name: "ID",
      mapper: "id",
    },
    { name: "Name", mapper: "name" },
    { name: "Link", mapper: "link" },
  ];

  const columnsData = [
    {
      id: "1",
      name: "COMMUNITY",
      link: "https://chat.whatsapp.com/J98k3LCByjC4GzwwxvZOBJ",
    },
    {
      id: "2",
      name: "COMMUNITY",
      link: "https://chat.whatsapp.com/J98k3LCByjC4GzwwxvZOBJ",
    },
    {
      id: "3",
      name: "COMMUNITY",
      link: "https://chat.whatsapp.com/J98k3LCByjC4GzwwxvZOBJ",
    },
    {
      id: "4",
      name: "COMMUNITY",
      link: "https://chat.whatsapp.com/J98k3LCByjC4GzwwxvZOBJ",
    },
    {
      id: "5",
      name: "COMMUNITY",
      link: "https://chat.whatsapp.com/J98k3LCByjC4GzwwxvZOBJ",
    },
  ];

  const handleEdit = (id: string) => {
    console.log(`Edit item with ID: ${id}`);
  };

  return (
    <div>
      <TableCustom
        columnsName={columnsName}
        columnsData={columnsData}
        onEdit={handleEdit}
        showEdit={true}
      />
    </div>
  );
}
