import { useState } from "react";

export default function RocketProgress() {
  const [progress, setProgress] = useState(0);

  function handleClick() {
    setProgress((prevProgress) => Math.min(prevProgress + 10, 100));
  };

  return (
    <div id="progressbar">
      <h2 id="title">Progress Bar</h2>

      {/* Progress bar */}
      <div id="progress-bar-empty-space">
        {/* Turning */}
        <div
          id="progressbar-fill"
          style={{ width: `${progress}%`}}></div>
      </div>

      {/* Button */}
      <div>
      <button
      id="button"
        onClick={handleClick}
      >Increase Progress</button>
      </div>

      {/* Text */}
      <p id="text">
        {progress < 100 ? `Progress: ${progress}%` : "🎉 Mission accomplished!"}
      </p>
    </div>
  );
}