import Item from "./Item";
function ItemList({ items, onDelete, onCheckedItem }) {
  //const item = [
  //{ id: 1, quantity: "1", name: "milk", isChecked: false },
  //{ id: 1, quantity: "2", name: "coffee", isChecked: false },
  //{ id: 1, quantity: "3", name: "sugar", isChecked: false },
  //];
  console.log(items);
  return (
    <div id="myUnordList">
      <ul className="todo-list">
        {items.map((item) => (
          <Item
            itemList={item}
            key={item.name}
            onDelete={onDelete}
            onCheckedItem={onCheckedItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
