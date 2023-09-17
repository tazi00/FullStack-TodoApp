import Menu, { MenuList, MenuTitle } from "../../Ui/Menu";

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
    { id: 10, label: "Completed" },
    { id: 11, label: "Uncompleted" },
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
      </div>
    </div>
  );
}

export default TodoSelect;
