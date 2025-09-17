export const ListButton = () => {
  return (
    <div className="flex gap-2">
      <button className=" px-2 bg-gray-300 rounded-[5px]">All</button>
      <button className=" px-2 bg-gray-300 rounded-[5px]">Active</button>
      <button className=" px-2 bg-gray-300 rounded-[5px]">Completed</button>
    </div>
  );
};
