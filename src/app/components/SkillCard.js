// components/VideoBanner.js
import React from "react";

export default function SkillCard({ language, percentage }) {
  return (
    <div className="w-full md:w-1/2 p-4 bg-white">
      <div className="mb-2 flex items-center justify-between text-sm">
        <div className="text-gray-600">{language}</div>
        <div className="text-gray-600">{percentage}</div>
      </div>
      <div className="w-full pb-2">
        {/* <div className="mb-5 h-2 overflow-hidden rounded-full bg-[#efefef] w-full">
          <div
            className="h-2 rounded-full bg-[#009E66]"
            style={{width: "50%" }}
          >
            <div className="h-full w-full translate-x-full transform bg-[#efefef]"></div>
          </div>
        </div> */}
        <div className="relative pt-1">
          <div className="mb-4 flex h-2 overflow-hidden rounded bg-gray-100 text-xs">
          <div style={{ width: percentage }} className="bg-green-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
