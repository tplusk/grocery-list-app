export default function ItemCounter({ count }) {
  if (count === 0) {
    return null;
  }

  return (
    <div>
      <p>
        <span className="font-semibold">{count}</span>item
        {count !== 1 ? "s" : ""} in your list
      </p>
    </div>
  );
}
