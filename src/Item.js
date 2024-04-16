import { useState } from "react";
import ItemList from "./ItemList";

function Item({ itemList, onDelete, onCheckedItem }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleDeleteItem = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete the item?"
    );
    if (confirmDelete) {
      onDelete(itemList.id);
    }
  };

  return (
    <div className="item-card">
      <div className="item">
        <li className="todo-item">
          {itemList.quantity + " " + itemList.name}
          <button className="Delete" onClick={handleDeleteItem}>
            delete
          </button>

          <input
            type="checkbox"
            value={isChecked}
            onChange={() => onCheckedItem(itemList.id)}
          />
        </li>
      </div>
    </div>
  );
}

export default Item;
