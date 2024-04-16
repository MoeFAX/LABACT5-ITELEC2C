function Footer({ items }) {
  let completedItem = items.filter((item) => item.isChecked).length;
  const totalItems = items.length;
  const percentageChecked =
    totalItems > 0 ? (completedItem / totalItems) * 100 : 0;
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <p>
        You have {items.length} items in your list, and you already completed{" "}
        {completedItem}
        {}
        <div className="percent">
          List Checked: {percentageChecked.toFixed(2)}%
        </div>
      </p>
    </div>
  );
}

export default Footer;
