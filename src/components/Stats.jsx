export const Stats = ({ wpm, accuracy }) => {
  return (
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
          {wpm.toFixed(0)}
        </span>{" "}
        wpm
      </h1>
      {(accuracy !== null && accuracy !== "undefined") && (
        <>
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
              {accuracy.toFixed(0)}
            </span>
            %
          </h1>
        </>
      )}
    </div>
  );
};
