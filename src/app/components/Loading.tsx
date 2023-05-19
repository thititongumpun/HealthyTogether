import React from "react";

type Props = {};

export default function Loading({}: Props) {
  const size = 100;
  return (
    <div className="flex items-center justify-center mx-auto min-h-screen">
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        className="animate-spin"
      >
        <div className="h-full w-full rounded-[50%] border-4 border-b-purple-700 border-t-purple-500"></div>
      </div>
    </div>
  );
}
