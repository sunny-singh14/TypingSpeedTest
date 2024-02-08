export const Passage = ({ typedText, remainingText }) => {
  return (
    <div className="w-full py-4 font-medium text-lg text-justify select-none">
      <span className="text-gray-400">{typedText}</span>
      <span>{remainingText}</span>
    </div>
  );
};
