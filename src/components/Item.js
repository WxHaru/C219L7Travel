import React from "react";

function Item({ item, onDeleteItem, onTogglePacked }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onTogglePacked(item.id)}
      />
      <span
        style={{
          textDecoration: item.packed ? "line-through" : "none",
        }}
      >
        {item.quantity} x {item.description}
      </span>
      {}
      <button onClick={() => onDeleteItem(item.id)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        🗑️
      </button>
    </li>
  );
}

export default Item;