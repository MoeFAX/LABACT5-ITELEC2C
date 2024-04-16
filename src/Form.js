import { useState } from "react";

function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    const newItem = { name, quantity, isChecked: false, id: Date.now() };
    console.log(newItem);
    setName("");
    setQuantity(1);
    onAddItem(newItem);
  }

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {/*<option>1</option>
          <option>2</option>
          <option>3</option>*/}
          {Array.from({ length: 20 }, (_, n) => n + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Add an item.."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="AddBtn">Add</button>
      </form>
    </div>
  );
}

export default Form;
