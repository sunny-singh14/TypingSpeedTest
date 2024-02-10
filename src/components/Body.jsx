import { useEffect, useRef, useState } from "react";
import { Passage } from "./Passage";
import { TextBox } from "./TextBox";
import { CommonUtils } from "../util/CommonUtils";
import { DataUtils } from "../util/DataUtils";

export const Body = ({ setWpm, setAccuracy }) => {
  const [passedText, setPassedText] = useState("");
  const [remainingText, setRemainingText] = useState("");
  const fullText = useRef("");
  const startTime = useRef(0);

  useEffect(() => {
    fullText.current = DataUtils.getPassage()
    setRemainingText(fullText.current);
  }, []);

  const handleUserInput = (e) => {
    const text = e.target.value;
    const words = text.split(/\s+/);
    calculateSpeed(words);
    const coveredTextFromFullText = fullText.current.substring(0, text.length);
    if (coveredTextFromFullText === text) {
      setPassedText(coveredTextFromFullText);
      setRemainingText(fullText.current.substring(text.length, fullText.current.length));
    }
    calculateAccuracy(words);
  };

  const calculateSpeed = (words) => {
    if (startTime.current === 0) startTime.current = new Date().getTime();
    else {
      const ellapsedTime = (new Date().getTime() - startTime.current) / 60000;
      setWpm(words.length / ellapsedTime);
    }
  };

  const calculateAccuracy = (typedWords) => {
    if (typedWords.length === 0) {
      setAccuracy(0);
      return;
    }

    const allWords = fullText.current.split(/\s+/);
    let correctWords = 0;
    for (let i = 0; i < Math.min(typedWords.length, allWords.length); i++)
      if (allWords[i] === typedWords[i]) correctWords++;

    setAccuracy((correctWords / typedWords.length) * 100);
  };

  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center w-full md:w-4/5 lg:w-4/6 xl:w-1/2">
        <Passage typedText={passedText} remainingText={remainingText} />
        <TextBox
          handleInput={handleUserInput}
          disabled={remainingText.length === 0}
        />
        <p className="w-full text-right">
          Press
          <span className="font-bold">
            {CommonUtils.getOperatingSystem() === "macOS"
              ? " Command + R "
              : " Ctrl + R "}
          </span>
          to reset
        </p>
      </div>
      <div className="w-full fixed bottom-0 px-20 py-5">
        <a
          href="https://sunnyk.vercel.app/"
          className="text-blue-800 font-bold"
          target="_blank"
          rel="noreferrer"
        >
          &copy; Sunny Kumar
        </a>
      </div>
    </section>
  );
};
