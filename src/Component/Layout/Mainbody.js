import React from "react";

export default function Mainbody({ children }) {
  return (
    <div
      style={{ overflowX: "hidden" }}
      className="w-full h-full bg-neutral-100 mt-24">
      {children}
    </div>
  );
}
