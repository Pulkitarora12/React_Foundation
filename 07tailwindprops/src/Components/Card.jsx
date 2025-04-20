import React from "react";

function Card(props) {
  console.log(props); //return object if no prop passed
  return (
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row rounded-2xl rounded-xl border-20 border-amber-50 mt-10">
      <div>
        <img
          className="size-48 shadow-xl rounded-md"
          alt=""
          src="https://tailwindcss.com/_next/static/media/cover.de1997f7.png"
        />
      </div>
      <div className="flex flex-col items-center md:items-start">
        <span className="text-2xl font-medium">{props.channel}</span>
        <span className="font-medium text-sky-500">{props.object.name}</span>
        <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
          <span>{props.object.date}</span>
        </span>
      </div>
    </div>
  );
}

export default Card;
