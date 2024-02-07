export const Header = ({ wpm, accuracy }) => {
  return (
    <header className="py-5 border-b flex justify-between font-extrabold text-2xl">
      <div>
        <h1>Typing Speed Test</h1>
      </div>
      <div className="flex">
        <h1>
          Speed:{" "}
          <span
            className={
              wpm > 35
                ? "text-green-600"
                : wpm > 25
                ? "text-green-800"
                : wpm > 15
                ? ""
                : "text-red-600"
            }
          >
            {wpm}
          </span>{" "}
          wpm
        </h1>
        <span className="text-xl px-4">|</span>
        <h1>
          Accuracy:{" "}
          <span
            className={
              accuracy > 90
                ? "text-green-600"
                : wpm > 75
                ? "text-green-800"
                : wpm > 55
                ? ""
                : "text-red-600"
            }
          >
            {accuracy}
          </span>
          %
        </h1>
      </div>
    </header>
  );
};
