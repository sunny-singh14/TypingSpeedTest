import { useEffect, useRef, useState } from "react";
import { Passage } from "./Passage";
import { TextBox } from "./TextBox";
import { CommonUtils } from "../util/CommonUtils";

export const Body = ({ setWpm, setAccuracy }) => {
  const [passedText, setPassedText] = useState("");
  const [remainingText, setRemainingText] = useState("");
  const fullText =
    "Being human makes us susceptible to the onset of feelings. The role of these emotions varies. Some of them are useful while others may be harmful. The use of social media for self-expression has reached a point that it makes us feel we can say anything. This begins when we see people expressing anything and everything that come to mind. When we see everyone else voicing their likes and dislikes, their irritations and desires we tend to imitate what they do. And because many engage in this, we think that it is normal and healthy. However, when we get used to unbridled self-expression, we come to believe that all feelings are valid. We become convinced that in real life, we should also act on our emotions and our impulses. Using social media this way erodes our ability to regulate our actions and reactions.";
  const startTime = useRef(0);

  useEffect(() => {
    setRemainingText(fullText);
  }, []);

  const handleUserInput = (e) => {
    const text = e.target.value;
    calculateSpeed(text);
    if (
      fullText.substring(0, text.length).toLowerCase() === text.toLowerCase()
    ) {
      setPassedText(fullText.substring(0, text.length));
      setRemainingText(fullText.substring(text.length, fullText.length));
    }
    calculateAccuracy(text);
  };

  const calculateSpeed = (text) => {
    if (startTime.current === 0) startTime.current = new Date().getTime();
    const ellapsedTime = (new Date().getTime() - startTime.current) / 60000;
    const words = text.split(/\s+/).filter(function (word) {
      return word.length > 0;
    });
    const numOfWords = words.length;
    const wpm = (numOfWords / ellapsedTime).toFixed(0);
    setWpm(wpm);
  };

  const calculateAccuracy = (text) => {
    const typedTextLength = text.length;
    if (typedTextLength === 0) {
      setAccuracy(0);
      return;
    }

    let matchingCharacters = 0;
    for (let i = 0; i < typedTextLength; i++) {
      if (fullText[i] === text[i]) {
        matchingCharacters++;
      }
    }

    setAccuracy(((matchingCharacters / typedTextLength) * 100).toFixed(0));
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
          {CommonUtils.getOperatingSystem() === "macOS"
            ? " Command + R "
            : " Ctrl + R "}
          to reset
        </p>
      </div>
    </section>
  );
};
