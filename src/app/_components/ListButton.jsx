export const ListButton = ({ filter, setFilter }) => {
  const base =
    "px-3 py-1 rounded-[5px] cursor-pointer transition-colors duration-150";
  const isActive = (type) =>
    filter === type ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-800";
  return (
    <div className="flex gap-2">
      <button
        onClick={() => setFilter("all")}
        className={`${base} ${isActive("all")}`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={`${base} ${isActive("active")}`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`${base} ${isActive("completed")}`}
      >
        Completed
      </button>
    </div>
  );
};
