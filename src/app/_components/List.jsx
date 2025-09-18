export const List = (props) => {
  const { todo, listDelete, completed } = props;
  return (
    <div className="flex justify-between border-1 px-4 py-3 rounded-[5px] border-gray-300">
      <div className="flex gap-2">
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={() => completed(todo.id)}
        />
        <p>{todo.element}</p>
      </div>

      <p
        onClick={() => {
          listDelete(todo.id);
        }}
        className="text-red-500 active:text-red-300 cursor-pointer"
      >
        Delete
      </p>
    </div>
  );
};
