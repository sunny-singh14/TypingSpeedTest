export const TextBox = ({ handleInput, disabled }) => {
  return (
    <div className="w-full py-2">
      <textarea
        onPaste={(e) => {
          e.preventDefault();
        }}
        name="user-input"
        id="01"
        rows="10"
        className="p-1 w-full rounded-md border-2 resize-none shadow-sm outline-none"
        onChange={handleInput}
        disabled={disabled}
      ></textarea>
    </div>
  );
};
