export default function ItemCounter({ count }) {
  if (count === 0) {
    return null;
  }

  return (
    <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
      <p className="text-center text-gray-700">
        <span className="font-semibold">{count}</span> item
        {count !== 1 ? "s" : ""} in your list
      </p>
    </div>
  );
}
