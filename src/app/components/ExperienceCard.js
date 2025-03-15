// components/VideoBanner.js
import React from "react";

export default function ExperienceCard({
  description,
  designation,
  company,
  startDate,
  endDate,
}) {
  return (
    <li className="w-full md:w-1/2 p-2 flex">
      <div className="w-full brdgl p-4 bg-white shadow">
        <ul className="text-[#787878] leading-8">
          <li className="text-[#000000]">{designation}</li>
          <li>
            <b className="text-[#000000]">{company} - </b>
            {startDate} to {endDate}
          </li>
          <li>
            <p>{description}</p>
          </li>
        </ul>
      </div>
    </li>
  );
}
