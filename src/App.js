import Header from "./Header";
import Form from "./Form";
import ItemList from "./ItemList";
import Footer from "./Footer";
import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  const [sortBy, setSortBy] = useState("name");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "name")
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "checked")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.isChecked) - Number(b.isChecked));

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleClearItems() {
    const confirm = window.confirm("Are you sure you want to clear the items?");
    if (confirm) {
      setItems([]);
    }
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleCheckedItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  }
  return (
    <div className="container">
      <Header />
      <Form onAddItem={handleAddItems} />
      <ItemList
        items={sortedItems}
        onDelete={handleDeleteItem}
        onCheckedItem={handleCheckedItems}
      />
      <div className="centerclear">
        <button className="Clear" onClick={handleClearItems}>
          Clear
        </button>
        <br />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input</option>
          <option value="name">Sort by Name</option>
          <option value="checked">Sort by Check Order</option>
        </select>
      </div>
      <Footer items={items} />
    </div>
  );
}

export default App;
