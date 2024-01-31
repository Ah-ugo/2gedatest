import React from "react";

export default function ProductCard({ img, location, price, name }) {
  return (
    <div>
      <div className="w-28 h-auto">
        <img
          className="w-full h-24 left-0 top-0  rounded"
          src={img ? img : "https://via.placeholder.com/111x102"}
        />
        <div className="left-[1px] top-[110px] text-black text-opacity-60 text-xs font-medium font-['Ubuntu']">
          {name ? name : "Semi detached duplex"}
        </div>
        <div className="left-[1px] top-[121px] text-black text-opacity-60 text-xs font-bold font-['Ubuntu']">
          {price ? price : "#200,000"}
        </div>
        <div className="left-[1px] top-[131px] text-black text-opacity-60 text-xs font-light font-['Ubuntu']">
          {location ? location : "Lekki, Lagos"}
        </div>
      </div>
    </div>
  );
}
