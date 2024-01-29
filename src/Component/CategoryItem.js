import React from "react";

export default function CategoryItem({ img, name, style }) {
  return (
    <div style={style}>
      <div
        className="flex flex-col align-middle items-center gap-2"
        style={{ paddingRight: 14.11 }}>
        <div
          className="bg-white flex justify-center align-middle items-center rounded-full"
          style={{ padding: "10.15px" }}>
          {img}
        </div>
        <span
          style={{
            color: "#FFF",
            textAlign: "center",
            fontFamily: "Ubuntu",
            fontSize: "7px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
          }}>
          {name}
        </span>
      </div>
    </div>
  );
}
