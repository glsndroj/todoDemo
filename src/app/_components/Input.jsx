export const Input = (props) => {
  const { input, setInput } = props;
  return (
    <>
      <div className="flex flex-col items-center gap-8">
        <div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Please enter task..."
            className=" px-2 w-[200px] h-[30px] border-[1px] border-gray-300 rounded-[4px]"
            type="text"
          />
        </div>
      </div>
    </>
  );
};
