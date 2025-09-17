export const List = (props) => {
  const { todo, listDelete } = props;
  return (
    <div className="flex justify-between border-1 px-2 rounded-[5px] border-gray-300">
      <div className="flex gap-2">
        <input type="checkbox" />
        <p>{todo.element}</p>
      </div>

      <p
        onClick={() => {
          listDelete(todo.id);
        }}
        className="text-red-500 cursor-pointer"
      >
        Delete
      </p>
    </div>
  );
};
