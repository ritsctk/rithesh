// components/VideoBanner.js
import React from "react";

export default function PortfolioCard({port_logo, customWidth}) 
// {console.log(port_logo)}
{
  return (
    <li className="w-full md:w-1/2 lg:w-1/3 p-2">
      <div className="w-full min-h-[300px] p-4 bg-white shadow flex justify-center items-center">
      <span style={{ width: customWidth }} className="block">
          <img className="w-full" src={port_logo} />
        </span>
      </div>
    </li>
  );
}
