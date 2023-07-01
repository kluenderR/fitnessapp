import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const ExerciseWithDuration = ({ slideChanged, exercise }) => {
  const [pause, setPause] = useState(false);
  const handleClick = () => {
    setPause((prev) => !prev);
  };

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="flex flex-col items-center">geschafft!</div>;
    }

    return (
      <div className="flex flex-col items-center">
        <div>
          <h1>{remainingTime} sec.</h1>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="flex flex-col gap-9 top-10">
        <div className="flex justify-center">
          <CountdownCircleTimer
            isPlaying={!pause && !slideChanged}
            duration={exercise.duration}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[10, 6, 3, 0]}
            strokeWidth={30}
            size={200}
            onComplete={() => ({ shouldRepeat: false, delay: 1 })}
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
        <button onClick={handleClick}>
          <h1>{pause ? "Run!" : "Pause!"}</h1>{" "}
        </button>
        <h1>{exercise.exercise.name}</h1>
      </div>
    </>
  );
};

export default ExerciseWithDuration;

{
  /* https://medium.com/swlh/creating-a-simple-countdown-timer-using-react-useref-hook-92ae5b6210cb */
}
