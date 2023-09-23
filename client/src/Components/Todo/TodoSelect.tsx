import Menu, { MenuList, MenuTitle } from "../../rickziUi/Menu";

function TodoSelect() {
  const sortingList = [
    { id: 1, label: "All" },
    { id: 2, label: "A-Z" },
    { id: 3, label: "Z-A" },
    { id: 4, label: "Date" },
    { id: 5, label: "Time" },
  ];
  const FilterList = [
    { id: 6, label: "All" },
    { id: 7, label: "High" },
    { id: 8, label: "Low" },
    { id: 9, label: "Medium" },
  ];
  const StatusList = [
    { id: 123, label: "All" },
    { id: 9, label: "Pending" },
    { id: 1222, label: "Completed" },
    { id: 4434, label: "Uncompleted" },
  ];
  return (
    <div className="todo-select">
      <div className="left">
        <Menu key={"sort"}>
          <MenuTitle />
          <MenuList width={"300px"} data={sortingList} />
        </Menu>
        <Menu key={"filter"}>
          <MenuTitle />
          <MenuList width={"300px"} data={FilterList} />
        </Menu>
        <Menu key={"status"}>
          <MenuTitle />
          <MenuList width={"300px"} data={StatusList} />
        </Menu>
      </div>
    </div>
  );
}

export default TodoSelect;
