export const ListButton = ({ filter, setFilter }) => {
  const base =
    "px-3 py-1 rounded-[5px] cursor-pointer transition-colors duration-150"; // all, active, completed button suuri style
  const isActive = (type) =>
    filter === type ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-800"; // ali towch songogdsonoos hamaarch ungu uurchlugduh function
  return (
    <div className="flex gap-2">
      <button
        onClick={() => setFilter("all")} // darahad filter state iig all bolgono
        className={`${base} ${isActive("all")}`}// ungo soligdono
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")} // darahad filter state active bolno
        className={`${base} ${isActive("active")}`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")} // darhad filter state completed bolno
        className={`${base} ${isActive("completed")}`}
      >
        Completed
      </button>
    </div>
  );
};
