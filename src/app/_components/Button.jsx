export const Button = (props) => {
  const { setInput, addElement, input } = props;
  return (
    <button
      onClick={() => {
        setInput(""), addElement(input);
      }}
      className=" cursor-pointer w-[50px] h-[30px] active:bg-blue-400 bg-blue-600 text-white rounded-[5px]"
    >
      Add
    </button>
  );
};
