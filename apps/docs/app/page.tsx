"use client";

import { Button } from "ui";

import "../styles/globals.css";

export default function Page() {
  const clickHandler = () => {
    alert("Booop form docs!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-yellow-50">
      <div className="flex items-center justify-evenly h-1/4 w-full">
        <Button variant="primary" clickHandler={clickHandler} children="Boop" />
        <Button variant="outline" clickHandler={clickHandler} children="Boop" />
      </div>
      <div className="flex items-center justify-evenly h-1/4 w-full">
        <Button
          variant="light"
          clickHandler={clickHandler}
          children="Boop"
          className="text-black"
        />
        <Button
          variant="dark"
          clickHandler={clickHandler}
          children="Boop"
          disabled
        />
      </div>
    </div>
  );
}
