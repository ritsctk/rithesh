// components/VideoBanner.js
import React from "react";

export default function ServiceCard({
    backgroundImg,
    caption,
    content,
}) {
  return (
    <li className="w-full md:w-1/2 lg:w-1/3 p-2">
      <div className="w-full bg-white shadow p-6">
        <span className="w-[62px] h-[62px] block">
          <img className="w-full" src={backgroundImg} />
        </span>
        <h2 className="text-[36px] py-4">{caption}</h2>
        <p className="text-sm p-0">{content}</p>
      </div>
    </li>
  );
}
