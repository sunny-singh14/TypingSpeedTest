import { useState } from "react";
import { Logo } from "./Logo";
import { Stats } from "./Stats";

export const Header = ({ wpm, accuracy }) => {
  const [strictAccuracy] = useState(true);
  
  return (
    <header className="py-5 border-b flex justify-between font-extrabold text-2xl">
      <Logo />
      <Stats wpm={wpm} accuracy={strictAccuracy ? null : accuracy} />
    </header>
  );
};
