import React from "react";
import { faker } from "@faker-js/faker";

const words = faker.random.words(10);

const App = () => {
  return (
    <>
      <CountdownTimer timeLeft={30} />
      <GenerateWords words={words} />;
    </>
  );
};

const GenerateWords = ({ words }: { words: string }) => {
  return <div className="text-4xl text-center text-slate-500">{words}</div>;
};

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-primary-500 font-medium">Time: {timeLeft}</h2>;
};
export default App;
